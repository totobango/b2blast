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
      title: "Paid Ads for B2B SaaS Expanding Internationally",
      subtitle: "Your ads work in your home market. But they fail abroad. Wrong tone, wrong targeting, wrong cultural signals — money wasted.",
      description: "Native French ↔ English expertise. LinkedIn, Google, Microsoft & Reddit Ads.",
      cta: "Get Your Growth Plan",
      ctaSecondary: "Book a call",
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
    process: {
      title: "How we work together",
      subtitle: "A clear, structured process from day one. No surprises.",
      steps: [
        { step: "1", title: "Discovery call", description: "30-minute free call. I audit your current setup, understand your ICP, and identify quick wins.", duration: "Day 0" },
        { step: "2", title: "Strategy & setup", description: "Campaign architecture, tracking setup (GTM, GA4, CAPI), audience building, and bilingual ad copy creation.", duration: "Week 1-2" },
        { step: "3", title: "Launch & optimize", description: "Campaigns go live. Daily monitoring, bid adjustments, and A/B testing across both markets.", duration: "Week 3+" },
        { step: "4", title: "Report & scale", description: "Transparent reporting tied to your pipeline. We double down on what works and cut what doesn't.", duration: "Ongoing" },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "Who is B2BLAST for?", answer: "B2BLAST works with B2B SaaS companies and SMBs expanding from France to UK/US markets, or international companies entering the French market. If you sell to businesses and need bilingual paid ads expertise, this is for you." },
        { question: "How is this different from a regular ads agency?", answer: "Most agencies assign junior account managers who follow playbooks. I'm a solo operator, ex-LinkedIn and ex-Google, who personally manages every campaign. You get senior-level expertise with native bilingual ad copy — not a translated version." },
        { question: "What ad budget do I need to get started?", answer: "A minimum of €5,000/month in ad spend is recommended to generate meaningful B2B results across one or two platforms. Below that threshold, the data volume is too low to optimize effectively." },
        { question: "How quickly can I expect results?", answer: "Most B2B campaigns need 4-6 weeks to gather enough data for meaningful optimization. You'll see initial traffic and leads within the first 2 weeks, but real pipeline impact typically shows by month 2-3." },
        { question: "Do you offer contracts or is it month-to-month?", answer: "I recommend a 3-month initial commitment to allow proper testing and optimization. After that, engagements are month-to-month with 30 days notice. No long-term lock-in." },
        { question: "What do you need from me to get started?", answer: "Access to your ad accounts (or I create them), your CRM/pipeline data for conversion tracking, brand guidelines, and 30 minutes per week for alignment. I handle everything else." },
        { question: "Do you write the ad copy yourself?", answer: "Yes, all ad copy is written natively in both French and English by me — not translated, not AI-generated. Cultural adaptation is a core part of the service." },
        { question: "Can I see examples of your work?", answer: "I can walk you through anonymized campaign structures, targeting strategies, and reporting frameworks during our discovery call. Due to NDAs, I don't publish client-specific case studies publicly." },
      ],
    },
    services: {
      title: "Services",
      subtitle: "B2B paid ads management, fully bilingual.",
      platforms: [
        { name: "LinkedIn Ads", description: "ABM, Lead Gen Forms, Thought Leader Ads. Reach B2B decision-makers directly.", icon: "linkedin" },
        { name: "Google Ads", description: "Search, Performance Max, Demand Gen. Capture high-intent B2B demand.", icon: "google" },
        { name: "Microsoft Ads", description: "Bing Search & Audience. The overlooked B2B channel with lower CPCs.", icon: "microsoft" },
        { name: "Reddit Ads", description: "Community targeting for dev tools, SaaS, and technical audiences.", icon: "reddit" },
      ],
      packages: [
        {
          name: "Launch",
          price: "€2-3K",
          period: "/month",
          features: ["1-2 platforms", "€5-8K ad budget management", "Monthly reporting", "Continuous optimization"],
          outcome: "First qualified leads within 60 days.",
          cta: "Get started",
          popular: false,
        },
        {
          name: "Growth",
          price: "€3-5K",
          period: "/month",
          features: ["2-3 platforms", "€8-15K ad budget management", "Bi-weekly reporting", "Active A/B testing", "Full strategy included"],
          outcome: "Predictable pipeline within 90 days.",
          cta: "Get started",
          popular: true,
        },
        {
          name: "Scale",
          price: "€5-8K",
          period: "/month",
          features: ["All platforms", "€15K+ ad budget management", "Weekly reporting", "Aggressive optimization", "Complete strategy & creative direction"],
          outcome: "Multi-market acquisition engine at full speed.",
          cta: "Get started",
          popular: false,
        },
      ],
      includes: {
        title: "Every package includes",
        items: ["Full campaign strategy", "Technical setup (GTM, GA4, conversion tracking)", "Daily budget management", "Ongoing bid & audience optimization", "Professional reporting", "Reactive Slack/email communication"],
      },
      clientNeeds: {
        title: "What we need from you",
        items: ["Ad account access (or we create them)", "CRM access for conversion tracking", "Brand guidelines & assets", "30 minutes/week for alignment calls"],
      },
      faq: {
        title: "Services FAQ",
        items: [
          { question: "Which platform should I start with?", answer: "For most B2B SaaS, LinkedIn is the highest-intent starting point. If you have existing search demand, Google Ads is a strong complement. I'll recommend the right mix based on your ICP and budget." },
          { question: "Can you manage campaigns in both languages simultaneously?", answer: "Yes, that's the core value. I build separate campaign structures for each market with native ad copy, localized landing page recommendations, and market-specific bidding strategies." },
          { question: "What reporting do I get?", answer: "You receive structured reports showing spend, leads, cost per lead, pipeline contribution, and recommendations. Reports are tied to your actual pipeline data, not just vanity metrics." },
          { question: "Do you handle landing pages too?", answer: "I provide landing page audits and conversion optimization recommendations as part of every engagement. For full landing page builds, I work with trusted partners." },
          { question: "What happens if campaigns underperform?", answer: "Underperformance triggers a diagnostic review within 48 hours. I'll identify the root cause (targeting, copy, landing page, or market fit) and present a corrective plan. Transparency is non-negotiable." },
          { question: "Is there a setup fee?", answer: "No setup fee. The first two weeks of each engagement include strategy, account audit, tracking setup, and campaign buildout — all included in your monthly retainer." },
        ],
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
      buttonSecondary: "Book a call",
      email: "thomas@b2blast.com",
    },
    contact: {
      title: "Let's talk growth",
      subtitle: "Choose what works for you: fill out the form, book a call directly, or send me an email. I respond within 24 hours.",
      calendly: "Or book a call directly →",
      form: { name: "Full name", email: "Work email", company: "Company name", budget: "Monthly ad budget", budgetOptions: ["< €5K", "€5-10K", "€10-15K", "€15K+", "Not sure yet"], message: "Tell me about your project and goals", submit: "Get Your Growth Plan", success: "Message sent! I'll get back to you within 24 hours." },
    },
    footer: {
      tagline: "B2B paid ads, natively bilingual.",
      copyright: `© ${new Date().getFullYear()} B2BLAST. All rights reserved.`,
      links: { services: "Services", resources: "Resources", about: "About", blog: "Blog", contact: "Contact", privacy: "Privacy", legal: "Legal" },
      social: {
        b2blastLinkedin: "https://www.linkedin.com/company/b2blast1",
        thomasLinkedin: "https://www.linkedin.com/in/thomasgermain5/",
      },
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: February 2026",
    },
    legal: {
      title: "Legal Notice",
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
      title: "Paid Ads pour SaaS B2B à l'International",
      subtitle: "Vos ads marchent sur votre marché. Mais elles échouent à l'étranger. Mauvais ton, mauvais ciblage, mauvais signaux culturels — argent gaspillé.",
      description: "Expertise native Français ↔ Anglais. LinkedIn, Google, Microsoft & Reddit Ads.",
      cta: "Obtenez votre plan de croissance",
      ctaSecondary: "Réserver un appel",
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
    process: {
      title: "Comment on travaille ensemble",
      subtitle: "Un process clair et structuré dès le premier jour. Pas de surprises.",
      steps: [
        { step: "1", title: "Appel découverte", description: "30 minutes, gratuit. J'audite votre setup actuel, comprends votre ICP, et identifie les quick wins.", duration: "Jour 0" },
        { step: "2", title: "Stratégie & setup", description: "Architecture campagnes, tracking (GTM, GA4, CAPI), construction audiences, et création ad copy bilingue.", duration: "Semaine 1-2" },
        { step: "3", title: "Lancement & optimisation", description: "Les campagnes sont en ligne. Monitoring quotidien, ajustements enchères, et A/B testing sur les deux marchés.", duration: "Semaine 3+" },
        { step: "4", title: "Reporting & scale", description: "Reporting transparent lié à votre pipeline. On double ce qui marche et coupe ce qui ne marche pas.", duration: "En continu" },
      ],
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { question: "À qui s'adresse B2BLAST ?", answer: "B2BLAST accompagne les entreprises B2B SaaS et PME qui s'expandent de la France vers les marchés UK/US, ou les entreprises internationales qui entrent sur le marché français. Si vous vendez en B2B et avez besoin d'une expertise paid ads bilingue, c'est pour vous." },
        { question: "En quoi c'est différent d'une agence classique ?", answer: "La plupart des agences assignent des account managers juniors qui suivent des playbooks. Je suis un opérateur solo, ex-LinkedIn et ex-Google, qui gère personnellement chaque campagne. Vous bénéficiez d'une expertise senior avec un ad copy bilingue natif — pas une version traduite." },
        { question: "Quel budget pub est nécessaire pour commencer ?", answer: "Un minimum de €5 000/mois en dépenses publicitaires est recommandé pour générer des résultats B2B significatifs sur une ou deux plateformes. En dessous de ce seuil, le volume de données est trop faible pour optimiser efficacement." },
        { question: "En combien de temps puis-je voir des résultats ?", answer: "La plupart des campagnes B2B nécessitent 4-6 semaines pour collecter suffisamment de données. Vous verrez du trafic et des leads initiaux dans les 2 premières semaines, mais l'impact réel sur le pipeline se manifeste généralement au mois 2-3." },
        { question: "Proposez-vous des contrats ou c'est au mois ?", answer: "Je recommande un engagement initial de 3 mois pour permettre un testing et une optimisation corrects. Après cela, les engagements sont au mois avec 30 jours de préavis. Pas de lock-in." },
        { question: "De quoi avez-vous besoin de ma part pour démarrer ?", answer: "Accès à vos comptes publicitaires (ou je les crée), vos données CRM/pipeline pour le suivi conversions, vos guidelines de marque, et 30 minutes par semaine pour les calls d'alignement. Je gère tout le reste." },
        { question: "Écrivez-vous les ads vous-même ?", answer: "Oui, tout le copy publicitaire est rédigé nativement en français et en anglais par moi — pas traduit, pas généré par IA. L'adaptation culturelle est au cœur du service." },
        { question: "Puis-je voir des exemples de votre travail ?", answer: "Je peux vous présenter des structures de campagnes anonymisées, des stratégies de ciblage et des frameworks de reporting lors de notre appel découverte. Pour des raisons de confidentialité, je ne publie pas de case studies clients." },
      ],
    },
    services: {
      title: "Services",
      subtitle: "Gestion paid ads B2B, entièrement bilingue.",
      platforms: [
        { name: "LinkedIn Ads", description: "ABM, Lead Gen Forms, Thought Leader Ads. Atteignez les décideurs B2B directement.", icon: "linkedin" },
        { name: "Google Ads", description: "Search, Performance Max, Demand Gen. Capturez la demande B2B à haute intention.", icon: "google" },
        { name: "Microsoft Ads", description: "Bing Search & Audience. Le canal B2B sous-exploité avec des CPCs plus bas.", icon: "microsoft" },
        { name: "Reddit Ads", description: "Ciblage communautaire pour dev tools, SaaS et audiences techniques.", icon: "reddit" },
      ],
      packages: [
        {
          name: "Launch",
          price: "€2-3K",
          period: "/mois",
          features: ["1-2 plateformes", "Gestion budget ads €5-8K", "Reporting mensuel", "Optimisation continue"],
          outcome: "Premiers leads qualifiés en 60 jours.",
          cta: "Démarrer",
          popular: false,
        },
        {
          name: "Growth",
          price: "€3-5K",
          period: "/mois",
          features: ["2-3 plateformes", "Gestion budget ads €8-15K", "Reporting bi-mensuel", "A/B testing actif", "Stratégie complète incluse"],
          outcome: "Pipeline prévisible en 90 jours.",
          cta: "Démarrer",
          popular: true,
        },
        {
          name: "Scale",
          price: "€5-8K",
          period: "/mois",
          features: ["Toutes les plateformes", "Gestion budget ads €15K+", "Reporting hebdomadaire", "Optimisation aggressive", "Stratégie complète & direction créative"],
          outcome: "Machine d'acquisition multi-marchés à plein régime.",
          cta: "Démarrer",
          popular: false,
        },
      ],
      includes: {
        title: "Inclus dans chaque package",
        items: ["Stratégie campagnes complète", "Setup technique (GTM, GA4, suivi conversions)", "Gestion budgets quotidienne", "Optimisation continue bids & audiences", "Reporting professionnel", "Communication réactive Slack/email"],
      },
      clientNeeds: {
        title: "Ce dont j'ai besoin de votre part",
        items: ["Accès comptes publicitaires (ou je les crée)", "Accès CRM pour le suivi conversions", "Guidelines de marque & assets", "30 minutes/semaine pour les calls d'alignement"],
      },
      faq: {
        title: "FAQ Services",
        items: [
          { question: "Par quelle plateforme commencer ?", answer: "Pour la plupart des SaaS B2B, LinkedIn est le point de départ le plus qualifié. Si vous avez de la demande search existante, Google Ads est un excellent complément. Je recommande le bon mix selon votre ICP et budget." },
          { question: "Pouvez-vous gérer des campagnes dans les deux langues simultanément ?", answer: "Oui, c'est la valeur cœur. Je construis des structures de campagnes séparées pour chaque marché avec un ad copy natif, des recommandations landing pages localisées et des stratégies d'enchères spécifiques à chaque marché." },
          { question: "Quel reporting est-ce que je reçois ?", answer: "Vous recevez des reports structurés montrant les dépenses, leads, coût par lead, contribution pipeline et recommandations. Les reports sont liés à vos données pipeline réelles, pas juste des vanity metrics." },
          { question: "Gérez-vous aussi les landing pages ?", answer: "Je fournis des audits landing pages et des recommandations d'optimisation conversion dans chaque engagement. Pour les builds complets de landing pages, je travaille avec des partenaires de confiance." },
          { question: "Que se passe-t-il si les campagnes sous-performent ?", answer: "La sous-performance déclenche une revue diagnostic sous 48h. J'identifie la cause racine (ciblage, copy, landing page ou product-market fit) et présente un plan correctif. La transparence est non-négociable." },
          { question: "Y a-t-il des frais de setup ?", answer: "Pas de frais de setup. Les deux premières semaines de chaque engagement incluent stratégie, audit compte, setup tracking et construction campagnes — tout est inclus dans votre retainer mensuel." },
        ],
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
      buttonSecondary: "Réserver un appel",
      email: "thomas@b2blast.com",
    },
    contact: {
      title: "Parlons croissance",
      subtitle: "Choisissez ce qui vous convient : remplissez le formulaire, réservez un call, ou envoyez-moi un email. Je réponds sous 24h.",
      calendly: "Ou réservez un call directement →",
      form: { name: "Nom complet", email: "Email professionnel", company: "Nom de l'entreprise", budget: "Budget pub mensuel", budgetOptions: ["< €5K", "€5-10K", "€10-15K", "€15K+", "Pas encore défini"], message: "Parlez-moi de votre projet et vos objectifs", submit: "Obtenez votre plan de croissance", success: "Message envoyé ! Je vous réponds sous 24 heures." },
    },
    footer: {
      tagline: "Paid ads B2B, nativement bilingue.",
      copyright: `© ${new Date().getFullYear()} B2BLAST. Tous droits réservés.`,
      links: { services: "Services", resources: "Ressources", about: "À propos", blog: "Blog", contact: "Contact", privacy: "Confidentialité", legal: "Mentions légales" },
      social: {
        b2blastLinkedin: "https://www.linkedin.com/company/b2blast1",
        thomasLinkedin: "https://www.linkedin.com/in/thomasgermain5/",
      },
    },
    privacy: {
      title: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : février 2026",
    },
    legal: {
      title: "Mentions légales",
    },
  },
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}
