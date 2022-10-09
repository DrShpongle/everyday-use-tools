import * as React from 'react'
import cx from 'classnames'

import {sizeInputFields} from './_constants'
import {TriangleParams} from './_types'

const TriangleSizes: React.FC<{
  params: TriangleParams
  setParams: React.Dispatch<React.SetStateAction<TriangleParams>>
}> = ({params, setParams}) => {
  return (
    <div className="space-y-3">
      {sizeInputFields.map((item) => {
        return (
          <label
            key={item.key}
            className={cx(
              'flex justify-end items-center bg-white z-10 relative space-x-3',
              !item.schema.includes(params.positionAndType) && 'opacity-25',
            )}
          >
            <span className="capitalize">{item.key}:</span>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={params.sizes[item.key]}
              max="200"
              min="0"
              onChange={(e) => {
                setParams({
                  ...params,
                  sizes: {
                    ...params.sizes,
                    [item.key]: Number(e.target.value),
                  },
                })
              }}
              disabled={!item.schema.includes(params.positionAndType)}
              className="w-16 md:w-20 flex-shrink-0 appearance-none rounded p-2 transition-colors duration-150 border border-gray-400 focus:outline-none"
            />
          </label>
        )
      })}
    </div>
  )
}

export default TriangleSizes
