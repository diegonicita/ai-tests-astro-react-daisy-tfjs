export const updatePixel = (prevTablero, pixel) => {
  const newTablero = prevTablero.map((fila) => {
    return fila.map((t) => t)
  })
  newTablero[pixel.y][pixel.x] = pixel.sprite

  return newTablero
}
