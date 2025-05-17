import { Axios, AxiosError } from 'axios'

import { createAppAsyncThunk, type ProductsResponse } from '../types'

import { storeClient } from './client'

import { tryCatch } from '@sas-mrts/common'

const fetchData = async (page: string) => {
  const response = await storeClient.get<ProductsResponse>(
    `/products?page=${page}`
  )

  return response.data || null
}

export const fetchProducts = createAppAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    const allData = []
    const { data: response1, error: error1 } = await tryCatch(fetchData('1'))

    if (error1) return 'Failed to fetch from Products page 1 upstream'

    if (response1 instanceof AxiosError) {
      return rejectWithValue(
        response1.response?.status || 'Failed to load page 1 products'
      )
    }

    allData.push(response1.data)

    const { data: response2, error: error2 } = await tryCatch(fetchData('2'))

    if (error2) return 'Failed to fetch from Products page 2 upstream'

    if (response2 instanceof AxiosError) {
      return rejectWithValue(
        response2.response?.status || 'Failed to load page 2 products'
      )
    }

    allData.push(response2.data)

    const { data: response3, error: error3 } = await tryCatch(fetchData('3'))

    if (error3) return 'Failed to fetch from Products page 3 upstream'

    if (response3 instanceof AxiosError) {
      return rejectWithValue(
        response3.response?.status || 'Failed to load page 3 products'
      )
    }

    allData.push(response3.data)

    return allData.flat()
  }
)
