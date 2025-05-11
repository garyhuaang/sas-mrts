import { Label, OrderSummary } from '@sas-mrts/ui'
import { CartItems } from '@sas-mrts/ui'

function Cart() {
  return (
    <div className="flex flex-col w-screen overflow-y-auto p-10 md:p-24">
      <div className="flex flex-col w-full h-full justify-center">
        <header className="flex flex-col self-center gap-2 w-2/3 mb-8">
          <h1 className="text-5xl font-bold tracking-tight">Shopping Cart</h1>
          <Label className="text-sm text-muted-foreground">{`${0} items in your cart`}</Label>
        </header>

        <div className="mb-8">
          <CartItems />
        </div>

        <div className="table-styles">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export { Cart }
