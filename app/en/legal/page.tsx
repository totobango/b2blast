import type { Metadata } from "next";

export const metadata: Metadata = { title: "Legal Notice", description: "B2BLAST legal notice and company information." };

export default function LegalEN() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">Legal Notice</h1>

        <div className="prose-sm space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Company information</h2>
            <p>B2BLAST is a trade name operated by Thomas Germain.</p>
            <p className="mt-2">Address: Dublin, Ireland</p>
            <p>Email: thomas@b2blast.com</p>
            <p>Website: https://b2blast.com</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Hosting</h2>
            <p>This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States. DNS services provided by Cloudflare, Inc.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Intellectual property</h2>
            <p>All content on this website (text, images, graphics, logos, icons) is the property of B2BLAST / Thomas Germain unless otherwise stated. Reproduction without prior written authorization is prohibited.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Limitation of liability</h2>
            <p>B2BLAST makes every effort to ensure the accuracy of information published on this site. However, we cannot guarantee that all information is complete, accurate, or up-to-date. B2BLAST shall not be held liable for any direct or indirect damages resulting from the use of this website.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Applicable law</h2>
            <p>This website and its content are governed by Irish law. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}