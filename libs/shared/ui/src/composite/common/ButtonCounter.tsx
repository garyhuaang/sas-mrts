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
    <div
      className="flex items-center border rounded-md h-min gap-2
        justify-between w-35 bg-secondary"
    >
      <Button
        className="font-bold text-lg rounded-r-none mr-2 hover:bg-primary hover:text-secondary"
        onClick={() => onDecrementClick()}
        variant="ghost"
      >
        -
      </Button>
      <div className="flex-center relative">
        <Label className="font-medium text-base absolute ">{value}</Label>
      </div>
      <Button
        className="border-l-0 font-medium text-lg rounded-l-none ml-2 hover:bg-primary hover:text-secondary"
        onClick={() => onIncrementClick()}
        variant="ghost"
      >
        +
      </Button>
    </div>
  )
}

export { ButtonCounter }
