export default function PrivacyPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-muted-foreground mb-8">
            This Privacy Policy describes how Easner, Inc. ("we", "our", or "us") collects, uses, discloses, and protects your personal information when you use EaseLMS, including our hosted service and marketing website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Information You Provide</h3>
          <p className="text-muted-foreground mb-4">
            When you use our hosted service or contact us, we may collect:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li><strong>Account Information:</strong> Name, email address, organization name, and password</li>
            <li><strong>Profile Information:</strong> Profile picture, bio, and other information you choose to provide</li>
            <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party payment processors like Stripe and Flutterwave)</li>
            <li><strong>Content:</strong> Courses, lessons, quizzes, and other educational content you create or upload</li>
            <li><strong>Communications:</strong> Messages you send to us, including support requests and feedback</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Information Automatically Collected</h3>
          <p className="text-muted-foreground mb-4">
            When you use our services, we automatically collect:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li><strong>Usage Data:</strong> Pages visited, features used, time spent, and interactions with the service</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
            <li><strong>Log Data:</strong> Access logs, error logs, and performance data</li>
            <li><strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies (see Cookies section below)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Information from Third Parties</h3>
          <p className="text-muted-foreground mb-8">
            We may receive information from third-party services you connect to EaseLMS, such as payment processors, authentication providers, or analytics services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and manage subscriptions</li>
            <li>Authenticate users and manage accounts</li>
            <li>Send you service-related communications, including updates, security alerts, and support messages</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze usage patterns to improve user experience and develop new features</li>
            <li>Detect, prevent, and address technical issues, fraud, or security threats</li>
            <li>Comply with legal obligations and enforce our Terms of Service</li>
            <li>Send you marketing communications (with your consent, where required)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Share Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell your personal information. We may share your information in the following circumstances:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Service Providers</h3>
          <p className="text-muted-foreground mb-4">
            We share information with third-party service providers who help us operate our services, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li><strong>Hosting Providers:</strong> Supabase, Vercel, and AWS for infrastructure and data storage</li>
            <li><strong>Payment Processors:</strong> Stripe and Flutterwave for payment processing</li>
            <li><strong>Analytics Services:</strong> Vercel Analytics and other analytics tools</li>
            <li><strong>Email Services:</strong> Email delivery and communication tools</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Legal Requirements</h3>
          <p className="text-muted-foreground mb-4">
            We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Comply with legal obligations</li>
            <li>Protect our rights, property, or safety</li>
            <li>Protect the rights, property, or safety of our users or others</li>
            <li>Prevent fraud or abuse</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Business Transfers</h3>
          <p className="text-muted-foreground mb-8">
            In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to protect your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Encryption of data in transit (SSL/TLS) and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular backups and disaster recovery procedures</li>
            <li>Employee training on data security and privacy</li>
          </ul>
          <p className="text-muted-foreground mb-8">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights and Choices</h2>
          <p className="text-muted-foreground mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
            <li><strong>Objection:</strong> Object to certain processing activities</li>
          </ul>
          <p className="text-muted-foreground mb-8">
            To exercise these rights, please contact us at{' '}
            <a href="mailto:privacy@easelms.org" className="text-primary hover:underline">
              privacy@easelms.org
            </a>
            . We will respond to your request within 30 days.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar tracking technologies to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Authenticate you and maintain your session</li>
            <li>Analyze how you use our services</li>
            <li>Provide personalized content and features</li>
          </ul>
          <p className="text-muted-foreground mb-8">
            You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
          <p className="text-muted-foreground mb-4">
            We retain your personal information for as long as necessary to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Provide our services to you</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain security and prevent fraud</li>
          </ul>
          <p className="text-muted-foreground mb-8">
            When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal purposes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-muted-foreground mb-8">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. International Data Transfers</h2>
          <p className="text-muted-foreground mb-8">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to these countries. We take appropriate safeguards to protect your information in accordance with this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Self-Hosted Installations</h2>
          <p className="text-muted-foreground mb-8">
            If you self-host EaseLMS, you are responsible for the collection, use, and protection of data in your installation. This Privacy Policy applies only to data collected by Easner, Inc. in connection with our hosted service and marketing website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground mb-8">
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We may also notify you via email or through the service. Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="text-muted-foreground mb-8 space-y-2">
            <p>
              <strong>Easner, Inc.</strong>
            </p>
            <p>28 Geary St Ste 650</p>
            <p>San Francisco, CA 94108</p>
            <p>United States</p>
            <p className="mt-4">
              Email:{' '}
              <a href="mailto:privacy@easelms.org" className="text-primary hover:underline">
                privacy@easelms.org
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. California Privacy Rights</h2>
          <p className="text-muted-foreground mb-4">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Right to know what personal information is collected, used, shared, or sold</li>
            <li>Right to delete personal information held by businesses</li>
            <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
            <li>Right to non-discrimination for exercising your privacy rights</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">14. European Privacy Rights</h2>
          <p className="text-muted-foreground mb-4">
            If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
