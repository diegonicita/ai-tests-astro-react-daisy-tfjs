import { useEffect, useState } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import { useTablero } from './hooks/useTablero'
import { useGameInterval } from './hooks/useGameInterval'
import { createTurtles, createIdMap } from './utils/createTurtles'
import { updateSpaces } from './utils/updateSpaces'
import { TailwindToaster } from '../cards/choices/tailwindToaster'
import { toastMessage } from './toastMessage'
import { Board} from './board'
import { useToastMessageGameStates, useToastMessageTweets } from './hooks/useToastMessage'

const gameState = {
  waiting: 0,
  playing: 1,
  isOver: 2,
}

const config = {
  gameState: gameState.waiting,
  actualTurtle: 0,
  emptySpaceChar: '.',
  gameWidth: 25,
  gameHeight: 25,
  gameInterval: 50,
  gravityInterval: 5 * 50,
  gameTweet: '',
  gameTurtles: null,
}

const turtles = createTurtles()
config.gameTurtlesLength = turtles.length / 4
const turtlesIdMap = createIdMap(turtles)

export const Game = () => {
  const { tablero, setTablero } = useTablero(
    config.gameWidth,
    config.gameHeight,
    config.emptySpaceChar,
  )

  const updateTablero = () => {
    setTablero((prevTablero) =>
      updateSpaces(turtles, config.emptySpaceChar, prevTablero),
    )
  }

  useKeyboard(config.actualTurtle, turtles, updateTablero)

  const updateGame = () => {
    if (config.gameState == gameState.playing) {
      if (config.actualTurtle < config.gameTurtlesLength)
        turtlesIdMap[config.actualTurtle].forEach((t) => {
          gravity(t)
          checkOverlaps(t, turtles)
          checkLimits(t)
        })

      turtles.forEach((t) => {
        if (t.id === config.actualTurtle) {
          updateMovement(t)
          updateTablero(turtles)
          if (t.status === false) {
            config.actualTurtle++
            if (config.actualTurtle < config.gameTurtlesLength) {
              config.gameTweet = 'pieceDown'
              turtlesIdMap[config.actualTurtle].forEach(
                (tt) => (tt.status = true),
              )
            } else {
              config.gameState = gameState.isOver
            }
          }
        }
      })
    }
  }

  useGameInterval(config.gameInterval, updateGame)

  const gravity = (t) => {
    if (t.status === true) {
      t.gravityCounter += config.gameInterval
      if (t.gravityCounter >= config.gravityInterval) {
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
      turtlesIdMap[config.actualTurtle].forEach((tt) => {
        tt.status = false
        tt.moveX = 0
        tt.moveY = 0
        tt.moveUpdate = false
        if (tt.y == 0 && config.gameState == gameState.playing) {
          config.gameState = gameState.isOver
        }
      })
    }
  }

  const checkLimits = (t) => {
    if (t.moveUpdate === true) {
      const sy = t.y + t.moveY
      const sx = t.x + t.moveX
      if (sy > config.gameHeight - 1 || sy < 0) t.moveY = 0
      if (sy > config.gameHeight - 1) {
        turtlesIdMap[config.actualTurtle].forEach((tt) => {
          tt.status = false
          tt.moveX = 0
          tt.moveY = 0
          tt.moveUpdate = false
        })
      }
      if (sx > config.gameWidth - 1 || sx < 0) {
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
      const tCenter = turtles.find((tt) => tt.id === config.actualTurtle)
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
  
  useToastMessageGameStates(config, gameState)
  useToastMessageTweets(config, gameState)

  return (
    <div>
      <TailwindToaster />
      <Board board={tablero} />
    </div>
  )
}
