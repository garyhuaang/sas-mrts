import { numToUSD } from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'

function OrderDetails() {
  const cartSelector = useAppSelector((state) => state.cart)

  return (
    <div className="flex justify-between border-b-1 border-primary">
      <div className="flex flex-col gap-3">
        <p className="text-md text-primary">Subtotal</p>
        <p className="text-md text-primary">Tax: 8%</p>
        <p className="text-md text-primary">Shipping</p>
      </div>

      <div className="flex flex-col gap-3 mb-4 items-end">
        <p className=" text-md">{numToUSD(cartSelector.subTotal)}</p>
        <p className="text-md">{numToUSD(cartSelector.calculatedTax)}</p>
        <p className="text-md">
          {cartSelector.shipping.false === 0
            ? 'Free'
            : 'Calculated at checkout'}
        </p>
      </div>
    </div>
  )
}

export default OrderDetails
