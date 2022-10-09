import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const capitalizeString = (str: string): string => {
  const firstLetter = str.charAt(0)
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = str.slice(1)
  return firstLetterCap + remainingLetters
}

const Home = () => {
  const [state, setState] = React.useState({
    direction: 'top',
    type: 'isosceles',
  })
  const isEquilateralAllowed = ORTHOGONAL_DIRECTIONS.includes(state.direction)
  const position = state.direction + capitalizeString(state.type)
  console.log('position:', position)

  const directionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      direction: e.target.value,
      ...(DIAGONAL_DIRECTIONS.includes(e.target.value) &&
        state.type === 'equilateral' && {type: 'isosceles'}),
    })
  }

  const typeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      type: e.target.value,
    })
  }

  return (
    <>
      <Head>
        <title>CSS Triangles generator 🔻</title>
      </Head>
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
                checked={state.direction === 'top'}
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
                checked={state.direction === 'topLeft'}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-top-right"
                value="topRight"
                onChange={directionHandler}
                checked={state.direction === 'topRight'}
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
                checked={state.direction === 'left'}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-right"
                value="right"
                onChange={directionHandler}
                checked={state.direction === 'right'}
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
                checked={state.direction === 'bottomLeft'}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-bottom-right"
                value="bottomRight"
                onChange={directionHandler}
                checked={state.direction === 'bottomRight'}
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
                checked={state.direction === 'bottom'}
              />
              <label htmlFor="direction-bottom">Bottom</label>
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="space-x-8 flex items-center">
          {isEquilateralAllowed && (
            <div className="flex items-center space-x-1">
              <label htmlFor="type-equilateral">Equilateral</label>
              <input
                type="radio"
                name="type"
                id="type-equilateral"
                value="equilateral"
                onChange={typeHandler}
                checked={state.type === 'equilateral'}
              />
            </div>
          )}
          <div className="flex items-center space-x-1">
            <label htmlFor="type-isosceles">Isosceles</label>
            <input
              type="radio"
              name="type"
              id="type-isosceles"
              value="isosceles"
              onChange={typeHandler}
              checked={state.type === 'isosceles'}
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
              checked={state.type === 'scalene'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

const ORTHOGONAL_DIRECTIONS = ['top', 'right', 'bottom', 'left']
const DIAGONAL_DIRECTIONS = ['topRight', 'bottomRight', 'bottomLeft', 'topLeft']
