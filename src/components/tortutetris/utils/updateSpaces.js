export const updateSpaces = (turtles, emptySpace, turtleSpace, prevTablero) => {
  const newTablero = prevTablero.map((fila) => {
    return fila.map(() => emptySpace)
  })
  turtles.forEach((turtle) => {
    var space = undefined
    if (turtle.status === false || turtle.status === true) space = turtleSpace
    if (turtle.status === undefined) space = emptySpace

    if (space != emptySpace)
      newTablero[turtle.y > 0 ? turtle.y : 0][turtle.x > 0 ? turtle.x : 0] =
        space
  })
  return newTablero
}
