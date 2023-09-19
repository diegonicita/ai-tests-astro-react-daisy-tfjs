import { createPieceT } from './pieceT'
import { createPieceI } from './pieceI'
import { createPieceBox } from './pieceBox'
import { createPieceL } from './pieceL'

export const createTurtles = () => [
  ...createPieceI(0, '🐢', true),
  ...createPieceT(1, '🐢', undefined),
  ...createPieceBox(2, '🐢', undefined),
  ...createPieceL(3, '🐢', undefined),
  ...createPieceI(4, '🐢', undefined),
  ...createPieceT(5, '🐢', undefined),
  ...createPieceBox(6, '🐢', undefined),
  ...createPieceL(7, '🐢', undefined),
]

export const createIdMap = (items) => {
  const idMap = {}
  // Primero, agrupamos los elementos por su ID
  for (const item of items) {
    if (!idMap[item.id]) {
      idMap[item.id] = []
    }
    idMap[item.id].push(item)
  }
  return idMap
}
