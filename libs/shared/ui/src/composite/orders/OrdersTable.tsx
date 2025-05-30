import { memo } from 'react'

import { Label } from '../../base'
import { generateDate } from '../../lib'

import OrdersTableBody from './OrdersTableBody'
import { OrdersTableFooter } from './OrdersTableFooter'

import type { Order } from '@sas-mrts/rStore'

function OrdersTable({
  orders,
  columns,
}: {
  orders: Order[]
  columns: string[]
}) {
  if (!orders || orders.length === 0) return <p>No orders to display</p>

  const OrderHistory = memo(
    ({ order, index }: { order: Order; index: number }) => {
      return (
        <div className="flex w-full justify-center" key={index}>
          <div className="table-styles flex flex-col gap-8">
            <div className="flex w-full flex-col gap-2 self-start rounded-md bg-primary p-6">
              <header className="text-3xl font-bold">{`Order #ORD-${order.id}`}</header>
              <Label className="text-xl">{`Placed on ${generateDate(new Date(order.attributes.createdAt))}`}</Label>
            </div>
            <div className="flex w-full justify-between rounded-md bg-secondary">
              {columns.map((column, index) => (
                <div className="p-6" key={index}>
                  <Label className="text-xl font-bold">{column}</Label>
                </div>
              ))}
            </div>
            <div className="w-full space-y-4">
              {order.attributes.cartItems.map((item, index) => (
                <OrdersTableBody
                  image={item.image}
                  index={index}
                  key={index}
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
      )
    }
  )

  return (
    <div className="flex w-full flex-col gap-6 p-10">
      {orders.map((order, index) => (
        <OrderHistory index={index} order={order} />
      ))}
    </div>
  )
}

export { OrdersTable }
