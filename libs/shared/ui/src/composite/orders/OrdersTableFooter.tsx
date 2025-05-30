import { Link } from 'react-router-dom'

import { Button } from '../../base'

import { Label } from '@radix-ui/react-dropdown-menu'
import { ChevronRightIcon } from '@sas-mrts/common'

type TableFooterProps = {
  address: string
  date: string
  total: string
}

function OrdersTableFooter({ address, date, total }: TableFooterProps) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col space-y-2 p-6">
        <Label>{`Shipped to: ${address}`}</Label>
        <Label>{`Delivered on: ${date}`}</Label>
      </div>
      <div className="flex flex-col gap-4">
        <Label className="flex self-end text-2xl font-extrabold">
          {`Total: ${total}`}
        </Label>
        <div className="flex gap-4">
          <Button>
            <Link viewTransition to="/products">
              Buy Again
            </Link>
          </Button>
          <Button variant="outline">
            View Details <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { OrdersTableFooter }
