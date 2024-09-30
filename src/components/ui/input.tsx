import type { ReactNode } from 'react'

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'date'
  | 'checkbox'
  | 'radio'
  | 'search'

interface InputProps {
  children?: ReactNode
  text: string
  type: InputType
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  children,
  text,
  type,
  className,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={text}
        value={value}
        onChange={onChange}
        className={`rounded-[4px] h-14 w-${className} border-[#151B26] border pl-10 bg-[#090E18] focus:outline-none`}
      />
      {children}
    </div>
  )
}
