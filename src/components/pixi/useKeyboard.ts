import { useEffect } from 'react'

const useKeyboard = (handleKeyPress: (event: KeyboardEvent) => void) => {
  // Agregar el evento de escucha de teclado cuando se monta el componente
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return null
}

export default useKeyboard
