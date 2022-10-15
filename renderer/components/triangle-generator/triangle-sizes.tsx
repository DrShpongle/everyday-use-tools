import * as React from 'react'

import {TriangleParams} from './_types'

const TriangleSizes: React.FC<{
  params: TriangleParams
  setParams: React.Dispatch<React.SetStateAction<TriangleParams>>
}> = ({params, setParams}) => {
  return (
    <div className="w-full">
      <h3 className="font-medium w-full text-lg mb-4 leading-none">
        Set size:
      </h3>
      <div className="space-y-3">
        <label className="flex justify-center items-center bg-white z-10 relative space-x-3">
          <span className="capitalize w-[54px]">Width:</span>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={params.sizes.width}
            max="200"
            min="0"
            onChange={(e) => {
              setParams({
                ...params,
                sizes: {
                  ...params.sizes,
                  width: Number(e.target.value),
                },
              })
            }}
            className="w-16 md:w-20 flex-shrink-0 appearance-none rounded p-2 transition-colors duration-150 border border-gray-300 focus:outline-none"
          />
        </label>
        <label className="flex justify-center items-center bg-white z-10 relative space-x-3">
          <span className="capitalize w-[54px]">Height:</span>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={params.sizes.height}
            max="200"
            min="0"
            onChange={(e) => {
              setParams({
                ...params,
                sizes: {
                  ...params.sizes,
                  height: Number(e.target.value),
                },
              })
            }}
            className="w-16 md:w-20 flex-shrink-0 appearance-none rounded p-2 transition-colors duration-150 border border-gray-300 focus:outline-none"
          />
        </label>
      </div>
    </div>
  )
}

export default TriangleSizes
