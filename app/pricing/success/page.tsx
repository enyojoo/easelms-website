'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (sessionId) {
      // Verify the session with your backend if needed
      // For now, we'll just show success
      setLoading(false)
    } else {
      setError('No session ID found')
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Verifying your payment...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Payment Verification Failed</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/pricing">Return to Pricing</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl">Payment Successful!</CardTitle>
            <CardDescription className="text-base sm:text-lg">
              Thank you for your subscription. Your account is being set up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                <strong>What happens next?</strong>
              </p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Our team will set up your dedicated instance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>You'll receive access credentials within 24 hours</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
