'use client'

import { useState } from 'react'
import { PricingCard, PricingTier } from '@/components/marketing/PricingCard'
import { CTASection } from '@/components/marketing/CTASection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: {
      monthly: '$99',
      yearly: '$950',
    },
    description: 'Perfect for small teams and organizations getting started.',
    features: [
      'Up to 100 learners',
      'Dedicated Supabase instance',
      'Dedicated S3 bucket',
      '50GB storage',
      '100GB bandwidth/month',
      'Standard support',
      'Custom branding',
      'Email support',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/contact?plan=starter',
  },
  {
    name: 'Professional',
    price: {
      monthly: '$299',
      yearly: '$2,870',
    },
    description: 'Ideal for growing organizations with advanced needs.',
    features: [
      'Up to 1,000 learners',
      'Dedicated Supabase instance',
      'Dedicated S3 bucket',
      '200GB storage',
      '500GB bandwidth/month',
      'Priority support',
      'Custom branding',
      'Email & chat support',
      'Advanced analytics',
      'API access',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/contact?plan=professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
      yearly: 'Custom',
    },
    description: 'For large organizations with custom requirements.',
    features: [
      'Unlimited learners',
      'Dedicated infrastructure',
      'Unlimited storage',
      'Unlimited bandwidth',
      '24/7 priority support',
      'Custom branding',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment option',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact?plan=enterprise',
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex rounded-lg bg-muted p-1">
            <Button
              variant={billingPeriod === 'monthly' ? 'default' : 'ghost'}
              onClick={() => setBillingPeriod('monthly')}
              className="rounded-md"
            >
              Monthly
            </Button>
            <Button
              variant={billingPeriod === 'yearly' ? 'default' : 'ghost'}
              onClick={() => setBillingPeriod('yearly')}
              className="rounded-md"
            >
              Yearly
              <span className="ml-2 rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                Save 20%
              </span>
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} billingPeriod={billingPeriod} />
          ))}
        </div>

        {/* All Plans Include */}
        <div className="mx-auto mt-24 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>All plans include</CardTitle>
              <CardDescription>Everything you need to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm text-muted-foreground">14-day free trial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm text-muted-foreground">No credit card required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm text-muted-foreground">Automatic updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm text-muted-foreground">99.9% uptime SLA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm text-muted-foreground">Regular backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-sm text-muted-foreground">SSL certificates</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens after my free trial?</h3>
              <p className="text-muted-foreground">
                After your 14-day free trial, you'll be asked to choose a plan. Your data is safe and you can continue where you left off.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I self-host for free?</h3>
              <p className="text-muted-foreground">
                Absolutely! EaseLMS is open-source and you can deploy it yourself for free. Check out our{' '}
                <a href="/open-source" className="text-primary hover:underline">open-source page</a> for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  )
}
