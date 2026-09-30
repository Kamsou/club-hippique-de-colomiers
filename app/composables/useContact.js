export const CONTACT_SUBJECTS = ['Cours', 'Stages', 'Pension', 'Autre']

// Sujet du formulaire partagé : les cartes de la page peuvent le pré-remplir
export const useContactSubject = () => useState('contact-subject', () => CONTACT_SUBJECTS[0])

export const useContactAbout = () => {
  const subject = useContactSubject()
  return (value) => {
    subject.value = value
    scrollToSection('contact')
  }
}
