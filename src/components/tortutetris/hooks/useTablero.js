import { useEffect, useState } from 'react'

export const useTablero = (ch) => {

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
