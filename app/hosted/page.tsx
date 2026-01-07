import Link from 'next/link'
import { Check, ArrowRight, Server, Shield, Zap, HeadphonesIcon, Database, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/marketing/CTASection'

const benefits = [
  {
    icon: Zap,
    title: 'Zero Setup Time',
    description: 'Get started in minutes, not weeks. We handle all the infrastructure setup and configuration.',
  },
  {
    icon: Server,
    title: 'Managed Infrastructure',
    description: 'We manage servers, databases, backups, and updates so you can focus on your content.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with regular updates, SSL certificates, and compliance standards.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Professional Support',
    description: 'Get help when you need it with priority support and dedicated account management.',
  },
  {
    icon: Database,
    title: 'Automatic Backups',
    description: 'Your data is automatically backed up daily with point-in-time recovery options.',
  },
  {
    icon: Cloud,
    title: 'Scalable Infrastructure',
    description: 'Scale seamlessly as your learner base grows without worrying about infrastructure limits.',
  },
]

export default function HostedPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hosted Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Let us handle the infrastructure while you focus on creating amazing learning experiences.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hosted?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="mt-2">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Infrastructure Details */}
        <div className="mx-auto mt-24 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure & Technology</CardTitle>
              <CardDescription>Built on modern, reliable infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Supabase</p>
                    <p className="text-sm text-muted-foreground">Managed PostgreSQL database with real-time capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Vercel</p>
                    <p className="text-sm text-muted-foreground">Global CDN and edge network for fast content delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">AWS S3 & CloudFront</p>
                    <p className="text-sm text-muted-foreground">Scalable storage and content delivery for media files</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Automatic Updates</p>
                    <p className="text-sm text-muted-foreground">Stay up-to-date with the latest features and security patches</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Migration */}
        <div className="mx-auto mt-24 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Migration Assistance</h2>
            <p className="text-lg text-muted-foreground">
              Already self-hosting? We'll help you migrate to our hosted service.
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Free data migration assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Zero downtime migration process</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Dedicated migration support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Training and onboarding included</span>
                </li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/contact">
                  Contact Us About Migration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Free Trial */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">14-Day Free Trial</CardTitle>
              <CardDescription className="text-base">
                Try our hosted service risk-free. No credit card required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-left mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Full access to all features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Dedicated support during trial</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>No commitment required</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full">
                <Link href="/pricing">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <CTASection />
    </div>
  )
}
