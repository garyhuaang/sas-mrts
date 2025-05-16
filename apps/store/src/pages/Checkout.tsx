// import { useMemo } from 'react'

// import { useAppSelector } from '@sas-mrts/rStore' // Assuming this path is correct for your Redux store hooks
// import { CheckoutProvider } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// // import YourStripePaymentForm from '../components/YourStripePaymentForm'; // Placeholder for your form component

// // Load Stripe publishable key (ensure this is correctly configured via .env)
// const stripePublishKey = import.meta.env.VITE_STRIPE_PUBLISH_KEY

// if (!stripePublishKey) {
//   console.error(
//     'Stripe publishable key (VITE_STRIPE_PUBLISH_KEY) is not set! Checkout will not function.'
//   )
// }

// // Initialize stripePromise. It can be null if key is missing, handled below.
// const stripePromise = stripePublishKey ? loadStripe(stripePublishKey) : null

// export function CheckoutPage() {
//   // Assuming the component is named CheckoutPage, adjust if needed
//   const cartState = useAppSelector((state) => state.cart)

//   const fetchClientSecret = useMemo(() => {
//     // This function will be called by Stripe's CheckoutProvider
//     return async () => {
//       // This check is a fallback; primary check is the conditional rendering below.
//       if (!cartState.cartItems || cartState.cartItems.length === 0) {
//         console.warn(
//           'fetchClientSecret called with empty cart. This should ideally be prevented by conditional rendering.'
//         )

//         // Stripe expects a client secret string. Returning empty string will likely cause an error in Stripe Elements.
//         // It's better to not render CheckoutProvider if cart is empty.
//         return ''
//       }

//       try {
//         // console.log('Fetching client secret with items:', cartState.cartItems);
//         const res = await fetch('/create-checkout-session', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ items: cartState.cartItems }),
//         })

//         if (!res.ok) {
//           const errorText = await res.text()

//           console.error(
//             '[CheckoutPage] Server responded with an error:',
//             res.status,
//             errorText
//           )
//           throw new Error(`Server responded with ${res.status}: ${errorText}`)
//         }

//         const data = await res.json()

//         if (!data?.clientSecret) {
//           console.error(
//             '[CheckoutPage] Client secret not found in server response:',
//             data
//           )
//           throw new Error('Client secret not found in server response.')
//         }

//         return data.clientSecret
//       } catch (error) {
//         console.error('[CheckoutPage] Error in fetchClientSecret:', error)
//         throw error
//       }
//     }
//   }, [cartState.cartItems])

//   const appearance = {
//     theme: 'stripe' as const, // Or 'night', 'flat', or undefined. 'as const' helps with type inference.
//     // Add other appearance options if needed
//   }

//   if (!stripePromise) {
//     // Render an error message or fallback if Stripe.js couldn't load (e.g., key missing)
//     return (
//       <div>
//         <h2>Checkout Error</h2>
//         <p>
//           There was a problem loading the payment gateway. Please ensure your
//           Stripe configuration is correct.
//         </p>
//         <p>
//           <i>(Stripe Publishable Key might be missing)</i>
//         </p>
//       </div>
//     )
//   }

//   // Conditional rendering: If cart is empty, show a message instead of the checkout form.
//   if (!cartState.cartItems || cartState.cartItems.length === 0) {
//     return (
//       <div>
//         <h2>Checkout</h2>
//         <p>
//           Your cart is empty. Please add items to your cart before proceeding to
//           checkout.
//         </p>
//         {/* You might want a <Link to="/">Go Shopping</Link> here */}
//       </div>
//     )
//   }

//   // If cart has items and Stripe loaded, render the CheckoutProvider and your payment form
//   return (
//     <div>
//       <h2>Checkout</h2>
//       <CheckoutProvider
//         options={{
//           fetchClientSecret: fetchClientSecret,
//         }}
//         stripe={stripePromise}
//       >
//         <p>Your Payment Form will go here. Implement using Stripe Elements.</p>
//         {/* Example: <YourStripePaymentForm /> */}
//         {/* You'll typically use useStripe() and useElements() hooks within that form component */}
//       </CheckoutProvider>
//     </div>
//   )
// }

// export default CheckoutPage // Assuming default export, adjust if it's a named export
