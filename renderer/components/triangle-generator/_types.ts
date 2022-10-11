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
  direction: string
  sizes: {
    width: number
    height: number
  }
}
