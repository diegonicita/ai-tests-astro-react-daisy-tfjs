import { Sprite } from '@pixi/react'
import useConfig from './useConfig'

type Props = {
  x: number
  y: number
  position: { x: number; y: number }
}

const Frog = ({ x, y, position }: Props) => {
  const { stageProps } = useConfig()

  return (
    <>
      <Sprite
        image="/webapp/frog.png"
        x={position.x}
        y={position.y}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={{
          x: 0.25 * stageProps.scaleGame,
          y: 0.25 * stageProps.scaleGame,
        }}
      />
    </>
  )
}

export default Frog
