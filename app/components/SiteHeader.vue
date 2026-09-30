<script setup>
const KAVALOG_URL = 'https://cloud25.kavalog.fr/COLOMIERS/'

const navLinks = [
  { id: 'activites', label: 'Activités' },
  { id: 'formule', label: 'Ma formule' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'contact', label: 'Contact' }
]

const scrolled = ref(false)
const progress = ref(0)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > window.innerHeight * 0.75
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? window.scrollY / max : 0
}

const go = (id, event) => {
  menuOpen.value = false
  scrollToSection(id, event)
}

watch(menuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 md:px-6 pt-3">
    <!-- Progression de lecture -->
    <div
      class="fixed left-0 top-0 h-[3px] bg-brand-400 origin-left z-[70]"
      :style="{ width: '100%', transform: `scaleX(${progress})` }"
      aria-hidden="true"
    />

    <div
      class="mx-auto max-w-6xl flex items-center justify-between gap-4 rounded-full pl-2 pr-2 py-1.5 transition-all duration-500"
      :class="scrolled && !menuOpen
        ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(6,20,27,0.25)] ring-1 ring-ink-900/5'
        : 'bg-transparent'"
    >
      <a href="#top" class="shrink-0" @click="go('top', $event)">
        <NuxtImg
          provider="cloudinary"
          src="v1754221336/chc/chc-final-removebg-preview_bqtqnj.png"
          alt="Logo Club Hippique de Colomiers"
          class="w-auto transition-all duration-500"
          :class="scrolled && !menuOpen ? 'h-14 md:h-16' : 'h-20 md:h-24 brightness-0 invert'"
        />
      </a>

      <nav class="hidden md:flex items-center gap-1" aria-label="Navigation principale">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
          :class="scrolled ? 'text-ink-900 hover:bg-ink-900/5' : 'text-white hover:bg-white/10'"
          @click="go(link.id, $event)"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="KAVALOG_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300"
          :class="scrolled && !menuOpen
            ? 'bg-brand-500 text-white hover:bg-brand-600'
            : 'bg-white text-brand-600 hover:bg-brand-50'"
        >
          Mon espace
          <UIcon name="i-ph-arrow-up-right-bold" class="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <button
          type="button"
          class="md:hidden size-10 rounded-full flex items-center justify-center transition-colors"
          :class="scrolled && !menuOpen ? 'text-ink-900 bg-ink-900/5' : 'text-white bg-white/10'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="menuOpen = !menuOpen"
        >
          <UIcon :name="menuOpen ? 'i-ph-x-bold' : 'i-ph-list-bold'" class="size-5" />
        </button>
      </div>
    </div>

    <!-- Menu mobile plein écran -->
    <Transition
      enter-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0 -translate-y-4"
      leave-active-class="transition duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="md:hidden fixed inset-0 -z-10 bg-ink-950 flex flex-col justify-end px-6 pb-12 pt-28"
      >
        <nav class="flex flex-col" aria-label="Navigation mobile">
          <a
            v-for="(link, i) in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="group flex items-baseline gap-4 border-b border-white/10 py-4 text-white"
            @click="go(link.id, $event)"
          >
            <span class="text-xs font-semibold text-brand-300 tabular-nums">0{{ i + 1 }}</span>
            <span class="font-display text-4xl tracking-[-0.03em] transition-colors group-hover:text-brand-300">{{ link.label }}</span>
          </a>
        </nav>
        <div class="mt-8 flex flex-col text-white/60 text-sm">
          <a href="tel:0684809703" class="py-2 hover:text-white">06 84 80 97 03</a>
          <a href="mailto:clubhippiquecolomiers@gmail.com" class="py-2 hover:text-white">clubhippiquecolomiers@gmail.com</a>
        </div>
      </div>
    </Transition>
  </header>
</template>
