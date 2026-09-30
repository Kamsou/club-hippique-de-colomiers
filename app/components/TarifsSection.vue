<script setup>
const activeKey = useTarifTab()

// Sur mobile les cartes sont sous les onglets : on les fait apparaître si elles sont hors écran
const selectTab = async (key) => {
  activeKey.value = key
  if (!isMobileLayout()) return
  await nextTick()
  const panel = document.getElementById(`panel-${key}`).getBoundingClientRect()
  if (panel.bottom > window.innerHeight) scrollToTarifTabs()
}

const notes = [
  { icon: 'i-ph-gift-duotone', text: '20 % de réduction famille sur la cotisation' },
  { icon: 'i-ph-info-duotone', text: 'Prix hors cotisation annuelle et licence FFE' }
]
</script>

<template>
  <section class="bg-sand-100 px-5 md:px-10 py-20 md:py-24">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div>
          <h2 v-reveal="80" class="font-display text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02] text-ink-900">
            Tarifs <span class="text-brand-500">{{ TARIF_SEASON }}</span>
          </h2>
        </div>

        <!-- Onglets -->
        <div
          v-reveal="120"
          class="flex w-full lg:w-auto shrink-0 overflow-x-auto rounded-full bg-white p-1.5 ring-1 ring-ink-900/10 [scrollbar-width:none]"
          id="tarifs-onglets"
          role="tablist"
          aria-label="Catégories de tarifs"
        >
          <button
            v-for="section in tarifSections"
            :id="`tab-${section.key}`"
            :key="section.key"
            type="button"
            role="tab"
            :aria-selected="activeKey === section.key"
            :aria-controls="`panel-${section.key}`"
            class="relative flex-1 lg:flex-none whitespace-nowrap rounded-full px-3.5 md:px-5 py-2.5 text-sm font-semibold transition-colors duration-300 cursor-pointer"
            :class="activeKey === section.key ? 'text-white' : 'text-ink-900/60 hover:text-ink-900'"
            @click="selectTab(section.key)"
          >
            <span
              v-if="activeKey === section.key"
              class="absolute inset-0 rounded-full bg-brand-500 tab-pill"
              aria-hidden="true"
            />
            <span class="relative">{{ section.title }}</span>
          </button>
        </div>
      </div>

      <!-- Tous les onglets restent dans le HTML (lisibles par Google), seul l'actif est affiché -->
      <Transition
        v-for="section in tarifSections"
        :key="section.key"
        enter-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        enter-from-class="opacity-0 translate-y-4"
      >
        <div
          v-show="activeKey === section.key"
          :id="`panel-${section.key}`"
          role="tabpanel"
          :aria-labelledby="`tab-${section.key}`"
          class="-mx-5 px-5 -my-2 py-2 flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden md:my-0 md:py-0 scroll-px-5 [scrollbar-width:none] gap-3 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:overflow-visible md:gap-4"
          :class="section.tarifs.length > 2 ? 'lg:grid-cols-4' : ''"
        >
          <article
            v-for="tarif in section.tarifs"
            :key="tarif.title"
            class="group relative flex w-[85%] shrink-0 snap-start flex-col rounded-[1.75rem] bg-white p-6 md:w-auto ring-1 ring-ink-900/5 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(6,20,27,0.35)]"
          >
            <div class="flex items-start justify-between gap-3">
              <span class="size-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white group-hover:-rotate-6">
                <UIcon :name="tarif.icon" class="size-6" />
              </span>
              <span v-if="tarif.tag" class="rounded-full bg-prairie-100 text-prairie-600 px-3 py-1 text-xs font-semibold">
                {{ tarif.tag }}
              </span>
            </div>
            <h3 class="mt-4 font-display text-2xl tracking-[-0.02em] leading-none text-ink-900">{{ tarif.title }}</h3>

            <dl class="mt-4 flex-1">
              <div
                v-for="item in tarif.items"
                :key="item.label"
                class="flex items-baseline gap-3 py-2"
              >
                <dt class="text-sm text-ink-900/70" :class="{ 'lg:text-[13px]': section.tarifs.length > 2 }">{{ item.label }}</dt>
                <span
                  class="flex-1 min-w-4 border-b-2 border-dotted border-ink-900/15 -translate-y-1"
                  :class="{ 'lg:invisible lg:min-w-0': section.tarifs.length > 2 }"
                  aria-hidden="true"
                />
                <dd class="font-display text-xl text-ink-900 whitespace-nowrap">
                  {{ item.price }}<span v-if="item.unit" class="text-sm font-sans font-medium text-ink-900/50">&nbsp;{{ item.unit }}</span>
                </dd>
              </div>
            </dl>

            <p v-if="tarif.note" class="mt-3 flex items-start gap-2 text-sm font-medium text-prairie-600">
              <UIcon name="i-ph-star-four-fill" class="size-3.5 mt-0.5 shrink-0" />
              {{ tarif.note }}
            </p>
          </article>
        </div>
      </Transition>

      <ul class="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        <li v-for="note in notes" :key="note.text" class="flex items-center gap-2.5 text-sm font-medium text-ink-900/75">
          <span class="size-8 rounded-full bg-white text-brand-500 flex items-center justify-center">
            <UIcon :name="note.icon" class="size-5" />
          </span>
          {{ note.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
@keyframes pill-in {
  from { transform: scale(0.85); opacity: 0.4; }
  to { transform: none; opacity: 1; }
}

.tab-pill {
  animation: pill-in 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
