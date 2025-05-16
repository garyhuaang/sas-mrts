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

const updateTotalsTax = (state: CartState, price: number) => {
  state.subTotal += price
  state.calculatedTax = state.tax * state.subTotal
  state.total = state.subTotal + state.calculatedTax
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

      updateTotalsTax(state, Number(action.payload.attributes.price))
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

      updateTotalsTax(state, -Number(itemPrice) * itemQty)
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

      updateTotalsTax(state, -Number(itemPrice))
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, deleteCartItem, removeFromCart } = cartSlice.actions
