import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politique de confidentialité", description: "Politique de confidentialité B2BLAST. Comment nous collectons, utilisons et protégeons vos données." };

export default function PrivacyFR() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Politique de confidentialité</h1>
        <p className="text-sm text-gray-500 mb-12">Dernière mise à jour : février 2026</p>

        <div className="prose-sm space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">1. Qui sommes-nous</h2>
            <p>B2BLAST est opéré par Thomas Germain, entrepreneur individuel basé à Dublin, Irlande. Contact : thomas@b2blast.com.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">2. Données collectées</h2>
            <p>Lorsque vous utilisez notre formulaire de contact, nous collectons : votre nom, adresse email, nom de société, fourchette de budget publicitaire mensuel, et le contenu de votre message. Ces données sont soumises volontairement et utilisées uniquement pour répondre à votre demande et évaluer l'adéquation du projet.</p>
            <p className="mt-2">Lors de votre visite, nous pouvons collecter des données d'utilisation anonymisées (pages visitées, source de référence) via des analytics respectueux de la vie privée. Aucun identifiant personnel n'est tracé.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">3. Utilisation des données</h2>
            <p>Vos données servent à : répondre à votre demande, envoyer des informations pertinentes sur nos services, et améliorer notre site. Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins marketing.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">4. Base légale (RGPD)</h2>
            <p>Nous traitons vos données sur la base de : l'intérêt légitime (réponse aux demandes), le consentement (soumission du formulaire), et la nécessité contractuelle (accord de service).</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">5. Conservation des données</h2>
            <p>Les données du formulaire sont conservées 24 mois à compter de la soumission, ou pour la durée d'une relation client active plus 12 mois. Vous pouvez demander la suppression à tout moment.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">6. Cookies</h2>
            <p>Ce site utilise uniquement des cookies essentiels first-party nécessaires au fonctionnement. Nous n'utilisons pas de cookies tiers de tracking ou de pixels publicitaires sans votre consentement explicite.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">7. Vos droits</h2>
            <p>En vertu du RGPD, vous avez le droit de : accéder à vos données, demander leur rectification ou suppression, vous opposer au traitement, et retirer votre consentement. Pour exercer ces droits : thomas@b2blast.com.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">8. Services tiers</h2>
            <p>Ce site est hébergé sur Vercel (USA, avec traitement données EU). DNS géré par Cloudflare. Services email via Resend. Tous les prestataires sont conformes au RGPD ou opèrent sous le EU-US Data Privacy Framework.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white mb-3">9. Contact</h2>
            <p>Pour toute question relative à la vie privée : thomas@b2blast.com.</p>
          </div>
        </div>
      </div>
    </section>
  );
}