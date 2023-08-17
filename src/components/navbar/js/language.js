import { languageAtom } from '../../../store/store'

export function setLanguageButtonsListeners() {
  function setLanguage(e) {
    languageAtom.set(e.target.name)
    console.log('clic: ' + e.target.name)
  }
  const buttons = document.querySelectorAll('button.language')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => setLanguage(e))
  })
}
