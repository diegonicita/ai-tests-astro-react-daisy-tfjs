import { useEffect, useState } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import { useTablero } from './hooks/useTablero'
import { useGameInterval } from './hooks/useGameInterval'
import { createTurtles } from './utils/createTurtles'
import { updateSpaces } from './utils/updateSpaces'
import { isIterable } from './utils/isIterable'
import confetti from 'canvas-confetti'

var turtle = 0
var emptySpace = '.'
var turtleSpace = '🐢'
const UPDATE_GAME_INTERVAL = 100
const UPDATE_GRAVITY_INTERVAL = 10 * UPDATE_GAME_INTERVAL
const turtles = createTurtles()
var confettiAvaliable = 1

export const Tablero = () => {
  const { tablero, setTablero } = useTablero(emptySpace)

  const updateTablero = () => {
    setTablero((prevTablero) =>
      updateSpaces(turtles, emptySpace, turtleSpace, prevTablero),
    )
  }

  useKeyboard(turtle, turtles, updateTablero)
  useKeyboard(turtle + 1, turtles, updateTablero)

  const updateGame = () => {
    gravity(turtles[turtle])
    gravity(turtles[turtle + 1])
    checkOverlaps(turtle, turtles)
    checkOverlaps(turtle + 1, turtles)
    updateMovement(turtles[turtle])
    updateMovement(turtles[turtle + 1])
    updateTablero(turtles)
    if (turtle < 9 && turtles[turtle].status === false) {
      turtle += 2
      turtles[turtle].status = true
      turtles[turtle + 1].status = true
    }
    if (
      turtle === 10 &&
      turtles[turtle].status === false &&
      confettiAvaliable != 0
    ) {
      confetti()
      confettiAvaliable = 0
    }
  }

  useGameInterval(UPDATE_GAME_INTERVAL, updateGame)

  const gravity = (t) => {
    if (t.status === true) {
      t.gravityCounter += UPDATE_GAME_INTERVAL
      if (t.gravityCounter >= UPDATE_GRAVITY_INTERVAL) {
        t.moveY = 1
        t.moveUpdate = true
        t.gravityCounter = 0
      }
    }
  }
  // Función para comprobar y manejar superposiciones de tortugas
  const checkOverlaps = (currentTurtle, turtlesArray) => {
    const t = turtlesArray[currentTurtle] // current turtles[currentTurtle] // current turtle
    const isOverlap = turtles.some((other, index) => {
      return (
        index !== currentTurtle &&
        other.x === t.x + t.moveX &&
        other.y === t.y + t.moveY &&
        other.status === false
      )
    })

    if (isOverlap) {
      t.status = t.moveX != 0 ? true : false
      t.moveX = 0
      t.moveY = 0
      t.moveUpdate = false
    }
  }

  const updateMovement = (t) => {
    if (t.moveUpdate === true) {
      const sy = t.y + t.moveY
      const sx = t.x + t.moveX
      if (sy > 9 || sy < 0) t.moveY = 0
      if (sy > 9) t.status = false
      if (sx > 9 || sx < 0) t.moveX = 0
      t.y += t.moveY
      t.x += t.moveX
      t.moveUpdate === false
      t.moveY = 0
      t.moveX = 0
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
                    className="text-2xl bg-secondary text-secondary-content flex flex-row h-7 md:h-7 w-7 md:w-8 justify-center items-center"
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
