import { createAppAsyncThunk, type ProductsResponse } from '../types'
import { storeClient } from './client'

export const fetchProducts = createAppAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await storeClient.get<ProductsResponse>('/products')
    const data = response.data

    return data.data
  }
)
