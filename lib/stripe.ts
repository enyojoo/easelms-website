import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe on the client side
export const getStripe = () => {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!stripeKey) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set')
  }
  return loadStripe(stripeKey)
}
