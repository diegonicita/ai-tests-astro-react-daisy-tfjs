import { BlurFilter } from 'pixi.js'
import { Stage, Container, Sprite, Text } from '@pixi/react'
import { useMemo, useEffect, useState } from 'react'

const width = 800
const height = 600
const stageProps = {
  height,
  width,
  options: {
    backgroundAlpha: 0,
    antialias: true,
  },
}

const Example = () => {
  const blurFilter = useMemo(() => new BlurFilter(0), [])

  const [frogPosition, setFrogPosition] = useState({ x: 400, y: 560 })
  const [car1Position, setCar1Position] = useState({ x: 100, y: 150 })
  const [car2Position, setCar2Position] = useState({ x: 400, y: 400 })
  const [trunk1Position, setTrunk1Position] = useState({ x: 200, y: 250 })
  const [trunk2Position, setTrunk2Position] = useState({ x: 600, y: 280 })

  // Función para manejar eventos de teclado
  const handleKeyPress = (event: { key: any }) => {
    const speed = 20 // Puedes ajustar la velocidad según tus necesidades

    switch (event.key) {
      case 'w':
        setFrogPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - speed,
        }))
        break
      case 's':
        setFrogPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y + speed,
        }))
        break
      case 'a':
        setFrogPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x - speed,
        }))
        break
      case 'd':
        setFrogPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x + speed,
        }))
        break
      default:
        break
    }
  }

  // Agregar el evento de escucha de teclado cuando se monta el componente
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, []) // La dependencia vacía garantiza que el efecto se ejecute solo una vez al montar

  const moveTrunks = () => {
    setTrunk1Position((prevPosition) => ({
      ...prevPosition,
      x: (prevPosition.x + 2) % width, // Ajusta la velocidad según tus necesidades
    }))

    setTrunk2Position((prevPosition) => ({
      ...prevPosition,
      x: (prevPosition.x - 3 + width) % width, // Ajusta la velocidad según tus necesidades
    }))
  }

  const moveCars = () => {
    setCar1Position((prevPosition) => ({
      ...prevPosition,
      x: (prevPosition.x + 5) % width, // Ajusta la velocidad según tus necesidades
    }))
    setCar2Position((prevPosition) => ({
      ...prevPosition,
      x: (prevPosition.x + 5) % width, // Ajusta la velocidad según tus necesidades
    }))
  }

  useEffect(() => {
    const interval = setInterval(moveTrunks, 16) // Actualiza cada 16 ms (aproximadamente 60 fps)
    const interval2 = setInterval(moveCars, 16) // Actualiza cada 16 ms (aproximadamente 60 fps)
    // Limpia el intervalo al desmontar el componente
    return () => {
      clearInterval(interval)
      clearInterval(interval2)
    }
  }, [])

  return (
    <div className="border border-black m-2">
      <Stage {...stageProps}>
        <Sprite
          image="/webapp/car.png"
          x={car1Position.x}
          y={car1Position.y}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={{ x: 0.5, y: 0.5 }}
        />
          <Sprite
          image="/webapp/car.png"
          x={car2Position.x}
          y={car2Position.y}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={{ x: 0.5, y: 0.5 }}
        />

        <Sprite
          image="/webapp/tronco.png"
          x={trunk2Position.x}
          y={trunk2Position.y}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={{ x: 0.25, y: 0.25 }}
        />

        <Sprite
          image="/webapp/tronco.png"
          x={trunk1Position.x}
          y={trunk1Position.y}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={{ x: 0.25, y: 0.25 }}
        />
        <Sprite
          image="/webapp/frog.png"
          x={frogPosition.x}
          y={frogPosition.y}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={{ x: 0.25, y: 0.25 }}
        />

        <Container x={400} y={20}>
          <Text
            text="Frogger Game"
            anchor={{ x: 0.5, y: 0.5 }}
            filters={[blurFilter]}
          />
        </Container>
      </Stage>
    </div>
  )
}

export default Example
