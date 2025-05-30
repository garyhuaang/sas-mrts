import { Link } from 'react-router-dom'

import { Button, Label, OrderSummary } from '@sas-mrts/ui'
import { CartItems } from '@sas-mrts/ui'

import { ArrowLeftIcon } from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'

function Cart() {
  const state = useAppSelector((state) => state.cart)

  return state.cartItems.length > 0 ? (
    <div className="flex w-screen flex-col overflow-y-auto p-10 md:p-24">
      <div className="flex h-full w-full flex-col justify-center">
        <header className="mb-8 flex w-2/3 flex-col gap-2 self-center">
          <h1 className="text-5xl font-bold tracking-tight">Shopping Cart</h1>
          <Label className="text-sm text-muted-foreground">
            {`${state.cartItems.length} items in your cart`}
          </Label>
        </header>

        <div className="flex-center mb-8">
          <CartItems />
        </div>

        <div className="table-styles">
          <OrderSummary />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex-center reduced-viewport motion-preset-fade-lg w-full">
      <div className="table-styles flex max-w-fit flex-col self-center bg-primary">
        <h1 className="text-3xl">Oops, looks like your cart is empty!</h1>
        <div className="flex self-center">
          <Button
            asChild
            className="hover:text-white mt-3 hover:bg-secondary"
            variant="outline"
          >
            <Link viewTransition className="flex" to="/products">
              <ArrowLeftIcon />
              <span>Continue Shopping</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { Cart }
