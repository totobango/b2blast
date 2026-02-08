import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog", description: "B2B paid ads insights for French ↔ English markets." };

export default function BlogEN() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">Blog</h1>
        <p className="mt-4 text-lg text-gray-400">Coming soon — B2B ads insights for companies expanding between French and English markets.</p>
      </div>
    </section>
  );
}
