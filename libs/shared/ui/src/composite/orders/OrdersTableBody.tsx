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
      className="flex justify-between  border-b-1 border-primary p-6"
      key={index}
    >
      <div className="flex items-center self-start w-1/3 gap-4">
        <img className="h-15 w-15 rounded-md" src={image} />
        <Label className="font-bold text-lg">{toUppercaseWords(title)}</Label>
      </div>
      <div className="flex-center w-1/3">
        <Label className="text-lg">{numToUSD(Number(price))}</Label>
      </div>
      <div className="flex justify-end w-1/3">
        <Label className="flex-center text-lg">{quantity}</Label>
      </div>
    </div>
  )
}

export default OrdersTableBody
