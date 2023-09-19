import { useEffect } from 'react'

export const useKeyboard = (turtle, turtles, updateTablero) => {

  useEffect(() => {
    const handleKeyPress = (event) => {      
      turtles.map((tt, indice) => {
        if (tt.id === turtle) {
          if (tt.status == true) {
            if (event.key === 'w') {
              tt.moveUpdate = true
              tt.moveY = -1
            }
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

            if (event.key === 'k') {            
              if (tt.rotation.update == false)
              {
              // const index = tt.rotation.index
              // tt.moveUpdate = true
              // tt.moveX = tt.rotation.positions[index].x
              // tt.moveY = tt.rotation.positions[index].y
              tt.rotation.update = true
              tt.rotation.originalX = tt.x;
              tt.rotation.originalY = tt.y;              
              }
              // tt.rotation.index++
              // if (tt.rotation.index > 3) tt.rotation.index = 0            
            }
          }
        }
        // updateTablero()
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

