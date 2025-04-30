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

export type Products = [{ id: number; attributes: Product }]
