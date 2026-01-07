'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface PricingTier {
  name: string
  price: {
    monthly: string
    yearly: string
  }
  description: string
  features: string[]
  cta: string
  ctaLink: string
  popular?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  billingPeriod: 'monthly' | 'yearly'
}

export function PricingCard({ tier, billingPeriod }: PricingCardProps) {
  const price = billingPeriod === 'monthly' ? tier.price.monthly : tier.price.yearly
  const isCustom = price.toLowerCase() === 'custom'

  return (
    <Card className={cn('relative flex flex-col', tier.popular && 'border-primary shadow-lg')}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{tier.name}</CardTitle>
        <CardDescription className="mt-2">{tier.description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {!isCustom && (
          <span className="text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
          )}
        </div>
        {billingPeriod === 'yearly' && !isCustom && (
          <p className="mt-2 text-sm text-muted-foreground">
            Save 20% with annual billing
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full"
          variant={tier.popular ? 'default' : 'outline'}
          size="lg"
        >
          <Link href={tier.ctaLink}>{tier.cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
