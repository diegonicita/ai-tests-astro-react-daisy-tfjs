import { useState, useRef } from 'react'

const state = {
  waiting: 0,
  playing: 1,
  isOver: 2,
  paused: 3,
}

export const useGameState = () => {
  const [pauseLabel, setPauseLabel] = useState('Pause')
  const [startLabel, setStartLabel] = useState('Start')
  const gameState = useRef(0)

  const startGame = () => {
    gameState.current = state.playing
    setStartLabel('Restart')
  }

  const gameOver = () => {
    gameState.current = state.isOver
  }

  const pauseGame = () => {
    gameState.current = gameState.current == state.playing ? state.paused : state.playing    
    setPauseLabel(gameState == state.playing ? 'Pause' : 'Continue')
  }

  return { pauseGame, startGame, gameOver, pauseLabel, startLabel, gameState }
}
