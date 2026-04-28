import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words: string[], startDelay = 2200) {
  const [text, setText] = useState(words[0])
  const state = useRef({ wi: 0, ci: words[0].length, del: false })

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>

    function tick() {
      const s = state.current
      const w = words[s.wi]

      if (s.del) {
        s.ci--
        setText(w.slice(0, s.ci))
        if (s.ci === 0) {
          s.del = false
          s.wi = (s.wi + 1) % words.length
          id = setTimeout(tick, 380)
          return
        }
        id = setTimeout(tick, 42)
      } else {
        s.ci++
        setText(words[s.wi].slice(0, s.ci))
        if (s.ci === words[s.wi].length) {
          s.del = true
          id = setTimeout(tick, 2000)
          return
        }
        id = setTimeout(tick, 88)
      }
    }

    id = setTimeout(tick, startDelay)
    return () => clearTimeout(id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return text
}
