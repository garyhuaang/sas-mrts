import { AxiosError } from 'axios'

import { createAppAsyncThunk, type ProductsResponse } from '../types'

import { storeClient } from './client'

import { tryCatch } from '@sas-mrts/common'

const fetchData = async () => {
  const response = await storeClient.get<ProductsResponse>('/products')

  return response.data || null
}

export const fetchProducts = createAppAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    const { data: response, error } = await tryCatch(fetchData())

    if (error) {
      return 'Failed to fetch from Products upstream'
    }

    if (response instanceof AxiosError) {
      return rejectWithValue(
        response.response?.status ||
          'Failed to load products, possible authentication issue'
      )
    }

    return response.data
  }
)
