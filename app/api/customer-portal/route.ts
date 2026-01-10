import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripeInstance() {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-12-15.clover',
  })
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Initialize Stripe
    const stripe = getStripeInstance()

    // Get the base URL for redirects
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.headers.get('origin') || 'http://localhost:3001'

    // Find or create customer by email
    const customers = await stripe.customers.list({
      email: email.trim(),
      limit: 1,
    })

    let customerId: string

    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    } else {
      // Create a new customer if not found
      const customer = await stripe.customers.create({
        email: email.trim(),
      })
      customerId = customer.id
    }

    // Create Customer Portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${baseUrl}/pricing`,
    })

    return NextResponse.json({ url: portalSession.url })
  } catch (error: any) {
    console.error('Customer portal error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create customer portal session' },
      { status: 500 }
    )
  }
}
