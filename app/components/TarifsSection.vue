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
          { label: 'Trimestre', price: '200 €' },
          { label: 'Année', price: '600 €' },
          { label: 'Pack 10 séances', price: '300 €' }
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
          { label: 'Enfant / Adulte', price: '40 € / séance' }
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
      <div class="text-center mb-16">
        <h2 class="text-4xl font-playfair font-bold text-gray-900 mb-4">
          Tarifs 2025
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
          Découvrez nos tarifs transparents et adaptés à tous les niveaux.
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
            <h3 class="text-2xl font-playfair font-bold text-gray-900 mb-2">
              {{ section.title }}
            </h3>
            <p class="text-gray-600 font-inter">
              {{ section.subtitle }}
            </p>
          </div>

          <!-- Tarifs Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr max-w-4xl mx-auto">
            <div
              v-for="tarif in section.tarifs"
              :key="tarif.title"
              class="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col h-full"
            >
              <div class="px-4 py-5 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <UIcon :name="getIconForSection(tarif.title)" class="w-6 h-6 text-primary" />
                    <h4 class="text-lg font-semibold leading-tight text-gray-900">
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
                    class="flex justify-between items-center p-3"
                  >
                    <span class="text-gray-700 font-medium font-inter">{{ item.label }}</span>
                    <span class="text-lg font-bold text-primary">{{ item.price }}</span>
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

      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
                      <UIcon name="i-heroicons-heart" class="w-8 h-8 text-red-500 mr-3" />
          <h4 class="font-semibold text-gray-900 mb-2">Réduction Famille</h4>
          <p class="text-sm text-gray-600">Profitez de <strong class="text-primary">20% de réduction</strong> sur la cotisation annuelle pour tous les membres de la même famille !</p>
        </div>
        <div class="text-center">
          <UIcon name="i-heroicons-clock" class="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <h4 class="font-semibold text-gray-900 mb-2">Horaires Flexibles</h4>
          <p class="text-sm text-gray-600">Cours adaptés à votre emploi du temps</p>
        </div>
        <div class="text-center">
          <UIcon name="i-heroicons-academic-cap" class="w-8 h-8 text-gray-800 mx-auto mb-3" />
          <h4 class="font-semibold text-gray-900 mb-2">Instructeurs Qualifiés</h4>
          <p class="text-sm text-gray-600">Équipe professionnelle et expérimentée</p>
        </div>
      </div>
    </div>
  </section>
</template>
