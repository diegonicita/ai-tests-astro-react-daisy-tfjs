import { Sprite } from '@pixi/react'

type Props = {
  x: number
  y: number
  position: { x: number; y: number }
}

const Frog = ({ x, y, position }: Props) => {
  return (
    <>
      <Sprite
        image="/webapp/frog.png"
        x={position.x}
        y={position.y}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={{ x: 0.25, y: 0.25 }}
      />
    </>
  )
}

export default Frog
