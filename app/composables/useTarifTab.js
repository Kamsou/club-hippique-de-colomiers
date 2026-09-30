// Onglet actif de la grille tarifaire, partagé pour pouvoir l'ouvrir depuis d'autres sections
export const useTarifTab = () => useState('tarif-tab', () => tarifSections[0].key)

export const useShowTarifs = () => {
  const tab = useTarifTab()
  return (key) => {
    tab.value = key
    scrollToSection('tarifs')
  }
}
