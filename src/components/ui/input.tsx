import type { ReactNode } from 'react'

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'date'
  | 'checkbox'
  | 'radio'

interface InputProps {
  children?: ReactNode
  text: string
  type: InputType
}

export function Input({ children, text, type }: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={text}
        className="rounded-[4px] h-14 w-96 border-[#151B26] border pl-10 bg-[#090E18] focus:outline-none"
      />
      {children}
    </div>
  )
}
