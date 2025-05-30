import { Label } from '../../base'
import { toUppercaseWords } from '../../lib'

import { numToUSD } from '@sas-mrts/common'

type TableBodyProps = {
  index: number
  image: string
  title: string
  price: number
  quantity: number
}

function OrdersTableBody({
  index,
  image,
  title,
  price,
  quantity,
}: TableBodyProps) {
  return (
    <div
      className="border-b-1 flex justify-between border-primary p-6"
      key={index}
    >
      <div className="flex w-1/3 items-center gap-4 self-start">
        <img className="h-15 w-15 rounded-md" src={image} />
        <Label className="text-lg font-bold">{toUppercaseWords(title)}</Label>
      </div>
      <div className="flex-center w-1/3">
        <Label className="text-lg">{numToUSD(Number(price))}</Label>
      </div>
      <div className="flex w-1/3 justify-end">
        <Label className="flex-center text-lg">{quantity}</Label>
      </div>
    </div>
  )
}

export default OrdersTableBody
