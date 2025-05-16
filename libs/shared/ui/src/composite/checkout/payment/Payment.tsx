import { useStripe } from '@stripe/react-stripe-js'

function Payment() {
  const stripe = useStripe()

  return <div>Payment</div>
}

export { Payment }
