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
    const { plan, billingPeriod, priceId } = await request.json()

    if (!plan || !billingPeriod) {
      return NextResponse.json(
        { error: 'Missing plan or billing period' },
        { status: 400 }
      )
    }

    // Initialize Stripe
    const stripe = getStripeInstance()

    // Get the base URL for redirects
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.headers.get('origin') || 'http://localhost:3001'

    // For yearly plans, automatically apply the discount promotion code
    const discounts = billingPeriod === 'yearly' && process.env.STRIPE_YEARLY_DISCOUNT_CODE
      ? [{ promotion_code: process.env.STRIPE_YEARLY_DISCOUNT_CODE }]
      : undefined

    // Yearly plans don't get trial since they already have 20% discount
    // Monthly plans get 14-day free trial
    const trialPeriodDays = billingPeriod === 'yearly' ? undefined : 14

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
      subscription_data: {
        ...(trialPeriodDays && { trial_period_days: trialPeriodDays }), // 14-day free trial for monthly only
        metadata: {
          plan: plan,
          billingPeriod: billingPeriod,
        },
      },
      success_url: `${baseUrl}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=true`,
      metadata: {
        plan: plan,
        billingPeriod: billingPeriod,
      },
      customer_email: undefined, // Will be collected in checkout
      // Only allow promotion codes if we're not applying automatic discounts
      // Stripe doesn't allow both allow_promotion_codes and discounts at the same time
      ...(discounts ? { discounts } : { allow_promotion_codes: true }),
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
