<script setup>
const tarifSections = {
  adhesion: {
    title: 'Adhésion & Licences',
    subtitle: 'Cotisations et licences obligatoires',
    tarifs: [
      {
        title: 'Cotisation annuelle',
        items: [
          { label: 'Adulte', price: '165 €' },
          { label: 'Enfant', price: '150 €' },
          { label: 'Externe', price: '180 €' }
        ],
        note: 'Réduction de 20% pour les membres de la même famille',
        noteIcon: 'i-heroicons-gift',
        highlight: { text: 'Populaire', color: 'green' }
      },
      {
        title: 'Licence FFE',
        items: [
          { label: 'Majeur', price: '40 €' },
          { label: 'Mineur', price: '29 €' }
        ],
        note: 'Obligatoire pour participer aux compétitions',
        noteIcon: 'i-heroicons-document-check'
      }
    ]
  },
  cours: {
    title: 'Cours',
    subtitle: 'Formules adaptées à tous les niveaux',
    tarifs: [
      {
        title: 'Cours Poney Club',
        items: [
          { label: 'Trimestre (1 cours/sem.)', price: '220 €' },
          { label: 'Année (1 cours/sem.)', price: '660 €' },
          { label: 'Année (2 cours/sem.)', price: '1250 €' }
        ],
        highlight: { text: 'Enfants', color: 'blue' }
      },
      {
        title: 'Cours Petits Jockeys',
        items: [
          { label: 'Année', price: '500 €' },
          { label: 'Unité', price: '15 €' }
        ],
        highlight: { text: '4-6 ans', color: 'pink' },
        note: 'Première approche ludique pour les tout-petits',
        noteIcon: 'i-heroicons-heart'
      },
      {
        title: 'Cours particuliers',
        items: [
          { label: 'À la séance', price: '40 €' },
          { label: 'Carte 10 cours', price: '350 €' }
        ],
        note: 'Progression personnalisée et accélérée',
        noteIcon: 'i-heroicons-star'
      },
      {
        title: 'Cours propriétaires',
        items: [
          { label: 'Particulier (enfants et adultes)', price: '30 €' },
          { label: 'Collectif (enfants et adultes)', price: '20 €' }
        ],
        note: 'Perfectionnement avec votre propre cheval',
        noteIcon: 'i-heroicons-academic-cap'
      }
    ]
  },
  stages: {
    title: 'Stages',
    subtitle: 'Formules à la carte pendant les vacances',
    tarifs: [
      {
        title: 'Adhérents',
        items: [
          { label: 'Demi-journée', price: '35 €' },
          { label: 'Journée', price: '65 €' },
          { label: '5 demi-journées', price: '160 €' },
          { label: '5 journées', price: '300 €' }
        ],
        highlight: { text: 'Adhérents', color: 'green' },
        note: 'Tarifs préférentiels pour nos adhérents',
        noteIcon: 'i-heroicons-star'
      },
      {
        title: 'Non-adhérents',
        items: [
          { label: 'Demi-journée', price: '40 €' },
          { label: 'Journée', price: '70 €' },
          { label: '5 demi-journées', price: '180 €' },
          { label: '5 journées', price: '320 €' }
        ],
        highlight: { text: 'Non-adhérents', color: 'gray' },
        note: 'Accessible à tous, avec ou sans adhésion',
        noteIcon: 'i-heroicons-user-group'
      }
    ]
  },
  pensions: {
    title: 'Pensions & Locations',
    subtitle: 'Hébergement et locations pour vos équidés',
    tarifs: [
      {
        title: 'Pensions équidés',
        items: [
          { label: 'Box + Paddock', price: '450 € / mois' },
          { label: 'Pré (troupeau)', price: '300 € / mois' }
        ],
        note: 'Soins et alimentation inclus',
        noteIcon: 'i-heroicons-heart'
      },
      {
        title: 'Location équidé',
        items: [
          { label: 'Pension complète', price: '600 € / mois' },
          { label: 'Demi-pension', price: '300 € / mois' }
        ],
        highlight: { text: 'Flexible', color: 'amber' }
      }
    ]
  }
}

const getIconForSection = (title) => {
  const iconMap = {
    'Cotisation annuelle': 'i-heroicons-identification',
    'Licence FFE': 'i-heroicons-document-text',
    'Cours Poney Club': 'i-heroicons-users',
    'Cours Petits Jockeys': 'i-heroicons-face-smile',
    'Cours particuliers': 'i-heroicons-user',
    'Pensions équidés': 'i-heroicons-home',
    'Location équidé': 'i-heroicons-calendar',
    'Cours propriétaires': 'i-heroicons-academic-cap',
    'Adhérents': 'i-heroicons-sun',
    'Non-adhérents': 'i-heroicons-sun'
  }
  return iconMap[title] || 'i-heroicons-currency-euro'
}
</script>


<template>
  <section id="tarifs" class="py-24 bg-gradient-to-br from-[#F4F1EE] to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Header -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <div class="mb-5">
          <span class="text-primary tracking-[0.12em] text-xs font-medium">Nos tarifs</span>
        </div>
        <h2 class="font-display text-4xl md:text-5xl text-gray-900 tracking-tight">
          Tarifs <span class="italic">2025</span>
        </h2>
        <p class="mt-5 text-lg text-gray-500">
          Des tarifs transparents et adaptés à tous les niveaux.
        </p>
      </div>

      <!-- Sections de tarifs -->
      <div class="space-y-16">
        <div
          v-for="(section, key) in tarifSections"
          :key="key"
          class="space-y-6"
        >
          <!-- Section Header -->
          <div class="text-center mb-8">
            <h3 class="font-display text-2xl md:text-3xl text-gray-900 mb-2">
              {{ section.title }}
            </h3>
            <p class="text-gray-500">
              {{ section.subtitle }}
            </p>
          </div>

          <!-- Tarifs Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr max-w-4xl mx-auto">
            <div
              v-for="tarif in section.tarifs"
              :key="tarif.title"
              class="bg-white rounded-2xl border border-gray-200/80 hover:border-primary/30 hover:shadow-xl hover:shadow-gray-200/60 transition duration-300 overflow-hidden flex flex-col h-full"
            >
              <div class="px-5 py-5 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="w-9 h-9 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <UIcon :name="getIconForSection(tarif.title)" class="w-5 h-5" />
                    </span>
                    <h4 class="font-display text-lg leading-tight text-gray-900">
                      {{ tarif.title }}
                    </h4>
                  </div>
                  <UBadge v-if="tarif.highlight" :color="tarif.highlight.color" variant="subtle" class="text-xs">
                    {{ tarif.highlight.text }}
                  </UBadge>
                </div>
              </div>

              <div class="px-6 py-6 flex-grow">
                <div class="space-y-1">
                  <div
                    v-for="item in tarif.items"
                    :key="item.label"
                    class="flex justify-between items-center py-2.5 px-3 border-b border-gray-50 last:border-0"
                  >
                    <span class="text-gray-600">{{ item.label }}</span>
                    <span class="font-display text-lg text-primary whitespace-nowrap pl-3">{{ item.price }}</span>
                  </div>
                </div>
              </div>

              <div v-if="tarif.note" class="px-4 border-t border-gray-200 mt-auto">
                <UAlert
                  :title="tarif.note"
                  :icon="tarif.noteIcon || 'i-heroicons-information-circle'"
                  color="blue"
                  variant="subtle"
                  class="border-0 flex items-center justify-center gap-4 text-center my-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 pt-16 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="text-center">
          <span class="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-heroicons-gift" class="w-6 h-6" />
          </span>
          <h4 class="font-display text-lg text-gray-900 mb-2">Réduction famille</h4>
          <p class="text-sm text-gray-500 leading-relaxed">Profitez de <strong class="text-primary font-medium">20% de réduction</strong> sur la cotisation annuelle pour tous les membres d'une même famille.</p>
        </div>
        <div class="text-center">
          <span class="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-heroicons-clock" class="w-6 h-6" />
          </span>
          <h4 class="font-display text-lg text-gray-900 mb-2">Horaires flexibles</h4>
          <p class="text-sm text-gray-500 leading-relaxed">Des cours adaptés à votre emploi du temps.</p>
        </div>
        <div class="text-center">
          <span class="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-heroicons-academic-cap" class="w-6 h-6" />
          </span>
          <h4 class="font-display text-lg text-gray-900 mb-2">Instructeurs qualifiés</h4>
          <p class="text-sm text-gray-500 leading-relaxed">Une équipe professionnelle et expérimentée.</p>
        </div>
      </div>
    </div>
  </section>
</template>
