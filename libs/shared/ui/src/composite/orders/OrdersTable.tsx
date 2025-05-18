import { Link } from 'react-router-dom'

import { Button, Label } from '../../base'
import { generateDate, toUppercaseWords } from '../../lib'

import OrdersTableBody from './OrdersTableBody'
import { OrdersTableFooter } from './OrdersTableFooter'

import { Separator } from '@radix-ui/react-dropdown-menu'
import { ChevronRightIcon, numToUSD } from '@sas-mrts/common'
import type { Order } from '@sas-mrts/rStore'

function OrdersTable({
  orders,
  columns,
}: {
  orders: Order[]
  columns: string[]
}) {
  if (!orders || orders.length === 0) return <p>No orders to display</p>

  return (
    <div className="flex flex-col gap-6 w-full p-10">
      {orders.map((order, index) => (
        <div className="flex w-full justify-center" key={index}>
          <div className="flex flex-col table-styles gap-8">
            <div className="flex flex-col self-start w-full bg-primary rounded-md p-6 gap-2">
              <header className="text-3xl font-bold">{`Order #ORD-${order.id}`}</header>
              <Label className="text-xl">{`Placed on ${generateDate(new Date(order.attributes.createdAt))}`}</Label>
            </div>
            <div className="flex justify-between w-full bg-secondary rounded-md">
              {columns.map((column, index) => (
                <div className="p-6" key={index}>
                  <Label className="font-bold text-xl">{column}</Label>
                </div>
              ))}
            </div>
            <div className="space-y-4 w-full">
              {order.attributes.cartItems.map((item, index) => (
                <OrdersTableBody
                  image={item.image}
                  index={index}
                  price={Number(item.price)}
                  quantity={item.amount}
                  title={item.title}
                />
              ))}
            </div>
            <OrdersTableFooter
              address={order.attributes.address}
              date={generateDate(new Date(order.attributes.publishedAt))}
              total={order.attributes.orderTotal}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export { OrdersTable }
