import { useState } from 'react'

import { Button, Label, SofaBackDrop } from '../../../base'
import { validateEmail } from '../../../lib'
import { NavBar } from '../../navigation'

import { EmailInput } from './EmailInput'

import { PaymentElement, useCheckout } from '@stripe/react-stripe-js'

function Payment() {
  const checkout = useCheckout()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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
      <div className="table-styles">
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
          <EmailInput
            email={email}
            error={emailError}
            setEmail={setEmail}
            setError={setEmailError}
          />
          <Label className="font-medium text-lg">Payment</Label>
          <PaymentElement id="payment-element" />
          <Button className="text-white" disabled={isLoading} id="submit">
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              `Pay ${checkout.total.total.amount} now`
            )}
          </Button>

          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>

      <SofaBackDrop />
    </div>
  )
}

export { Payment }
