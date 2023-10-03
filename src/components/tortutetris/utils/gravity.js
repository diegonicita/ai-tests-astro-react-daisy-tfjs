export const gravity = (pixel, gameInterval, gravityInterval) => {
  pixel.gravityCounter += gameInterval
  if (pixel.gravityCounter >= gravityInterval) {
    pixel.moveY = 1
    pixel.moveUpdate = true
    pixel.gravityCounter = 0
  }
}
