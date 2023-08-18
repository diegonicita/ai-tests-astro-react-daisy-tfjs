import { fontAtom } from '../../../store/store'

export function setFontButtonsListeners() {
  function setFont(e) {
    fontAtom.set(e.target.name)
    console.log('clic: ' + e.target.name)
    var bodyElement = document.body
    bodyElement.classList.remove(bodyElement.classList.item(0))
    bodyElement.classList.add("font" + "-" + e.target.name)
  }
  const buttons = document.querySelectorAll('button.font')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => setFont(e))
  })
}
