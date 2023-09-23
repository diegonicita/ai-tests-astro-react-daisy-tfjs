import { useEffect, useState } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import { useTablero } from './hooks/useTablero'
import { useGameInterval } from './hooks/useGameInterval'
import { createTurtles, createIdMap } from './utils/createTurtles'
import { TailwindToaster } from '../cards/choices/tailwindToaster'
import { Board } from './board'
import {
  useToastMessageGameStates,
  useToastMessageTweets,
} from './hooks/useToastMessage'

const gameState = {
  waiting: 0,
  playing: 1,
  isOver: 2,
}

const config = {
  gameState: gameState.waiting,
  actualTurtle: 0,
  emptySpaceChar: '.',
  gameWidth: 10,
  gameHeight: 20,
  gameInterval: 50,
  gravityInterval: 5 * 50,
  gameTweet: '',
  gameTurtles: null,
}

const turtlePixels = createTurtles()
config.gameTurtlesLength = turtlePixels.length / 4
const turtlesIdMap = createIdMap(turtlePixels)

export const Game = () => {
  const { tablero, tablero2, updateTablero, updateTablero2 } = useTablero(
    config.gameWidth,
    config.gameHeight,
    config.emptySpaceChar,
    turtlePixels,
  )

  useKeyboard(config.actualTurtle, turtlePixels, updateTablero)

  const updateGame = () => {
    if (config.gameState == gameState.playing) {
      if (config.actualTurtle < config.gameTurtlesLength)
        turtlesIdMap[config.actualTurtle].forEach((pixel) => {
          gravity(pixel)
          checkOverlaps(pixel, turtlePixels)
          checkLimits(pixel)
        })

      turtlePixels.forEach((pixel) => {
        if (pixel.id === config.actualTurtle) {
          updateMovement(pixel)
          updateTablero(turtlePixels)
          if (pixel.status === false) {
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

  const gravity = (pixel) => {
    if (pixel.status === true) {
      pixel.gravityCounter += config.gameInterval
      if (pixel.gravityCounter >= config.gravityInterval) {
        pixel.moveY = 1
        pixel.moveUpdate = true
        pixel.gravityCounter = 0
      }
    }
  }
  // Función para comprobar y manejar superposiciones de tortugas
  const checkOverlaps = (currentPixel, turtlesArray) => {    
    const isOverlap = turtlesArray.some((otherPixel) => {
      return (
        otherPixel.id !== currentPixel.id &&
        otherPixel.x === currentPixel.x + currentPixel.moveX &&
        otherPixel.y === currentPixel.y + currentPixel.moveY &&
        otherPixel.status === false
      )
    })

    if (isOverlap) {      
      turtlesIdMap[config.actualTurtle].forEach((pixel) => {
        pixel.status = false
        pixel.moveX = 0
        pixel.moveY = 0
        pixel.moveUpdate = false
        updateTablero2(pixel)
        if (pixel.y == 0 && config.gameState == gameState.playing) {
          config.gameState = gameState.isOver
        }
      })
    }
  }

  const checkLimits = (pixel) => {
    if (pixel.moveUpdate === true) {
      const sy = pixel.y + pixel.moveY
      const sx = pixel.x + pixel.moveX
      if (sy > config.gameHeight - 1 || sy < 0) pixel.moveY = 0
      if (sy > config.gameHeight - 1) {
        turtlesIdMap[config.actualTurtle].forEach((p) => {
          p.status = false
          p.moveX = 0
          p.moveY = 0
          p.moveUpdate = false
          updateTablero2(p)
        })
      }
      if (sx > config.gameWidth - 1 || sx < 0) {
        turtlesIdMap[config.actualTurtle].forEach((p) => {          
          p.moveX = 0         
          p.moveUpdate = false          
        })
      }
    }
  }

  const updateMovement = (t) => {
    if (t.rotation.update == true) {
      rotate(t)
    } else {
      move(t)
    }
  }

  const rotate = (t) => {
    const tCenter = turtlePixels.find((tt) => tt.id === config.actualTurtle)
    t.x = tCenter.x + t.rotation.positions[t.rotation.index].x
    t.y = tCenter.y + t.rotation.positions[t.rotation.index].y
    t.rotation.index++
    if (t.rotation.index > 3) {
      t.rotation.index = 0
    }
    t.rotation.update = false
  }

  const move = (t) => {
    t.y += t.moveY
    t.x += t.moveX
    t.moveUpdate = false
    t.moveY = 0
    t.moveX = 0
  }

  useToastMessageGameStates(config, gameState)
  useToastMessageTweets(config, gameState)

  return (
    <div className="flex flex-row">
      <TailwindToaster />
      <Board board={tablero2} />
      <Board board={tablero} />
    </div>
  )
}
