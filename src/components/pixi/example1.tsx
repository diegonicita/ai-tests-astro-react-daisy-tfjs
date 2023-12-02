import { BlurFilter } from 'pixi.js'
import { Stage, Container, Text, Graphics } from '@pixi/react'
import { useMemo, useState, useCallback } from 'react'
import Car from './car'
import Trunk from './trunk'
import Frog from './frog'
import useKeyboard from './useKeyboard'
import useConfig from './useConfig'

const Example = () => {
  const blurFilter = useMemo(() => new BlurFilter(0), [])
  const [frogPosition, setFrogPosition] = useState({ x: 420, y: 370 })
  const { stageProps } = useConfig()
  const draw1 = useCallback((g) => {
    g.beginFill(0x00ff00)
    g.drawRect(0, 0, stageProps.width, 50)
    g.endFill()
    g.beginFill(0x00faee)
    g.drawRect(0, 50, stageProps.width, 100)
    g.endFill()
  }, [])

  const draw2 = useCallback((g) => {
    g.beginFill(0x00ff00)
    g.drawRect(0, 150, stageProps.width, 300)
    g.endFill()
    g.beginFill(0xcccccc)
    g.drawRect(0, 180, stageProps.width, 140)
    g.endFill()
  }, [])

  // Función para manejar eventos de teclado
  const handleKeyPress = (event: KeyboardEvent) => {
    const speed = 20 * stageProps.scaleGame // Puedes ajustar la velocidad según tus necesidades

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
        <Graphics draw={draw1} />
        <Graphics draw={draw2} />
        <Car x={150} y={280} direction={{ x: 6, y: 0 }} />
        <Car x={0} y={200} direction={{ x: 4, y: 0 }} />
        <Trunk x={250} y={75} direction={{ x: 3, y: 0 }} />
        <Trunk x={50} y={125} direction={{ x: -5, y: 0 }} />
        <Frog x={50} y={250} position={frogPosition} />

        <Container x={stageProps.width / 2} y={20}>
          <Text
            text="Frogger Game"
            scale={0.75}
            anchor={{ x: 0.5, y: 0.5 }}
            filters={[blurFilter]}
          />
        </Container>
      </Stage>
    </div>
  )
}

export default Example
