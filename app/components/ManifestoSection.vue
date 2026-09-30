<template>
  <!-- Remonte sur le bas du hero : son bord arrondi dépasse et invite à faire défiler -->
  <section id="presentation" class="relative z-10 -mt-8 md:-mt-20 rounded-t-[2.5rem] md:rounded-t-[4rem] bg-sand-50 px-5 md:px-10 pt-20 md:pt-28 pb-4 md:pb-6">
    <div class="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-12 lg:gap-20 lg:items-center">
      <p v-reveal class="font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-ink-900">
        Du premier galop aux parcours de <span class="text-brand-500">concours</span>, chaque cavalier
        avance à son rythme, entouré d'une équipe diplômée et passionnée.
      </p>

      <div class="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-8">
        <StatCounter v-reveal="100" :value="15" suffix="+" label="Années d'expérience" />
        <StatCounter v-reveal="200" :value="200" suffix="+" label="Cavaliers formés" />
      </div>
    </div>
  </section>
</template>
