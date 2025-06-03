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
    <div className={`flex flex-col gap-2 w-full ${className}}`}>
      <Label>{label}</Label>
      <Input className="shadow-none border-primary" placeholder={placeholder} />
    </div>
  )
}

export { InputWithLabel }
