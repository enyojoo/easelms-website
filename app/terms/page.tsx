export default function TermsPage() {
  return (
    <div className="bg-background pt-24 sm:pt-32 pb-6 sm:pb-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-muted-foreground mb-8">
            Please read these Terms of Service ("Terms") carefully before using EaseLMS.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-8">
            By accessing or using EaseLMS, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
          <p className="text-muted-foreground mb-4">
            EaseLMS is open-source software licensed under the GNU Affero General Public License v3.0. You are free to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Use EaseLMS for any purpose, including commercial use</li>
            <li>Modify and distribute the software</li>
            <li>Access the source code</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Hosted Service Terms</h2>
          <p className="text-muted-foreground mb-4">
            If you use our hosted service, additional terms apply:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>You are responsible for maintaining the security of your account</li>
            <li>You must not use the service for illegal purposes</li>
            <li>We reserve the right to suspend accounts that violate these terms</li>
            <li>Refunds are available within 30 days of purchase</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground mb-8">
            EaseLMS is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            If you have questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@easelms.org" className="text-primary hover:underline">
              legal@easelms.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
