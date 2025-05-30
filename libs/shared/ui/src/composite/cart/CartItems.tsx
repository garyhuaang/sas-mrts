import { Link } from 'react-router-dom'

import { Button, Label } from '../../base'
import { ButtonCounter } from '../common/ButtonCounter'

import { ArrowLeftIcon, numToUSD, TrashIcon, TruckIcon } from '@sas-mrts/common'
import {
  addToCart,
  deleteCartItem,
  removeFromCart,
  useAppDispatch,
  useAppSelector,
} from '@sas-mrts/rStore'

function CartItems() {
  const cartState = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  return (
    <div className="table-styles flex h-full w-full flex-col self-center justify-self-center overflow-y-auto p-10 md:p-24">
      {cartState.cartItems.map((item, index) => (
        <div
          className="hover:bg-inherit border-b-1 flex w-full justify-between gap-4 self-start border-primary p-6"
          key={index}
        >
          <div className="flex flex-col self-center">
            <img
              className="h-30 w-30 max-h-30 max-w-30 rounded-lg"
              src={item.product.attributes.image}
            />
          </div>

          <div className="flex w-full flex-col justify-between">
            <div className="flex h-full flex-col justify-between">
              <Label className="text-lg">{item.product.attributes.title}</Label>
              {item.product.attributes.shipping && (
                <section className="mb-9 flex flex-col self-start">
                  <Label className="flex items-center gap-2 text-xs font-light text-primary">
                    <TruckIcon className="h-4 w-4" /> Free shipping
                  </Label>
                </section>
              )}
              <ButtonCounter
                onDecrementClick={() =>
                  dispatch(removeFromCart(item.product.id))
                }
                onIncrementClick={() => dispatch(addToCart(item.product))}
                value={item.qty}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex self-end">
              <Button
                className="h-10 w-10 cursor-pointer"
                onClick={() => dispatch(deleteCartItem(item.product))}
              >
                <TrashIcon />
              </Button>
            </div>
            <div className="flex self-end">
              {numToUSD(item.qty * Number(item.product.attributes.price))}
            </div>
          </div>
        </div>
      ))}
      <div className="flex self-start">
        <Button asChild className="mt-3 self-start" variant="outline">
          <Link viewTransition className="flex" to="/products">
            <ArrowLeftIcon />
            <span>Continue Shopping</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}

export { CartItems }
