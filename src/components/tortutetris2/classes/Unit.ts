export class Unit {
  id: number
  x: number
  y: number
  sprite: string
  constructor(id: number, x: number, y: number, sprite: string) {
    this.id = id
    this.x = 0
    this.y = 0
    this.sprite = sprite === '0' ? '0' : sprite
  }
}
