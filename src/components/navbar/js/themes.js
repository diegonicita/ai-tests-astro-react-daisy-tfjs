import { themeAtom } from '../../../store/store'

export function setThemeButtonsListeners() {
  function toggleTheme(e) {
    document.documentElement.setAttribute('data-theme', e.target.name)
    localStorage.setItem('theme', e.target.name)
    themeAtom.set(e.target.name)
  }
  const buttons = document.querySelectorAll('button.theme')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => toggleTheme(e))
  })
}