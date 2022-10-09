export const ORTHOGONAL_DIRECTIONS = ['top', 'right', 'bottom', 'left']
export const DIAGONAL_DIRECTIONS = [
  'topRight',
  'bottomRight',
  'bottomLeft',
  'topLeft',
]

export const SCHEMA_WIDTH = [
  'topEquilateral',
  'topIsosceles',
  'topRightIsosceles',
  'topRightScalene',
  'rightIsosceles',
  'rightScalene',
  'bottomRightIsosceles',
  'bottomRightScalene',
  'bottomEquilateral',
  'bottomIsosceles',
  'bottomLeftIsosceles',
  'bottomLeftScalene',
  'leftIsosceles',
  'leftScalene',
  'topLeftIsosceles',
  'topLeftScalene',
]
export const SCHEMA_LEFT = ['topScalene', 'bottomScalene']
export const SCHEMA_RIGHT = ['topScalene', 'bottomScalene']
export const SCHEMA_HEIGHT = [
  'topIsosceles',
  'topScalene',
  'topRightIsosceles',
  'topRightScalene',
  'rightEquilateral',
  'rightIsosceles',
  'bottomRightIsosceles',
  'bottomRightScalene',
  'bottomIsosceles',
  'bottomScalene',
  'bottomLeftIsosceles',
  'bottomLeftScalene',
  'leftEquilateral',
  'leftIsosceles',
  'topLeftIsosceles',
  'topLeftScalene',
]
export const SCHEMA_TOP = ['rightScalene', 'leftScalene']
export const SCHEMA_BOTTOM = ['rightScalene', 'leftScalene']

export const sizeInputFields = [
  {
    key: 'width',
    schema: SCHEMA_WIDTH,
  },
  {
    key: 'left',
    schema: SCHEMA_LEFT,
  },
  {
    key: 'right',
    schema: SCHEMA_RIGHT,
  },
  {
    key: 'height',
    schema: SCHEMA_HEIGHT,
  },
  {
    key: 'top',
    schema: SCHEMA_TOP,
  },
  {
    key: 'bottom',
    schema: SCHEMA_BOTTOM,
  },
]
