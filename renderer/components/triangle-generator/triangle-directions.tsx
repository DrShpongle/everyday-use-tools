import * as React from 'react'
import cx from 'classnames'

import {TriangleParams} from './_types'
import {IconArrowUp} from '../../lib/icons'

const TriangleDirection = ({item, currentDirection, setParams}) => {
  const switchDirectionHandler = () => {
    setParams((params: TriangleParams) => ({
      ...params,
      direction: item.direction,
    }))
  }
  return (
    <button
      key={`key-${item.direction}`}
      className={cx(
        'cursor-pointer border border-gray-400 hover:text-gray-700 transition-colors duration-75 grid place-items-center',
        item.direction === currentDirection
          ? 'text-gray-700 bg-gray-300'
          : 'text-gray-500 bg-gray-100 hover:bg-gray-200',
      )}
      onClick={switchDirectionHandler}
    >
      <IconArrowUp className={cx('w-6 transform', item.arrowClasses)} />
    </button>
  )
}

const TriangleDirections: React.FC<{
  currentDirection: string
  setParams: React.Dispatch<React.SetStateAction<TriangleParams>>
}> = ({currentDirection, setParams}) => {
  return (
    <div className="relative py-8 flex justify-center w-full">
      <div className="grid grid-cols-2 grid-rows-2 w-64 h-64">
        {diagonalDirections.map((item) => (
          <TriangleDirection
            key={`key-${item.direction}`}
            item={item}
            currentDirection={currentDirection}
            setParams={setParams}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-56 h-56 absolute left-0 top-0 right-0 bottom-0 m-auto transform rotate-45">
        {orthogonalDirections.map((item) => (
          <TriangleDirection
            key={`key-${item.direction}`}
            item={item}
            currentDirection={currentDirection}
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

export default TriangleDirections

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
