// Import the RTK Query methods from the React-specific entry point

import type { Products, LoginCredentials, AuthResponse } from '../types'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strapi-store-server.onrender.com/api',
  }),
  endpoints: (builder) => ({
    // <Returns typeof Products, No params required>
    getProducts: builder.query<Products, void>({
      query: () => '/products',
    }),
    // <Returns typeof AuthResponse, Requires LoginCredentials
    postLogin: builder.query<AuthResponse, LoginCredentials>({
      query: () => '/auth/local',
    }),
  }),
})
