import { CartItem, CartState, Product } from '../types'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
  cartItems: [],
  subTotal: 0,
  tax: 0.8,
  shipping: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemExists = state.cartItems.find(
        (item: CartItem) => item.product.id === action.payload.id
      )

      if (itemExists) itemExists.qty++
      else state.cartItems.push({ qty: 1, product: action.payload })
    },
    deleteCartItem: (state, action: PayloadAction<Product>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload.id
      )
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload
      )

      if (item?.qty && item.qty > 1) {
        item.qty--
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== action.payload
        )
      }
    },
    // setSubTotal: (state) => {
    //   const sum = 0
    //   // const subTotal = state.cartItems.forEach(
    //   //   (item: Product) => (sum += Number(item.price))
    //   // )
    //   const prices = state.cartItems.map((item: Product) => Number(item.price))

    //   console.log(prices)
    // },
    // setTax: () => {},
    // setShipping: () => {},
    // setTotal: () => {},
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, deleteCartItem, removeFromCart } = cartSlice.actions
