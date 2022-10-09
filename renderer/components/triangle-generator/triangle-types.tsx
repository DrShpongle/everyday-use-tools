import * as React from 'react'
import cx from 'classnames'

import {capitalizeString} from '../../utils'
import {ORTHOGONAL_DIRECTIONS} from './_constants'
import {TriangleParams} from './_types'

const TriangleTypes: React.FC<{
  params: TriangleParams
  setParams: React.Dispatch<React.SetStateAction<TriangleParams>>
}> = ({params, setParams}) => {
  const isEquilateralAllowed = ORTHOGONAL_DIRECTIONS.includes(params.direction)
  const switchTypeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      type: e.target.value,
      positionAndType: params.direction + capitalizeString(e.target.value),
    })
  }
  return (
    <div className="space-x-8 flex items-center">
      <label
        htmlFor="type-equilateral"
        className={cx(
          'flex items-center space-x-1',
          isEquilateralAllowed ? 'cursor-pointer' : 'opacity-25 cursor-default',
        )}
      >
        <span>Equilateral</span>
        <input
          type="radio"
          name="type"
          id="type-equilateral"
          value="equilateral"
          onChange={switchTypeHandler}
          checked={params.type === 'equilateral'}
          disabled={!isEquilateralAllowed}
        />
      </label>
      <label
        htmlFor="type-isosceles"
        className="flex items-center space-x-1 cursor-pointer"
      >
        <span>Isosceles</span>
        <input
          type="radio"
          name="type"
          id="type-isosceles"
          value="isosceles"
          onChange={switchTypeHandler}
          checked={params.type === 'isosceles'}
        />
      </label>
      <label
        htmlFor="type-scalene"
        className="flex items-center space-x-1 cursor-pointer"
      >
        <span>Scalene</span>
        <input
          type="radio"
          name="type"
          id="type-scalene"
          value="scalene"
          onChange={switchTypeHandler}
          checked={params.type === 'scalene'}
        />
      </label>
    </div>
  )
}

export default TriangleTypes
