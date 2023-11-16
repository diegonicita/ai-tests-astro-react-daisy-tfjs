import { BlurFilter } from 'pixi.js'
import { Stage, Container, Text } from '@pixi/react'
import { useMemo, useState } from 'react'
import Car from './car'
import Trunk from './trunk'
import Frog from './frog'
import useKeyboard from './useKeyboard'
import useConfig from './useConfig'

const Example = () => {
  const blurFilter = useMemo(() => new BlurFilter(0), [])
  const [frogPosition, setFrogPosition] = useState({ x: 400, y: 560 })
  const { stageProps } = useConfig()

  // Función para manejar eventos de teclado
  const handleKeyPress = (event: KeyboardEvent) => {
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

  useKeyboard(handleKeyPress)

  return (
    <div className="border border-black m-2">
      <Stage {...stageProps}>
        <Car x={150} y={200} direction={{ x: 5, y: 0 }} />
        <Car x={50} y={350} direction={{ x: 5, y: 0 }} />
        <Trunk x={150} y={100} direction={{ x: -5, y: 0 }} />
        <Trunk x={50} y={450} direction={{ x: -5, y: 0 }} />
        <Frog x={400} y={550} position={frogPosition} />

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
