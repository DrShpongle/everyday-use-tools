import * as React from 'react'
import cx from 'classnames'

import {DIAGONAL_DIRECTIONS} from './constants'
import {TriangleParams} from './types'

const capitalizeString = (str: string): string => {
  const firstLetter = str.charAt(0)
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = str.slice(1)
  return firstLetterCap + remainingLetters
}

const Directions: React.FC<{
  params: TriangleParams
  setParams: React.Dispatch<React.SetStateAction<TriangleParams>>
}> = ({params, setParams}) => {
  const directionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      direction: e.target.value as string,
      positionAndType:
        e.target.value +
        (DIAGONAL_DIRECTIONS.includes(e.target.value) &&
        params.type === 'equilateral'
          ? 'Isosceles'
          : capitalizeString(params.type)),
      // force switch to 'isosceles' type if there is diagonal direction and 'equilateral' type
      ...(DIAGONAL_DIRECTIONS.includes(e.target.value) &&
        params.type === 'equilateral' && {type: 'isosceles'}),
    })
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-center space-x-4">
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            name="direction"
            id="direction-top"
            value="top"
            onChange={directionHandler}
            checked={params.direction === 'top'}
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
            checked={params.direction === 'topLeft'}
          />
        </div>
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            name="direction"
            id="direction-top-right"
            value="topRight"
            onChange={directionHandler}
            checked={params.direction === 'topRight'}
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
            checked={params.direction === 'left'}
          />
        </div>
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            name="direction"
            id="direction-right"
            value="right"
            onChange={directionHandler}
            checked={params.direction === 'right'}
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
            checked={params.direction === 'bottomLeft'}
          />
        </div>
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            name="direction"
            id="direction-bottom-right"
            value="bottomRight"
            onChange={directionHandler}
            checked={params.direction === 'bottomRight'}
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
            checked={params.direction === 'bottom'}
          />
          <label htmlFor="direction-bottom">Bottom</label>
        </div>
      </div>
    </div>
  )
}

export default Directions
