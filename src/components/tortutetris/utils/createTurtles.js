export const createTurtles = () => [
  { id: 0, x: 0, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: true,      gravityCounter: 0, sprite: '🐢' },
  { id: 0, x: 1, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: true,      gravityCounter: 0, sprite: '🐢' },
  { id: 0, x: 2, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: true,      gravityCounter: 0, sprite: '🐢' },  
  { id: 0, x: 1, y: 1, moveX: 0, moveY: 0, moveUpdate: false, status: true,      gravityCounter: 0, sprite: '🐢' },  
  { id: 1, x: 3, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐙' },
  { id: 1, x: 4, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐙' },
  { id: 1, x: 3, y: 1, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐙' },  
  { id: 1, x: 4, y: 1, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐙' },  
  { id: 2, x: 6, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 2, x: 6, y: 1, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 2, x: 6, y: 2, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 3, x: 7, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 3, x: 8, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 3, x: 7, y: 1, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 4, x: 2, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 4, x: 3, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 4, x: 4, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 5, x: 5, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 5, x: 6, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 5, x: 7, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 6, x: 7, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 6, x: 8, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 6, x: 9, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 7, x: 1, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 7, x: 2, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 7, x: 3, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 8, x: 4, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 8, x: 5, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 8, x: 6, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
  { id: 9, x: 7, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 9, x: 8, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },
  { id: 9, x: 9, y: 0, moveX: 0, moveY: 0, moveUpdate: false, status: undefined, gravityCounter: 0, sprite: '🐢' },  
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
