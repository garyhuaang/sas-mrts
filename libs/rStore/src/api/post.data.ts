import { AxiosError } from 'axios'

import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from '../types'

import { storeClient } from './client'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { tryCatch } from '@sas-mrts/common'

const postDataLogin = async (loginData: LoginCredentials) => {
  const response = await storeClient.post<AuthResponse>(
    '/auth/local',
    loginData
  )

  return response.data || null
}

const postDataRegister = async (registerData: RegisterCredentials) => {
  const response = await storeClient.post<AuthResponse>(
    '/auth/local/register',
    registerData
  )

  return response.data || null
}

export const postLogin = createAsyncThunk<AuthResponse, LoginCredentials>(
  'user/postLogin',
  async (loginData: LoginCredentials, { rejectWithValue }) => {
    const { data: response, error } = await tryCatch(postDataLogin(loginData))

    if (error) {
      return rejectWithValue('Failed to post loginData upstream')
    }

    if (response instanceof AxiosError) {
      return rejectWithValue(
        response.response?.status || 'Failed to post login, invalid credentials'
      )
    }

    return response
  }
)

export const postRegister = createAsyncThunk<AuthResponse, RegisterCredentials>(
  'user/postRegister',
  async (registerData: RegisterCredentials, { rejectWithValue }) => {
    const { data: response, error } = await tryCatch(
      postDataRegister(registerData)
    )

    if (error) {
      return rejectWithValue('Failed to post loginData upstream')
    }

    if (response instanceof AxiosError) {
      return rejectWithValue(
        response.response?.status ||
          'Failed to post register, check credentials'
      )
    }

    return response
  }
)
