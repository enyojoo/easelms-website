export default function TermsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-muted-foreground mb-8">
            These Terms of Service ("Terms") govern your access to and use of EaseLMS services provided by Easner, Inc. ("we", "our", or "us"). Please read these Terms carefully before using our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing or using EaseLMS, whether through our hosted service or self-hosted installation, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access or use the service.
          </p>
          <p className="text-muted-foreground mb-8">
            If you are using EaseLMS on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
          <p className="text-muted-foreground mb-4">
            EaseLMS is a Learning Management System that provides:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Course creation and management tools</li>
            <li>Learner enrollment and progress tracking</li>
            <li>Payment processing for course sales</li>
            <li>Certificate generation</li>
            <li>Analytics and reporting features</li>
          </ul>
          <p className="text-muted-foreground mb-8">
            EaseLMS is available both as open-source software (which you can self-host) and as a hosted service managed by Easner, Inc.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Open Source License</h2>
          <p className="text-muted-foreground mb-4">
            EaseLMS is open-source software licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). When you self-host EaseLMS, you are free to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Use EaseLMS for any purpose, including commercial use</li>
            <li>Modify and distribute the software in accordance with AGPL-3.0</li>
            <li>Access and modify the source code</li>
            <li>Deploy on your own infrastructure</li>
          </ul>
          <p className="text-muted-foreground mb-8">
            For the full terms of the AGPL-3.0 license, please see the{' '}
            <a href="https://github.com/enyojoo/easelms/blob/main/LICENSE" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              LICENSE file
            </a>
            {' '}on GitHub.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Hosted Service Terms</h2>
          <p className="text-muted-foreground mb-4">
            If you subscribe to our hosted service, the following additional terms apply:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Account Registration</h3>
          <p className="text-muted-foreground mb-4">
            You must provide accurate, current, and complete information during registration. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Subscription and Billing</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
            <li>Subscriptions are billed monthly or annually in advance</li>
            <li>All fees are non-refundable except as required by law or as stated in our refund policy</li>
            <li>We offer a 14-day free trial period for new accounts</li>
            <li>We reserve the right to change our pricing with 30 days' notice</li>
            <li>If payment fails, we may suspend or terminate your account</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Service Availability</h3>
          <p className="text-muted-foreground mb-4">
            We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice and emergency maintenance as needed.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Data and Content</h3>
          <p className="text-muted-foreground mb-4">
            You retain all rights to your content and data. You grant us a license to host, store, and process your content solely for the purpose of providing the service. You are responsible for ensuring you have the right to use and share any content you upload.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4.5 Acceptable Use</h3>
          <p className="text-muted-foreground mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Use the service for any illegal purpose or in violation of any laws</li>
            <li>Upload content that infringes on intellectual property rights</li>
            <li>Upload malicious code, viruses, or harmful content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service</li>
            <li>Use the service to send spam or unsolicited communications</li>
            <li>Violate any applicable data protection or privacy laws</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            The EaseLMS software, including its source code, design, and documentation, is protected by copyright and other intellectual property laws. When you self-host EaseLMS, you must comply with the AGPL-3.0 license terms.
          </p>
          <p className="text-muted-foreground mb-8">
            The EaseLMS name, logo, and trademarks are the property of Easner, Inc. You may not use our trademarks without our prior written permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Termination</h2>
          <p className="text-muted-foreground mb-4">
            We may terminate or suspend your account immediately if you violate these Terms. You may cancel your hosted service subscription at any time through your account settings.
          </p>
          <p className="text-muted-foreground mb-8">
            Upon termination, you may export your data for up to 30 days. After this period, we may delete your data in accordance with our data retention policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, EASNER, INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
          <p className="text-muted-foreground mb-8">
            Our total liability for any claims arising from or related to the service shall not exceed the amount you paid us in the 12 months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground mb-8">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
          <p className="text-muted-foreground mb-8">
            You agree to indemnify and hold harmless Easner, Inc. and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service, your content, or your violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
          <p className="text-muted-foreground mb-8">
            We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the service. Your continued use of the service after changes become effective constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
          <p className="text-muted-foreground mb-8">
            These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of San Francisco, California.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about these Terms, please contact us:
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
              <a href="mailto:legal@easelms.org" className="text-primary hover:underline">
                legal@easelms.org
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Severability</h2>
          <p className="text-muted-foreground mb-8">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">14. Entire Agreement</h2>
          <p className="text-muted-foreground mb-8">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Easner, Inc. regarding the use of EaseLMS and supersede all prior agreements and understandings.
          </p>
        </div>
      </div>
    </div>
  )
}
