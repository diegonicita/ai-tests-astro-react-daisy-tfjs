import { useEffect } from 'react'
import { toastMessage } from '../toastMessage'

export const useToastMessageGameStates = (config, gameState) => {
  useEffect(() => {
    if (config.gameState === gameState.waiting) {
      toastMessage('Press Start!')
      setTimeout(() => {
        config.gameState = gameState.paused
      }, 1500)
    }
    if (config.gameState === gameState.paused) {
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
    if (config.gameTweet === 'paused') {
      toastMessage('Game Paused!', 'twitter')     
      setTimeout(() => {
        config.gameTweet = ''
      }, 1500)     
    }
  }, [config.gameTweet])
}
