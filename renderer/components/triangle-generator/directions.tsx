import * as React from 'react'
import cx from 'classnames'

import {DIAGONAL_DIRECTIONS} from './constants'
import {TriangleParams} from './types'
import {IconArrowUp} from '../../lib/icons'

const capitalizeString = (str: string): string => {
  const firstLetter = str.charAt(0)
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = str.slice(1)
  return firstLetterCap + remainingLetters
}

const TriangleDirectionItem = ({item, params, setParams}) => {
  return (
    <div
      key={`key-${item.direction}`}
      className={cx(
        'cursor-pointer border border-gray-400 hover:text-gray-700 hover:bg-gray-300 transition-colors duration-75 grid place-items-center',
        item.direction === params.direction
          ? 'text-gray-700 bg-gray-300'
          : 'text-gray-500 bg-gray-100',
      )}
      onClick={() => {
        setParams({
          ...params,
          direction: item.direction,
          positionAndType:
            item.direction +
            (DIAGONAL_DIRECTIONS.includes(item.direction) &&
            params.type === 'equilateral'
              ? 'Isosceles'
              : capitalizeString(params.type)),
          // force switch to 'isosceles' type if there is diagonal direction and 'equilateral' type
          ...(DIAGONAL_DIRECTIONS.includes(item.direction) &&
            params.type === 'equilateral' && {type: 'isosceles'}),
        })
      }}
    >
      <IconArrowUp className={cx('w-6 transform', item.arrowClasses)} />
    </div>
  )
}

const Directions: React.FC<{
  params: TriangleParams
  setParams: React.Dispatch<React.SetStateAction<TriangleParams>>
}> = ({params, setParams}) => {
  return (
    <div className="relative py-8">
      <div className="grid grid-cols-2 grid-rows-2 w-64 h-64">
        {diagonalDirections.map((item) => (
          <TriangleDirectionItem
            key={`key-${item.direction}`}
            item={item}
            params={params}
            setParams={setParams}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-56 h-56 absolute left-0 top-0 right-0 bottom-0 m-auto transform rotate-45">
        {orthogonalDirections.map((item) => (
          <TriangleDirectionItem
            key={`key-${item.direction}`}
            item={item}
            params={params}
            setParams={setParams}
          />
        ))}
      </div>
      <div
        className="absolute left-0 top-0 right-0 bottom-0 m-auto bg-white border border-gray-400"
        style={{width: '158px', height: '158px'}}
      />
    </div>
  )
}

export default Directions

const diagonalDirections = [
  {
    direction: 'topLeft',
    arrowClasses: '-translate-x-8 -translate-y-8 -rotate-45',
  },
  {
    direction: 'topRight',
    arrowClasses: 'translate-x-8 -translate-y-8 rotate-45',
  },
  {
    direction: 'bottomLeft',
    arrowClasses: '-translate-x-8 translate-y-8 rotate-[225deg]',
  },
  {
    direction: 'bottomRight',
    arrowClasses: 'translate-x-8 translate-y-8 rotate-[135deg]',
  },
]

const orthogonalDirections = [
  {
    direction: 'top',
    arrowClasses: '-translate-x-6 -translate-y-6 -rotate-45',
  },
  {
    direction: 'right',
    arrowClasses: 'translate-x-6 -translate-y-6 rotate-45',
  },
  {
    direction: 'left',
    arrowClasses: '-translate-x-6 translate-y-6 rotate-[225deg]',
  },
  {
    direction: 'bottom',
    arrowClasses: 'translate-x-6 translate-y-6 rotate-[135deg]',
  },
]
