import { Link } from 'react-router-dom'

import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '../../base'

import { numToUSD, TruckIcon } from '@sas-mrts/common'

const MOCK_SUMMARY_DATA = {
  subtotal: 4996,
  shipping: 0,
  tax: 0.8,
  total: 5396,
}

function OrderSummary() {
  return (
    <Table className="min-h-[200px] w-full">
      <TableBody className="grid grid-cols-1 border-b-2 mb-2 ">
        <TableRow className="hover:bg-inherit mb-2 min-w-[430px]">
          <TableCell className="w-1/5 h-full">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-2xl">Order Summary</h4>
              <p className="text-md text-primary">Subtotal</p>
              <p className="text-md text-[#b4685c]">{`Tax (${MOCK_SUMMARY_DATA.tax}%)`}</p>
              <p className="text-md text-primary">Shipping</p>
            </div>
          </TableCell>

          <TableCell className="w-1/50 h-full self-end">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-md mt-4 self-end">
                {numToUSD(MOCK_SUMMARY_DATA.total)}
              </p>
              <p className="font-bold text-md self-end">
                {numToUSD(
                  (MOCK_SUMMARY_DATA.tax / 10) * MOCK_SUMMARY_DATA.total
                )}
              </p>
              <p className="font-bold text-md self-end">
                {MOCK_SUMMARY_DATA.shipping === 0
                  ? `Free`
                  : numToUSD(MOCK_SUMMARY_DATA.shipping)}
              </p>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>

      <TableBody className="grid grid-cols-1 mb-2">
        <TableRow className="hover:bg-inherit mb-4 min-w-[430px]">
          <TableCell className="w-1/5 h-full">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-2xl">Total</h4>
            </div>
          </TableCell>

          <TableCell className="w-1/50 h-full self-end">
            <div className="flex flex-col gap-3 self-end">
              <p className="font-bold text-md text-priamry self-end">
                {numToUSD(MOCK_SUMMARY_DATA.total)}
              </p>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="flex flex-col gap-4 hover:bg-inherit p-1">
          <Input placeholder="Promo code" />
          <Button className="w-full">
            <Link viewTransition to="/checkout">
              Proceed to Checkout
            </Link>
          </Button>
          <TableCell className="flex items-center justify-start h-15 bg-secondary rounded-md p-4">
            <TruckIcon className="mr-2 h-4 w-4" />
            Your order qualifies for free shipping!
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export { OrderSummary }
