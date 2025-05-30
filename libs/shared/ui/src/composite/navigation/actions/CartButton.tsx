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
          className="relative cursor-pointer p-3"
          onClick={() => onCartClick()}
          variant="outline"
        >
          <Link className="h-12 w-12" to="/cart">
            <CartIcon />
            <div className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary pb-0.5 text-sm text-secondary">
              <span className="absolute top-0.5">{cartItems.length}</span>
            </div>
          </Link>
        </Button>
      )}
    </>
  )
}

export default CartButton
