import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, BarChart3, Shield, Zap, Globe, CreditCard, Award, FileText, Video, CheckCircle2, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features - EaseLMS',
}

const featureCategories = [
  {
    title: 'Course Management',
    description: 'Create and manage engaging courses with ease',
    features: [
      {
        name: 'Rich Content Editor',
        description: 'Create courses with text, images, videos, and interactive content.',
        icon: FileText,
      },
      {
        name: 'Video Lessons',
        description: 'Upload and stream video content with progress tracking.',
        icon: Video,
      },
      {
        name: 'Interactive Quizzes',
        description: 'Create quizzes and assessments with automatic grading.',
        icon: CheckCircle2,
      },
      {
        name: 'Course Organization',
        description: 'Organize courses into modules, lessons, and resources.',
        icon: BookOpen,
      },
    ],
  },
  {
    title: 'Learner Experience',
    description: 'Beautiful, intuitive interface for learners',
    features: [
      {
        name: 'Mobile Responsive',
        description: 'Access your courses from any device, anywhere.',
        icon: Globe,
      },
      {
        name: 'Progress Tracking',
        description: 'Track your learning progress and completion status.',
        icon: BarChart3,
      },
      {
        name: 'Certificates',
        description: 'Receive certificates upon course completion.',
        icon: Award,
      },
      {
        name: 'User Profiles',
        description: 'Customize your profile and track achievements.',
        icon: Users,
      },
    ],
  },
  {
    title: 'Admin & Analytics',
    description: 'Powerful tools for administrators',
    features: [
      {
        name: 'Dashboard Analytics',
        description: 'Comprehensive analytics and reporting dashboard.',
        icon: BarChart3,
      },
      {
        name: 'User Management',
        description: 'Manage learners, instructors, and administrators.',
        icon: Users,
      },
      {
        name: 'Custom Settings',
        description: 'Configure branding, settings, and preferences.',
        icon: Settings,
      },
      {
        name: 'Role-Based Access',
        description: 'Control access with role-based permissions.',
        icon: Shield,
      },
    ],
  },
  {
    title: 'Payments & Integrations',
    description: 'Monetize your courses with ease',
    features: [
      {
        name: 'Stripe Integration',
        description: 'Accept payments via Stripe with support for multiple currencies.',
        icon: CreditCard,
      },
      {
        name: 'Flutterwave Integration',
        description: 'Accept payments in Africa and other regions.',
        icon: CreditCard,
      },
      {
        name: 'Multi-Currency',
        description: 'Sell courses in multiple currencies worldwide.',
        icon: Globe,
      },
      {
        name: 'Payment Tracking',
        description: 'Track purchases, refunds, and revenue.',
        icon: BarChart3,
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Powerful features for modern learning
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2 sm:px-0">
            Everything you need to create, deliver, and manage online courses.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 space-y-16 sm:space-y-20 lg:space-y-24">
          {featureCategories.map((category) => (
            <div key={category.title}>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{category.title}</h2>
                <p className="mt-2 text-base sm:text-lg text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {category.features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Card key={feature.name} className="h-full">
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.name}</CardTitle>
                        <CardDescription className="mt-2">{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-4xl px-4 sm:px-0">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Compare with competitors</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">
              See how EaseLMS stacks up against other LMS platforms
            </p>
          </div>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[600px] sm:min-w-0">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base">Feature</th>
                      <th className="text-center py-3 sm:py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base">EaseLMS</th>
                      <th className="text-center py-3 sm:py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base text-muted-foreground">Moodle</th>
                      <th className="text-center py-3 sm:py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base text-muted-foreground">Canvas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">Open Source</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">Modern Tech Stack</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✗</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">Easy Setup</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✗</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">Payment Integration</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">Limited</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">Hosted Option</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">Limited</td>
                      <td className="text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
