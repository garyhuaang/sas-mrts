import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

import { OrdersTable } from '@sas-mrts/ui'

import {
  type Order,
  orderColumns,
  rStore,
  setOrders,
  useGetOrdersQuery,
} from '@sas-mrts/rStore'

function Orders() {
  const [cookie] = useCookies(['user'])
  const userJwt = cookie.user?.jwt

  const { data: orders, isSuccess } = useGetOrdersQuery(userJwt, {
    skip: !userJwt,
  })

  useEffect(() => {
    if (isSuccess) rStore.dispatch(setOrders(orders.data as Order[]))
  }, [isSuccess])

  return (
    isSuccess &&
    orders.data && (
      <div className="flex-center w-full">
        {<OrdersTable columns={orderColumns} orders={orders.data} />}
      </div>
    )
  )
}

export { Orders }
