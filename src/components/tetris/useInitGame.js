import React, { useEffect, useState } from 'react'

var ch = 1
const emptyTablero = [
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
  [ch, ch, ch, ch, ch, ch, ch, ch, ch, ch],
]

const updateTablero = () => {
    const newValue = '🐢' // El nuevo valor que deseas asignar
    const newRow = [...tablero[y]] // Copia la fila en la posición 2
    newRow[x] = newValue // Actualiza el valor en la columna 2
    const newTablero = [...tablero] // Copia la matriz original
    newTablero[y] = newRow // Actualiza la fila en la posición 2
    setTablero(newTablero)
  }

export const useInitGame = () => {
  const [tablero, setTablero] = useState(emptyTablero)

  useEffect(() => {
    const initGame = () => {
      const data = emptyTablero
      setTablero(data)
      updateTablero()
    }
    initGame()
  }, [])

  return { tablero, setTablero }
}
