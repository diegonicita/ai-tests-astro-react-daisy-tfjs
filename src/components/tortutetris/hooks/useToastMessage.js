import { useEffect } from 'react'
import { toastMessage } from '../toastMessage'

export const useToastMessageGameStates = (config, gameState) => {
  useEffect(() => {
    if (config.gameState === gameState.waiting) {
      toastMessage('Ready!')
      setTimeout(() => {
        config.gameState = gameState.playing
      }, 1500)
    }
    if (config.gameState === gameState.playing) {
      toastMessage('Play!')
    }
    if (config.gameState === gameState.isOver) {
      toastMessage('Game Over')
    }
  }, [config.gameState])
}

export const useToastMessageTweets = (config, gameState) => {
  useEffect(() => {
    if (config.gameTweet === 'pieceDown') {
      toastMessage('Piece Down!', 'twitter')
      setTimeout(() => {
        config.gameTweet = ''
      }, 1500)
    }
  }, [config.gameTweet])
}
