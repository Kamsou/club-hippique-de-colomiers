// Directive v-reveal : fait apparaître un élément quand il entre dans l'écran.
// Usage : v-reveal ou v-reveal="150" (délai en ms)
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  if (import.meta.client) {
    document.documentElement.classList.add('reveal-ready')
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
  }

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: (binding) => ({
      'data-reveal': '',
      style: binding.value ? `--reveal-delay:${binding.value}ms` : undefined
    }),
    mounted(el, binding) {
      el.setAttribute('data-reveal', '')
      if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      observer?.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    }
  })
})
