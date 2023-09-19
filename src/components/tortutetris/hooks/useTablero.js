import { useEffect, useState } from 'react'

export const useTablero = (width, height, ch) => {
  
  const fila = Array(width).fill(ch);  

  const emptyTablero = Array(height).fill(fila);

  const [tablero, setTablero] = useState(emptyTablero)

  // INIT GAME
  useEffect(() => {
    const initGame = () => {
      const data = emptyTablero
      setTablero(data)
    }
    initGame()
  }, [])

  return { tablero, setTablero }
}
