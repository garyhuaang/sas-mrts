import { type TypedUseSelectorHook, useSelector } from 'react-redux'

import { productsReducer, themeReducer } from './features'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  themeReducer: themeReducer,
  productsReducer: productsReducer,
})

export const rStore = configureStore({
  reducer: {
    rootReducer,
  },
})

type RootState = ReturnType<typeof rStore.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
