import { Link } from 'react-router-dom'

import { Button, Label } from '../../base'

import OrderDetails from './OrderDetails'

import { numToUSD, TruckIcon } from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'

function OrderSummary() {
  const cartSelector = useAppSelector((state) => state.cart)

  return (
    <div className="flex min-h-[200px] w-full">
      <div className="flex flex-col w-full gap-6">
        <h4 className="font-bold text-2xl">Order Summary</h4>
        <OrderDetails />
        <div className="flex justify-between">
          <Label className="font-bold text-md">Total</Label>
          <Label className="font-bold text-md">
            {numToUSD(cartSelector.subTotal * (cartSelector.tax + 1))}
          </Label>
        </div>

        <Button asChild>
          <Link viewTransition to="/checkout">
            Proceed to Checkout
          </Link>
        </Button>
        {cartSelector.shipping.false === 0 && (
          <div className="flex-center  bg-secondary rounded-lg h-10">
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
