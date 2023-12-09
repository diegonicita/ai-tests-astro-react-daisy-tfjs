const font = localStorage.getItem('fontAtom')
const bodyElement = document.body
while (bodyElement.classList.length > 0) {
  bodyElement.classList.remove(bodyElement.classList.item(0))
}
const stringWithoutQuotes = font?.replace(/^"(.*)"$/, '$1')
bodyElement.classList.add(stringWithoutQuotes)
