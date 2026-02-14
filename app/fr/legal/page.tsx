import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales", description: "Mentions légales B2BLAST — informations sur l'entreprise et l'hébergement." };

export default function LegalFR() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">Mentions légales</h1>

        <div className="prose-sm space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Informations sur l'entreprise</h2>
            <p>B2BLAST est un nom commercial opéré par Thomas Germain.</p>
            <p className="mt-2">Adresse : Dublin, Irlande</p>
            <p>Email : thomas@b2blast.com</p>
            <p>Site web : https://b2blast.com</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Services DNS fournis par Cloudflare, Inc.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, graphismes, logos, icônes) est la propriété de B2BLAST / Thomas Germain sauf mention contraire. Toute reproduction sans autorisation écrite préalable est interdite.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Limitation de responsabilité</h2>
            <p>B2BLAST met tout en œuvre pour assurer l'exactitude des informations publiées. Cependant, nous ne pouvons garantir que toutes les informations soient complètes, exactes ou à jour. B2BLAST ne saurait être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation de ce site.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Droit applicable</h2>
            <p>Ce site et son contenu sont régis par le droit irlandais. Tout litige relèvera de la compétence exclusive des tribunaux irlandais.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">Conformité LCEN</h2>
            <p>Conformément à la Loi pour la Confiance dans l'Économie Numérique (LCEN) du 21 juin 2004, les informations ci-dessus sont mises à disposition des utilisateurs français de ce site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}