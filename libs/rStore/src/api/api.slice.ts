import type {
  AuthResponse,
  LoginCredentials,
  OrderResponse,
  Product,
  ProductsResponse,
  RegisterCredentials,
} from '../types'

import {
  createApi,
  fetchBaseQuery,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { tryCatch } from '@sas-mrts/common'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strapi-store-server.onrender.com/api',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, baseQuery) {
        const allProducts: Product[] = []
        const pages = ['1', '2', '3']

        const pagePromises = pages.map((page) =>
          tryCatch<ProductsResponse, FetchBaseQueryError>(
            (async () => {
              const responseFromBaseQuery = await baseQuery(
                `/products?page=${page}`
              )

              if (responseFromBaseQuery.error) throw responseFromBaseQuery.error

              return responseFromBaseQuery.data as ProductsResponse
            })()
          )
        )

        const response = await tryCatch(Promise.all(pagePromises))

        if (response.error) {
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: `Promise.all failed: ${response.error.message}`,
            },
          }
        }

        for (const products of response.data) {
          if (!products.error) {
            const currProducts = products.data.data as Product[]

            for (const product of currProducts) {
              allProducts.push({
                ...product,
                attributes: {
                  ...product.attributes,
                  price: Number(product.attributes.price) / 100,
                },
              })
            }
          }
        }

        return { data: allProducts }
      },
    }),
    getOrders: builder.query<OrderResponse, void>({
      query: (jwt) => ({
        url: '/orders',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }),
    }),
    postLogin: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/auth/local',
        method: 'POST',
        body: credentials,
      }),
    }),
    postRegister: builder.mutation<AuthResponse, RegisterCredentials>({
      query: (credentials) => ({
        url: '/auth/local/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetOrdersQuery,
  usePostLoginMutation,
  usePostRegisterMutation,
} = apiSlice
