import { useEffect, useState } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import { useTablero } from './hooks/useTablero'
import { useGameInterval } from './hooks/useGameInterval'
import { createTurtles } from './utils/createTurtles'
import { updateSpaces } from './utils/updateSpaces'
import { isIterable } from './utils/isIterable'

var turtle = 0
var emptySpace = '.'
var turtleSpace = '🐢'
const UPDATE_GAME_INTERVAL = 100
const UPDATE_GRAVITY_INTERVAL = 10 * UPDATE_GAME_INTERVAL
var gravityCounter = 0
const turtles = createTurtles()

export const Tablero = () => {

  const { tablero, setTablero } = useTablero(emptySpace)

  const updateTablero = () => {
    setTablero((prevTablero) =>
      updateSpaces(turtles, emptySpace, turtleSpace, prevTablero),
    )
  }

  useKeyboard(turtle, turtles, updateTablero)

  const updateGame = () => {
    gravity()
    checkOverlaps()
    updateMovement()
    updateTablero()
    checkNext()
  }

  useGameInterval(UPDATE_GAME_INTERVAL, updateGame)

  const gravity = () => {
    if (turtles[turtle].status === true) {
      gravityCounter += UPDATE_GAME_INTERVAL
      if (gravityCounter >= UPDATE_GRAVITY_INTERVAL) {
        turtles[turtle].moveY = 1
        turtles[turtle].moveUpdate = true
        gravityCounter = 0
      }
    }
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

  const checkNext = () => {
    if (turtle < 9 && turtles[turtle].status === false) {
      turtle++
      turtles[turtle].status = true
    }
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
