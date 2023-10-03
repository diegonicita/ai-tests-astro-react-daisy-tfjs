const font = localStorage.getItem('fontAtom')
var bodyElement = document.body
while (bodyElement.classList.length > 0) {
  bodyElement.classList.remove(bodyElement.classList.item(0))
}
var stringWithoutQuotes = font.replace(/^"(.*)"$/, '$1')
bodyElement.classList.add(stringWithoutQuotes)
