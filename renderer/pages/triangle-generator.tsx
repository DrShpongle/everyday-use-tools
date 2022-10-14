import * as React from 'react'
import Head from 'next/head'

import {TriangleParams} from '../components/triangle-generator/_types'
import {stylesTemplates} from '../components/triangle-generator/_consts'
import TriangleDirections from '../components/triangle-generator/triangle-directions'
import TriangleSizes from '../components/triangle-generator/triangle-sizes'

const defaultParams: TriangleParams = {
  direction: 'top',
  sizes: {
    width: 200,
    height: 100,
  },
  color: '#ff0000',
}

const TriangleGenerator = () => {
  const [triangleParams, setTriangleParams] =
    React.useState<TriangleParams>(defaultParams)
  const computedStyles = stylesTemplates[triangleParams.direction](
    triangleParams.sizes,
    triangleParams.color,
    'jss',
  )
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
        <div className="w-96 h-96 border border-gray-400 flex items-center justify-center">
          <div className="duration-150" style={computedStyles} />
        </div>
      </div>
    </>
  )
}

export default TriangleGenerator
