import { Link } from 'react-router-dom'

import { Button, Label } from '../../base'

import OrderDetails from './OrderDetails'

import { numToUSD, TruckIcon } from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'

function OrderSummary() {
  const cartSelector = useAppSelector((state) => state.cart)

  return (
    <div className="flex min-h-[200px] w-full">
      <div className="flex w-full flex-col gap-6">
        <h4 className="text-2xl font-bold">Order Summary</h4>
        <OrderDetails />
        <div className="flex justify-between">
          <Label className="text-md font-bold">Total</Label>
          <Label className="text-md font-bold">
            {numToUSD(cartSelector.subTotal * (cartSelector.tax + 1))}
          </Label>
        </div>

        <Button asChild>
          <Link viewTransition to="/checkout">
            Proceed to Checkout
          </Link>
        </Button>
        {cartSelector.shipping.false === 0 && (
          <div className="flex-center h-10 rounded-lg bg-secondary">
            <span className="flex gap-4">
              <TruckIcon className="h-6 w-6" />
              <Label className="flex self-center">
                Your order qualifies for free shipping!
              </Label>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export { OrderSummary }
