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

const toUppercaseWords = (words: string) => {
  const upperCaseWords = words.split(' ').map((word) => {
    const upperCase = word.charAt(0).toUpperCase()
    const leftOvers = word.slice(1).toLowerCase()

    return upperCase + leftOvers
  })

  return upperCaseWords.join(' ')
}

const generateDate = (date: Date) => {
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const day = date.getDay()
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}

export { cn, validateEmail, toUppercaseWords, generateDate }
