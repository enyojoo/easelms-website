import { Features } from '@/components/marketing/Features'
import { CTASection } from '@/components/marketing/CTASection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, BarChart3, Shield, Zap, Globe, CreditCard, Award, FileText, Video, CheckCircle2, Settings } from 'lucide-react'

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Powerful features for modern learning
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to create, deliver, and manage online courses.
          </p>
        </div>

        <div className="mx-auto mt-16 space-y-24">
          {featureCategories.map((category) => (
            <div key={category.title}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Compare with competitors</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              See how EaseLMS stacks up against other LMS platforms
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold">EaseLMS</th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Moodle</th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Canvas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">Open Source</td>
                      <td className="text-center py-4 px-4">✓</td>
                      <td className="text-center py-4 px-4">✓</td>
                      <td className="text-center py-4 px-4">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Modern Tech Stack</td>
                      <td className="text-center py-4 px-4">✓</td>
                      <td className="text-center py-4 px-4">✗</td>
                      <td className="text-center py-4 px-4">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Easy Setup</td>
                      <td className="text-center py-4 px-4">✓</td>
                      <td className="text-center py-4 px-4">✗</td>
                      <td className="text-center py-4 px-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">Payment Integration</td>
                      <td className="text-center py-4 px-4">✓</td>
                      <td className="text-center py-4 px-4">Limited</td>
                      <td className="text-center py-4 px-4">✓</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Hosted Option</td>
                      <td className="text-center py-4 px-4">✓</td>
                      <td className="text-center py-4 px-4">Limited</td>
                      <td className="text-center py-4 px-4">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <CTASection />
    </div>
  )
}
