'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { getStripe } from '@/lib/stripe'
import { Loader2 } from 'lucide-react'

interface CheckoutButtonProps {
  plan: string
  billingPeriod: 'monthly' | 'yearly'
  priceId: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function CheckoutButton({
  plan,
  billingPeriod,
  priceId,
  children,
  className,
  variant = 'default',
  size = 'lg',
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setLoading(true)

      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          billingPeriod,
          priceId,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      const stripe = await getStripe()
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        })

        if (error) {
          throw error
        }
      }
    } catch (error: any) {
      console.error('Checkout error:', error)
      alert(error.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
      variant={variant}
      size={size}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
