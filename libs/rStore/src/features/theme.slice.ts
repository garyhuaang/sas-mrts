import type { Theme } from '../types'
import { applyTheme } from '../utils'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type ThemeState = {
  theme: Theme
}

function initializeTheme(): Theme {
  const theme = (localStorage.getItem('theme') as Theme) || 'light'

  applyTheme(theme)

  return theme
}

const initialState: ThemeState = {
  theme: initializeTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
      applyTheme(action.payload)
    },
  },
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
