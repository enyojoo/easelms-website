import type { Metadata } from 'next'
import Link from 'next/link'
import { Github, Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Deploy Open Source LMS - EaseLMS',
}

export default function OpenSourcePage() {
  return (
    <div className="bg-background pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Open Source. Community Driven.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-2 sm:px-0">
            EaseLMS is open-source and free to use. Deploy it yourself, customize it, and contribute back to the community.
          </p>
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="text-sm sm:text-base">
              <Link href="https://github.com/enyojoo/easelms" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Section - Commented out until we have real stats */}
        {/* 
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                <CardTitle>GitHub Stars</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,234+</p>
              <p className="text-sm text-muted-foreground mt-2">Growing daily</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <GitBranch className="h-6 w-6 text-primary" />
                <CardTitle>Contributors</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm text-muted-foreground mt-2">Active developers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Community</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground mt-2">Active users</p>
            </CardContent>
          </Card>
        </div>
        */}

        {/* Why Open Source */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-3xl px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Open Source?</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Transparency</CardTitle>
                <CardDescription>
                  View the source code, understand how it works, and verify security.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customization</CardTitle>
                <CardDescription>
                  Modify and extend EaseLMS to fit your specific needs and requirements.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Join a growing community of developers, educators, and organizations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>No Vendor Lock-in</CardTitle>
                <CardDescription>
                  Own your data and infrastructure. Deploy anywhere, anytime.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-3xl px-4 sm:px-0">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <CardTitle className="text-lg sm:text-xl">Quick Start</CardTitle>
              </div>
              <CardDescription className="text-sm sm:text-base">Get started in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto">
                <div className="space-y-2 min-w-0">
                  <div>
                    <span className="text-muted-foreground"># Clone the repository</span>
                  </div>
                  <div className="break-all sm:break-normal">
                    <span className="text-foreground">git clone https://github.com/enyojoo/easelms.git</span>
                  </div>
                  <div className="pt-4">
                    <span className="text-muted-foreground"># Install dependencies</span>
                  </div>
                  <div>
                    <span className="text-foreground">npm install</span>
                  </div>
                  <div className="pt-4">
                    <span className="text-muted-foreground"># Start development server</span>
                  </div>
                  <div>
                    <span className="text-foreground">npm run dev</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground text-center">
                For detailed setup instructions, see the{' '}
                <Link 
                  href="https://github.com/enyojoo/easelms/blob/main/README.md" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  README.md
                </Link>
                {' '}on GitHub.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contributing */}
        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contributing</h2>
          <p className="text-center text-muted-foreground mb-8">
            We welcome contributions! Whether it's code, documentation, or feedback, your help makes EaseLMS better.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Report Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Found a bug? Report it on GitHub Issues.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Submit PRs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Have a fix or feature? Submit a pull request.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Improve Docs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Help improve our documentation and guides.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="https://github.com/enyojoo/easelms/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                View Contributing Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* License */}
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">License</h2>
          <p className="text-muted-foreground">
            EaseLMS is licensed under the{' '}
            <Link href="https://github.com/enyojoo/easelms/blob/main/LICENSE" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              GNU Affero General Public License v3.0
            </Link>
            {' '}(AGPL-3.0). This means you're free to use, modify, and distribute EaseLMS, even for commercial purposes. See the{' '}
            <Link href="https://github.com/enyojoo/easelms/blob/main/LICENSE" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              LICENSE file
            </Link>
            {' '}on GitHub for full details.
          </p>
        </div>
      </div>
    </div>
  )
}
