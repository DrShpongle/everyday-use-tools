import * as React from 'react'
import {useCopyToClipboard} from 'react-use'

import {IconClipboardCopy} from '../../lib/icons'
import {stylesTemplates} from './_consts'

const ResultCodeOutput = ({resultCode}) => (
  <textarea
    value={resultCode}
    readOnly
    className="h-48 font-mono text-sm appearance-none w-full resize-none text-md p-3 rounded transition-colors duration-150 border border-gray-400 focus:outline-none"
  />
)

const OutputControl = ({onChange, outputType}) => (
  <form className="flex flex-row items-center space-x-4 w-full">
    <label className="cursor-pointer flex items-center">
      <input
        type="radio"
        name="output-type"
        value="css"
        onChange={onChange}
        checked={outputType === 'css'}
      />
      <span className="ml-1">CSS</span>
    </label>
    <label className="cursor-pointer flex items-center">
      <input
        type="radio"
        name="output-type"
        value="jss"
        onChange={onChange}
        checked={outputType === 'jss'}
      />
      <span className="ml-1">JSS</span>
    </label>
  </form>
)

const CopyToClipboard = ({stringToCopy, ...restProps}) => {
  if (stringToCopy) {
    const [copied, setCopied] = React.useState(false)
    const [state, copyToClipboard] = useCopyToClipboard()

    const copyHandler = () => {
      copyToClipboard(stringToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    return (
      <div {...restProps}>
        <button
          type="button"
          disabled={copied}
          onClick={copyHandler}
          className="rounded p-2 flex justify-center items-center bg-gray-200 hover:bg-gray-400 transition-colors duration-150 focus:outline-none"
          style={{minWidth: '210px'}}
        >
          {state.error ? (
            'Unable to copy!'
          ) : copied ? (
            'Copied!'
          ) : (
            <>
              <IconClipboardCopy className="w-5 mr-2" />
              <span>Copy code to clipboard</span>
            </>
          )}
        </button>
      </div>
    )
  }
  return null
}

const GrabTheResult = ({params}) => {
  const [outputType, setOutputType] = React.useState<'css' | 'jss'>('css')
  const resultCode = stylesTemplates[params.direction](
    params.sizes,
    params.color,
    outputType,
  )
  return (
    <>
      <ResultCodeOutput resultCode={resultCode} />
      <OutputControl
        onChange={(e) => setOutputType(e.target.value)}
        outputType={outputType}
      />
      <CopyToClipboard stringToCopy={resultCode} />
    </>
  )
}

export default GrabTheResult
