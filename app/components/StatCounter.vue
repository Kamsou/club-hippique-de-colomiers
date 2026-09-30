<script setup>
const props = defineProps({
  value: { type: Number, required: true },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  label: { type: String, required: true }
})

const el = ref(null)
const display = ref(props.value)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  display.value = 0
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    observer.disconnect()
    const start = performance.now()
    const duration = 1600
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      display.value = Math.round(props.value * (1 - Math.pow(1 - t, 4)))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.5 })
  observer.observe(el.value)
})
</script>

<template>
  <div ref="el" class="border-t border-ink-900/15 pt-5">
    <div class="font-display text-5xl md:text-6xl tracking-[-0.03em] text-ink-900">
      {{ prefix }}{{ display }}<span class="text-brand-500">{{ suffix }}</span>
    </div>
    <div class="mt-2 text-sm font-semibold text-ink-900/60">{{ label }}</div>
  </div>
</template>
