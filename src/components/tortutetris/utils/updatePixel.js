export const updatePixel = (prevTablero, pixel) => {
  const newTablero = prevTablero.map((fila) => {
    return fila.map((t) => t)
  })
  newTablero[pixel.y][pixel.x] = pixel.sprite

  function filaNoContienePunto(fila) {
    return !fila.includes(".");
  }
  
  // Contar cuántas filas se eliminaron
  let filasEliminadas = 0;
  for (let i = newTablero.length - 1; i >= 0; i--) {
    if (filaNoContienePunto(newTablero[i])) {
      newTablero.splice(i, 1); // Eliminamos la fila
      filasEliminadas++;
    }
  }

  // Agregar la misma cantidad de nuevas filas en la parte superior
for (let i = 0; i < filasEliminadas; i++) {
  const nuevaFila = Array(10).fill(".");
  newTablero.unshift(nuevaFila);
}

  return newTablero
}
