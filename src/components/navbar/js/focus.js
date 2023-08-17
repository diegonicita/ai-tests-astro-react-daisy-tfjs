export function setListItemToLostFocusOnClick() {
  const dropdownContent = document.querySelectorAll('.dropdown-content>li')
  dropdownContent.forEach((element) => {
    element.addEventListener('click', () => {
      // document.activeElement.blur()
      document.body.focus()
    })
  })
}

export function setButtonGroupHorizontalLostFocusOnMouseOver() {
    let focusedLabel = null // Almacena el label con enfoque
    const labels = document.querySelectorAll('.btn-group-horizontal')
    labels.forEach((label) => {
      label.addEventListener('mouseover', () => {
        if (focusedLabel) {
          focusedLabel.blur()
        }
        focusedLabel = label
      })
    })
  }
