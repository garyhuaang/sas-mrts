import { CartItem, CartState, Product } from '../types'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
  cartItems: [],
  subTotal: 0,
  tax: 0.08,
  calculatedTax: 0,
  shipping: { false: 0 },
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

      if (!action.payload.attributes.shipping) state.shipping.false++

      if (itemExists) itemExists.qty++
      else state.cartItems.push({ qty: 1, product: action.payload })

      state.subTotal += Number(action.payload.attributes.price)
      state.calculatedTax = state.tax * state.subTotal
    },
    deleteCartItem: (state, action: PayloadAction<Product>) => {
      const itemToRemove = state.cartItems.filter(
        (item) => item.product.id === action.payload.id
      )

      const itemQty = itemToRemove[0].qty
      const itemPrice = itemToRemove[0].product.attributes.price

      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload.id
      )

      if (!action.payload.attributes.shipping) state.shipping.false -= itemQty

      state.subTotal -= Number(itemPrice) * itemQty
      state.calculatedTax = state.tax * state.subTotal
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload
      )

      const itemPrice = item?.product.attributes.price

      if (item?.qty && item.qty > 1) {
        item.qty--
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== action.payload
        )
      }

      if (!item?.product.attributes.shipping) state.shipping.false--

      state.subTotal -= Number(itemPrice)
      state.calculatedTax = state.tax * state.subTotal
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, deleteCartItem, removeFromCart } = cartSlice.actions
