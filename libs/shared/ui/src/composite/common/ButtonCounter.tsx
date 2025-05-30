import React from 'react'

import { Button, Label } from '../../base'

type ButtonCounterProps = {
  value: number
  onIncrementClick: () => void
  onDecrementClick: () => void
}

function ButtonCounter({
  onIncrementClick,
  onDecrementClick,
  value,
}: ButtonCounterProps): React.ReactNode {
  return (
    <div className="w-35 flex h-min items-center justify-between gap-2 rounded-md border bg-secondary">
      <Button
        className="mr-2 rounded-r-none text-lg font-bold hover:bg-primary hover:text-secondary"
        onClick={() => onDecrementClick()}
        variant="ghost"
      >
        -
      </Button>
      <div className="flex-center relative">
        <Label className="absolute text-base font-medium">{value}</Label>
      </div>
      <Button
        className="ml-2 rounded-l-none border-l-0 text-lg font-medium hover:bg-primary hover:text-secondary"
        onClick={() => onIncrementClick()}
        variant="ghost"
      >
        +
      </Button>
    </div>
  )
}

export { ButtonCounter }
