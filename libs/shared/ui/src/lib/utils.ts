import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { CheckoutContextValue } from '@stripe/react-stripe-js'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const validateEmail = async (email: string, checkout: CheckoutContextValue) => {
  const updateResult = await checkout.updateEmail(email)
  const isValid = updateResult.type !== 'error'

  return { isValid, message: !isValid ? updateResult.error.message : null }
}

export { cn, validateEmail }
