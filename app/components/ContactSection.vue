<script setup>
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Club+Hippique+de+Colomiers+Chemin+de+Saint+Jean+31770+Colomiers'

const subject = useContactSubject()
const status = useOpenStatus()

const emptyForm = () => ({ prenom: '', nom: '', email: '', telephone: '', message: '' })
const form = ref(emptyForm())
const isLoading = ref(false)
const messageSent = ref(false)
const sendError = ref(false)

const envoyerMessage = async () => {
  isLoading.value = true
  sendError.value = false

  try {
    await $fetch('/.netlify/functions/contact', {
      method: 'POST',
      body: { ...form.value, sujet: subject.value }
    })

    messageSent.value = true
    form.value = emptyForm()
    subject.value = CONTACT_SUBJECTS[0]

    setTimeout(() => {
      messageSent.value = false
    }, 5000)
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    sendError.value = true
  } finally {
    isLoading.value = false
  }
}

const infos = [
  { key: 'phone', label: 'Téléphone', icon: 'i-ph-phone-duotone' },
  { key: 'address', label: 'Adresse', icon: 'i-ph-map-pin-duotone' },
  { key: 'email', label: 'Email', icon: 'i-ph-envelope-simple-duotone', wide: true },
  { key: 'hours', label: 'Horaires', icon: 'i-ph-clock-duotone', wide: true }
]

const fieldClass = 'peer w-full rounded-2xl bg-white/5 px-4 pt-6 pb-2 text-white ring-1 ring-white/15 placeholder-transparent outline-none transition focus:bg-white/10 focus:ring-2 focus:ring-brand-400'
const labelClass = 'pointer-events-none absolute left-4 top-2 text-xs font-semibold text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-brand-300'
</script>

<template>
  <section id="contact" class="relative bg-ink-950 text-white px-5 md:px-10 pt-20 md:pt-24 pb-24 md:pb-32 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 z-10">
    <div class="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
      <!-- Titre et infos pratiques -->
      <div class="flex min-w-0 flex-col">
        <h2 v-reveal="80" class="font-display text-3xl md:text-5xl tracking-[-0.03em] leading-[1.02]">
          On se retrouve au <span class="text-brand-300">manège</span>&nbsp;?
        </h2>

        <div v-reveal="100" class="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
          <div v-for="info in infos" :key="info.label" :class="{ 'col-span-2': info.wide }">
            <div class="flex items-center gap-2 text-sm font-semibold text-white/50 mb-2">
              <UIcon :name="info.icon" class="size-5 text-brand-300" />
              {{ info.label }}
            </div>
            <template v-if="info.key === 'phone'">
              <a href="tel:0684809703" class="block py-0.5 font-display text-2xl tracking-tight hover:text-brand-300 transition-colors">06 84 80 97 03</a>
              <a href="tel:0695266805" class="block py-0.5 font-display text-2xl tracking-tight hover:text-brand-300 transition-colors">06 95 26 68 05</a>
            </template>
            <a v-else-if="info.key === 'email'" href="mailto:clubhippiquecolomiers@gmail.com" class="inline-block py-1 text-lg font-medium hover:text-brand-300 transition-colors">
              clubhippiquecolomiers@gmail.com
            </a>
            <template v-else-if="info.key === 'address'">
              <p class="text-white/85 leading-relaxed">Chemin de Saint Jean<br>31770 Colomiers</p>
              <a :href="MAPS_URL" target="_blank" rel="noopener noreferrer" class="group mt-1 py-2 -mb-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-white">
                Itinéraire
                <UIcon name="i-ph-arrow-up-right-bold" class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </template>
            <template v-else-if="info.key === 'hours'">
              <p class="text-white/85 leading-relaxed">Du lundi au samedi, 9h à 19h · Fermé le dimanche</p>
              <ClientOnly>
                <p v-if="status" class="mt-1 inline-flex items-center gap-2 text-sm font-semibold" :class="status.open ? 'text-emerald-400' : 'text-white/60'">
                  <span class="size-2 rounded-full" :class="status.open ? 'bg-emerald-400' : 'bg-white/40'" />
                  {{ status.label }}
                </p>
              </ClientOnly>
            </template>
          </div>
        </div>
      </div>

      <!-- Formulaire -->
      <div v-reveal="200" class="min-w-0 rounded-[2rem] bg-white/[0.04] ring-1 ring-white/10 p-6 md:p-7 self-start">
        <ClientOnly>
          <Transition
            mode="out-in"
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 scale-95"
            leave-active-class="transition duration-200"
            leave-to-class="opacity-0"
          >
            <div v-if="messageSent" class="text-center py-16">
              <div class="mx-auto mb-6 size-20 rounded-full bg-brand-500 text-white flex items-center justify-center">
                <UIcon name="i-ph-check-bold" class="size-10" />
              </div>
              <h3 class="font-display text-3xl">Message envoyé !</h3>
              <p class="mt-2 text-white/60">Nous vous répondrons dans les plus brefs délais.</p>
            </div>

            <form v-else class="flex flex-col gap-3" @submit.prevent="envoyerMessage">
              <fieldset class="min-w-0">
                <legend class="mb-3 text-sm font-semibold text-white/50">Votre demande concerne</legend>
                <div class="flex flex-wrap gap-2">
                  <label
                    v-for="s in CONTACT_SUBJECTS"
                    :key="s"
                    class="shrink-0 whitespace-nowrap cursor-pointer rounded-full px-3.5 py-2 md:py-1.5 text-sm font-medium transition-all duration-300 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-400"
                    :class="subject === s ? 'bg-brand-500 text-white' : 'bg-white/5 text-white/70 ring-1 ring-white/15 hover:text-white hover:bg-white/10'"
                  >
                    <input v-model="subject" type="radio" name="sujet" :value="s" class="sr-only">
                    {{ s }}
                  </label>
                </div>
              </fieldset>

              <div class="mt-2 grid grid-cols-2 gap-3">
                <div class="relative">
                  <input id="prenom" v-model="form.prenom" type="text" autocomplete="given-name" placeholder="Prénom" required :class="fieldClass">
                  <label for="prenom" :class="labelClass">Prénom</label>
                </div>
                <div class="relative">
                  <input id="nom" v-model="form.nom" type="text" autocomplete="family-name" placeholder="Nom" required :class="fieldClass">
                  <label for="nom" :class="labelClass">Nom</label>
                </div>
                <div class="relative col-span-2 sm:col-span-1">
                  <input id="email" v-model="form.email" type="email" autocomplete="email" placeholder="Email" required :class="fieldClass">
                  <label for="email" :class="labelClass">Email</label>
                </div>
                <div class="relative col-span-2 sm:col-span-1">
                  <input id="telephone" v-model="form.telephone" type="tel" autocomplete="tel" placeholder="Téléphone" :class="fieldClass">
                  <label for="telephone" :class="labelClass">Téléphone (facultatif)</label>
                </div>
              </div>
              <div class="relative">
                <textarea id="message" v-model="form.message" rows="3" placeholder="Message" required :class="[fieldClass, 'resize-none']" />
                <label for="message" :class="labelClass">Votre message</label>
              </div>

              <p v-if="sendError" class="text-sm font-semibold text-butter-300" role="alert">
                Oups, l'envoi a échoué. Réessayez ou appelez-nous directement.
              </p>

              <button
                type="submit"
                :disabled="isLoading"
                class="group mt-1 inline-flex items-center justify-between gap-3 rounded-full bg-brand-500 pl-6 pr-2 py-2 font-semibold text-white transition-colors hover:bg-brand-400 disabled:opacity-60 cursor-pointer"
              >
                {{ isLoading ? 'Envoi en cours…' : 'Envoyer le message' }}
                <span class="size-10 rounded-full bg-white text-brand-600 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
                  <UIcon :name="isLoading ? 'i-ph-circle-notch-bold' : 'i-ph-paper-plane-tilt-duotone'" class="size-5" :class="{ 'animate-spin': isLoading }" />
                </span>
              </button>

              <p class="text-xs text-white/40 leading-relaxed">
                Vos données servent uniquement à traiter votre demande. En savoir plus dans nos
                <NuxtLink to="/mentions-legales" class="underline underline-offset-2 hover:text-white">mentions légales</NuxtLink>.
              </p>
            </form>
          </Transition>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
