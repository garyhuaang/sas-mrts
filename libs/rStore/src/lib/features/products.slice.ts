import { storeClient } from '../api/client'
import type { RootState } from '../rStore'
import { createAppAsyncThunk } from '../types'
import { type Product, Products } from '../types/products.type'

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

export const selectProductsState = (state: RootState) => state.products.items

export const selectProducts = createSelector(
  [selectProductsState],
  (items: Products) => {
    if (items) {
      return Object?.values(items)[0]?.map((item: Product) => ({ ...item }))
    }
  }
)

export const fetchProducts = createAppAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await storeClient.get<Products>('/products')

    return response.data
  }
)

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

export const productsReducer = productsSlice.reducer
