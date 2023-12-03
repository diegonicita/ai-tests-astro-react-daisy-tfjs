import { createPieceT } from './pieceT'
import { createPieceI } from './pieceI'
import { createPieceBox } from './pieceBox'
import { createPieceL } from './pieceL'

export const createTurtles = () => {
  const piezas = []
  for (let i = 0; i < 240; i++) {
    const tipoPieza = Math.floor(Math.random() * 4) + 1
    const id = piezas.length / 4
    if (tipoPieza === 0) {
      piezas.push(...createPieceT(id, 5, '🟨', undefined))
    }
    if (tipoPieza === 1) {
      piezas.push(...createPieceBox(id, 5, '🐢', undefined))
    }
    if (tipoPieza === 2) {
      piezas.push(...createPieceL(id, 5, '🟦', undefined))
    }
    if (tipoPieza === 3) {
      piezas.push(...createPieceI(id, 5, '🍄', undefined))
    }
  }
  piezas[0].status = true
  piezas[1].status = true
  piezas[2].status = true
  piezas[3].status = true  
  return piezas

  // return [
  //   ...createPieceT(0, 5, '🐢', true),
  //   ...createPieceBox(1, 5, '🐢', undefined),
  //   ...createPieceL(2, 5, '🐢', undefined),
  //   ...createPieceI(3, 5, '🐢', undefined),
  //   ...createPieceI(4, 5, '🟨', undefined),
  //   ...createPieceT(5, 5, '🟨', undefined),
  //   ...createPieceBox(6, 5, '🟨', undefined),
  //   ...createPieceL(7, 5, '🟨', undefined),
  //   ...createPieceI(8, 5, '🟦', undefined),
  //   ...createPieceT(9, 5, '🟦', undefined),
  //   ...createPieceBox(10, 5, '🟦', undefined),
  //   ...createPieceL(11, 5, '🟦', undefined),
  //   ...createPieceT(12, 5, '🐢', undefined),
  //   ...createPieceBox(13, 5, '🐢', undefined),
  //   ...createPieceL(14, 5, '🐢', undefined),
  //   ...createPieceI(15, 5, '🐢', undefined),
  //   ...createPieceI(16, 5, '🟨', undefined),
  //   ...createPieceT(17, 5, '🟨', undefined),
  //   ...createPieceBox(18, 5, '🟨', undefined),
  //   ...createPieceL(19, 5, '🟨', undefined),
  //   ...createPieceI(20, 5, '🟦', undefined),
  //   ...createPieceT(21, 5, '🟦', undefined),
  //   ...createPieceBox(22, 5, '🟦', undefined),
  //   ...createPieceL(23, 5, '🟦', undefined),
  // ]
}

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
