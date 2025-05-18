import type { Order, Pagination } from '../types'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type OrdersState = {
  orders: Order[]
}

const initialState: OrdersState = {
  orders: [],
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload
    },
  },
})

export const { setOrders } = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer
