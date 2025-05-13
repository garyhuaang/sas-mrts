import { Product } from './products.type'

type CartItem = {
  product: Product
  qty: number
}

type NotFreeShipping = {
  false: number
}

type CartState = {
  cartItems: CartItem[]
  subTotal: number
  tax: number
  calculatedTax: number
  shipping: NotFreeShipping
  total: number
}

export type { CartItem, CartState }
