enum Directions {
  Top = 'top',
  TopRight = 'topRight',
  Right = 'right',
  BottomRight = 'bottomRight',
  Bottom = 'bottom',
  BottomLeft = 'bottomLeft',
  Left = 'left',
  TopLeft = 'topLeft',
}

type DirectionsType = `${Directions}`

export interface TriangleParams {
  direction: DirectionsType
  sizes: {
    width: number
    height: number
  }
  color: string
}
