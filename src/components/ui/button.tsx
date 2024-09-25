import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-2 rounded-[4px] text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2',

  variants: {
    variant: {
      primary: 'bg-text-gradient text-zinc-50 hover:bg-blue-600 ring-blue-600',
      secondary: 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 ring-zinc-900',
    },

    size: {
      default: 'px-4 py-2.5',
      sm: 'px-3 py-1.5',
      primary: 'px-8 py-3',
      lg: 'w-full py-4',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    )
  }
)

Button.displayName = 'Button'
