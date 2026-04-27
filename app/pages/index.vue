<script setup>
import { NuxtImg } from '#components'

const SITE_URL = 'https://clubhippiquedecolomiers.fr/'
const LOGO_URL = 'https://res.cloudinary.com/augalo/image/upload/v1754221336/chc/chc-final-removebg-preview_bqtqnj.png'
const HERO_IMAGE = 'https://images.unsplash.com/photo-1751087534740-673422f93589?q=80&w=2070&auto=format&fit=crop'
const HEADER_HEIGHT_PX = 80

const navLinks = [
  { id: 'services', label: 'Activités' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'contact', label: 'Nous contacter' }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  '@id': SITE_URL + '#organization',
  name: 'Club Hippique de Colomiers',
  alternateName: 'CHC',
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description: 'Centre équestre à Colomiers (31), à 15 min de Toulouse. Cours d\'équitation, pension chevaux, stages et concours.',
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
  telephone: '+33684809703',
  email: 'clubhippiquecolomiers@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Colomiers' },
    { '@type': 'City', name: 'Toulouse' },
    { '@type': 'AdministrativeArea', name: 'Haute-Garonne' }
  ],
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00'
  }],
  makesOffer: [
    { '@type': 'Offer', name: 'Cours Poney Club', description: 'Apprentissage de l\'équitation pour enfants les mercredis et samedis.' },
    { '@type': 'Offer', name: 'Cours particuliers', description: 'Accompagnement personnalisé pour cavaliers de tous niveaux.' },
    { '@type': 'Offer', name: 'Cours propriétaires', description: 'Perfectionnement avec votre propre monture.' },
    { '@type': 'Offer', name: 'Pension chevaux', description: 'Hébergement en box, paddock et soins quotidiens.' }
  ]
}

useSeoMeta({
  title: 'Club Hippique de Colomiers | Cours d\'équitation & pension chevaux près de Toulouse',
  description: 'Centre équestre à Colomiers (31770), à 15 min de Toulouse. Cours poney club, perfectionnement cavaliers, pension box, stages vacances et concours. Encadrement diplômé FFE.',
  keywords: 'club hippique Colomiers, équitation Toulouse, centre équestre Haute-Garonne, cours poney club, pension chevaux 31, stage équitation enfants, cours propriétaires, concours équestre Colomiers',
  author: 'Club Hippique de Colomiers',
  robots: 'index, follow, max-image-preview:large',
  ogTitle: 'Club Hippique de Colomiers — Cours d\'équitation près de Toulouse',
  ogDescription: 'Centre équestre familial à Colomiers (31). Cours du poney club au perfectionnement, pension chevaux, stages, concours. À 15 min de Toulouse.',
  ogType: 'website',
  ogUrl: SITE_URL,
  ogSiteName: 'Club Hippique de Colomiers',
  ogImage: LOGO_URL,
  ogImageAlt: 'Logo Club Hippique de Colomiers',
  ogImageWidth: 500,
  ogImageHeight: 500,
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Club Hippique de Colomiers — Cours d\'équitation près de Toulouse',
  twitterDescription: 'Centre équestre à Colomiers (31). Cours, pension, stages, concours.',
  twitterImage: LOGO_URL,
  twitterImageAlt: 'Logo Club Hippique de Colomiers'
})

useHead({
  link: [
    { rel: 'canonical', href: SITE_URL },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'preconnect', href: 'https://images.unsplash.com' },
    { rel: 'preload', as: 'image', href: HERO_IMAGE, fetchpriority: 'high' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..400;1,9..144,400&display=swap' }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }
  ]
})

const headerScrolled = ref(false)

const handleScroll = () => {
  const threshold = Math.max(window.innerHeight * 0.8, 600) - 100
  const next = window.scrollY > threshold
  if (next !== headerScrolled.value) headerScrolled.value = next
}

const scrollToSection = (sectionId, event) => {
  event.preventDefault()
  const element = document.getElementById(sectionId)
  if (!element) return
  window.scrollTo({
    top: element.offsetTop - HEADER_HEIGHT_PX,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const form = ref({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  sujet: 'Cours Poney Club',
  message: ''
})

const isLoading = ref(false)
const messageSent = ref(false)

const envoyerMessage = async () => {
  isLoading.value = true

  try {
    await $fetch('/.netlify/functions/contact', {
      method: 'POST',
      body: form.value
    })

    messageSent.value = true

    form.value = {
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      sujet: 'Cours Poney Club',
      message: ''
    }

    setTimeout(() => {
      messageSent.value = false
    }, 5000)
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <header 
      ref="header"
      class="fixed w-full px-6 top-0 z-50 transition-all duration-300"
      :class="headerScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <NuxtImg
          provider="cloudinary"
          src="v1754221336/chc/chc-final-removebg-preview_bqtqnj.png"
          alt="Logo Club Hippique de Colomiers"
          class="h-12 md:h-16 w-auto transition-all duration-300 shrink-0"
          :class="headerScrolled ? 'filter-none' : 'filter brightness-0 invert'"
        />
        <div class="flex items-center gap-6 md:gap-8">
          <nav class="hidden md:flex items-center gap-8">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              @click="scrollToSection(link.id, $event)"
              class="transition-all duration-300 font-medium text-sm tracking-wide cursor-pointer"
              :class="headerScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-blue-200 drop-shadow-lg'"
            >
              {{ link.label }}
            </a>
          </nav>
          <a
            href="https://cloud25.kavalog.fr/COLOMIERS/"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-1.5 md:gap-2 transition-all duration-300 cursor-pointer font-medium text-xs md:text-sm tracking-wide rounded-full px-3 py-1.5 md:px-4 md:py-2"
            :class="headerScrolled
              ? 'bg-primary text-white hover:bg-blue-700'
              : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-900 hover:border-white'"
          >
            Mon espace
            <UIcon name="i-heroicons-arrow-up-right" class="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>

    <section class="relative h-screen overflow-hidden bg-gray-900">
      <div
        class="absolute inset-0 bg-cover bg-center scale-105 animate-hero-zoom"
        :style="{ backgroundImage: `url('${HERO_IMAGE}')` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/85"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

      <div class="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20">
        <div class="max-w-7xl mx-auto w-full px-6 md:px-12">
          <div class="flex items-center gap-3 mb-5 md:mb-7 opacity-0 animate-fade-up [animation-delay:200ms]">
            <span class="text-white/85 uppercase tracking-[0.25em] text-[11px] md:text-xs font-medium">
              Centre équestre · Haute-Garonne
            </span>
          </div>

          <h1 class="text-white opacity-0 animate-fade-up [animation-delay:400ms]">
            <span class="block font-light text-2xl md:text-4xl lg:text-5xl tracking-tight leading-none mb-1 md:mb-2">
              Club Hippique
            </span>
            <span class="block font-display italic text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight font-normal">
              de Colomiers
            </span>
          </h1>

          <p class="mt-6 md:mt-8 text-white/85 text-base md:text-xl max-w-xl leading-relaxed opacity-0 animate-fade-up [animation-delay:600ms]">
            Un cadre exigeant pour progresser à cheval, du premier galop aux concours.
          </p>

          <div class="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 opacity-0 animate-fade-up [animation-delay:800ms]">
            <button
              type="button"
              @click="scrollToSection('services', $event)"
              class="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 cursor-pointer w-fit"
            >
              Découvrir nos activités
              <UIcon name="i-heroicons-arrow-down" class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
            <a
              href="#contact"
              @click="scrollToSection('contact', $event)"
              class="text-white/90 hover:text-white text-sm font-medium tracking-wide border-b border-white/40 hover:border-white pb-1 transition-colors duration-300 w-fit"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 opacity-0 animate-fade-up [animation-delay:1100ms]">
        <span class="text-white/60 text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div class="w-px h-14 bg-white/20 relative overflow-hidden">
          <div class="absolute inset-x-0 top-0 h-1/3 bg-white animate-scroll-line"></div>
        </div>
      </div>
    </section>

    <UContainer class="py-16"  id="services">
      
      <!-- Section Nos activités - Design premium -->
      <section class="relative">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Une expérience équestre
            <span class="text-primary relative">
              sur-mesure
              <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C20 3 40 1 60 2C80 3 100 4 120 2C140 0 160 1 180 3C185 4 190 5 198 6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
              </svg>
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos activités adaptés à chaque cavalier.
          </p>
        </div>

        <!-- Activities Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          
          <!-- Cours Poney Club -->
          <div class="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <UIcon name="i-heroicons-academic-cap" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Cours Poney Club</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Apprentissage ludique et sécurisé les mercredis et samedis pour nos jeunes cavaliers.
              </p>
            </div>
          </div>

          <!-- Pensions -->
          <div class="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100/50">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <UIcon name="i-heroicons-home" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Pensions</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Hébergement premium pour votre cheval. Box spacieux, paddocks et soins quotidiens dans un cadre naturel.
              </p>
            </div>
          </div>

          <div class="group relative bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-slate-700 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <UIcon name="i-heroicons-users" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Cours Propriétaires</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Perfectionnement avec votre monture. Encadrement expert pour le travail sur le plat et à l'obstacle.
              </p>
            </div>
          </div>

          <!-- Cours Particuliers -->
          <div class="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cyan-100/50">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <UIcon name="i-heroicons-user" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Cours Particuliers</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Accompagnement personnalisé pour une progression accélérée selon vos objectifs équestres.
              </p>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 p-12 border border-gray-200/50">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div class="text-gray-600 font-medium">Années d'expérience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div class="text-gray-600 font-medium">Cavaliers formés</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">~50</div>
              <div class="text-gray-600 font-medium">Chevaux résidents</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div class="text-gray-600 font-medium">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      <TarifsSection id="tarifs" />

      <section class="relative py-16" id="contact">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Prêt à commencer votre
            <span class="text-primary relative">
              aventure équestre ?
              <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C20 3 40 1 60 2C80 3 100 4 120 2C140 0 160 1 180 3C185 4 190 5 198 6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
              </svg>
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Localisation & Horaires -->
          <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">Nous trouver</h3>
            </div>
            
            <div class="space-y-6 mb-4">
              <div class="flex items-start">
                <UIcon name="i-heroicons-home" class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900 mb-1">Adresse</div>
                  <div class="text-gray-600">Chemin de Saint Jean<br>31770 Colomiers</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-clock" class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900 mb-2">Horaires</div>
                  <div class="space-y-1 text-gray-600">
                    <div class="flex gap-2">
                      <span>Lun - Sam :</span>
                      <span class="font-medium">9h00 - 19h00</span>
                    </div>
                    <div class="flex gap-2">
                      <span>Dimanche :</span>
                      <span class="font-medium text-red-500">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 border border-primary/10">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-phone" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">Contact direct</h3>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:clubhippiquecolomiers@gmail.com" class="text-primary hover:text-blue-700 transition-colors">
                    clubhippiquecolomiers@gmail.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900 mb-2">Téléphone</div>
                  <div class="space-y-1">
                    <a href="tel:0684809703" class="block text-primary hover:text-blue-700 transition-colors">
                      06 84 80 97 03
                    </a>
                    <a href="tel:0695266805" class="block text-primary hover:text-blue-700 transition-colors">
                      06 95 26 68 05
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Services inclus -->
            <div class="mt-6 space-y-3">
              <div class="flex items-center">
                <UIcon name="i-heroicons-wrench-screwdriver" class="w-4 h-4 text-slate-600 mr-2" />
                <span class="text-sm text-gray-600">Matériel fourni</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-identification" class="w-4 h-4 text-blue-600 mr-2" />
                <span class="text-sm text-gray-600">Licence FFE requise</span>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">Écrivez-nous</h3>
            </div>
            
            <ClientOnly>
              <div v-if="messageSent" class="text-center py-8">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-heroicons-check-circle" class="w-10 h-10 text-green-600" />
                </div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Message envoyé avec succès !</h4>
                <p class="text-gray-600 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
              
              <form v-else @submit.prevent="envoyerMessage" class="space-y-4">
                <div class="grid grid-cols-2 gap-3">
                  <input 
                    v-model="form.prenom"
                    type="text" 
                    class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                    placeholder="Prénom"
                    required
                  />
                  <input 
                    v-model="form.nom"
                    type="text" 
                    class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                    placeholder="Nom"
                    required
                  />
                </div>
                
                <input 
                  v-model="form.email"
                  type="email" 
                  class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                  placeholder="votre@email.com"
                  required
                />
                
                <input 
                  v-model="form.telephone"
                  type="tel" 
                  class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                  placeholder="Téléphone"
                />
                
                <select v-model="form.sujet" class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm">
                  <option>Cours Poney Club</option>
                  <option>Cours particuliers</option>
                  <option>Pension pour mon cheval</option>
                  <option>Cours propriétaires</option>
                  <option>Autre demande</option>
                </select>
                
                <textarea 
                  v-model="form.message"
                  rows="3" 
                  class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none text-sm"
                  placeholder="Votre message..."
                  required
                ></textarea>
                
                <UButton 
                  type="submit"
                  :loading="isLoading"
                  color="primary" 
                  size="md" 
                  class="w-full bg-gradient-to-r cursor-pointer from-primary to-blue-600 hover:to-primary transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border-0 flex justify-center py-2 px-4 items-center gap-3"
                  icon="i-heroicons-paper-airplane"
                >
                  {{ isLoading ? 'Envoi en cours...' : 'Envoyer' }}
                </UButton>
              </form>
            </ClientOnly>
          </div>
        </div>
      </section>

    </UContainer>

    <footer class="text-center py-10 bg-primary text-white/90">
      &copy; 2025 Club Hippique de Colomiers - Tous droits réservés.
    </footer>
  </div>
</template>


<style scoped>
.text-primary {
  color: #0073a8;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Hero animations */
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes hero-zoom {
  0% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

.animate-hero-zoom {
  animation: hero-zoom 8s ease-out forwards;
}

@keyframes scroll-line {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(400%);
  }
}

.animate-scroll-line {
  animation: scroll-line 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-fade-up,
  .animate-hero-zoom,
  .animate-scroll-line {
    animation: none;
  }
  .animate-fade-up {
    opacity: 1;
  }
}
</style>
