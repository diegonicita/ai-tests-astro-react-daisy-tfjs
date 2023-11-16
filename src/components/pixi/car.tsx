import { Sprite, useTick } from '@pixi/react'
import { useState } from 'react'
import useConfig from './useConfig'

type Props = {
  x: number
  y: number
  direction: {
    x: number
    y: number
  }
}

const Car = ({ x, y, direction }: Props) => {
  const { stageProps } = useConfig()
  const [position, setPosition] = useState({ x, y })

  // custom ticker
  useTick((delta) => {
    move()
  })

  const move = () => {
    if (position.x > stageProps.width) {
      setPosition((prevPosition) => ({ ...prevPosition, x: 0, y }))
    } else if (position.x < 0) {
      setPosition((prevPosition) => ({ ...prevPosition, x: stageProps.width, y }))
    } else {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + direction.x,
      }))
    }
  }

  return (
    <>
      <Sprite
        image="/webapp/car.png"
        x={position.x}
        y={position.y}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={{ x: 0.5, y: 0.5 }}
      />
    </>
  )
}

export default Car
