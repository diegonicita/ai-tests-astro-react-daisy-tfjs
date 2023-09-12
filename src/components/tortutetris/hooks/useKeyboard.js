import { useEffect } from 'react'

export const useKeyboard = ( turtle, turtles, updateTablero ) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log("key down. turtle " + turtle)
      if (turtles[turtle].status == true) {
        if (event.key === 'w') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveY = -1
        }
        if (event.key === 's') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveY = 1
        }
        if (event.key === 'a') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveX = -1
        }
        if (event.key === 'd') {
          turtles[turtle].moveUpdate = true
          turtles[turtle].moveX = 1
        }
      }
      updateTablero()
    }

    const removeListener = () => {
      document.removeEventListener('keydown', handleKeyPress)
    }

    // Eliminar el oyente de eventos anterior antes de crear uno nuevo
    removeListener()    

    // Agregar un evento para detectar la pulsación de teclas en el documento
    document.addEventListener('keydown', handleKeyPress)
    // Eliminar el evento cuando el componente se desmonta para evitar pérdidas de memoria
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [turtle])

  return null
}
