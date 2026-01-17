# SEO Settings for EaseLMS Website

This document contains all the SEO configurations and settings used in the EaseLMS website, which can be implemented in other websites.

## Table of Contents
- [Core SEO Configuration](#core-seo-configuration)
  - [Next.js Configuration](#1-nextjs-configuration)
  - [Global Metadata Configuration](#2-global-metadata-configuration)
  - [Structured Data (JSON-LD) in Layout](#3-structured-data-json-ld-in-layout)
  - [Robots.txt Configuration](#4-robotstxt-configuration)
  - [Sitemap Configuration](#5-sitemap-configuration)
  - [Page-Specific Structured Data](#6-page-specific-structured-data)
  - [HTML Structure with Structured Data](#7-html-structure-with-structured-data)
- [Key SEO Features Implemented](#key-seo-features-implemented)

## Core SEO Configuration

### 1. Next.js Configuration (`next.config.mjs`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cldup.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
```

### 2. Global Metadata Configuration (`app/layout.tsx`)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.easelms.org'),
  title: {
    default: 'EaseLMS - Free Open-Source Learning Management System',
    template: '%s - EaseLMS',
  },
  description: 'Free, modern open-source learning management system. Self-host for free or choose managed hosting. Build courses, track progress, and scale your online education.',
  keywords: [
    'LMS',
    'Learning Management System',
    'Open Source LMS',
    'Free LMS',
    'Self-hosted LMS',
    'Online Learning Platform',
    'E-Learning Platform',
    'Course Management System',
    'Educational Technology',
    'EdTech',
    'Training Platform',
    'Corporate Training',
    'Student Management System',
    'Online Education',
    'Distance Learning',
    'Moodle Alternative',
    'Canvas Alternative',
    'Blackboard Alternative',
    'Open Source Education',
    'Learning Platform',
  ],
  authors: [{ name: 'EaseLMS' }],
  creator: 'Easner, Inc.',
  publisher: 'Easner, Inc.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.easelms.org',
  },
  icons: {
    icon: [
      { url: 'https://cldup.com/u4LIwebahZ.png', type: 'image/png', sizes: 'any' },
      { url: 'https://cldup.com/u4LIwebahZ.png', type: 'image/png', sizes: '192x192' },
      { url: 'https://cldup.com/u4LIwebahZ.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: [
      { url: 'https://cldup.com/u4LIwebahZ.png', type: 'image/png' },
    ],
    apple: [
      { url: 'https://cldup.com/u4LIwebahZ.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.easelms.org',
    siteName: 'EaseLMS',
    title: 'EaseLMS - Free Open-Source Learning Management System',
    description: 'Free, modern open-source learning management system. Self-host for free or choose managed hosting.',
    images: [
      {
        url: 'https://cldup.com/h0lZWMe1AG.png',
        width: 1200,
        height: 630,
        alt: 'EaseLMS - Free Open-Source Learning Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EaseLMS - Free Open-Source Learning Management System',
    description: 'Free, modern open-source learning management system. Self-host for free or choose managed hosting.',
    images: ['https://cldup.com/h0lZWMe1AG.png'],
  },
}
```

### 3. Structured Data (JSON-LD) in Layout

```javascript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EaseLMS',
  url: 'https://www.easelms.org',
  description: 'Free, modern open-source learning management system. Self-host for free or choose managed hosting.',
  publisher: {
    '@type': 'Organization',
    name: 'Easner, Inc.',
    url: 'https://www.easelms.org',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.easelms.org/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}
```

### 4. Robots.txt Configuration (`app/robots.ts`)

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://www.easelms.org/sitemap.xml',
  }
}
```

### 5. Sitemap Configuration (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.easelms.org'

  // Define all routes with their priorities and change frequencies
  // Note: lastModified removed to prevent dates from showing in search results
  const routes = [
    {
      url: baseUrl,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/features`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/open-source`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hosted`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return routes
}
```

### 6. Page-Specific Structured Data (Example from `app/page.tsx`)

```javascript
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
```

### 7. HTML Structure with Structured Data

```jsx
<html lang="en" suppressHydrationWarning>
  <body className={inter.className}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    {/* Your content */}
  </body>
</html>
```

## Key SEO Features Implemented

1. **Comprehensive metadata** with title templates, descriptions, and keywords
2. **Open Graph and Twitter Card** optimization for social sharing
3. **Robots directives** with Google-specific settings
4. **Multiple favicon sizes** for different devices
5. **Structured data** for better search understanding
6. **Sitemap** with appropriate priorities and change frequencies
7. **Canonical URLs** to prevent duplicate content issues
8. **Image optimization** configuration for Next.js

## Implementation Notes

- Update all URLs from `https://www.easelms.org` to your domain
- Replace EaseLMS branding with your own
- Update structured data schemas to match your business type
- Customize keywords based on your target audience
- Adjust sitemap priorities and change frequencies based on your content update patterns
- Ensure favicon URLs point to your actual favicon files

This setup provides excellent SEO foundations with proper metadata, structured data, and technical SEO configurations that should work well for most websites.