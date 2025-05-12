import { z } from 'zod'

export type Product = {
  title: string
  company: string
  description: string
  featured: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  category: string
  image: string
  price: string
  shipping: boolean
  colors: string[]
}

export type Toggles = { name: string; included: boolean }[]

export type Products = { id: number; attributes: Product }[]

export type Pagination = {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export type ProductsResponse = {
  data: Products
  meta: Pagination
}

export const categoryFormSchema = z.object({
  kids: z.boolean(),
  sofas: z.boolean(),
  beds: z.boolean(),
  tables: z.boolean(),
  chairs: z.boolean(),
})

export const companyFormSchema = z.object({
  artifax: z.boolean(),
  luxora: z.boolean(),
  homestead: z.boolean(),
  modenza: z.boolean(),
  comfora: z.boolean(),
})
