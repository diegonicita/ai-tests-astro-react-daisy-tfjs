import {
  rotationDefault,
  rotationNone,
  rotationToRightUp,
  rotationToRightDown,
  rotationToLeftDown,
  rotationToLeftUp,
  rotationToLeftUp2,
  rotationToCornersRightDown,
  rotationL1,
  rotationD1,
  rotationU1,
} from './rotations'

export const createPieceT = (id, sprite, status) => [
  {
    id: id,
    x: 2,
    y: 0,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '0' : sprite, 
    rotation: rotationNone(),
  },
  {
    id: id,
    x: 1,
    y: 0,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '1' : sprite, 
    rotation: rotationU1(),
  },
  {
    id: id,
    x: 3,
    y: 0,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '2' : sprite, 
    rotation: rotationD1(),
  },
  {
    id: id,
    x: 2,
    y: 1,
    moveX: 0,
    moveY: 0,
    moveUpdate: false,
    status: status,
    gravityCounter: 0,
    sprite: sprite == '0' ? '3' : sprite, 
    rotation: rotationL1(),
  },
]
