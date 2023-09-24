import { useEffect } from 'react'

export const useKeyboard = (turtle, turtles, width, height) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      turtles.map((tt, indice) => {
        if (tt.id === turtle) {
          if (tt.status == true) {
            // if (event.key === 'w') {
            //   tt.moveUpdate = true
            //   tt.moveY = -1
            // }
            if (event.key === 's') {
              tt.moveUpdate = true
              tt.moveY = 1
            }
            if (event.key === 'a') {
              tt.moveUpdate = true
              tt.moveX = -1
            }
            if (event.key === 'd') {
              tt.moveUpdate = true
              tt.moveX = 1
            }

            if (event.key === 'k' && tt.rotation.update == false)
              tt.rotation.update = true
          }
        }
      })
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
