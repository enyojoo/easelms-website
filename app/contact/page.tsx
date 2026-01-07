'use client'

import { useState, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useSearchParams } from 'next/navigation'

function ContactForm() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    useCase: '',
    learners: '',
    message: '',
    plan: plan || '',
    enterprise: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (submitted) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Thank You!</CardTitle>
              <CardDescription>
                We've received your message and will get back to you soon.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? Want to schedule a demo? We're here to help.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium leading-6 text-foreground">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium leading-6 text-foreground">
                  Use Case
                </label>
                <select
                  name="useCase"
                  id="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a use case</option>
                  <option value="corporate-training">Corporate Training</option>
                  <option value="educational-institution">Educational Institution</option>
                  <option value="online-course-business">Online Course Business</option>
                  <option value="non-profit">Non-Profit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="learners" className="block text-sm font-medium leading-6 text-foreground">
                  Number of Learners
                </label>
                <select
                  name="learners"
                  id="learners"
                  value={formData.learners}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select range</option>
                  <option value="1-100">1-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1,000</option>
                  <option value="1001-5000">1,001-5,000</option>
                  <option value="5000+">5,000+</option>
                </select>
              </div>

              {plan && (
                <div>
                  <label htmlFor="plan" className="block text-sm font-medium leading-6 text-foreground">
                    Interested Plan
                  </label>
                  <input
                    type="text"
                    name="plan"
                    id="plan"
                    value={formData.plan}
                    readOnly
                    className="mt-2 block w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-foreground"
                  />
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="enterprise"
                  id="enterprise"
                  checked={formData.enterprise}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                />
                <label htmlFor="enterprise" className="ml-3 text-sm leading-6 text-foreground">
                  I'm interested in Enterprise pricing
                </label>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Loading...
            </p>
          </div>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  )
}
