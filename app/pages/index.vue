<script setup>
import { NuxtImg } from '#components'

useSeoMeta({
  title: 'Club Hippique de Colomiers - Accueil',
  description: 'Bienvenue au Club Hippique de Colomiers. Le cadre idéal pour progresser à cheval, du loisir à la compétition.',
  ogTitle: 'Club Hippique de Colomiers - Accueil',
  ogDescription: 'Le cadre idéal pour progresser à cheval, du loisir à la compétition.',
  ogType: 'website',
  ogUrl: 'https://clubhippiquedecolomiers.fr/',
  ogImage: 'https://res.cloudinary.com/augalo/image/upload/v1754221336/chc/chc-final-removebg-preview_bqtqnj.png',
  ogImageAlt: 'Logo Club Hippique de Colomiers',
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Club Hippique de Colomiers - Accueil',
  twitterDescription: 'Le cadre idéal pour progresser à cheval, du loisir à la compétition.',
  twitterImage: 'https://res.cloudinary.com/augalo/image/upload/v1754221336/chc/chc-final-removebg-preview_bqtqnj.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://clubhippiquedecolomiers.fr/' }
  ]
})

const header = ref(null)
const headerScrolled = ref(false)

const handleScroll = () => {
  const heroHeight = Math.max(window.innerHeight * 0.8, 600)
  const scrollY = window.scrollY
  
  headerScrolled.value = scrollY > heroHeight - 100
}

const scrollToSection = (sectionId, event) => {
  event.preventDefault()
  
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80 
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
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
const toast = useToast()

const envoyerMessage = async () => {
  isLoading.value = true
  
  try {
    const { data } = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    // Succès
    toast.add({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais.',
      color: 'green'
    })
    
    form.value = {
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      sujet: 'Cours Poney Club',
      message: ''
    }
    
  } catch (error) {
    toast.add({
      title: 'Erreur',
      description: 'Une erreur est survenue lors de l\'envoi. Réessayez plus tard.',
      color: 'red'
    })
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
      <div class="max-w-7xl mx-auto flex items-center justify-center sm:justify-between">
        <NuxtImg 
          provider="cloudinary"
          src="v1754221336/chc/chc-final-removebg-preview_bqtqnj.png" 
          alt="Logo Club Hippique de Colomiers" 
          class="h-16 w-auto transition-all duration-300"
          :class="headerScrolled ? 'filter-none' : 'filter brightness-0 invert'" 
        />
        <nav class="hidden md:flex items-center gap-8">
          <a 
            href="#services"
            @click="scrollToSection('services', $event)"
            class="transition-all duration-300 font-medium text-sm tracking-wide cursor-pointer"
            :class="headerScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-blue-200 drop-shadow-lg'"
          >
            Activités
          </a>
          <a 
            href="#tarifs"
            @click="scrollToSection('tarifs', $event)"
            class="transition-all duration-300 font-medium text-sm tracking-wide cursor-pointer"
            :class="headerScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-blue-200 drop-shadow-lg'"
          >
            Tarifs
          </a>
          <a 
            href="#contact"
            @click="scrollToSection('contact', $event)"
            class="transition-all duration-300 cursor-pointer font-medium text-sm tracking-wide"
            :class="headerScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-blue-200 drop-shadow-lg'"
          >
            Nous contacter
          </a>
        </nav>
        
        <!-- Menu mobile -->
        <UButton 
          icon="i-heroicons-bars-3" 
          variant="ghost" 
          :color="headerScrolled ? 'gray' : 'white'"
          class="md:hidden transition-all duration-300 hidden"
          :class="headerScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20 backdrop-blur-sm'"
        />
      </div>
    </header>

    <!-- Hero section plus proportionnée -->
    <div class="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1751087534740-673422f93589?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
      <div class="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 z-0"></div>
      <div class="relative z-10 max-w-4xl px-6 py-8">
        <h1 class="text-5xl leading-14 md:text-4xl lg:text-5xl font-bold mb-2 sm:leading-tight">
          Club Hippique de Colomiers
        </h1>
        <p class="text-sm md:text-xl mb-6 text-white/90 leading-relaxed max-w-sm sm:max-w-2xl mx-auto">
          Le cadre idéal pour progresser à cheval, du loisir à la compétition.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <UButton 
            color="primary" 
            size="lg" 
            @click="scrollToSection('contact', $event)"
            class="shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-blue-600 border-0"
          >
            Nous contacter
          </UButton>
          <UButton 
            color="white" 
            variant="outline" 
            size="lg" 
            @click="scrollToSection('services', $event)"
            class="text-white cursor-pointer border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
          >
            Découvrir nos activités
          </UButton>
        </div>
      </div>
    </div>

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
              <form @submit.prevent="envoyerMessage" class="space-y-4">
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

    <footer class="text-center py-10 bg-primary text-blue-40">
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
</style>
