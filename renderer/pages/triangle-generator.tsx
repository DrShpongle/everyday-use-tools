import * as React from 'react'
import Head from 'next/head'

import {TriangleParams} from '../components/triangle-generator/types'

import Directions from '../components/triangle-generator/directions'

const defaultParams: TriangleParams = {
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
}

const TriangleGenerator = () => {
  const [triangleParams, setTriangleParams] =
    React.useState<TriangleParams>(defaultParams)

  return (
    <>
      <Head>
        <title>CSS Triangle generator</title>
      </Head>
      <div className="w-full h-full flex flex-col space-y-12 items-center justify-center min-h-screen">
        <Directions params={triangleParams} setParams={setTriangleParams} />
      </div>
    </>
  )
}

export default TriangleGenerator
