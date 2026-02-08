import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "B2BLAST privacy policy. How we collect, use, and protect your data." };

export default function PrivacyEN() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: February 2026</p>

        <div className="prose-sm space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">1. Who we are</h2>
            <p>B2BLAST is operated by Thomas Germain, a sole trader based in Dublin, Ireland. Contact: thomas@b2blast.com.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">2. Data we collect</h2>
            <p>When you use our contact form, we collect: your name, email address, company name, monthly ad budget range, and message content. This data is submitted voluntarily and used solely to respond to your inquiry and evaluate project fit.</p>
            <p className="mt-2">When you visit our site, we may collect anonymized usage data (pages visited, referral source) through privacy-focused analytics. No personal identifiers are tracked.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">3. How we use your data</h2>
            <p>Your data is used to: respond to your inquiry, send relevant follow-up information about our services, and improve our website. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">4. Legal basis (GDPR)</h2>
            <p>We process your data based on: legitimate interest (responding to inquiries), consent (when you submit the contact form), and contractual necessity (when we enter a service agreement).</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">5. Data retention</h2>
            <p>Contact form data is retained for 24 months from the date of submission, or for the duration of an active client relationship plus 12 months. You may request deletion at any time.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">6. Cookies</h2>
            <p>This site uses only essential, first-party cookies required for site functionality. We do not use third-party tracking cookies or advertising pixels without your explicit consent.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">7. Your rights</h2>
            <p>Under GDPR, you have the right to: access your personal data, request correction or deletion, object to processing, and withdraw consent at any time. To exercise these rights, email thomas@b2blast.com.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">8. Third-party services</h2>
            <p>This site is hosted on Vercel (USA, with EU data processing). DNS is managed by Cloudflare. Email services may use Resend. All third-party providers are GDPR-compliant or operate under EU-US Data Privacy Framework.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">9. Contact</h2>
            <p>For any privacy-related questions: thomas@b2blast.com.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
