import { createAsyncThunk } from '@reduxjs/toolkit'
import { storeClient } from './client'
import type {
  LoginCredentials,
  AuthResponse,
  RegisterCredentials,
} from '../types'
import { AxiosError } from 'axios'

export const postLogin = createAsyncThunk<AuthResponse, LoginCredentials>(
  'user/postLogin',
  async (loginData: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await storeClient.post<AuthResponse>(
        '/auth/local',
        loginData
      )
      const data = response.data

      return data
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data || 'Failed to login')
      }
      return rejectWithValue('Unexpected error occured during Login')
    }
  }
)

export const postRegister = createAsyncThunk<AuthResponse, RegisterCredentials>(
  'user/postRegister',
  async (registerData: RegisterCredentials, { rejectWithValue }) => {
    console.log('🚀 ~ registerData:', registerData)
    try {
      const response = await storeClient.post<AuthResponse>(
        '/auth/local/register',
        registerData
      )
      const data = response.data

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error?.response?.data || 'Failed to register')
      }
      return rejectWithValue('Unexpected error occured during registration')
    }
  }
)
