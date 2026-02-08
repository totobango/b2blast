export type Locale = "en" | "fr";

export const content = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      resources: "Resources",
      resourcesItems: { courses: "Courses", templates: "Templates & Assets" },
      about: "About",
      blog: "Blog",
      contact: "Contact",
      cta: "Get Your Growth Plan",
    },
    hero: {
      title: "Paid Ads for B2B SaaS/SMB Expanding Internationally",
      subtitle: "Your ads work in your home market. But they fail abroad. Wrong tone, wrong targeting, wrong cultural signals — money wasted.",
      description: "Native French ↔ English expertise. LinkedIn, Google, Microsoft & Reddit Ads.",
      cta: "Get Your Growth Plan",
      ctaSecondary: "See services",
    },
    trust: {
      label: "Previous experience at",
      employers: [
        { name: "LinkedIn", logo: "/images/employers/linkedin.png" },
        { name: "Google", logo: "/images/employers/google.png" },
        { name: "Pinterest", logo: "/images/employers/pinterest.png" },
        { name: "Cofidis", logo: "/images/employers/cofidis.png" },
      ],
    },
    problem: {
      title: "Expanding internationally? Your ads aren't ready.",
      items: [
        { title: "No bilingual B2B ads talent", description: "Hiring one takes 6 months and costs €70K+/year. You need results now." },
        { title: "Generalist agencies don't get B2B tech", description: "They run your LinkedIn Ads like a B2C campaign. Long sales cycles need different strategies." },
        { title: "Google Translate kills your ad copy", description: "Cultural nuances between FR and EN markets are invisible to non-native speakers." },
        { title: "Investor pressure demands speed", description: "Post-Series A, every month counts. You can't wait for organic to kick in." },
      ],
    },
    solution: {
      title: "One expert. Two markets. Zero lost in translation.",
      subtitle: "I'm Thomas — native bilingual French/English, ex-LinkedIn, ex-Google. I run your B2B paid ads across both markets with native-level precision.",
      stats: [
        { value: "75+", label: "B2B clients managed at LinkedIn" },
        { value: "€15M", label: "quarterly ad budget at Google" },
        { value: "6+", label: "years B2B ads experience" },
        { value: "2", label: "native languages" },
      ],
    },
    services: {
      title: "Services",
      subtitle: "B2B paid ads management, fully bilingual.",
      platforms: [
        { name: "LinkedIn Ads", description: "Core B2B expertise. Reach decision-makers directly.", icon: "linkedin" },
        { name: "Google Ads", description: "Capture high-intent B2B search demand.", icon: "google" },
        { name: "Microsoft Ads", description: "Access the overlooked B2B audience on Bing.", icon: "microsoft" },
        { name: "Reddit Ads", description: "Target tech communities and developers.", icon: "reddit" },
      ],
      packages: [
        { name: "Launch", price: "€2-3K", period: "/month", features: ["1-2 platforms", "€5-8K ad budget management", "Monthly reporting", "Continuous optimization"], cta: "Get started", popular: false },
        { name: "Growth", price: "€3-5K", period: "/month", features: ["2-3 platforms", "€8-15K ad budget management", "Bi-weekly reporting", "Active A/B testing", "Full strategy included"], cta: "Get started", popular: true },
        { name: "Scale", price: "€5-8K", period: "/month", features: ["All platforms", "€15K+ ad budget management", "Weekly reporting", "Aggressive optimization", "Complete strategy & creative direction"], cta: "Get started", popular: false },
      ],
      includes: {
        title: "Every package includes",
        items: ["Full campaign strategy", "Technical setup (GTM, GA4, conversion tracking)", "Daily budget management", "Ongoing bid & audience optimization", "Professional reporting", "Reactive Slack/email communication"],
      },
    },
    about: {
      title: "About Thomas",
      intro: "Native bilingual French/English. 6+ years managing B2B paid ads at the world's biggest platforms. I help companies break into new markets with ads that actually convert.",
      experience: [
        { company: "Google", role: "Account Strategist — Performance Marketing", duration: "Nov 2024 – Oct 2025 · 1 yr", detail: "Managed high-potential French advertisers. 125% quarterly revenue quota. €15M quarterly quota (~€60M annual) across 55+ SMB e-commerce clients. ~$4M active spend. Scaled Performance Max, Search, Demand Gen, YouTube.", logo: "/images/employers/google.png" },
        { company: "LinkedIn", role: "Account Director — Performance Marketing", duration: "Mar 2022 – Oct 2024 · 2 yrs 8 mos", detail: "75+ mid-market B2B clients (SaaS, retail, finance). €2M quarterly quota (~€8M annual). Deployed ABM, Lead Gen Forms, Conversation Ads, and Video. Drove product adoption and LTV expansion.", logo: "/images/employers/linkedin.png" },
        { company: "Pinterest", role: "Senior Account Manager → Account Manager", duration: "Dec 2020 – Feb 2022 · 1 yr 3 mos", detail: "Developed French-speaking advertiser base. Built full-funnel media plans. Promoted in <12 months. Onboarded and coached new joiners.", logo: "/images/employers/pinterest.png" },
        { company: "Cofidis Business Solutions", role: "B2B Brand Marketing & Growth Specialist", duration: "Sep 2017 – Aug 2019 · 2 yrs", detail: "Designed and launched B2B website for lead capture. Inbound strategy & marketing automation. Social media content with measurable growth. Coordinated agencies and 360° project management.", logo: "/images/employers/cofidis.png" },
      ],
      location: "Based in Dublin, Ireland. Working with clients across Europe, UK, and US.",
      linkedin: "https://www.linkedin.com/in/thomasgermain5/",
    },
    cta: {
      title: "Ready to expand internationally?",
      subtitle: "Book a free 30-minute strategy call. I'll review your current ads and show you exactly where you're leaving money on the table.",
      button: "Get Your Growth Plan",
      email: "thomas@b2blast.com",
    },
    contact: {
      title: "Get in touch",
      subtitle: "Fill out the form below or email me directly. I'll get back to you within 24 hours.",
      form: { name: "Full name", email: "Work email", company: "Company name", message: "Tell me about your project and goals", submit: "Get Your Growth Plan", success: "Message sent! I'll get back to you within 24 hours." },
    },
    footer: {
      tagline: "B2B paid ads, natively bilingual.",
      copyright: `© ${new Date().getFullYear()} B2BLAST. All rights reserved.`,
      links: { services: "Services", resources: "Resources", about: "About", blog: "Blog", contact: "Contact", privacy: "Privacy Policy" },
      social: {
        b2blastLinkedin: "https://www.linkedin.com/company/b2blast1",
        thomasLinkedin: "https://www.linkedin.com/in/thomasgermain5/",
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      resources: "Ressources",
      resourcesItems: { courses: "Formations", templates: "Templates & Assets" },
      about: "À propos",
      blog: "Blog",
      contact: "Contact",
      cta: "Votre Plan de Croissance",
    },
    hero: {
      title: "Paid Ads pour SaaS/PME B2B à l'International",
      subtitle: "Vos ads marchent sur votre marché. Mais elles échouent à l'étranger. Mauvais ton, mauvais ciblage, mauvais signaux culturels — argent gaspillé.",
      description: "Expertise native Français ↔ Anglais. LinkedIn, Google, Microsoft & Reddit Ads.",
      cta: "Obtenez votre plan de croissance",
      ctaSecondary: "Voir les services",
    },
    trust: {
      label: "Expérience précédente chez",
      employers: [
        { name: "LinkedIn", logo: "/images/employers/linkedin.png" },
        { name: "Google", logo: "/images/employers/google.png" },
        { name: "Pinterest", logo: "/images/employers/pinterest.png" },
        { name: "Cofidis", logo: "/images/employers/cofidis.png" },
      ],
    },
    problem: {
      title: "Vous vous développez à l'international ? Vos ads ne sont pas prêtes.",
      items: [
        { title: "Pas de talent B2B ads bilingue", description: "En recruter un prend 6 mois et coûte €70K+/an. Vous avez besoin de résultats maintenant." },
        { title: "Les agences généralistes ne comprennent pas la tech B2B", description: "Elles gèrent vos LinkedIn Ads comme une campagne B2C. Les cycles de vente longs nécessitent des stratégies différentes." },
        { title: "Google Translate tue votre ad copy", description: "Les nuances culturelles entre les marchés FR et EN sont invisibles pour les non-natifs." },
        { title: "La pression investisseur exige de la vitesse", description: "Post-Series A, chaque mois compte. Vous ne pouvez pas attendre que l'organique décolle." },
      ],
    },
    solution: {
      title: "Un expert. Deux marchés. Zéro perte en traduction.",
      subtitle: "Je suis Thomas — bilingue natif français/anglais, ex-LinkedIn, ex-Google. Je gère vos paid ads B2B sur les deux marchés avec une précision native.",
      stats: [
        { value: "75+", label: "clients B2B gérés chez LinkedIn" },
        { value: "€15M", label: "budget ads trimestriel chez Google" },
        { value: "6+", label: "ans d'expérience ads B2B" },
        { value: "2", label: "langues natives" },
      ],
    },
    services: {
      title: "Services",
      subtitle: "Gestion paid ads B2B, entièrement bilingue.",
      platforms: [
        { name: "LinkedIn Ads", description: "Expertise B2B cœur. Atteignez les décideurs directement.", icon: "linkedin" },
        { name: "Google Ads", description: "Capturez la demande B2B à haute intention de recherche.", icon: "google" },
        { name: "Microsoft Ads", description: "Accédez à l'audience B2B souvent négligée de Bing.", icon: "microsoft" },
        { name: "Reddit Ads", description: "Ciblez les communautés tech et développeurs.", icon: "reddit" },
      ],
      packages: [
        { name: "Launch", price: "€2-3K", period: "/mois", features: ["1-2 plateformes", "Gestion budget ads €5-8K", "Reporting mensuel", "Optimisation continue"], cta: "Démarrer", popular: false },
        { name: "Growth", price: "€3-5K", period: "/mois", features: ["2-3 plateformes", "Gestion budget ads €8-15K", "Reporting bi-mensuel", "A/B testing actif", "Stratégie complète incluse"], cta: "Démarrer", popular: true },
        { name: "Scale", price: "€5-8K", period: "/mois", features: ["Toutes les plateformes", "Gestion budget ads €15K+", "Reporting hebdomadaire", "Optimisation aggressive", "Stratégie complète & direction créative"], cta: "Démarrer", popular: false },
      ],
      includes: {
        title: "Inclus dans chaque package",
        items: ["Stratégie campagnes complète", "Setup technique (GTM, GA4, suivi conversions)", "Gestion budgets quotidienne", "Optimisation continue bids & audiences", "Reporting professionnel", "Communication réactive Slack/email"],
      },
    },
    about: {
      title: "À propos de Thomas",
      intro: "Bilingue natif français/anglais. 6+ ans de gestion paid ads B2B chez les plus grandes plateformes au monde. J'aide les entreprises à conquérir de nouveaux marchés avec des ads qui convertissent.",
      experience: [
        { company: "Google", role: "Account Strategist — Performance Marketing", duration: "Nov 2024 – Oct 2025 · 1 an", detail: "Gestion d'annonceurs français à haut potentiel. 125% du quota trimestriel. €15M quota trimestriel (~€60M annuel) sur 55+ clients SMB e-commerce. ~$4M de dépenses actives. Adoption Performance Max, Search, Demand Gen, YouTube.", logo: "/images/employers/google.png" },
        { company: "LinkedIn", role: "Account Director — Performance Marketing", duration: "Mar 2022 – Oct 2024 · 2 ans 8 mois", detail: "75+ clients B2B mid-market (SaaS, retail, finance). €2M quota trimestriel (~€8M annuel). Déploiement ABM, Lead Gen Forms, Conversation Ads et Vidéo. Adoption produit et croissance LTV.", logo: "/images/employers/linkedin.png" },
        { company: "Pinterest", role: "Senior Account Manager → Account Manager", duration: "Déc 2020 – Fév 2022 · 1 an 3 mois", detail: "Développement base annonceurs francophones. Media plans full-funnel. Promu en <12 mois. Coaching nouveaux arrivants.", logo: "/images/employers/pinterest.png" },
        { company: "Cofidis Business Solutions", role: "B2B Brand Marketing & Growth Specialist", duration: "Sep 2017 – Août 2019 · 2 ans", detail: "Conception et lancement site B2B pour génération de leads. Stratégie inbound & marketing automation. Social media avec croissance mesurable. Coordination agences et gestion projet 360°.", logo: "/images/employers/cofidis.png" },
      ],
      location: "Basé à Dublin, Irlande. Je travaille avec des clients en Europe, UK et US.",
      linkedin: "https://www.linkedin.com/in/thomasgermain5/",
    },
    cta: {
      title: "Prêt à vous développer à l'international ?",
      subtitle: "Réservez un appel stratégie gratuit de 30 minutes. J'analyserai vos ads actuelles et vous montrerai exactement où vous perdez de l'argent.",
      button: "Obtenez votre plan de croissance",
      email: "thomas@b2blast.com",
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Remplissez le formulaire ci-dessous ou envoyez-moi un email directement. Je vous réponds sous 24 heures.",
      form: { name: "Nom complet", email: "Email professionnel", company: "Nom de l'entreprise", message: "Parlez-moi de votre projet et vos objectifs", submit: "Obtenez votre plan de croissance", success: "Message envoyé ! Je vous réponds sous 24 heures." },
    },
    footer: {
      tagline: "Paid ads B2B, nativement bilingue.",
      copyright: `© ${new Date().getFullYear()} B2BLAST. Tous droits réservés.`,
      links: { services: "Services", resources: "Ressources", about: "À propos", blog: "Blog", contact: "Contact", privacy: "Politique de confidentialité" },
      social: {
        b2blastLinkedin: "https://www.linkedin.com/company/b2blast1",
        thomasLinkedin: "https://www.linkedin.com/in/thomasgermain5/",
      },
    },
  },
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}
