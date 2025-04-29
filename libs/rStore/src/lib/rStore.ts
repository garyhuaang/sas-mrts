import productsSliceReducer from './features/products.slice'

import { configureStore } from '@reduxjs/toolkit'

const rStore = configureStore({
  reducer: { productsSliceReducer },
})

export type RootState = ReturnType<typeof >
export type AppDispatch = () => typeof
