import { useEffect, useState } from 'react'

var turtle = 0
// var x = 0
// var y = 0
var ch = ' '
const GRAVITY = 500

const turtles = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 7, y: 0 },
  { x: 8, y: 0 },
  { x: 9, y: 0 },
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

  useEffect(() => {
    const initGame = () => {
      const data = emptyTablero
      setTablero(data)
      updateTablero()
    }
    initGame()
  }, [])

  const updateGame = () => {
    console.log('update every ' + GRAVITY + 'ms')
    turtles[turtle].y++
    checkLimits()
    updateTablero()
  }

  useEffect(() => {
    setInterval(() => {
      updateGame()
    }, GRAVITY)
    return () => {
      clearInterval()
    }
  }, [])
  const updateTablero = () => {
    setTablero((prevTablero) => {
      const newTablero = prevTablero.map((fila) => {
        return fila.map(() => 0) // Borra todas las celdas estableciéndolas en 0
      })

      // Dibuja las tortugas del array 'turtles' en sus respectivas posiciones
      turtles.forEach((turtle) => {
        newTablero[turtle.y][turtle.x] = '🐢'
      })

      return newTablero
    })
  }

  // Función para comprobar los límites de movimiento de la tortuga actual
const checkMovementLimits = () => {
  const currentTurtle = turtles[turtle];
  if (currentTurtle.y < 0) currentTurtle.y = 0;
  if (currentTurtle.y > 9) {
    currentTurtle.y = 9;
    turtle++;
    if (turtle > turtles.length - 1) turtle = 0;
  }
  if (currentTurtle.x < 0) currentTurtle.x = 0;
  if (currentTurtle.x > 9) currentTurtle.x = 9;
};

// Función para comprobar y manejar superposiciones de tortugas
const checkTurtleOverlap = () => {
  const currentTurtle = turtles[turtle];
  const isOverlap = turtles.some((otherTurtle, index) => {
    return (
      index !== turtle &&
      otherTurtle.x === currentTurtle.x &&
      otherTurtle.y === currentTurtle.y
    );
  });

  if (isOverlap) {
    // Si hay superposición, maneja la lógica de lo que deseas hacer en caso de superposición.
    // Por ejemplo, puedes mover la tortuga actual a una posición diferente o realizar alguna acción específica.
    // Aquí se establece la lógica para mover la tortuga actual a una posición diferente.      
    currentTurtle.y = currentTurtle.y - 1;
    turtle++;
  }
};

// Llamadas a las funciones de comprobación en tu función principal
const checkLimits = () => {
  checkMovementLimits();
  checkTurtleOverlap();
};


  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log(event.key)
      if (event.key === 'w') turtles[turtle].y--
      if (event.key === 's') turtles[turtle].y++
      if (event.key === 'a') turtles[turtle].x--
      if (event.key === 'd') turtles[turtle].x++
      checkLimits()
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
      <h1 className="text-center">Tortutetris</h1>
      {isIterable(tablero) &&
        tablero.map((fila, i) => (
          <div key={i}>
            <div className="flex flex-row h-10 m-1 justify-center items-center">
              {fila.map((columna, j) => (
                <div
                  className="bg-blue-500 flex flex-row h-10 w-10 m-1  justify-center items-center"
                  key={j}
                >
                  {columna}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}
