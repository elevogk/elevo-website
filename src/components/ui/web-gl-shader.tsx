import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current

    const scene    = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

    const uniforms = {
      resolution: { value: [window.innerWidth, window.innerHeight] },
      time:       { value: 0.0 },
      xScale:     { value: 0.8 },
      yScale:     { value: 0.25 },
      distortion: { value: 0.02 },
    }

    const vertexShader = `attribute vec3 position; void main() { gl_Position = vec4(position, 1.0); }`
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;
      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(p) * distortion;
        float r = 0.04 / abs(p.y + sin((p.x * (1.0 + d) + time) * xScale) * yScale);
        float g = 0.04 / abs(p.y + sin((p.x + time) * xScale) * yScale);
        float b = 0.04 / abs(p.y + sin((p.x * (1.0 - d) + time) * xScale) * yScale);
        gl_FragColor = vec4(r * 0.3, g * 0.5, b * 1.0, 0.06);
      }
    `

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(
      new Float32Array([-1,-1,0, 1,-1,0, -1,1,0, 1,-1,0, -1,1,0, 1,1,0]),
      3,
    ))

    scene.add(new THREE.Mesh(
      geo,
      new THREE.RawShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true, side: THREE.DoubleSide }),
    ))
    renderer.setSize(window.innerWidth, window.innerHeight)

    let id: number
    const animate = () => {
      uniforms.time.value += 0.004
      renderer.render(scene, camera)
      id = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      uniforms.resolution.value = [window.innerWidth, window.innerHeight]
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}
