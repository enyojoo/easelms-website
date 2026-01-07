import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Users, Code, Heart } from 'lucide-react'

const values = [
  {
    icon: Code,
    title: 'Open Source First',
    description: 'We believe in transparency, community, and giving back. EaseLMS is and will always be open-source.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by educators, for educators. Our community shapes the direction of EaseLMS.',
  },
  {
    icon: Target,
    title: 'User Focused',
    description: 'Every feature is designed with the end user in mind. We prioritize usability and accessibility.',
  },
  {
    icon: Heart,
    title: 'Accessible Education',
    description: 'We believe quality education should be accessible to everyone, regardless of budget or technical expertise.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            About EaseLMS
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2 sm:px-0">
            Building the future of online learning, one course at a time.
          </p>
        </div>

        {/* Mission */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-3xl px-4 sm:px-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                EaseLMS was born from a simple idea: learning management systems should be modern, accessible, and easy to use. 
                Too many organizations struggle with outdated, complex, or expensive LMS platforms that don't meet their needs.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                We set out to build an open-source LMS that combines the flexibility of self-hosting with the convenience 
                of a managed service. Whether you're a small training organization or a large enterprise, EaseLMS adapts to your needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-5xl px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Values</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription className="mt-2">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Story */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-3xl px-4 sm:px-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                EaseLMS started as a side project to solve a real problem: finding an LMS that was both powerful and 
                easy to use. After evaluating countless options, we realized that most solutions were either too complex, 
                too expensive, or too limited.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                We decided to build our own solution using modern web technologies like Next.js, TypeScript, and Supabase. 
                What started as an internal tool quickly evolved into a full-featured LMS that we're proud to share with the world.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Today, EaseLMS is used by educational institutions, training organizations, and businesses worldwide. 
                We're committed to keeping it open-source and continuously improving it based on community feedback.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:contact@easelms.org"
              className="text-sm sm:text-base text-primary hover:underline font-semibold break-all"
            >
              contact@easelms.org
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
