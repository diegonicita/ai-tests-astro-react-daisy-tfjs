import { useState } from 'react'
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
  paused: 3,
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

var turtlePixels = createTurtles()
config.gameTurtlesLength = turtlePixels.length / 4
const turtlesIdMap = createIdMap(turtlePixels)

export const Game = () => {
  const [buttonPauseName, setButtonPauseName] = useState('Pause')
  const [buttonStartName, setButtonStartName] = useState('Start')

  const {
    tablero,
    tableroFijo,
    updateTablero,
    clearTableroFijo,
    updateTableroFijo,
    updateTableroFijoDeleteRows,
  } = useTablero(
    config.gameWidth,
    config.gameHeight,
    config.emptySpaceChar,
    turtlePixels,
  )

  useKeyboard(
    config.actualTurtle,
    turtlePixels,
    config.gameWidth,
    config.gameHeight,
  )

  const updateGame = () => {
    if (config.gameState == gameState.playing) {
      if (config.actualTurtle < config.gameTurtlesLength)
        turtlesIdMap[config.actualTurtle].forEach((pixel) => {
          gravity(pixel)
          checkLimits(pixel)
          checkOverlaps(pixel, turtlePixels)
        })

      turtlePixels.forEach((pixel) => {
        if (pixel.id === config.actualTurtle) {
          updateMovement(pixel)
          updateTablero(config.actualTurtle)
          if (pixel.status === false) {
            config.actualTurtle++
            if (config.actualTurtle < config.gameTurtlesLength) {
              config.gameTweet = 'pieceDown'
              turtlesIdMap[config.actualTurtle].forEach(
                (tt) => (tt.status = true),
              )
              updateTableroFijoDeleteRows()
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
  const checkOverlaps = (currentPixel) => {
    const isOverlap =
      tableroFijo.current[currentPixel.y + currentPixel.moveY][
        currentPixel.x + currentPixel.moveX
      ] !== config.emptySpaceChar

    if (isOverlap) {
      if (currentPixel.moveX == 0) {
        turtlesIdMap[config.actualTurtle].forEach((pixel) => {
          pixel.status = false
          pixel.moveX = 0
          pixel.moveY = 0
          pixel.moveUpdate = false
          updateTableroFijo(pixel)
          if (pixel.y == 0 && config.gameState == gameState.playing) {
            config.gameState = gameState.isOver
          }
        })
      } else {
        turtlesIdMap[config.actualTurtle].forEach((pixel) => {
          pixel.moveY = 1
          pixel.moveX = 0
          pixel.moveUpdate = false
          pixel.gravityCounter = 0
        })
      }
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
          updateTableroFijo(p)
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

  const startGame = () => {
    turtlePixels.map((p) => {
      p.status = undefined
      p.x = p.initialX
      p.y = p.initialY
      p.moveX = 0
      p.moveY = 0
      p.gravityCounter = 0
    })
    for (var i = 0; i < 4; i++) turtlePixels[i].status = true
    clearTableroFijo()
    config.actualTurtle = 0
    config.gameState = gameState.playing
    setButtonStartName('Restart')
  }

  const pausedGame = () => {
    config.gameState =
      config.gameState == gameState.playing
        ? gameState.paused
        : gameState.playing
    setButtonPauseName(
      config.gameState == gameState.playing ? 'Pause' : 'Continue',
    )
  }

  return (
    <div className="flex flex-row">
      <TailwindToaster />
      <div className="flex flex-row">
        <Board board={tablero} />
        {/* <Board board={tableroFijo.current} /> */}
      </div>
      <div className="flex flex-col items-start justify-start w-24">
        <button className="btn btn-accent m-2 w-full" onClick={startGame}>
          {buttonStartName}
        </button>
        <button className="btn btn-error m-2 w-full" onClick={pausedGame}>
          {buttonPauseName}
        </button>
      </div>
    </div>
  )
}
