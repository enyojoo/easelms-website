export default function PrivacyPage() {
  return (
    <div className="bg-background pt-24 sm:pt-32 pb-6 sm:pb-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-muted-foreground mb-8">
            This Privacy Policy describes how EaseLMS ("we", "our", or "us") collects, uses, and protects your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Name and email address</li>
            <li>Organization information</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Provide and improve our services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Send you updates and support communications</li>
            <li>Analyze usage patterns and improve user experience</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p className="text-muted-foreground mb-8">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@easelms.org" className="text-primary hover:underline">
              privacy@easelms.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
