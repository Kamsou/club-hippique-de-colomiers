export const TARIF_SEASON = '2026-2027'

export const tarifSections = [
  {
    key: 'cours',
    title: 'Cours',
    subtitle: 'Formules adaptées à tous les niveaux',
    tarifs: [
      {
        title: 'Cours Poney Club',
        icon: 'i-ph-users-three-duotone',
        items: [
          { label: 'Trimestre (1 cours/sem.)', price: '220 €' },
          { label: 'Année (1 cours/sem.)', price: '660 €' },
          { label: 'Année (2 cours/sem.)', price: '1250 €' }
        ],
        tag: 'Enfants'
      },
      {
        title: 'Cours Petits Jockeys',
        icon: 'i-ph-baby-duotone',
        items: [
          { label: 'Année', price: '500 €' },
          { label: 'Unité', price: '15 €' }
        ],
        tag: '4-6 ans',
        note: 'Première approche ludique pour les tout-petits'
      },
      {
        title: 'Cours particuliers',
        icon: 'i-ph-user-duotone',
        items: [
          { label: 'À la séance', price: '40 €' },
          { label: 'Carte 10 cours', price: '350 €' }
        ],
        note: 'Progression personnalisée et accélérée'
      },
      {
        title: 'Cours propriétaires',
        icon: 'i-chc-horse-profile',
        items: [
          { label: 'Particulier (enfants et adultes)', price: '40 €' },
          { label: 'Collectif (enfants et adultes)', price: '20 €' }
        ],
        note: 'Perfectionnement avec votre propre cheval'
      }
    ]
  },
  {
    key: 'stages',
    title: 'Stages',
    subtitle: 'Formules à la carte pendant les vacances',
    tarifs: [
      {
        title: 'Adhérents',
        icon: 'i-ph-sun-duotone',
        items: [
          { label: 'Demi-journée', price: '35 €' },
          { label: 'Journée', price: '65 €' },
          { label: '5 demi-journées', price: '160 €' },
          { label: '5 journées', price: '300 €' }
        ],
        note: 'Tarifs préférentiels pour nos adhérents'
      },
      {
        title: 'Non-adhérents',
        icon: 'i-ph-sun-horizon-duotone',
        items: [
          { label: 'Demi-journée', price: '40 €' },
          { label: 'Journée', price: '70 €' },
          { label: '5 demi-journées', price: '180 €' },
          { label: '5 journées', price: '320 €' }
        ],
        note: 'Accessible à tous, avec ou sans adhésion'
      }
    ]
  },
  {
    key: 'pensions',
    title: 'Pensions',
    subtitle: 'Hébergement et locations pour vos équidés',
    tarifs: [
      {
        title: 'Pensions équidés',
        icon: 'i-ph-barn-duotone',
        items: [
          { label: 'Box + Paddock', price: '450 €', unit: '/ mois' },
          { label: 'Pré (troupeau)', price: '300 €', unit: '/ mois' }
        ],
        note: 'Soins et alimentation inclus'
      },
      {
        title: 'Location équidé',
        icon: 'i-ph-calendar-dots-duotone',
        items: [
          { label: 'Pension complète', price: '600 €', unit: '/ mois' },
          { label: 'Demi-pension', price: '300 €', unit: '/ mois' }
        ]
      }
    ]
  },
  {
    key: 'adhesion',
    title: 'Adhésion',
    subtitle: 'Cotisations et licences obligatoires',
    tarifs: [
      {
        title: 'Cotisation annuelle',
        icon: 'i-ph-identification-card-duotone',
        items: [
          { label: 'Adulte', price: '165 €' },
          { label: 'Enfant', price: '150 €' },
          { label: 'Externe', price: '180 €' }
        ],
        tag: 'Obligatoire',
        note: 'Réduction de 20% pour les membres de la même famille'
      },
      {
        title: 'Licence FFE',
        icon: 'i-ph-file-text-duotone',
        items: [
          { label: 'Majeur', price: '40 €' },
          { label: 'Mineur', price: '29 €' }
        ],
        note: 'Obligatoire pour participer aux compétitions'
      }
    ]
  }
]
