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

const INITIAL_STATE: ThemeState = {
  theme: initializeTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: INITIAL_STATE,
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
