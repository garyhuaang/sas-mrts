import { Input } from '../../../base'
import { validateEmail } from '../../../lib'

import { Label } from '@radix-ui/react-dropdown-menu'
import { useCheckout } from '@stripe/react-stripe-js'

type EmailInputProps = {
  email: string
  setEmail: (e: string) => void
  error: string
  setError: (e: string) => void
}

function EmailInput({ email, setEmail, error, setError }: EmailInputProps) {
  const checkout = useCheckout()

  const handleBlur = async () => {
    if (!email) {
      return
    }

    const { isValid, message } = await validateEmail(email, checkout)

    if (!isValid) {
      setError(message as string)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setEmail(e.target.value)
  }

  return (
    <>
      <Label>
        Email
        <Input
          className="border-primary"
          id="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="you@example.com"
          type="text"
          value={email}
        />
      </Label>
      {error && <div id="email-errors">{error}</div>}
    </>
  )
}

export { EmailInput }
