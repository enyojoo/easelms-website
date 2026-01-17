import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manage Subscription',
  description: 'Manage your EaseLMS subscription. Update payment methods, view invoices, cancel subscription, and access your billing portal.',
  robots: {
    index: false, // Don't index subscription management pages
    follow: false,
  },
}

export default function ManageSubscriptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
