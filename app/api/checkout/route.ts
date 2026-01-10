import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

export async function POST(request: NextRequest) {
  try {
    const { plan, billingPeriod, priceId } = await request.json()

    if (!plan || !billingPeriod) {
      return NextResponse.json(
        { error: 'Missing plan or billing period' },
        { status: 400 }
      )
    }

    // Get the base URL for redirects
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.headers.get('origin') || 'http://localhost:3001'

    // For yearly plans, automatically apply the discount promotion code
    const discounts = billingPeriod === 'yearly' && process.env.STRIPE_YEARLY_DISCOUNT_CODE
      ? [{ promotion_code: process.env.STRIPE_YEARLY_DISCOUNT_CODE }]
      : undefined

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, // You'll need to create Price IDs in Stripe Dashboard
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${baseUrl}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=true`,
      metadata: {
        plan: plan,
        billingPeriod: billingPeriod,
      },
      customer_email: undefined, // Will be collected in checkout
      allow_promotion_codes: true, // Allow manual promotion codes too
      discounts: discounts, // Automatically apply yearly discount
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
