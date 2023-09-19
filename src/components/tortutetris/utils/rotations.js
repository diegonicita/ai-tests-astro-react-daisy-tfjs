const UP = -1
const DOWN = 1
const LEFT = -1
const RIGHT = 1
const Zero = 0

export const rotationDefault = () => ({
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 },
  ],
})

export const rotationNone = () => ({
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
})

export const rotationToRightUp = () => ({
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: RIGHT, y: UP },
    { x: RIGHT, y: DOWN },
    { x: LEFT, y: DOWN },
    { x: LEFT, y: UP },
  ],
})

export const rotationToRightDown = () => ( {
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: RIGHT, y: DOWN },
    { x: LEFT, y: DOWN },
    { x: LEFT, y: UP },
    { x: RIGHT, y: UP },
  ],
})

export const rotationToLeftDown = () => ( {
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: LEFT, y: DOWN },
    { x: LEFT, y: UP },
    { x: RIGHT, y: UP },
    { x: RIGHT, y: DOWN },
  ],
})

export const rotationToLeftUp = () => ({
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: LEFT, y: UP },
    { x: RIGHT, y: UP },
    { x: RIGHT, y: DOWN },
    { x: LEFT, y: DOWN },
  ],
})

export const rotationToLeftUp2 = () => ({
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: LEFT * 2, y: UP * 2 },
    { x: RIGHT * 2, y: UP * 2 },
    { x: RIGHT * 2, y: DOWN * 2 },
    { x: LEFT * 2, y: DOWN * 2 },
  ],
})

export const rotationToCornersRightDown = () => ({
  index: 0,
  update: false,
  roteX: 0,
  roteY: 0,
  positions: [
    { x: 0, y: DOWN * 2 },
    { x: LEFT * 2, y: 0 },
    { x: 0, y: UP * 2 },
    { x: RIGHT * 2, y: 0 },
  ],
})