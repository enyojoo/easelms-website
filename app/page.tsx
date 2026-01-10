import { Hero } from '@/components/marketing/Hero'
import { Features } from '@/components/marketing/Features'

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EaseLMS',
    url: 'https://www.easelms.org',
    logo: 'https://cldup.com/6yEKvPtX22.svg',
    description: 'Free, modern open-source learning management system.',
    sameAs: [
      'https://github.com/enyojoo/easelms',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Features />
    </>
  )
}
