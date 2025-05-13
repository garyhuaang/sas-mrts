import { Product } from './products.type'

type CartItem = {
  product: Product
  qty: number
}

type CartState = {
  cartItems: CartItem[]
  subTotal: number
  tax: number
  shipping: number
  total: number
}

export type { CartItem, CartState }
