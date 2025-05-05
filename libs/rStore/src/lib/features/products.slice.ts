import { fetchProducts } from '../api/fetch.data'
import type { RootState } from '../rStore'
import { Products } from '../types/products.type'

import { createSelector, createSlice } from '@reduxjs/toolkit'

type ProdcutsState = {
  items: Products
  isLoading: boolean
  error: string | null
}

const initialState: ProdcutsState = {
  items: [],
  isLoading: false,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Failed to fetch products'
      })
  },
})

export const selectProductsState = (state: RootState) => state.products.items

export const selectProducts = createSelector(
  [selectProductsState],
  (productsList: Products) => {
    return productsList.map((item) => ({
      id: item.id,
      attributes: { ...item.attributes },
    }))
  }
)

export const productsReducer = productsSlice.reducer
