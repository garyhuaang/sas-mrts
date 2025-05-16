import { useMemo } from 'react'

import {
  Button,
  Label,
  Payment,
  RadioGroup,
  RadioGroupItem,
  Separator,
  ShippingInfo,
} from '@sas-mrts/ui'

import {
  ChevronRightIcon,
  MOCK_SHIPPING_DATA,
  numToUSD,
  TruckIcon,
} from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'
import { CheckoutProvider } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePublishKey = import.meta.env.VITE_STRIPE_PUBLISH_KEY
const stripePromise = loadStripe(stripePublishKey)

function Checkout() {
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

  return (
    <div className="flex flex-col w-screen overflow-y-auto p-10 md:p-24">
      {cartState.cartItems.length > 0 ? (
        <CheckoutProvider
          options={{
            fetchClientSecret: fetchClientSecret,
          }}
          stripe={stripePromise}
        >
          <Payment />
        </CheckoutProvider>
      ) : (
        <div className="flex flex-col w-full h-full justify-center">
          <header className="flex self-center gap-2 w-2/3 mb-8">
            <h1 className="text-5xl font-bold tracking-tight">Checkout</h1>
          </header>

          <form className=" flex flex-col h-fit w-full table-styles gap-6">
            <div className="flex self-start">
              <h4 className="flex items-center font-bold text-2xl">
                <TruckIcon className="mr-2 h-6 w-6" />
                Shipping Information
              </h4>
            </div>
            <ShippingInfo />

            <Separator className="bg-primary" />

            <RadioGroup className="w-full p-4">
              {MOCK_SHIPPING_DATA.map((data, index) => (
                <div
                  className="flex justify-between border border-primary rounded-md p-4"
                  key={index}
                >
                  <div className="flex gap-4 items-center">
                    <RadioGroupItem
                      className="cursor-pointer"
                      id={`r${index}`}
                      value={data.name}
                    />
                    <div className="flex flex-col gap-2">
                      <Label className="font-semibold">{data.name}</Label>
                      <Label>{data.description}</Label>
                    </div>
                  </div>
                  <Label className="self-center font-bold">
                    {numToUSD(data.cost)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Button className="self-end mr-4">
              Checkout
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}

export { Checkout }
