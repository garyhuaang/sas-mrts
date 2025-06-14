import {
  type Product,
  Products,
  type SortProducts,
} from '../types/products.type'
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../utils/local.storage'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type ProdcutsState = {
  items: Products
  filteredItems: Products
  priceRange: number
  categories: string[]
  companies: string[]
  freeShipping: boolean
  sortOrder: SortProducts
  isLoading: boolean
  error: string | null
}

const initialState: ProdcutsState = {
  items: [],
  filteredItems: loadFromLocalStorage('filteredItems') || [],
  priceRange: 599.99,
  categories: loadFromLocalStorage('categories') || [],
  companies: loadFromLocalStorage('companies') || [],
  freeShipping: false,
  sortOrder: 'NAME_A_Z',
  isLoading: false,
  error: null,
}

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

  state.filteredItems = filtered

  saveToLocalStorage('filteredItems', filtered)
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      const filteredItemsCopy = loadFromLocalStorage('filteredItems')

      if (action.payload === '') state.filteredItems = filteredItemsCopy
      else {
        state.filteredItems = filteredItemsCopy.filter((item: Product) =>
          item.attributes.title
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        )
      }
    },
    reapplyOnMount: (state) => {
      applyFilters(state)
    },
    resetCatgories: (state) => {
      state.categories = []
      applyFilters(state)
    },
    resetCompanies: (state) => {
      state.companies = []
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
      saveToLocalStorage('categories', state.categories)
    },
    setCompany: (state, action: PayloadAction<string>) => {
      const companyExists = state.companies.find(
        (company) => company === action.payload
      )

      if (companyExists) {
        state.companies = state.companies.filter(
          (company) => company !== action.payload
        )
      } else {
        state.companies.push(action.payload)
      }

      applyFilters(state)
      saveToLocalStorage('companies', state.companies)
    },
    setFreeShipping: (state) => {
      state.freeShipping = !state.freeShipping
      applyFilters(state)
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = [...action.payload]
      state.filteredItems = [...action.payload]
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload
      applyFilters(state)
    },
    setSort: (state, action: PayloadAction<SortProducts>) => {
      switch (action.payload) {
        case 'NAME_A_Z':
          state.sortOrder = 'NAME_A_Z'
          state.items.sort((a, b) =>
            a.attributes.title.localeCompare(b.attributes.title)
          )
          break
        case 'NAME_Z_A':
          state.sortOrder = 'NAME_Z_A'
          state.items.sort((a, b) =>
            b.attributes.title.localeCompare(a.attributes.title)
          )
          break
        case 'PRICE_L_H':
          state.sortOrder = 'PRICE_L_H'
          state.items.sort(
            (a, b) => Number(a.attributes.price) - Number(b.attributes.price)
          )
          break
        case 'PRICE_H_L':
          state.sortOrder = 'PRICE_H_L'
          state.items.sort(
            (a, b) => Number(b.attributes.price) - Number(a.attributes.price)
          )
          break
        default:
          state.sortOrder = 'NAME_A_Z'
          state.items.sort((a, b) =>
            a.attributes.title.localeCompare(b.attributes.title)
          )
          break
      }

      applyFilters(state)
    },
  },
})

export const {
  filterByName,
  reapplyOnMount,
  resetCatgories,
  resetCompanies,
  setFreeShipping,
  setCategory,
  setCompany,
  setProducts,
  setPriceRange,
  setSort,
} = productsSlice.actions
export const productsReducer = productsSlice.reducer
