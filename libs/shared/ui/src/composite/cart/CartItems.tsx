import { Link } from 'react-router-dom'

import {
  Button,
  Label,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '../../base'
import { ButtonCounter } from '../common/ButtonCounter'

import {
  ArrowLeftIcon,
  hero1,
  hero2,
  hero3,
  numToUSD,
  TruckIcon,
} from '@sas-mrts/common'

const MOCK_CART_DATA = [
  {
    image: (
      <img
        className="min-h-30 min-w-30 max-h-30 max-w-30 rounded-lg"
        src={hero1}
      />
    ),
    name: 'Oakwood Dining Table',
    freeShipping: true,
    quantity: 1,
    price: 1234,
  },
  {
    image: (
      <img className="h-30 w-30 max-h-30 max-w-30 rounded-lg" src={hero2} />
    ),
    name: 'Linen Sofa',
    freeShipping: true,
    quantity: 1,
    price: 1234,
  },
  {
    image: (
      <img className="h-30 w-30 max-h-30 max-w-30 rounded-lg" src={hero3} />
    ),
    name: 'Leather Armchair',
    freeShipping: true,
    quantity: 1,
    price: 1234,
  },
]

function CartItems() {
  return (
    <div
      className="flex flex-col h-full table-styles w-full overflow-y-auto
        p-10 md:p-24 justify-self-center"
    >
      {MOCK_CART_DATA.map((data, index) => (
        <div
          className="flex w-full justify-between hover:bg-inherit mb-2 gap-4 self-start "
          key={index}
        >
          <div className="flex flex-col self-center">
            <div className="h-full">{data.image}</div>
          </div>

          <div className="w-full h-fit">
            <div className="flex flex-col h-full">
              {data.freeShipping && (
                <section className="flex flex-col self-start mb-9 ">
                  <h4 className="text-2xl">{data.name}</h4>
                  <Label className="flex items-center text-md font-xs gap-2 text-primary">
                    <TruckIcon className="h-4 w-4" /> Free shipping
                  </Label>
                </section>
              )}
              <ButtonCounter />
            </div>
          </div>

          <div className="flex h-full self-end">
            {numToUSD(data.quantity * data.price)}
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
