import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer border-none transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:   'bg-elevo-blue text-white hover:bg-[#5A9FE8] hover:-translate-y-px',
        secondary: 'bg-transparent text-elevo-blue border border-elevo-blue hover:bg-elevo-blue/10 hover:-translate-y-px',
        accent:    'bg-elevo-teal text-elevo-bg font-semibold hover:bg-[#0FEAD0] hover:-translate-y-0.5 animate-teal-pulse',
        ghost:     'bg-transparent text-elevo-grey hover:text-white',
      },
      size: {
        default: 'px-[22px] py-[10px] text-sm rounded-lg',
        lg:      'px-8 py-[14px] text-[15px] rounded-[10px]',
        sm:      'px-4 py-2 text-xs rounded-md',
        nav:     'px-5 py-[9px] text-[13px] rounded-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  }
)

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
