import { z } from 'zod'

export type UserAuthState = {
  jwt: string
  username: string
  confirmed: boolean
  isLoading: boolean
  error: string | null
}

export type User = {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}

export type LoginCredentials = {
  identifier: string
  password: string
}

export type RegisterCredentials = {
  username: string
  email: string
  password: string
}

export type AuthResponse = {
  jwt: string
  user: User
}

export const loginFormSchema = z.object({
  identifier: z.string(),
  password: z.string(),
})

export const registerFormSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
})
