<script setup>
const SITE_URL = 'https://clubhippiquedecolomiers.fr/'
const SITE_NAME = 'Club Hippique de Colomiers'
const LOGO_URL = 'https://res.cloudinary.com/augalo/image/upload/v1754221336/chc/chc-final-removebg-preview_bqtqnj.png'

const HERO_BASE = 'https://images.unsplash.com/photo-1751087534740-673422f93589?q=75&auto=format&fit=crop'
const HERO_WIDTHS = [800, 1200, 1600, 2400]
const HERO_IMAGE = {
  src: `${HERO_BASE}&w=1600`,
  srcset: HERO_WIDTHS.map((w) => `${HERO_BASE}&w=${w} ${w}w`).join(', '),
  // Portrait : la photo couvre toute la hauteur, donc bien plus large que l'écran
  sizes: '(max-width: 767px) 160vh, 78vw',
  alt: 'Poney gris pommelé à la crinière sombre dans un pré'
}
const OG_IMAGE = `${HERO_BASE}&w=1200&h=630&crop=entropy`

const TITLE = 'Club Hippique de Colomiers · Centre équestre près de Toulouse'
const DESCRIPTION = 'Centre équestre à Colomiers (31), à 15 min de Toulouse : poney club dès 4 ans, cours particuliers, stages vacances et pension chevaux. Encadrement diplômé.'

const toPrice = (price) => price.replace(/[^\d]/g, '')

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': SITE_URL + '#website',
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'fr-FR',
      publisher: { '@id': SITE_URL + '#organization' }
    },
    {
      '@type': 'SportsActivityLocation',
      '@id': SITE_URL + '#organization',
      name: SITE_NAME,
      alternateName: 'CHC',
      url: SITE_URL,
      logo: LOGO_URL,
      image: [OG_IMAGE, LOGO_URL],
      description: 'Centre équestre familial à Colomiers (31), à 15 min de Toulouse. Poney club dès 4 ans, cours particuliers, cours propriétaires, stages vacances et pension chevaux.',
      sport: 'Equestrianism',
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Cash, Credit Card, Check',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chemin de Saint Jean',
        addressLocality: 'Colomiers',
        postalCode: '31770',
        addressRegion: 'Occitanie',
        addressCountry: 'FR'
      },
      geo: { '@type': 'GeoCoordinates', latitude: 43.6125, longitude: 1.3372 },
      hasMap: 'https://www.google.com/maps/search/?api=1&query=Club+Hippique+de+Colomiers+Chemin+de+Saint+Jean+31770+Colomiers',
      telephone: '+33684809703',
      email: 'clubhippiquecolomiers@gmail.com',
      contactPoint: [
        { '@type': 'ContactPoint', telephone: '+33684809703', contactType: 'customer service', availableLanguage: 'French' },
        { '@type': 'ContactPoint', telephone: '+33695266805', contactType: 'customer service', availableLanguage: 'French' }
      ],
      areaServed: [
        { '@type': 'City', name: 'Colomiers' },
        { '@type': 'City', name: 'Toulouse' },
        { '@type': 'City', name: 'Tournefeuille' },
        { '@type': 'City', name: 'Pibrac' },
        { '@type': 'City', name: 'Blagnac' },
        { '@type': 'City', name: 'Léguevin' },
        { '@type': 'AdministrativeArea', name: 'Haute-Garonne' }
      ],
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }],
      // Catalogue généré depuis la grille tarifaire, pour rester à jour automatiquement
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Tarifs ${TARIF_SEASON}`,
        itemListElement: tarifSections.map((section) => ({
          '@type': 'OfferCatalog',
          name: section.title,
          itemListElement: section.tarifs.flatMap((tarif) => tarif.items.map((item) => ({
            '@type': 'Offer',
            name: `${tarif.title} · ${item.label}`,
            price: toPrice(item.price),
            priceCurrency: 'EUR',
            ...(item.unit ? { description: `Prix ${item.unit.replace('/ ', 'par ')}` } : {})
          })))
        }))
      }
    },
    {
      '@type': 'FAQPage',
      '@id': SITE_URL + '#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ]
}

useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  author: SITE_NAME,
  robots: 'index, follow, max-image-preview:large',
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
  ogType: 'website',
  ogUrl: SITE_URL,
  ogSiteName: SITE_NAME,
  ogImage: OG_IMAGE,
  ogImageAlt: HERO_IMAGE.alt,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
  twitterTitle: TITLE,
  twitterDescription: DESCRIPTION,
  twitterImage: OG_IMAGE,
  twitterImageAlt: HERO_IMAGE.alt
})

useHead({
  link: [
    { rel: 'canonical', href: SITE_URL },
    { rel: 'preconnect', href: 'https://images.unsplash.com' },
    { rel: 'preload', as: 'image', href: HERO_IMAGE.src, imagesrcset: HERO_IMAGE.srcset, imagesizes: HERO_IMAGE.sizes, fetchpriority: 'high' }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }
  ]
})
</script>

<template>
  <div class="grain overflow-x-clip">
    <SiteHeader />
    <main>
      <HeroSection :image="HERO_IMAGE" />
      <ManifestoSection />
      <ActivitiesSection />
      <FormulaFinder />
      <TarifsSection id="tarifs" />
      <FaqSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
