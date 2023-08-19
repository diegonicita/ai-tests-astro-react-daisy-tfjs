import { fontAtom } from '../../../store/store'

export function setFontButtonsListeners() {
  function setFont(e) {
    fontAtom.set(e.target.name)
    console.log('clic: ' + e.target.name)
    var bodyElement = document.body
    while (bodyElement.classList.length > 0) {
      bodyElement.classList.remove(bodyElement.classList.item(0))
    }
    bodyElement.classList.add(e.target.name)
    console.log(bodyElement.classList)
  }
  const buttons = document.querySelectorAll('button.font')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => setFont(e))
  })
}
