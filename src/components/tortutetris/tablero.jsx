import { useEffect, useState } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import { useTablero } from './hooks/useTablero'
import { useGameInterval } from './hooks/useGameInterval'
import { createTurtles, createIdMap } from './utils/createTurtles'
import { updateSpaces } from './utils/updateSpaces'
import { isIterable } from './utils/isIterable'
import confetti from 'canvas-confetti'
import { TailwindToaster } from '../cards/choices/tailwindToaster'
import { toastMessage } from './toastMessage'

var gameState = 'waiting'
var gameTweet = ''
var turtle = 0
const TOTAL_TURTLES = 24
var emptySpace = '.'
const tableroWidth = 15
const tableroHeight = 15
const UPDATE_GAME_INTERVAL = 50
const UPDATE_GRAVITY_INTERVAL = 5 * UPDATE_GAME_INTERVAL
const turtles = createTurtles()
const turtlesIdMap = createIdMap(turtles)
var confettiAvaliable = 1

export const Tablero = () => {
  const { tablero, setTablero } = useTablero(
    tableroWidth + 1,
    tableroHeight + 1,
    emptySpace,
  )

  const updateTablero = () => {
    setTablero((prevTablero) => updateSpaces(turtles, emptySpace, prevTablero))
  }

  useKeyboard(turtle, turtles, updateTablero)

  const updateGame = () => {
    if (gameState == 'playing') {
      if (turtle < TOTAL_TURTLES)
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
            if (turtle < TOTAL_TURTLES)
              {
                gameTweet = 'pieceDown'
                turtlesIdMap[turtle].forEach((tt) => (tt.status = true))
              }
            else {
              gameState = 'isOver'
            }
          }
        }
      })
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
        if (tt.y == 0 && gameState == 'playing') {
          gameState = 'isOver'
        }
      })
    }
  }

  const checkLimits = (t) => {
    if (t.moveUpdate === true) {
      const sy = t.y + t.moveY
      const sx = t.x + t.moveX
      if (sy > tableroHeight || sy < 0) t.moveY = 0
      if (sy > tableroHeight) {
        turtlesIdMap[turtle].forEach((tt) => {
          tt.status = false
          tt.moveX = 0
          tt.moveY = 0
          tt.moveUpdate = false
        })
      }
      if (sx > tableroWidth || sx < 0) {
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
    if (t.rotation.update == true) {
      const tCenter = turtles.find((tt) => tt.id === turtle)
      t.x = tCenter.x + t.rotation.positions[t.rotation.index].x
      t.y = tCenter.y + t.rotation.positions[t.rotation.index].y
      t.rotation.index++
      if (t.rotation.index > 3) {
        t.rotation.index = 0
      }
      t.rotation.update = false
    } else {
      t.y += t.moveY
      t.x += t.moveX
      t.moveUpdate = false
      t.moveY = 0
      t.moveX = 0
    }
  }

  useEffect(() => {
    if (gameState === 'waiting') {
      toastMessage('Ready!')
      setTimeout(() => {
        gameState = 'playing'
      }, 1500)
    }
    if (gameState === 'playing') {
      toastMessage('Play!')
    }
    if (gameState === 'isOver') {
      toastMessage('Game Over')
    }
  }, [gameState])

  useEffect(() => {
    if (gameTweet === 'pieceDown') {
      toastMessage('Piece Down!', 'twitter')
      setTimeout(() => {
        gameTweet = ''
      }, 1500)
    }
  }, [gameTweet])

  return (
    <div>
      <TailwindToaster />
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
