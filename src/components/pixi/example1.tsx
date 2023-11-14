import { BlurFilter } from 'pixi.js'
import { Stage, Container, Sprite, Text } from '@pixi/react'
import { useMemo } from 'react'

const width = 800;
const height = 600;
const stageProps = {
  height,
  width,
  options: {
    backgroundAlpha: 0,
    antialias: true,
  },
};

const Example = () => {
  const blurFilter = useMemo(() => new BlurFilter(2), [])

  return (
    <div className="border border-black m-2">
    <Stage {...stageProps}>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={260}
        anchor={{ x: 0.5, y: 0.5 }}
      />
       <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={200}
        y={250}
        anchor={{ x: 0.5, y: 0.5 }}
      />
      
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={600}
        y={280}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={120}>
        <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
    </div>
  )
}

export default Example
