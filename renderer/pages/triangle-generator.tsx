import * as React from 'react'
import Head from 'next/head'

import {TriangleParams} from '../components/triangle-generator/_types'
import {stylesTemplates} from '../components/triangle-generator/_consts'
import BlockWrapper from '../components/triangle-generator/block-wrapper'
import TriangleDirections from '../components/triangle-generator/triangle-directions'
import TriangleSizes from '../components/triangle-generator/triangle-sizes'
import TriangleColor from '../components/triangle-generator/triangle-color'
import LookAtResult from '../components/triangle-generator/look-at-result'
import GrabTheResult from '../components/triangle-generator/grab-the-result'

const defaultParams: TriangleParams = {
  direction: 'top',
  sizes: {
    width: 200,
    height: 100,
  },
  color: '#ff0000',
}

const TitleTriangle: React.FC<{color: string}> = ({color}) => {
  return (
    <span
      className="transition-all duration-150 mx-px"
      style={{
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 15px 26px 15px',
        borderColor: `transparent transparent ${color} transparent`,
      }}
    />
  )
}

const TriangleGenerator = () => {
  const [triangleParams, setTriangleParams] =
    React.useState<TriangleParams>(defaultParams)
  const lookAtResultStyles = stylesTemplates[triangleParams.direction](
    triangleParams.sizes,
    triangleParams.color,
    'demo',
  )

  return (
    <>
      <Head>
        <title>CSS Triangle generator</title>
      </Head>
      <div className="w-full max-w-sm md:max-w-5xl px-4 md:px-6 mx-auto py-12 flex flex-col items-center">
        <h1 className="flex-shrink-0 font-medium text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8 text-center flex items-baseline bg-white px-2">
          CSS tri
          <TitleTriangle color={triangleParams.color} />
          ngle gener
          <TitleTriangle color={triangleParams.color} />
          tor
        </h1>
        <div className="grid md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          <BlockWrapper title="Set direction">
            <TriangleDirections
              params={triangleParams}
              setParams={setTriangleParams}
            />
          </BlockWrapper>
          <BlockWrapper
            title="Look at result"
            resetHandler={() => setTriangleParams(defaultParams)}
            className="flex justify-center items-center"
          >
            <LookAtResult styles={lookAtResultStyles} />
          </BlockWrapper>
          <BlockWrapper>
            <TriangleSizes
              params={triangleParams}
              setParams={setTriangleParams}
            />
            <TriangleColor
              params={triangleParams}
              setParams={setTriangleParams}
            />
          </BlockWrapper>
          <BlockWrapper
            title="Grab the result"
            className="flex flex-col items-center space-y-6"
          >
            <GrabTheResult params={triangleParams} />
          </BlockWrapper>
        </div>
      </div>
    </>
  )
}

export default TriangleGenerator
