import { createPieceT } from './pieceT'
import { createPieceI } from './pieceI'
import { createPieceBox } from './pieceBox'
import { createPieceL } from './pieceL'

export const createTurtles = () => [
  ...createPieceT(0, 5, '🟥', true),
  ...createPieceBox(1, 5, '🟥', undefined),
  ...createPieceL(2, 5, '🟥', undefined),
  ...createPieceI(3, 5, '🟥', undefined),
  ...createPieceI(4, 5, '🟨', undefined),
  ...createPieceT(5, 5, '🟨', undefined),
  ...createPieceBox(6, 5, '🟨', undefined),
  ...createPieceL(7, 5, '🟨', undefined),
  ...createPieceI(8, 5, '🟦', undefined),
  ...createPieceT(9, 5, '🟦', undefined),
  ...createPieceBox(10, 5, '🟦', undefined),
  ...createPieceL(11, 5, '🟦', undefined),
  ...createPieceT(12, 5, '🟥', undefined),
  ...createPieceBox(13, 5, '🟥', undefined),
  ...createPieceL(14, 5, '🟥', undefined),
  ...createPieceI(15, 5, '🟥', undefined),
  ...createPieceI(16, 5, '🟨', undefined),
  ...createPieceT(17, 5, '🟨', undefined),
  ...createPieceBox(18, 5, '🟨', undefined),
  ...createPieceL(19, 5, '🟨', undefined),
  ...createPieceI(20, 5, '🟦', undefined),
  ...createPieceT(21, 5, '🟦', undefined),
  ...createPieceBox(22, 5, '🟦', undefined),
  ...createPieceL(23, 5, '🟦', undefined),
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
