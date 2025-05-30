import type React from 'react'

import { Input, Label } from '../../base'

type InputWithLabelProps = {
  label: string
  placeholder?: string
  className?: React.HTMLAttributes<string>
}

function InputWithLabel({
  label,
  placeholder,
  className,
}: InputWithLabelProps): React.ReactNode {
  return (
    <div className={`flex w-full flex-col gap-2 ${className}}`}>
      <Label>{label}</Label>
      <Input className="border-primary shadow-none" placeholder={placeholder} />
    </div>
  )
}

export { InputWithLabel }
