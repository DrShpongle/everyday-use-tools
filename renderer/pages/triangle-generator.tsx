import * as React from 'react'
import Head from 'next/head'

import {TriangleParams} from '../components/triangle-generator/_types'

import TriangleDirections from '../components/triangle-generator/triangle-directions'
import TriangleSizes from '../components/triangle-generator/triangle-sizes'

const defaultParams: TriangleParams = {
  direction: 'top',
  sizes: {
    width: 200,
    height: 100,
  },
}

const TriangleGenerator = () => {
  const [triangleParams, setTriangleParams] =
    React.useState<TriangleParams>(defaultParams)
  console.log('triangleParams:', triangleParams)
  return (
    <>
      <Head>
        <title>CSS Triangle generator</title>
      </Head>
      <div className="w-full h-full flex flex-col space-y-12 items-center justify-center min-h-screen">
        <TriangleDirections
          params={triangleParams}
          setParams={setTriangleParams}
        />
        <TriangleSizes params={triangleParams} setParams={setTriangleParams} />
      </div>
    </>
  )
}

export default TriangleGenerator
