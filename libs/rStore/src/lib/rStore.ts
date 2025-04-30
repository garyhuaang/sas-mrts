import { useDispatch, useSelector } from 'react-redux'

import { apiSlice } from './api/api.slice'
import { listenerMiddleware } from './middleware/listenerMiddleware'
import { productsReducer, themeReducer } from './features'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  theme: themeReducer,
  products: productsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const rStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof rStore.getState>
export type AppDispatch = typeof rStore.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
