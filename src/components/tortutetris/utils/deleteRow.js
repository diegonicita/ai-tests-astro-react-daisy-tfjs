export const deleteRow = (prevTablero, ch) => {
  const newTablero = prevTablero.map((fila) => {
    return fila.map((t) => t)
  })

  function filaNoContienePunto(fila) {
    // Obtenemos una porción de la fila excluyendo los dos primeros y los dos últimos elementos
    const porcionFila = fila.slice(2, -2)
    // Verificamos si la porción de la fila contiene un punto
    return !porcionFila.includes('.')
  }
  // Contar cuántas filas se eliminaron
  let filasEliminadas = 0
  for (let i = newTablero.length - 1; i >= 0; i--) {
    if (filaNoContienePunto(newTablero[i])) {
      newTablero.splice(i, 1) // Eliminamos la fila
      filasEliminadas++
    }
  }

  // Agregar la misma cantidad de nuevas filas en la parte superior
  for (let i = 0; i < filasEliminadas; i++) {
    const nuevaFila = Array(14).fill('.')
    newTablero.unshift(nuevaFila)
  }

  return newTablero
}
