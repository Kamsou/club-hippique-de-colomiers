<script setup>
const SITE_URL = 'https://clubhippiquedecolomiers.fr/'

useSeoMeta({
  title: 'Mentions légales | Club Hippique de Colomiers',
  description: 'Mentions légales et informations sur le traitement des données personnelles du Club Hippique de Colomiers (EARL Coutens), Colomiers (31770).',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: SITE_URL + 'mentions-legales' }]
})
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header -->
    <header class="border-b border-gray-200">
      <div class="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <NuxtLink to="/" class="shrink-0">
          <NuxtImg
            provider="cloudinary"
            src="v1754221336/chc/chc-final-removebg-preview_bqtqnj.png"
            alt="Logo Club Hippique de Colomiers"
            class="h-11 w-auto"
          />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
        >
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Retour à l'accueil
        </NuxtLink>
      </div>
    </header>

    <!-- Content -->
    <main class="flex-grow">
      <div class="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <div class="mb-4">
          <span class="text-primary tracking-[0.12em] text-xs font-medium">Informations légales</span>
        </div>
        <h1 class="font-display text-4xl md:text-5xl text-gray-900 tracking-tight mb-12">
          Mentions légales
        </h1>

        <div class="space-y-12 text-[15px] leading-relaxed text-gray-600">
          <!-- Éditeur -->
          <section>
            <h2 class="font-display text-2xl text-gray-900 mb-4">Éditeur du site</h2>
            <dl class="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6 gap-y-2">
              <dt class="font-medium text-gray-900">Dénomination</dt>
              <dd>EARL Coutens (Club Hippique de Colomiers)</dd>

              <dt class="font-medium text-gray-900">Forme juridique</dt>
              <dd>Exploitation agricole à responsabilité limitée (EARL)</dd>

              <dt class="font-medium text-gray-900">Capital social</dt>
              <dd>7 500 €</dd>

              <dt class="font-medium text-gray-900">Siège social</dt>
              <dd>Le Tinturier, Chemin Saint-Jean, 31770 Colomiers</dd>

              <dt class="font-medium text-gray-900">SIREN</dt>
              <dd>931 171 623</dd>

              <dt class="font-medium text-gray-900">SIRET (siège)</dt>
              <dd>931 171 623 00024</dd>

              <dt class="font-medium text-gray-900">RCS</dt>
              <dd>931 171 623 R.C.S. Toulouse</dd>

              <dt class="font-medium text-gray-900">N° TVA intracom.</dt>
              <dd>FR47 931 171 623</dd>

              <dt class="font-medium text-gray-900">Code APE</dt>
              <dd>85.51Z · Enseignement de disciplines sportives et d'activités de loisirs</dd>

              <dt class="font-medium text-gray-900">Directeur de la publication</dt>
              <dd>Maxime Coutens-Diallo, gérant</dd>

              <dt class="font-medium text-gray-900">Contact</dt>
              <dd>
                <a href="mailto:clubhippiquecolomiers@gmail.com" class="text-primary hover:underline">clubhippiquecolomiers@gmail.com</a>
                · <a href="tel:0684809703" class="text-primary hover:underline">06 84 80 97 03</a>
              </dd>
            </dl>
          </section>

          <!-- Hébergement -->
          <section>
            <h2 class="font-display text-2xl text-gray-900 mb-4">Hébergement</h2>
            <p>
              Le site est hébergé par <strong class="font-medium text-gray-900">Netlify, Inc.</strong>,
              512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis
              (<a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">netlify.com</a>).
            </p>
          </section>

          <!-- Propriété intellectuelle -->
          <section>
            <h2 class="font-display text-2xl text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, logo, mise en page) est la propriété
              du Club Hippique de Colomiers, sauf mention contraire. Toute reproduction ou réutilisation
              sans autorisation préalable est interdite. Les photographies d'illustration sont issues de
              banques d'images sous licence.
            </p>
          </section>

          <!-- Données personnelles -->
          <section>
            <h2 class="font-display text-2xl text-gray-900 mb-4">Données personnelles (RGPD)</h2>
            <p class="mb-3">
              Le formulaire de contact recueille vos nom, prénom, adresse e-mail, numéro de téléphone et
              le contenu de votre message. Ces données sont utilisées uniquement pour répondre à votre
              demande et ne sont ni cédées ni revendues à des tiers.
            </p>
            <p class="mb-3">
              Elles sont transmises par e-mail au club et conservées le temps nécessaire au traitement de
              votre demande.
            </p>
            <p>
              Conformément au Règlement général sur la protection des données, vous disposez d'un droit
              d'accès, de rectification et de suppression de vos données. Pour l'exercer, écrivez-nous à
              <a href="mailto:clubhippiquecolomiers@gmail.com" class="text-primary hover:underline">clubhippiquecolomiers@gmail.com</a>.
            </p>
          </section>

          <!-- Cookies -->
          <section>
            <h2 class="font-display text-2xl text-gray-900 mb-4">Cookies</h2>
            <p>
              Ce site ne dépose pas de cookie de suivi ni d'outil de mesure d'audience. Seuls les éléments
              techniques strictement nécessaires à son affichage sont utilisés.
            </p>
          </section>
        </div>
      </div>
    </main>

    <footer class="text-center py-10 bg-primary text-white/90">
      &copy; {{ new Date().getFullYear() }} Club Hippique de Colomiers - Tous droits réservés.
    </footer>
  </div>
</template>
