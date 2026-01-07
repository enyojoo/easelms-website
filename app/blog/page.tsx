import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

// Placeholder blog posts - replace with actual content later
const blogPosts = [
  {
    title: 'Getting Started with EaseLMS',
    description: 'Learn how to set up your first course and start teaching online.',
    date: '2024-01-15',
    slug: 'getting-started-with-easelms',
  },
  {
    title: 'Open Source vs. Hosted: Which is Right for You?',
    description: 'A comprehensive guide to help you decide between self-hosting and our managed service.',
    date: '2024-01-10',
    slug: 'open-source-vs-hosted',
  },
  {
    title: 'How to Create Engaging Online Courses',
    description: 'Best practices for creating courses that keep learners engaged and motivated.',
    date: '2024-01-05',
    slug: 'creating-engaging-courses',
  },
]

export default function BlogPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Learn about EaseLMS, online learning best practices, and more.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="mt-2">{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 text-center">
          <p className="text-muted-foreground">
            More blog posts coming soon. Subscribe to our newsletter to stay updated.
          </p>
        </div>
      </div>
    </div>
  )
}
