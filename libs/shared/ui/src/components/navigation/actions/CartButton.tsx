import { Button } from '../../../base/Button'

import { CartIcon } from '@sas-mrts/common'

const itemsInCart = 0

function CartButton() {
  return (
    <>
      <Button asChild className="p-3 cursor-pointer" variant="outline">
        <CartIcon className="h-12 w-12" />
      </Button>
      <div className="flex justify-center align-center absolute w-5 h-5 bg-current rounded-full right-7 top-15">
        <span className="text-secondary justify-center text-sm mb-0.5">
          {itemsInCart}
        </span>
      </div>
    </>
  )
}

export default CartButton
