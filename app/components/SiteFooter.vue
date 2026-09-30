<script setup>
const KAVALOG_URL = 'https://cloud25.kavalog.fr/COLOMIERS/'

const currentYear = new Date().getFullYear()

const links = [
  { id: 'activites', label: 'Nos activités' },
  { id: 'formule', label: 'Trouver ma formule' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'faq', label: 'Questions fréquentes' },
  { id: 'contact', label: 'Contact' }
]
</script>

<template>
  <footer class="relative z-20 -mt-10 md:-mt-16 rounded-t-[2.5rem] md:rounded-t-[4rem] bg-sand-100 text-ink-900 px-5 md:px-10 pt-16 md:pt-20 pb-8">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-12 md:grid-cols-[1.4fr_1fr_1.1fr]">
        <!-- Présentation -->
        <div>
          <NuxtImg
            provider="cloudinary"
            src="v1754221336/chc/chc-final-removebg-preview_bqtqnj.png"
            alt="Logo Club Hippique de Colomiers"
            class="h-24 w-auto"
            loading="lazy"
          />
          <p class="mt-5 max-w-xs text-ink-900/70 leading-relaxed">
            Centre équestre familial à Colomiers, en Haute-Garonne. À quelques minutes de Tournefeuille,
            Pibrac, Blagnac, Léguevin et du centre de Toulouse.
          </p>
        </div>

        <!-- Navigation -->
        <nav aria-label="Plan du site">
          <h2 class="font-display text-xl mb-4">Le club</h2>
          <ul class="flex flex-col">
            <li v-for="link in links" :key="link.id">
              <a
                :href="`#${link.id}`"
                class="group inline-flex items-center gap-2 py-1.5 text-ink-900/70 hover:text-brand-600 transition-colors"
                @click="scrollToSection(link.id, $event)"
              >
                {{ link.label }}
                <UIcon name="i-ph-arrow-right-bold" class="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            </li>
          </ul>
        </nav>

        <!-- Espace cavalier -->
        <div class="rounded-[1.75rem] bg-brand-500 text-white p-6 self-start">
          <UIcon name="i-chc-horse-profile" class="size-9" />
          <h2 class="mt-3 font-display text-2xl leading-tight">Déjà cavalier au club&nbsp;?</h2>
          <p class="mt-2 text-sm text-white/80">Retrouvez votre compte cavalier en ligne.</p>
          <a
            :href="KAVALOG_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="group mt-5 inline-flex items-center gap-2 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 transition-colors"
          >
            Mon espace
            <span class="size-8 rounded-full bg-brand-500 text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
              <UIcon name="i-ph-arrow-right-bold" class="size-4" />
            </span>
          </a>
        </div>
      </div>

      <div class="mt-14 pt-6 border-t border-ink-900/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-ink-900/55">
        <p>&copy; {{ currentYear }} Club Hippique de Colomiers</p>
        <div class="flex flex-wrap items-center gap-x-6">
          <a href="tel:0684809703" class="py-2 hover:text-brand-600 transition-colors">06 84 80 97 03</a>
          <NuxtLink to="/mentions-legales" class="py-2 hover:text-brand-600 transition-colors">Mentions légales</NuxtLink>
          <a href="#top" class="group inline-flex items-center gap-1.5 py-2 hover:text-brand-600 transition-colors" @click="scrollToSection('top', $event)">
            Haut de page
            <UIcon name="i-ph-arrow-up-bold" class="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
