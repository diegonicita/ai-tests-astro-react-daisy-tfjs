export const updateSpaces = (
  prevTablero,
  turtles,
  emptySpace,
  actualTurtleId,
  tablero2
) => {
  const newTablero = tablero2.map((fila) => {
    return fila.map((t) => t)
  })

  turtles.forEach((turtle) => {
    if (actualTurtleId == turtle.id) {
      if (turtle.status === true)
        newTablero[turtle.y > 0 ? turtle.y : 0][turtle.x > 0 ? turtle.x : 0] =
          turtle.sprite
    }
  })

  return newTablero
}
