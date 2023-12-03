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
import { useGameState } from './hooks/useGameState'

const config = {
  actualTurtle: 0,
  emptySpaceChar: '.',
  gameWidth: 14,
  gamePadding: 2,
  gameHeight: 22,
  gameInterval: 100,
  gravityInterval: 250,
  gameTweet: '',
  gameTurtles: null,
}

const turtlePixels = createTurtles()
config.gameTurtlesLength = turtlePixels.length / 4
const turtlesIdMap = createIdMap(turtlePixels)

export const Game = () => {
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
  const { pauseLabel, startLabel, pauseGame, startGame, gameState, gameOver } =
    useGameState()

  useKeyboard(
    config.actualTurtle,
    turtlePixels,
    config.gameWidth,
    config.gameHeight,
  )

  const updateGame = () => {
    if (gameState.current === 1) {
      if (config.actualTurtle < config.gameTurtlesLength)
        turtlesIdMap[config.actualTurtle].forEach((pixel) => {
          gravity(pixel)
          checkLimits(pixel)
          checkOverlaps(pixel, turtlePixels)
        })

      turtlePixels.forEach((pixel) => {
        if (pixel.id === config.actualTurtle) {
          const flag = updateMovement(pixel)
          build(pixel)
          if (flag === true) updateTablero(config.actualTurtle)
          if (pixel.status === false) {
            config.actualTurtle++
            if (config.actualTurtle < config.gameTurtlesLength) {
              config.gameTweet = 'pieceDown'
              turtlesIdMap[config.actualTurtle].forEach(
                (tt) => (tt.status = true),
              )
              updateTableroFijoDeleteRows()
            } else {
              gameOver()
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
      if (currentPixel.moveX === 0) {
        turtlesIdMap[config.actualTurtle].forEach((pixel) => {
          pixel.status = false
          pixel.moveX = 0
          pixel.moveY = 0
          pixel.moveUpdate = false
          updateTableroFijo(pixel)
          if (pixel.y === 0 && gameState.current === 1) {
            gameOver()
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
      if (sy > config.gameHeight - 1 - config.gamePadding || sy < 0)
        pixel.moveY = 0
      if (sy > config.gameHeight - 1 - config.gamePadding) {
        turtlesIdMap[config.actualTurtle].forEach((p) => {
          p.status = false
          p.moveX = 0
          p.moveY = 0
          p.moveUpdate = false
          updateTableroFijo(p)
        })
      }
      if (
        sx > config.gameWidth - 1 - config.gamePadding ||
        sx < config.gamePadding
      ) {
        turtlesIdMap[config.actualTurtle].forEach((p) => {
          p.moveX = 0
          p.moveUpdate = false
        })
      }

      if (pixel.x > config.gameWidth - 1 - config.gamePadding) {
        turtlesIdMap[config.actualTurtle].forEach((p) => {
          p.moveX = -1
          p.moveUpdate = true
        })
      }

      if (pixel.x < config.gamePadding) {
        turtlesIdMap[config.actualTurtle].forEach((p) => {
          p.moveX = 1
          p.moveUpdate = true
        })
      }
    }
  }

  const updateMovement = (t) => {
    let flag = false
    if (t.rotation.update === true) {
      rotate(t)
      flag = true
    } else {
      move(t)
      flag = true
    }
    return flag
  }

  const build = (t) => {
    let indice = t.rotation.index - 1
    if (indice < 0) indice = 3
    const tCenter = turtlePixels.find((tt) => tt.id === config.actualTurtle)
    t.x = tCenter.x + t.rotation.positions[indice].x
    t.y = tCenter.y + t.rotation.positions[indice].y
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

  useToastMessageGameStates(config)
  useToastMessageTweets(config)

  const resetPixels = () => {
    turtlePixels.map((p) => {
      p.status = undefined
      p.x = p.initialX
      p.y = p.initialY
      p.moveX = 0
      p.moveY = 0
      p.gravityCounter = 0
      p.rotation.index = 0
      p.rotation.update = false
      return null
    })
    for (let i = 0; i < 4; i++) turtlePixels[i].status = true
    config.actualTurtle = 0
  }

  const start = () => {
    startGame()
    resetPixels()
    clearTableroFijo()
  }

  return (
    <div className="relative flex flex-row">
      <TailwindToaster />
      <div className="flex flex-row">
        <Board board={tablero} />        
      </div>
      <div className="absolute sm:relative flex sm:flex-col sm:items-start justify-start sm:justify-start bottom-0 w-full">
        <button className="btn btn-accent btn-sm ml-16 mb-4 sm:ml-2 sm:btn-md w-1/3 sm:w-full opacity-80 sm:opacity-100" onClick={start}>
          {startLabel}
        </button>        
        <button className="btn btn-error btn-sm ml-2 mb-4 sm:ml-2 sm:btn-md w-1/3 sm:w-full opacity-80 sm:opacity-100" onClick={pauseGame}>
          {pauseLabel}
        </button>
      </div>
    </div>
  )
}
