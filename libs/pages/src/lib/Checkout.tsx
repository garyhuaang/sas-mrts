import { useMemo } from 'react'

import { Payment } from '@sas-mrts/ui'

import { useAppSelector } from '@sas-mrts/rStore'
import { CheckoutProvider } from '@stripe/react-stripe-js'
import { type Appearance, loadStripe } from '@stripe/stripe-js'

const stripePublishKey = import.meta.env.VITE_STRIPE_PUBLISH_KEY
const stripePromise = loadStripe(stripePublishKey)

function Checkout() {
  const theme = useAppSelector((state) => state.theme.theme)
  const cartState = useAppSelector((state) => state.cart)

  const fetchClientSecret = useMemo(() => {
    return async () => {
      const res = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartState.cartItems }),
      })

      if (!res.ok) {
        const errorText = await res.text()

        throw new Error(`Server responded with ${res.status}: ${errorText}`)
      }

      const data = await res.json()

      if (!data?.clientSecret) {
        throw new Error('Client secret not found in server response.')
      }

      return data.clientSecret
    }
  }, [cartState.cartItems])

  const appearance: Appearance = useMemo(() => {
    if (theme === 'dark') {
      return {
        theme: 'night',
        variables: {
          colorPrimary: '#df8071',
        },
      }
    }

    return {
      theme: 'stripe',
      variables: {
        colorPrimary: '#df8071',
      },
    }
  }, [theme])

  return (
    <div className="flex flex-col w-full h-full justify-center">
      {cartState.cartItems.length > 0 ? (
        <CheckoutProvider
          options={{
            fetchClientSecret: fetchClientSecret,
            elementsOptions: { appearance },
          }}
          stripe={stripePromise}
        >
          <Payment />
        </CheckoutProvider>
      ) : (
        <div className="flex flex-col w-full h-full justify-center">
          Oops, seems like your cart was empty.
        </div>
      )}
    </div>
  )
}

export { Checkout }
