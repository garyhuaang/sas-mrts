import { postLogin, postRegister } from '../api/post.data'
import { AuthResponse, UserAuthState } from '../types'

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        postLogin.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.isLoading = false
          state.jwt = action.payload.user.username
          state.confirmed = action.payload.user.confirmed
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

export const userReducer = userSlice.reducer
