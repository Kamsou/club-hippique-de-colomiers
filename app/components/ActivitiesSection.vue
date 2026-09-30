<script setup>
const showTarifs = useShowTarifs()

const activities = [
  {
    title: 'Poney Club',
    text: 'Apprentissage ludique et sécurisé les mercredis et samedis pour nos jeunes cavaliers. Dès 4 ans avec les Petits Jockeys.',
    icon: 'i-chc-horse-profile',
    tab: 'cours',
    tags: ['Mercredi', 'Samedi', 'Dès 4 ans'],
    price: '220 €',
    unit: 'le trimestre'
  },
  {
    title: 'Pensions',
    text: 'Box spacieux, paddocks et soins quotidiens dans un cadre naturel.',
    icon: 'i-ph-barn-duotone',
    tab: 'pensions',
    price: '300 €',
    unit: '/ mois',
    chip: 'bg-prairie-100 text-prairie-600'
  },
  {
    title: 'Propriétaires',
    text: 'Perfectionnement avec votre monture, sur le plat et à l\'obstacle.',
    icon: 'i-ph-trophy-duotone',
    tab: 'cours',
    price: '20 €',
    unit: 'la séance',
    chip: 'bg-brand-50 text-brand-600'
  },
  {
    title: 'Cours particuliers',
    text: 'Un accompagnement sur-mesure pour progresser selon vos objectifs.',
    icon: 'i-ph-target-duotone',
    tab: 'cours',
    price: '40 €',
    unit: 'la séance',
    chip: 'bg-brand-50 text-brand-600'
  },
  {
    title: 'Stages vacances',
    text: 'À la demi-journée ou à la semaine, ouverts à tous.',
    icon: 'i-ph-sun-horizon-duotone',
    tab: 'stages',
    price: '35 €',
    unit: 'la demi-journée',
    chip: 'bg-butter-100 text-ink-900'
  }
]

const [featured, ...others] = activities
</script>

<template>
  <section id="activites" class="px-5 md:px-10 pt-20 md:pt-[5.5rem] pb-16">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 v-reveal class="font-display text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02] text-ink-900">
          Cinq façons de <span class="text-brand-500">monter</span>.
          </h2>
        </div>
        <p v-reveal="100" class="max-w-sm text-ink-900/65">
          Au club de Colomiers, des formules pensées pour chaque cavalier, de l'enfant qui découvre au propriétaire qui prépare ses concours.
        </p>
      </div>

      <!-- Mobile : l'offre principale en pleine largeur, puis un carrousel des autres.
           Tablette et plus : une seule grille (le carrousel devient transparent avec md:contents).
           Chaque carte ouvre l'onglet correspondant de la grille tarifaire. -->
      <div class="flex flex-col gap-3 md:grid md:grid-cols-4 md:grid-rows-[repeat(2,minmax(200px,auto))] md:gap-4">
        <!-- Offre principale -->
        <a
          v-reveal
          href="#tarifs"
          class="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-brand-500 p-6 md:p-7 text-white md:w-auto md:col-span-2 md:row-span-2 transition-transform duration-500 md:hover:-translate-y-1"
          @click.prevent="showTarifs(featured.tab)"
        >
          <div class="relative flex items-start justify-between">
            <span class="flex size-14 items-center justify-center rounded-2xl bg-white/15">
              <UIcon :name="featured.icon" class="size-8" aria-hidden="true" />
            </span>
            <span class="flex size-10 items-center justify-center rounded-full bg-white text-brand-600 transition-transform duration-500 group-hover:-rotate-45" aria-hidden="true">
              <UIcon name="i-ph-arrow-right-bold" class="size-4" />
            </span>
          </div>
          <div class="relative mt-6 md:mt-10">
            <h3 class="font-display text-4xl md:text-6xl tracking-[-0.03em] leading-none">{{ featured.title }}</h3>
            <p class="mt-3 max-w-md leading-relaxed text-white/80 md:text-lg">{{ featured.text }}</p>
            <p class="mt-5 text-white/75">
              dès <span class="font-display text-3xl text-white">{{ featured.price }}</span>&nbsp;{{ featured.unit }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tag in featured.tags" :key="tag" class="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                {{ tag }}
              </span>
            </div>
          </div>
        </a>

        <!-- Offres complémentaires -->
        <div class="-mx-5 px-5 -my-2 py-2 flex gap-3 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-px-5 [scrollbar-width:none] md:contents">
        <a
          v-for="(a, i) in others"
          :key="a.title"
          v-reveal="(i + 1) * 80"
          href="#tarifs"
          class="group relative flex w-[82%] shrink-0 snap-start flex-col rounded-[1.75rem] bg-white p-6 text-ink-900 ring-1 ring-ink-900/5 md:w-auto transition-all duration-500 md:hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(6,20,27,0.35)]"
          @click.prevent="showTarifs(a.tab)"
        >
          <div class="flex items-start justify-between">
            <span class="flex size-11 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6" :class="a.chip">
              <UIcon :name="a.icon" class="size-6" aria-hidden="true" />
            </span>
            <span class="flex size-9 items-center justify-center rounded-full bg-sand-100 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white group-hover:-rotate-45" aria-hidden="true">
              <UIcon name="i-ph-arrow-right-bold" class="size-4" />
            </span>
          </div>
          <h3 class="mt-5 font-display text-2xl tracking-[-0.03em] leading-none">{{ a.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-ink-900/65">{{ a.text }}</p>
          <!-- Prix de départ calé en bas : remplit la carte quand elle s'étire dans le carrousel -->
          <p class="mt-auto pt-5 text-sm text-ink-900/60">
            dès <span class="font-display text-2xl text-ink-900">{{ a.price }}</span>&nbsp;{{ a.unit }}
          </p>
        </a>
        </div>
      </div>
    </div>
  </section>
</template>
