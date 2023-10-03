if (localStorage.getItem('theme') === null) {
  document.documentElement.setAttribute('data-theme', 'light')
} else {
  document.documentElement.setAttribute(
    'data-theme',
    localStorage.getItem('theme'),
  )
}
