import { storeClient } from '../api/client'
import { createAppAsyncThunk } from '../types'
import { Products } from '../types/products.type'

import { createSlice } from '@reduxjs/toolkit'

type ProdcutsListState = {
  products: Products
  isLoading: boolean
  error: string | null
}

const initialState: ProdcutsListState = {
  products: [],
  isLoading: false,
  error: null,
}

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
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Failed to fetch products'
      })
  },
})

export const productsReducer = productsSlice.reducer
