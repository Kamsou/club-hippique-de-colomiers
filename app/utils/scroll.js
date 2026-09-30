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
