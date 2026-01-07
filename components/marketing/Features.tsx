'use client'

import { BookOpen, Users, BarChart3, Shield, Zap, Globe, CreditCard, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Course Management',
    description: 'Create rich, engaging courses with multimedia content, quizzes, and assessments.',
    icon: BookOpen,
  },
  {
    name: 'Learner Experience',
    description: 'Beautiful, intuitive interface that works seamlessly on desktop and mobile devices.',
    icon: Users,
  },
  {
    name: 'Analytics & Reporting',
    description: 'Track learner progress, engagement metrics, and generate comprehensive reports.',
    icon: BarChart3,
  },
  {
    name: 'Security & Compliance',
    description: 'Enterprise-grade security with role-based access control and data encryption.',
    icon: Shield,
  },
  {
    name: 'Fast Performance',
    description: 'Built on modern tech stack for lightning-fast load times and smooth experience.',
    icon: Zap,
  },
  {
    name: 'Multi-Currency Support',
    description: 'Sell courses globally with support for multiple currencies and payment gateways.',
    icon: Globe,
  },
  {
    name: 'Payment Integration',
    description: 'Integrated Stripe and Flutterwave for seamless payment processing.',
    icon: CreditCard,
  },
  {
    name: 'Certificates',
    description: 'Automatically generate and issue certificates upon course completion.',
    icon: Award,
  },
]

export function Features() {
  return (
    <section id="features" className="bg-background pt-16 sm:pt-24 lg:pt-32 pb-6 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Everything you need to run your learning platform
          </h2>
          <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2 sm:px-0">
            Powerful features designed for modern educational institutions and training organizations.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                    <CardDescription className="mt-2">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
