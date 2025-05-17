import { UserAuthState } from '../types'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: UserAuthState = {
  jwt: '',
  username: '',
  confirmed: false,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserAuthState>) => {
      if (state.confirmed) {
        localStorage.setItem('username', action.payload.username)
      }
    },
    resetError: (state) => {
      state.error = null
    },
    logoutUser: (state) => {
      state = { ...initialState }
      localStorage.removeItem('username')

      return state
    },
  },
})

export const { setUser, logoutUser, resetError } = userSlice.actions
export const userReducer = userSlice.reducer
