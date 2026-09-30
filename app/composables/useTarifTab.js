// Onglet actif de la grille tarifaire, partagé pour pouvoir l'ouvrir depuis d'autres sections
export const useTarifTab = () => useState('tarif-tab', () => tarifSections[0].key)

// Sur mobile, cale les onglets juste sous le menu : les cartes apparaissent dessous
export const scrollToTarifTabs = () => {
  const tabs = document.getElementById('tarifs-onglets')
  window.scrollTo({ top: tabs.getBoundingClientRect().top + window.scrollY - HEADER_SPACE_PX, behavior: 'smooth' })
}

export const useShowTarifs = () => {
  const tab = useTarifTab()
  return (key) => {
    tab.value = key
    if (isMobileLayout()) scrollToTarifTabs()
    else scrollToSection('tarifs')
  }
}
