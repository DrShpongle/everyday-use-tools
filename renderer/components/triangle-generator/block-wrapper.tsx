import * as React from 'react'
import cx from 'classnames'

import {IconRefresh} from '../../lib/icons'

const BlockWrapper: React.FC<{
  children: React.ReactNode
  title?: string
  className?: string
  resetHandler?: () => void
}> = ({children, title, resetHandler, className}) => (
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
    <div className={cx('w-full grow', className)}>{children}</div>
  </div>
)

export default BlockWrapper
