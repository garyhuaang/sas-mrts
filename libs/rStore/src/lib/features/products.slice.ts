import { Products } from '../types/products.type'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: Products = [
  {
    id: null,
    attributes: {
      title: '',
      company: '',
      description: '',
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      category: '',
      image: '',
      price: '0.00',
      shipping: false,
      colors: [],
    },
  },
]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Products>) => {
      state = action.payload
    },
  },
})

export const productsReducer = productsSlice.reducer
export const { setProducts } = productsSlice.actions
