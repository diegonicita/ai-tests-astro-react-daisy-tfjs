import { useEffect, useState, useRef } from 'react'
import { updateSpaces } from '../utils/updateSpaces'
import { updatePixel } from '../utils/updatePixel'
import { deleteRow } from '../utils/deleteRow'

export const useTablero = (width, height, ch, turtles) => {
  const fila = Array(width).fill(ch)
  const emptyTablero = Array(height).fill(fila)
  // Tablero donde se mueve la pieza //
  const [tablero, setTablero] = useState(emptyTablero)
  // Tablero donde se almacenan las piezas movidas que se fijaron //
  const tableroFijo = useRef(emptyTablero)

  const updateTablero = (id) => {
    setTablero((prevTablero) =>
      updateSpaces(prevTablero, turtles, ch, id, tableroFijo.current),
    )
  }

  const updateTableroFijo = (pixel) => {
    tableroFijo.current = updatePixel(tableroFijo.current, pixel)
    //tableroFijo.current = deleteRow(tableroFijo.current, ch)
  }

  const updateTableroFijoDeleteRows = () => {
    tableroFijo.current = deleteRow(tableroFijo.current, ch)
  }

  const clearTableroFijo = () => {
    tableroFijo.current = tableroFijo.current.map((fila) =>
      fila.map((pixel) => ch),
    )
  }

  // INIT GAME
  useEffect(() => {
    const initGame = () => {
      const data = emptyTablero
      setTablero(data)
    }
    initGame()
  }, [])

  return {
    tablero,
    updateTablero,
    tableroFijo,
    updateTableroFijo,
    updateTableroFijoDeleteRows,
    clearTableroFijo,
  }
}
