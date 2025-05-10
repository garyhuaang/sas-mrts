import { postLogin, postRegister } from '../api/post.data'
import {
  AuthResponse,
  type RegisterCredentials,
  type User,
  UserAuthState,
} from '../types'

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
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        postLogin.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          if (action.payload.error) return state

          return {
            ...state,
            isLoading: false,
            username: action.payload.user.username,
            confirmed: action.payload.user.confirmed,
          }
        }
      )
      .addCase(postLogin.rejected, (state, action) => {
        state.isLoading = false
        state.confirmed = false
        state.error =
          action.error.message || 'Failed to login user, check credentials'
      })
      .addCase(postRegister.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        postRegister.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          if (action.payload.error) return state

          return { ...state, isLoading: false }
        }
      )
      .addCase(postRegister.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { setUser, logoutUser, resetError } = userSlice.actions
export const userReducer = userSlice.reducer
