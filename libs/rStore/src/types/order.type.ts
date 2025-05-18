import type { Pagination } from './products.type'

export type OrderCartItem = {
  image: string
  price: string
  title: string
  amount: number
  cartID: string
  company: string
  productID: number
  productColor: string
}

export type Order = {
  id: number
  attributes: {
    address: string
    cartItems: OrderCartItem[]
    createdAt: string
    name: string
    numItemsInCart: string
    orderTotal: string
    publishedAt: string
    updatedAt: string
  }
  createdAt: string
  name: string
  numItemsInCart: number
  orderTotal: string
  publishedAt: string
  updatedAt: string
}

export type OrderResponse = {
  data: Order[]
  meta: Pagination
}

export const orderColumns = ['Product', 'Price', 'Quantity']
