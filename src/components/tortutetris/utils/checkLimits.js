export const checkLimits = (
  pixel,
  pixels,
  updateTableroFijo,
  width,
  height,
) => {
  const sy = pixel.y + pixel.moveY
  const sx = pixel.x + pixel.moveX
  
  if (sy > height - 1) {
    freeze(pixels, updateTableroFijo)
  }
  if (sx > width - 1 || sx < 0) {
    stopX(pixels)
  }
}

const freeze = (pixels, updateTableroFijo) => {
  pixels.forEach((p) => {
    p.status = false
    p.moveX = 0
    p.moveY = 0
    p.moveUpdate = false
    updateTableroFijo(p)
  })
}

const stopX = (pixels) => {
  pixels.forEach((p) => {
    p.moveX = 0
    p.moveUpdate = false
  })
}