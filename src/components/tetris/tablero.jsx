import { useEffect, useState } from 'react'

export const Tablero = () => {
  const [tablero, setTablero] = useState()

  const updateGame = () => {
    console.log('click')
  }

  useEffect(() => {
    const llenarTableroConCeros = () => {
      const data = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
      setTablero(data)
    }

    llenarTableroConCeros()
  }, [])

  useEffect(() => {
    setInterval(() => {
      updateGame()
    }, 1000)
    return () => {
      clearInterval()
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log(event.key)
      if (event.key === 'w') {
        const newData = [...tablero]
        newData[3][4] = 1
        setTablero(newData)
      }
      if (event.key === 's') {
        const newData = [...tablero]
        newData[3][4] = 2
        setTablero(newData)
      }
    }
    // Agregar un evento para detectar la pulsación de teclas en el documento
    document.addEventListener('keydown', handleKeyPress)
    // Eliminar el evento cuando el componente se desmonta para evitar pérdidas de memoria
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    tablero &&
    tablero.map((fila, i) => (
      <div key={i}>
        <div>
          {fila.map((columna, j) => (
            <div className="bg-blue-500 btn btn-primary rounded-none" key={j}>
              {columna}
            </div>
          ))}
        </div>
      </div>
    ))
  )
}
