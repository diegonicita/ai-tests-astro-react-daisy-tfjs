export const updateSpaces = (turtles, emptySpace, turtleSpace, prevTablero) => {
  const newTablero = prevTablero.map((fila) => {
    return fila.map(() => emptySpace)
  })
  turtles.forEach((turtle) => {
    newTablero[turtle.y > 0 ? turtle.y : 0][turtle.x > 0 ? turtle.x : 0] =
      turtleSpace
  })
  return newTablero
}
