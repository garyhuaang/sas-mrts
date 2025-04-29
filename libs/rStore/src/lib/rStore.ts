import productsSliceReducer from './features/products.slice'

import { configureStore } from '@reduxjs/toolkit'

export const rStore = configureStore({
  reducer: { productsSliceReducer },
})

export type RootState = ReturnType<typeof rStore.getState>
export type AppDispatch = () => typeof rStore.dispatch
