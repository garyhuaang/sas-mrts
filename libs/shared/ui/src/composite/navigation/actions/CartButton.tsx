import { Link } from 'react-router-dom'

import { Button } from '../../../base/Button'

import { CartIcon } from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'

function CartButton({ onCartClick }: { onCartClick: () => void }) {
  const cartItems = useAppSelector((state) => state.cart.cartItems)

  return (
    <>
      {localStorage.getItem('username') && (
        <Button
          asChild
          className="relative p-3 cursor-pointer"
          onClick={() => onCartClick()}
          variant="outline"
        >
          <Link className="h-12 w-12" to="/cart">
            <CartIcon />
            <div
              className="
              absolute -top-3 -right-3
              h-6 w-6 pb-0.5
            bg-primary rounded-full
              text-secondary text-sm
              flex items-center justify-center"
            >
              <span className="absolute top-0.5">{cartItems.length}</span>
            </div>
          </Link>
        </Button>
      )}
    </>
  )
}

export default CartButton
