import * as React from 'react'

import {IconRefresh} from '../../lib/icons'

const BlockWrapper: React.FC<{
  children: React.ReactNode
  title?: string
  resetHandler?: () => void
}> = ({children, title, resetHandler}) => (
  <div className="bg-white rounded-md border border-gray-300 p-6 lg:p-6 flex flex-col items-center">
    {title && (
      <h3 className="font-medium w-full text-lg mb-3 leading-none flex justify-between items-center">
        <div>{title}:</div>
        {resetHandler && (
          <button
            onClick={resetHandler}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-800 text-sm duration-100 focus:outline-none"
          >
            <span>reset</span>
            <IconRefresh className="w-4" />
          </button>
        )}
      </h3>
    )}
    <div className="w-full flex flex-col flex-grow space-y-10 rounded-md transition-colors duration-150">
      {children}
    </div>
  </div>
)

export default BlockWrapper
