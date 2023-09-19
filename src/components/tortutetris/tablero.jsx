import { useEffect, useState } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import { useTablero } from './hooks/useTablero'
import { useGameInterval } from './hooks/useGameInterval'
import { createTurtles, createIdMap } from './utils/createTurtles'
import { updateSpaces } from './utils/updateSpaces'
import { isIterable } from './utils/isIterable'
import confetti from 'canvas-confetti'

var turtle = 0
var emptySpace = '.'
const UPDATE_GAME_INTERVAL = 100
const UPDATE_GRAVITY_INTERVAL = 5 * UPDATE_GAME_INTERVAL
const turtles = createTurtles()
const turtlesIdMap = createIdMap(turtles)
var confettiAvaliable = 1

export const Tablero = () => {
  const { tablero, setTablero } = useTablero(emptySpace)

  const updateTablero = () => {
    setTablero((prevTablero) => updateSpaces(turtles, emptySpace, prevTablero))
  }

  useKeyboard(turtle, turtles, updateTablero)

  const updateGame = () => {
    if (turtle < 8)
      turtlesIdMap[turtle].forEach((t) => {
        gravity(t)
        checkOverlaps(t, turtles)
        checkLimits(t)
      })

    turtles.forEach((t) => {
      if (t.id === turtle) {
        updateMovement(t)
        updateTablero(turtles)
        if (t.status === false) {
          turtle++
          if (turtle < 8)
            turtlesIdMap[turtle].forEach((tt) => (tt.status = true))
        }
      }
    })
  }

  // if (turtle === turtles.length &&
  //   turtles[turtle].status === false &&
  //   confettiAvaliable != 0
  // ) {
  //   confetti()
  //   confettiAvaliable = 0
  // }

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
    const t = currentTurtle
    const isOverlap = turtlesArray.some((other) => {
      return (
        other.id !== t.id &&
        other.x === t.x + t.moveX &&
        other.y === t.y + t.moveY &&
        other.status === false
      )
    })

    if (isOverlap) {
      t.status = false
      t.moveX = 0
      t.moveY = 0
      t.moveUpdate = false
      turtlesIdMap[turtle].forEach((tt) => {
        tt.status = false
        tt.moveX = 0
        tt.moveY = 0
        tt.moveUpdate = false
      })
    }
  }

  const checkLimits = (t) => {
    if (t.moveUpdate === true) {
      const sy = t.y + t.moveY
      const sx = t.x + t.moveX
      if (sy > 9 || sy < 0) t.moveY = 0
      if (sy > 9) {
        turtlesIdMap[turtle].forEach((tt) => {
          tt.status = false
          tt.moveX = 0
          tt.moveY = 0
          tt.moveUpdate = false
        })
      }
      if (sx > 8 || sx < 1) {
        turtles.map((tt) => {
          if (tt.id === turtle) {
            tt.moveX = 0
            tt.moveUpdate = false
          }
        })
      }
    }
  }

  const updateMovement = (t) => {
    t.y += t.moveY
    t.x += t.moveX
    t.moveUpdate = false
    t.moveY = 0
    t.moveX = 0
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
