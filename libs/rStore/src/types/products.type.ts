export type ProductAttributes = {
  title: string
  company: string
  description: string
  featured: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  category: string
  image: string
  price: number
  shipping: boolean
  colors: string[]
}

export type Product = {
  id: number
  attributes: ProductAttributes
}

export type Toggles = { name: string; included: boolean }[]

export type Products = { id: number; attributes: ProductAttributes }[]

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

export type SortProducts = 'NAME_A_Z' | 'NAME_Z_A' | 'PRICE_L_H' | 'PRICE_H_L'
