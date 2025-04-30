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

export type RootState = ReturnType<typeof rStore.getState>
