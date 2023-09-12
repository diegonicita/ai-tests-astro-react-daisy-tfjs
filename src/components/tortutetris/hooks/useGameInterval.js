import { useEffect } from 'react'

export const useGameInterval = (gameInterval, updateGame) => {
  useEffect(() => {
    setInterval(() => {
      updateGame()
    }, gameInterval)
    return () => {
      clearInterval()
    }
  }, [])

  return null
}
