import { fetchProducts } from '../api/fetch.data'
import { Products } from '../types/products.type'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { categories, companies } from '@sas-mrts/common'

type ProdcutsState = {
  items: Products
  filteredItems: Products
  priceRange: number
  categories: string[]
  companies: string[]
  freeShipping: boolean
  isLoading: boolean
  error: string | null
}

const initialState: ProdcutsState = {
  items: [],
  filteredItems: [],
  priceRange: 0,
  categories: [],
  companies: [],
  freeShipping: false,
  isLoading: false,
  error: null,
}

// Helper function to apply all filters
const applyFilters = (state: ProdcutsState) => {
  let filtered = [...state.items]

  if (state.priceRange > 0) {
    filtered = filtered.filter(
      (item) => Number(item.attributes.price) <= state.priceRange
    )
  }

  if (state.categories.length > 0) {
    filtered = filtered.filter((item) =>
      state.categories.includes(item.attributes.category)
    )
  }

  if (state.companies.length > 0) {
    filtered = filtered.filter((item) =>
      state.companies.includes(item.attributes.company)
    )
  }

  if (state.freeShipping) {
    filtered = filtered.filter((item) => item.attributes.shipping)
  }

  return (state.filteredItems = filtered)
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload
      applyFilters(state)
    },
    setCategory: (state, action: PayloadAction<string>) => {
      const categoryExists = state.categories.find(
        (category) => category === action.payload
      )

      if (categoryExists) {
        state.categories = state.categories.filter(
          (category) => category !== action.payload
        )
      } else {
        state.categories.push(action.payload)
      }

      applyFilters(state)
    },

    setCompany: (state, action: PayloadAction<string>) => {
      const companyExists = state.companies.find(
        (company) => company === action.payload
      )

      if (companyExists) {
        state.categories = state.categories.filter(
          (company) => company !== action.payload
        )
      } else {
        state.companies.push(action.payload)
      }

      applyFilters(state)
    },
    setFreeShipping: (state) => {
      state.freeShipping = !state.freeShipping
      // state.filteredItems = applyFilters(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload as Products
        state.filteredItems = action.payload as Products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Failed to fetch products'
      })
  },
})

export const { setPriceRange, setCategory, setCompany, setFreeShipping } =
  productsSlice.actions
export const productsReducer = productsSlice.reducer
