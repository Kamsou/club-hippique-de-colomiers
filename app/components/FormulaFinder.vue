<script setup>
const contactAbout = useContactAbout()
const showTarifs = useShowTarifs()

const profiles = [
  {
    key: 'tout-petit',
    icon: 'i-ph-baby-duotone',
    label: 'Mon enfant a 4 à 6 ans',
    formula: 'Petits Jockeys',
    pitch: 'Une première approche tout en douceur : jeux, soins aux poneys et premiers pas en selle.',
    price: '15 €',
    priceNote: 'la séance · 500 € l\'année',
    subject: 'Cours',
    tab: 'cours'
  },
  {
    key: 'enfant',
    icon: 'i-ph-backpack-duotone',
    label: 'Mon enfant a plus de 6 ans',
    formula: 'Poney Club',
    pitch: 'Des cours collectifs les mercredis et samedis pour progresser, galop après galop, avec les copains.',
    price: '220 €',
    priceNote: 'le trimestre · 1 cours / semaine',
    subject: 'Cours',
    tab: 'cours'
  },
  {
    key: 'adulte',
    icon: 'i-ph-target-duotone',
    label: 'Je veux un cours rien que pour moi',
    formula: 'Cours particuliers',
    pitch: 'Un moniteur rien que pour vous, un programme calé sur vos objectifs, du plat à l\'obstacle.',
    price: '40 €',
    priceNote: 'la séance · 350 € la carte de 10',
    subject: 'Cours',
    tab: 'cours'
  },
  {
    key: 'proprio',
    icon: 'i-chc-horse-profile',
    label: 'J\'ai mon propre cheval',
    formula: 'Pension et cours',
    pitch: 'Box et paddock, soins et alimentation inclus, et un encadrement pour le faire progresser.',
    price: '450 €',
    priceNote: 'par mois en box + paddock · cours dès 20 €',
    subject: 'Pension',
    tab: 'pensions'
  },
  {
    key: 'vacances',
    icon: 'i-ph-sun-duotone',
    label: 'Juste pendant les vacances',
    formula: 'Stages vacances',
    pitch: 'À la demi-journée, à la journée ou à la semaine, avec ou sans adhésion au club.',
    price: '35 €',
    priceNote: 'la demi-journée pour les adhérents · 40 € sinon',
    subject: 'Stages',
    tab: 'stages'
  }
]

const selected = ref(profiles[1].key)
const current = computed(() => profiles.find((p) => p.key === selected.value))
</script>

<template>
  <section id="formule" class="relative bg-ink-950 text-white px-5 md:px-10 py-20 md:py-24 overflow-hidden">
    <!-- Halos décoratifs -->
    <div class="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-brand-500/30 blur-[120px]" aria-hidden="true" />
    <div class="pointer-events-none absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-prairie-400/15 blur-[120px]" aria-hidden="true" />

    <div class="relative mx-auto max-w-6xl">
      <h2 v-reveal="80" class="font-display text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02]">
        Quelle formule pour <span class="text-brand-300">vous</span>&nbsp;?
      </h2>

      <div class="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start">
        <!-- Choix du profil -->
        <div v-reveal="120" class="flex flex-col gap-2" role="radiogroup" aria-label="Votre profil">
          <button
            v-for="p in profiles"
            :key="p.key"
            type="button"
            role="radio"
            :aria-checked="selected === p.key"
            class="group flex items-center gap-4 rounded-2xl p-2.5 pr-5 text-left text-base md:text-lg font-medium transition-all duration-300 cursor-pointer"
            :class="selected === p.key
              ? 'bg-white text-ink-950'
              : 'bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white'"
            @click="selected = p.key"
          >
            <span
              class="size-11 shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:-rotate-6"
              :class="selected === p.key ? 'bg-brand-500 text-white' : 'bg-white/10 text-brand-200'"
            >
              <UIcon :name="p.icon" class="size-6" aria-hidden="true" />
            </span>
            <span class="flex-1">{{ p.label }}</span>
            <UIcon
              name="i-ph-arrow-right-bold"
              class="size-5 transition-all duration-300"
              :class="selected === p.key ? 'opacity-100 text-brand-500' : 'opacity-0 -translate-x-2'"
            />
          </button>
        </div>

        <!-- Recommandation -->
        <div v-reveal="200" aria-live="polite">
          <Transition
            mode="out-in"
            enter-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            enter-from-class="opacity-0 translate-y-6 rotate-1"
            leave-active-class="transition duration-200"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div :key="current.key" class="relative overflow-hidden rounded-[2rem] bg-brand-500 text-white p-7 md:p-9">
              <p class="relative text-sm font-semibold text-white/85">On vous conseille</p>
              <h3 class="relative mt-5 font-display text-4xl md:text-5xl tracking-[-0.03em] leading-[1]">
                {{ current.formula }}
              </h3>
              <p class="relative mt-4 text-lg leading-relaxed text-white/85 max-w-md">{{ current.pitch }}</p>

              <div class="relative mt-6 pt-5 border-t-2 border-dashed border-white/30 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <div class="text-sm font-semibold text-white/70">À partir de</div>
                  <div class="font-display text-5xl tracking-[-0.03em] leading-none mt-1">{{ current.price }}</div>
                  <div class="mt-2 text-sm font-medium text-white/75">{{ current.priceNote }}</div>
                </div>
                <button
                  type="button"
                  class="group inline-flex items-center gap-3 rounded-full bg-white text-brand-600 pl-6 pr-2 py-2 text-sm font-semibold hover:bg-brand-50 transition-colors cursor-pointer"
                  @click="contactAbout(current.subject)"
                >
                  Ça m'intéresse
                  <span class="size-9 rounded-full bg-brand-500 text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
                    <UIcon name="i-ph-arrow-right-bold" class="size-4" />
                  </span>
                </button>
              </div>
            </div>
          </Transition>
          <p class="mt-3 text-sm text-white/50">
            Prix hors cotisation annuelle et licence FFE. Tous les détails dans
            <a href="#tarifs" class="py-2 underline underline-offset-4 hover:text-white" @click.prevent="showTarifs(current.tab)">la grille tarifaire</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
