import { AxiosError } from 'axios'
import { createAppAsyncThunk, type ProductsResponse } from '../types'
import { storeClient } from './client'

export const fetchProducts = createAppAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await storeClient.get<ProductsResponse>('/products')
      const data = response.data
      return data.data
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(
          err.response?.status ||
            'Failed to load products, possible authentication issue'
        )
      }
      return rejectWithValue('Unexpected error fetching products')
    }
  }
)
