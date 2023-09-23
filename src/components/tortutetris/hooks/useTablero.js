import { useEffect, useState } from 'react'
import { updateSpaces } from '../utils/updateSpaces'
import { updatePixel } from '../utils/updatePixel'

export const useTablero = (width, height, ch, turtles) => {
  const fila = Array(width).fill(ch)

  const emptyTablero = Array(height).fill(fila)

  const [tablero, setTablero] = useState(emptyTablero)
  const [tablero2, setTablero2] = useState(emptyTablero)

  const updateTablero = (id, tab2) => {
    setTablero((prevTablero) => updateSpaces(prevTablero, turtles, ch, id, tab2))
  }

  const updateTablero2 = (pixel) => {
    setTablero2((prevTablero) => updatePixel(prevTablero, pixel))
  }

  const clearTablero2 = () => {
    setTablero2((prevTablero) => prevTablero.map((fila) => fila.map((pixel) => ch)))
  }

  // INIT GAME
  useEffect(() => {
    const initGame = () => {
      const data = emptyTablero
      setTablero(data)
    }
    initGame()
  }, [])

  return { tablero, tablero2, updateTablero, updateTablero2, clearTablero2 }
}
