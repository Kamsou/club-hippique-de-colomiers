// Les sections ont assez de padding haut pour passer sous l'en-tête flottant
export const HEADER_OFFSET_PX = 0

export const scrollToSection = (sectionId, event) => {
  event?.preventDefault()
  const element = document.getElementById(sectionId)
  if (!element) return
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX,
    behavior: 'smooth'
  })
}

// Hauteur occupée par l'en-tête flottant, à garder libre au-dessus d'un élément
export const HEADER_SPACE_PX = 96

// Fait défiler juste assez pour que l'élément soit visible, seulement s'il ne l'est pas déjà
export const bringIntoView = (el) => {
  if (!el) return
  const rect = el.getBoundingClientRect()
  const viewport = window.innerHeight
  if (rect.top >= HEADER_SPACE_PX && rect.bottom <= viewport) return
  const fitsOnScreen = rect.height <= viewport - HEADER_SPACE_PX - 24
  const delta = rect.bottom > viewport && fitsOnScreen && rect.top >= HEADER_SPACE_PX
    ? rect.bottom - viewport + 24
    : rect.top - HEADER_SPACE_PX
  window.scrollTo({ top: window.scrollY + delta, behavior: 'smooth' })
}

export const isMobileLayout = () => window.innerWidth < 1024
