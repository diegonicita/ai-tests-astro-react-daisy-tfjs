import { useEffect, useState } from 'react'

var turtle = 0
var ch = '.'
const UPDATE_INTERVAL = 100
const GRAVITY_INTERVAL = 10 * UPDATE_INTERVAL
var gravityCounter = 0
const turtles = [
  { x: 0, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: true },
  { x: 1, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 2, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 3, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 4, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 5, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 6, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 7, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 8, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
  { x: 9, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined },
]

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

export const Tablero = () => {
  const [tablero, setTablero] = useState(emptyTablero)

  // INIT GAME
  useEffect(() => {
    const initGame = () => {
      const data = emptyTablero
      setTablero(data)
      updateTablero()
    }
    initGame()
  }, [])

  // UPDATE GAME
  const updateGame = () => {
    gravity()
    checkOverlaps()
    updateMovement()
    updateTablero()
    checkNext()
  }

  const gravity = () => {
    if (turtles[turtle].status === true) {
      gravityCounter += UPDATE_INTERVAL
      if (gravityCounter >= GRAVITY_INTERVAL) {
        turtles[turtle].moveY = 1
        turtles[turtle].moveUpdate = true
        gravityCounter = 0
      }
    }
  }

  const updateMovement = () => {
    if (turtles[turtle].moveUpdate === true) {
      if (
        turtles[turtle].y + turtles[turtle].moveY > 9 ||
        turtles[turtle].y + turtles[turtle].moveY < 0
      ) {
        if (turtles[turtle].y + turtles[turtle].moveY > 9)
          turtles[turtle].status = false
        turtles[turtle].moveY = 0
      }
      if (
        turtles[turtle].x + turtles[turtle].moveX > 9 ||
        turtles[turtle].x + turtles[turtle].moveX < 0
      ) {
        turtles[turtle].moveX = 0
      }
      turtles[turtle].y += turtles[turtle].moveY
      turtles[turtle].x += turtles[turtle].moveX
      turtles[turtle].moveUpdate === false
      turtles[turtle].moveY = 0
      turtles[turtle].moveX = 0
    }
  }

  useEffect(() => {
    setInterval(() => {
      updateGame()
    }, UPDATE_INTERVAL)
    return () => {
      clearInterval()
    }
  }, [])

  const updateTablero = () => {
    setTablero((prevTablero) => {
      const newTablero = prevTablero.map((fila) => {
        return fila.map(() => ch)
      })
      turtles.forEach((turtle) => {
        newTablero[turtle.y > 0 ? turtle.y : 0][turtle.x > 0 ? turtle.x : 0] =
          '🐢'
      })
      return newTablero
    })
  }

  // Función para comprobar y manejar superposiciones de tortugas
  const checkOverlaps = () => {
    const currentTurtle = turtles[turtle]
    const isOverlap = turtles.some((otherTurtle, index) => {
      return (
        index !== turtle &&
        otherTurtle.x === currentTurtle.x + currentTurtle.moveX &&
        otherTurtle.y === currentTurtle.y + currentTurtle.moveY
      )
    })

    if (isOverlap) {
      currentTurtle.status = currentTurtle.moveX != 0 ? true : false
      currentTurtle.moveX = 0
      currentTurtle.moveY = 0
      currentTurtle.moveUpdate = false
    }
  }

  const checkNext = () => {
    if (turtle < 9 && turtles[turtle].status === false) {
      turtle++
      turtles[turtle].status = true
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (turtles[turtle].status == true) {
        if (event.key === 'w') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveY = -1
        }
        if (event.key === 's') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveY = 1
        }
        if (event.key === 'a') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveX = -1
        }
        if (event.key === 'd') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveX = 1
        }
      }
      updateTablero()
    }
    // Agregar un evento para detectar la pulsación de teclas en el documento
    document.addEventListener('keydown', handleKeyPress)
    // Eliminar el evento cuando el componente se desmonta para evitar pérdidas de memoria
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false
    }
    return typeof obj[Symbol.iterator] === 'function'
  }

  return (
    <div>
      <div className="border-2 p-2 shadow-lg bg-secondary">
        {isIterable(tablero) &&
          tablero.map((fila, i) => (
            <div key={i}>
              <div className="flex flex-row h-7 md:h-7 m-1 justify-center items-center">
                {fila.map((columna, j) => (
                  <div
                    className="text-sm bg-secondary text-secondary-content flex flex-row h-7 md:h-7 w-7 md:w-8 justify-center items-center"
                    key={j}
                  >
                    {columna}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
