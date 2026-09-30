<script setup>
const open = ref(0)
</script>

<template>
  <section id="faq" class="px-5 md:px-10 pt-20 md:pt-24 pb-28 md:pb-32">
    <div class="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
      <div>
        <h2 v-reveal="80" class="font-display text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02] text-ink-900">
          Questions <span class="text-brand-500">fréquentes</span>
        </h2>
        <p v-reveal="120" class="mt-5 text-ink-900/65 max-w-sm">
          Une autre question&nbsp;? Appelez-nous au
          <a href="tel:0684809703" class="font-semibold text-brand-600 whitespace-nowrap hover:underline">06 84 80 97 03</a>,
          on vous répond avec plaisir.
        </p>
      </div>

      <div v-reveal="150" class="flex flex-col gap-2">
        <div
          v-for="(item, i) in faqItems"
          :key="item.q"
          class="rounded-2xl bg-white ring-1 ring-ink-900/5 transition-shadow duration-300"
          :class="{ 'shadow-[0_20px_40px_-24px_rgba(6,20,27,0.3)]': open === i }"
        >
          <h3>
            <button
              :id="`faq-q-${i}`"
              type="button"
              class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink-900 cursor-pointer"
              :aria-expanded="open === i"
              :aria-controls="`faq-a-${i}`"
              @click="open = open === i ? -1 : i"
            >
              {{ item.q }}
              <span
                class="size-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                :class="open === i ? 'bg-brand-500 text-white rotate-45' : 'bg-brand-50 text-brand-600'"
              >
                <UIcon name="i-ph-plus-bold" class="size-4" />
              </span>
            </button>
          </h3>
          <!-- Réponse toujours présente dans le HTML pour le référencement -->
          <div
            :id="`faq-a-${i}`"
            role="region"
            :aria-labelledby="`faq-q-${i}`"
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :class="open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <p class="overflow-hidden px-5 text-ink-900/70 leading-relaxed" :class="open === i ? 'pb-5' : ''">
              {{ item.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
