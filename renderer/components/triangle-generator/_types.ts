// type Direction =
//   | 'top'
//   | 'topRight'
//   | 'right'
//   | 'bottomRight'
//   | 'bottom'
//   | 'bottomLeft'
//   | 'left'
//   | 'topLeft'

// type Type = 'equilateral' | 'isosceles' | 'scalene'

export interface TriangleParams {
  // direction: Direction
  // type: Type
  direction: string
  type: string
  positionAndType: string
  sizes: {
    width: number
    left: number
    right: number
    height: number
    top: number
    bottom: number
  }
}
