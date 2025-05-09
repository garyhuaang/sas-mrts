import { postLogin, postRegister } from '../api/post.data'
import { AuthResponse, type User, UserAuthState } from '../types'

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
        localStorage.setItem('user', JSON.stringify(action.payload))
      }
    },
    logoutUser: (state) => {
      state = { ...initialState }
      localStorage.removeItem('user')

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
          state.isLoading = false
          state.username = action.payload.user.username
          state.confirmed = action.payload.user.confirmed
          state.jwt = action.payload.jwt
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
      .addCase(postRegister.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(postRegister.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { setUser, logoutUser } = userSlice.actions
export const userReducer = userSlice.reducer
