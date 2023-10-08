import { useEffect } from 'react'
import { toastMessage } from '../toastMessage'

const state = {
  waiting: 0,
  playing: 1,
  isOver: 2,
  paused: 3,
}

export const useToastMessageGameStates = (config) => {
  useEffect(() => {
    if (config.gameState === state.waiting) {
      toastMessage('¡Presiona Start!')      
    }
    if (config.gameState === state.playing) {
      toastMessage('¡Jugando!')
    }
    if (config.gameState === state.isOver) {
      toastMessage('Game Over')
    }
  }, [config.gameState])
}

export const useToastMessageTweets = (config) => {
  useEffect(() => {
    if (config.gameTweet === 'pieceDown') {
      toastMessage('Piece Down!', 'twitter') 
      setTimeout(() => {
        config.gameTweet = ''
      }, 1500)     
    }
    if (config.gameTweet === 'paused') {
      toastMessage('Game Paused!', 'twitter')     
      setTimeout(() => {
        config.gameTweet = ''
      }, 1500)     
    }
  }, [config.gameTweet])
}
