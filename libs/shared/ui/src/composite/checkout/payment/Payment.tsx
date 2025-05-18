import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Label, SofaBackDrop } from '../../../base'
import { validateEmail } from '../../../lib'

import { EmailInput } from './EmailInput'

import { ReloadIcon } from '@radix-ui/react-icons'
import { ChevronLeftIcon } from '@sas-mrts/common'
import { PaymentElement, useCheckout } from '@stripe/react-stripe-js'

function Payment() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const checkout = useCheckout()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const { isValid, message } = await validateEmail(email, checkout)

    if (!isValid) {
      setEmailError(message as string)
      setMessage(message as string)
      setIsLoading(false)

      return
    }

    const confirmResult = await checkout.confirm()

    if (confirmResult.type === 'error') {
      setMessage(confirmResult.error.message)
    }

    setIsLoading(false)
  }

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen
      overflow-y-auto p-10 md:p-15 motion-preset-fade-sm"
    >
      <div className="w-1/2 bg-primary-foreground border border-secondary rounded-md p-10">
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <EmailInput
            email={email}
            error={emailError}
            setEmail={setEmail}
            setError={setEmailError}
          />
          <Label className="font-medium text-lg">Payment</Label>
          <PaymentElement id="payment-element" />
          <Button disabled={isLoading} id="submit">
            {isLoading ? (
              <span className="flex">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Submitting payment...
              </span>
            ) : (
              `Pay ${checkout.total.total.amount} now`
            )}
          </Button>

          {message && <div id="payment-message">{message}</div>}

          <Button className="self-start w-/14" variant="outline">
            <Link viewTransition className="flex-center gap-2" to="/cart">
              <ChevronLeftIcon className="h-6 w-6" />
              Cart
            </Link>
          </Button>
        </form>
      </div>

      <SofaBackDrop />
    </div>
  )
}

export { Payment }
