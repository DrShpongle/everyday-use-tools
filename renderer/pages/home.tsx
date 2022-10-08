import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const capitalizeString = (str: string): string => {
  const firstLetter = str.charAt(0)
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = str.slice(1)
  return firstLetterCap + remainingLetters
}

// const word = "freecodecamp"

// const firstLetter = word.charAt(0)

// const firstLetterCap = firstLetter.toUpperCase()

// const remainingLetters = word.slice(1)

// const capitalizedWord = firstLetterCap + remainingLetters

const Home = () => {
  // const [direction, setDirection] = React.useState('top')
  // const [type, setType] = React.useState('isosceles')
  const [state, setState] = React.useState({
    direction: 'top',
    type: 'isosceles',
  })
  const isEquilateralAllowed = EQUILATERAL_DIRECTIONS.includes(state.direction)
  const position = state.direction + capitalizeString(state.type)
  console.log('position:', position)

  const directionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      direction: e.target.value,
      ...(['topRight', 'bottomRight', 'bottomLeft', 'topLeft'].includes(
        e.target.value,
      ) && {type: 'isosceles'}),
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
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
                defaultChecked
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
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-top-right"
                value="topRight"
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
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
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-right"
                value="right"
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
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
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
              />
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="radio"
                name="direction"
                id="direction-bottom-right"
                value="bottomRight"
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
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
                // onChange={(e) => setDirection(e.target.value)}
                onChange={directionHandler}
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
                // onChange={(e) => setDirection(e.target.value)}
                onChange={typeHandler}
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
              // onChange={(e) => setDirection(e.target.value)}
              onChange={typeHandler}
              defaultChecked
            />
          </div>
          <div className="flex items-center space-x-1">
            <label htmlFor="type-scalene">Scalene</label>
            <input
              type="radio"
              name="type"
              id="type-scalene"
              value="scalene"
              // onChange={(e) => setDirection(e.target.value)}
              onChange={typeHandler}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

const EQUILATERAL_DIRECTIONS = ['top', 'right', 'bottom', 'left']
