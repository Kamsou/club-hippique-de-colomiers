<script setup>
const tarifs = [
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
  },
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

const getIconForSection = (title) => {
  const iconMap = {
    'Cotisation annuelle': 'i-heroicons-identification',
    'Licence FFE': 'i-heroicons-document-text',
    'Cours Poney Club': 'i-heroicons-users',
    'Cours Petits Jockeys': 'i-heroicons-face-smile',
    'Cours particuliers': 'i-heroicons-user',
    'Pensions équidés': 'i-heroicons-home',
    'Location équidé': 'i-heroicons-calendar',
    'Cours propriétaires': 'i-heroicons-academic-cap'
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

      <!-- Tarifs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        <div
          v-for="section in tarifs"
          :key="section.title"
          class="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col h-full"
        >
          <!-- Header -->
          <div class="px-6 py-5 border-b border-gray-200">
            <div class="flex items-center justify-between py-2">
              <div class="flex items-center space-x-3 px-3">
                <UIcon :name="getIconForSection(section.title)" class="w-6 h-6 text-primary" />
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ section.title }}
                </h3>
              </div>
              <UBadge v-if="section.highlight" :color="section.highlight.color" variant="subtle" class="text-sm">
                {{ section.highlight.text }}
              </UBadge>
            </div>
          </div>

          <!-- Body -->
          <div class="px-6 py-6 flex-grow">
            <div class="space-y-1">
              <div
                v-for="item in section.items"
                :key="item.label"
                class="flex justify-between items-center p-3"
              >
                <span class="text-gray-700 font-medium font-inter">{{ item.label }}</span>
                <span class="text-lg font-bold text-primary">{{ item.price }}</span>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div v-if="section.note" class="px-6 py-5 border-t border-gray-200 mt-auto">
            <UAlert
              :title="section.note"
              :icon="section.noteIcon || 'i-heroicons-information-circle'"
              color="blue"
              variant="subtle"
              class="border-0 flex items-center justify-center gap-4 text-center my-4 px-2"
            />
          </div>
        </div>
      </div>

      <!-- Garanties -->
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
