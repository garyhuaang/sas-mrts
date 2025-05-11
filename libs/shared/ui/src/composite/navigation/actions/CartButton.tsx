import { Link } from 'react-router-dom'

import { Button } from '../../../base/button'

import { CartIcon } from '@sas-mrts/common'

const itemsInCart = 0

function CartButton() {
  return (
    <>
      {localStorage.getItem('username') && (
        <Button
          asChild
          className="relative p-3 cursor-pointer"
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
              <span className="absolute top-0.5">{itemsInCart}</span>
            </div>
          </Link>
        </Button>
      )}
    </>
  )
}

export default CartButton
