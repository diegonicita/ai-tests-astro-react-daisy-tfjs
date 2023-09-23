export const updateSpaces = (prevTablero, turtles, emptySpace) => {
  const newTablero = prevTablero.map((fila) => {
    return fila.map((t) => emptySpace)
  })
  turtles.forEach((turtle) => {
    var space = undefined
    if (turtle.status === false || turtle.status === true) space = turtle.sprite
    if (turtle.status === undefined) space = emptySpace

    if (space != emptySpace)
      newTablero[turtle.y > 0 ? turtle.y : 0][turtle.x > 0 ? turtle.x : 0] =
        space
  })

  const isEmpty = (fila) => fila == emptySpace

  const newTablero2 = newTablero.map((fila) => {
    return fila.some(isEmpty) ? fila : fila.map(() => 'X')
  })

  return newTablero2
}
