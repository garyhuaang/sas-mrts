import { useState } from 'react'

import { Button, Label } from '../../base'

function ButtonCounter() {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    return count > 0 ? setCount((prev) => prev - 1) : ''
  }

  const handleIncrement = () => {
    return setCount((prev) => prev + 1)
  }

  return (
    <div
      className="flex items-center border rounded-md h-min gap-2
        justify-between w-35 bg-secondary"
    >
      <Button
        className="font-bold text-lg rounded-r-none mr-2"
        onClick={handleDecrement}
        variant="ghost"
      >
        -
      </Button>
      <div className="flex-center relative">
        <Label className="font-bold text-xl absolute">{count}</Label>
      </div>
      <Button
        className="border-l-0 font-bold text-lg rounded-l-none ml-2"
        onClick={handleIncrement}
        variant="ghost"
      >
        +
      </Button>
    </div>
  )
}

export { ButtonCounter }
