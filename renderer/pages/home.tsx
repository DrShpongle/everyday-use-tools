import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import cx from 'classnames'

const capitalizeString = (str: string): string => {
  const firstLetter = str.charAt(0)
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = str.slice(1)
  return firstLetterCap + remainingLetters
}

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

interface TriangleParams {
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

const Home = () => {
  const [triangleParams, setTriangleParams] = React.useState<TriangleParams>({
    direction: 'top',
    type: 'isosceles',
    positionAndType: 'topIsosceles',
    sizes: {
      width: 0,
      left: 0,
      right: 0,
      height: 0,
      top: 0,
      bottom: 0,
    },
  })
  const isEquilateralAllowed = ORTHOGONAL_DIRECTIONS.includes(
    triangleParams.direction,
  )

  const directionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTriangleParams({
      ...triangleParams,
      direction: e.target.value as string,
      positionAndType:
        e.target.value +
        (DIAGONAL_DIRECTIONS.includes(e.target.value) &&
        triangleParams.type === 'equilateral'
          ? 'Isosceles'
          : capitalizeString(triangleParams.type)),
      // force switch to 'isosceles' type if there is diagonal direction and 'equilateral' type
      ...(DIAGONAL_DIRECTIONS.includes(e.target.value) &&
        triangleParams.type === 'equilateral' && {type: 'isosceles'}),
    })
  }

  const typeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTriangleParams({
      ...triangleParams,
      type: e.target.value,
      positionAndType:
        triangleParams.direction + capitalizeString(e.target.value),
    })
  }

  return (
    <>
      <Head>
        <title>Generators</title>
      </Head>
      <Link href="/triangle-generator">
        <a>triangle generator</a>
      </Link>
      <div className="w-full h-full flex flex-col space-y-12 items-center justify-center min-h-screen">
        {/* Direction */}
        <div className="space-y-3">
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-top"
                value="top"
                onChange={directionHandler}
                checked={triangleParams.direction === 'top'}
              />
              <label htmlFor="direction-top">Top</label>
            </div>
          </div>
          <div className="flex justify-center space-x-16">
            <div className="flex items-center space-x-1">
              <label htmlFor="direction-top-left">Top left</label>
              <input
                type="radio"
                name="direction"
                id="direction-top-left"
                value="topLeft"
                onChange={directionHandler}
                checked={triangleParams.direction === 'topLeft'}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-top-right"
                value="topRight"
                onChange={directionHandler}
                checked={triangleParams.direction === 'topRight'}
              />
              <label htmlFor="direction-top-right">Top right</label>
            </div>
          </div>
          <div className="flex justify-center space-x-32">
            <div className="flex items-center space-x-1">
              <label htmlFor="direction-left">Left</label>
              <input
                type="radio"
                name="direction"
                id="direction-left"
                value="left"
                onChange={directionHandler}
                checked={triangleParams.direction === 'left'}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-right"
                value="right"
                onChange={directionHandler}
                checked={triangleParams.direction === 'right'}
              />
              <label htmlFor="direction-right">Right</label>
            </div>
          </div>
          <div className="flex justify-center space-x-16">
            <div className="flex items-center space-x-1">
              <label htmlFor="direction-bottom-left">Bottom left</label>
              <input
                type="radio"
                name="direction"
                id="direction-bottom-left"
                value="bottomLeft"
                onChange={directionHandler}
                checked={triangleParams.direction === 'bottomLeft'}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-bottom-right"
                value="bottomRight"
                onChange={directionHandler}
                checked={triangleParams.direction === 'bottomRight'}
              />
              <label htmlFor="direction-bottom-right">Bottom right</label>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-bottom"
                value="bottom"
                onChange={directionHandler}
                checked={triangleParams.direction === 'bottom'}
              />
              <label htmlFor="direction-bottom">Bottom</label>
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="space-x-8 flex items-center">
          <div className="flex items-center space-x-1">
            <label htmlFor="type-equilateral">Equilateral</label>
            <input
              type="radio"
              name="type"
              id="type-equilateral"
              value="equilateral"
              onChange={typeHandler}
              checked={triangleParams.type === 'equilateral'}
              disabled={!isEquilateralAllowed}
            />
          </div>
          <div className="flex items-center space-x-1">
            <label htmlFor="type-isosceles">Isosceles</label>
            <input
              type="radio"
              name="type"
              id="type-isosceles"
              value="isosceles"
              onChange={typeHandler}
              checked={triangleParams.type === 'isosceles'}
            />
          </div>
          <div className="flex items-center space-x-1">
            <label htmlFor="type-scalene">Scalene</label>
            <input
              type="radio"
              name="type"
              id="type-scalene"
              value="scalene"
              onChange={typeHandler}
              checked={triangleParams.type === 'scalene'}
            />
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-3">
          {sizeInputFields.map((item) => {
            return (
              <label
                key={item.key}
                className={cx(
                  'flex justify-end items-center bg-white z-10 relative space-x-3',
                  !item.schema.includes(triangleParams.positionAndType) &&
                    'opacity-25',
                )}
              >
                <span className="capitalize">{item.key}:</span>
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={triangleParams.sizes[item.key]}
                  max="200"
                  min="0"
                  onChange={(e) => {
                    setTriangleParams({
                      ...triangleParams,
                      sizes: {
                        ...triangleParams.sizes,
                        [item.key]: Number(e.target.value),
                      },
                    })
                  }}
                  disabled={
                    !item.schema.includes(triangleParams.positionAndType)
                  }
                  className="w-16 md:w-20 flex-shrink-0 appearance-none rounded p-2 transition-colors duration-150 border border-gray-400 focus:outline-none"
                />
              </label>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home

const ORTHOGONAL_DIRECTIONS = ['top', 'right', 'bottom', 'left']
const DIAGONAL_DIRECTIONS = ['topRight', 'bottomRight', 'bottomLeft', 'topLeft']

const SCHEMA_WIDTH = [
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
const SCHEMA_LEFT = ['topScalene', 'bottomScalene']
const SCHEMA_RIGHT = ['topScalene', 'bottomScalene']
const SCHEMA_HEIGHT = [
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
const SCHEMA_TOP = ['rightScalene', 'leftScalene']
const SCHEMA_BOTTOM = ['rightScalene', 'leftScalene']

const sizeInputFields = [
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
