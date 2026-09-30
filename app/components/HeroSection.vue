<script setup>
const props = defineProps({
  image: { type: Object, required: true }
})

const status = useOpenStatus()
const parallax = ref(0)

const onScroll = () => {
  // Parallaxe uniquement sur grand écran : sur mobile la photo est un bloc à part
  if (window.innerWidth >= 768 && window.scrollY < window.innerHeight) parallax.value = window.scrollY
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <!-- Mobile : photo en haut, texte dessous. Ordinateur : texte posé à gauche de la photo -->
  <section id="top" class="relative flex flex-col overflow-hidden bg-ink-950 text-white md:block md:h-[100svh] md:min-h-[640px]">
    <!-- Photo retournée : le poney se place à droite et regarde vers le titre -->
    <div
      class="relative h-[50svh] min-h-[320px] overflow-hidden will-change-transform md:overflow-visible md:absolute md:inset-0 md:bottom-20 md:left-[22%] md:h-auto md:min-h-0 md:[mask-image:linear-gradient(to_right,transparent,black_40%)]"
      :style="{ transform: `translate3d(0, ${parallax * 0.35}px, 0)` }"
    >
      <div class="absolute inset-0 -scale-x-100">
        <img
          :src="props.image.src"
          :srcset="props.image.srcset"
          :sizes="props.image.sizes"
          :alt="props.image.alt"
          width="2400"
          height="1600"
          fetchpriority="high"
          decoding="async"
          class="absolute inset-0 size-full object-cover object-[72%_15%] md:object-[50%_12%] hero-zoom"
        >
      </div>
      <!-- Mobile : haut assombri pour le logo, bas fondu dans le bleu nuit -->
      <div class="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-ink-950 md:hidden" />
    </div>
    <div class="absolute inset-0 hidden md:block bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950/60" />
    <div class="absolute inset-y-0 left-0 hidden md:block w-[60%] bg-gradient-to-r from-ink-950 via-ink-950/85 to-transparent" />

    <div class="relative z-10 -mt-8 flex flex-col px-5 pb-14 md:mt-0 md:h-full md:justify-center md:px-10 lg:px-16 md:pb-32 md:pt-24">
      <!-- Statut d'ouverture en direct : sous les boutons sur mobile, au-dessus du titre sur ordinateur -->
      <ClientOnly>
        <div
          v-if="status"
          class="hero-in [animation-delay:150ms] order-last mt-6 md:order-none md:mt-0 md:mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 px-3.5 py-1.5 text-xs font-semibold"
        >
          <span class="relative flex size-2">
            <span v-if="status.open" class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex size-2 rounded-full" :class="status.open ? 'bg-emerald-400' : 'bg-white/40'" />
          </span>
          {{ status.label }}
        </div>
      </ClientOnly>

      <h1 class="leading-none">
        <span class="hero-in [animation-delay:250ms] block text-lg md:text-2xl font-display font-medium text-white/90 mb-2 md:mb-3">
          Club Hippique de
        </span>
        <span
          class="hero-in [animation-delay:400ms] block font-display tracking-[-0.03em] text-[clamp(3rem,15vw,5rem)] md:text-[clamp(4.5rem,8vw,8rem)] leading-[0.9] -ml-[0.04em]"
        >
          Colomiers
        </span>
      </h1>

      <div class="mt-6 md:mt-8 flex flex-col gap-6 md:gap-8">
        <p class="hero-in [animation-delay:600ms] max-w-md text-base md:text-lg text-white/80 leading-relaxed">
          Un centre équestre familial à 15 minutes de Toulouse, pour progresser
          à cheval du premier galop aux concours.
        </p>

        <div class="hero-in [animation-delay:750ms] flex items-center gap-3">
          <button
            type="button"
            class="group inline-flex items-center gap-3 rounded-full bg-brand-500 pl-6 pr-2 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-brand-400 cursor-pointer"
            @click="scrollToSection('formule', $event)"
          >
            Trouver ma formule
            <span class="size-9 rounded-full bg-white text-brand-600 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
              <UIcon name="i-ph-arrow-right-bold" class="size-4" />
            </span>
          </button>
          <!-- Mobile : simple bouton rond à côté du principal -->
          <a
            href="tel:0684809703"
            aria-label="Appeler le club"
            class="inline-flex size-[52px] items-center justify-center gap-2 rounded-full text-sm font-semibold ring-1 ring-white/30 hover:bg-white/10 transition-colors md:size-auto md:px-6 md:py-4"
          >
            <UIcon name="i-ph-phone-duotone" class="size-5" />
            <span class="hidden md:inline">Appeler le club</span>
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

.hero-in {
  opacity: 0;
  animation: hero-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes hero-zoom {
  from { transform: scale(1.15); }
  to { transform: scale(1.02); }
}

.hero-zoom {
  animation: hero-zoom 10s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .hero-in,
  .hero-zoom {
    animation: none;
    opacity: 1;
  }
}
</style>
