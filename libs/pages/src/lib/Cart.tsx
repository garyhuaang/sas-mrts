import { Link } from 'react-router-dom'

import { Button, Label, OrderSummary } from '@sas-mrts/ui'
import { CartItems } from '@sas-mrts/ui'

import { ArrowLeftIcon } from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'

function Cart() {
  const state = useAppSelector((state) => state.cart)

  return state.cartItems.length > 0 ? (
    <div className="flex flex-col w-screen overflow-y-auto p-10 md:p-24">
      <div className="flex flex-col w-full h-full justify-center">
        <header className="flex flex-col self-center gap-2 w-2/3 mb-8">
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
    <div className="flex-center reduced-viewport w-full motion-preset-fade-lg">
      <div className="flex flex-col table-styles bg-primary self-center max-w-fit">
        <h1 className="text-3xl">Oops, looks like your cart is empty!</h1>
        <div className="flex self-center">
          <Button
            asChild
            className="mt-3 hover:bg-secondary hover:text-white"
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
