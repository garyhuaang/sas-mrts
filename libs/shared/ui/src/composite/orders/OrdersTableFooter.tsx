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
    <div className="flex justify-between w-full">
      <div className="flex flex-col p-6 space-y-2">
        <Label>{`Shipped to: ${address}`}</Label>
        <Label>{`Delivered on: ${date}`}</Label>
      </div>
      <div className="flex flex-col gap-4">
        <Label className="flex self-end font-extrabold text-2xl">
          {`Total: ${total}`}
        </Label>
        <div className="flex gap-4 ">
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
