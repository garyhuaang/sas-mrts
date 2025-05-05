// Import the RTK Query methods from the React-specific entry point

import type { Products } from '../types'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strapi-store-server.onrender.com/api',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, void>({
      query: () => '/products',
    }),
  }),
})

export const { useGetProductsQuery } = apiSlice
