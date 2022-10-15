import * as React from 'react'
import {HexColorPicker, HexColorInput} from 'react-colorful'
import {useCopyToClipboard, useClickAway, useLocalStorage} from 'react-use'

import {IconColorSwatch} from '../../lib/icons'

const ColorPickerButton = ({triangleColor, onChange}) => {
  const colorPickerRef = React.useRef(null)
  const [isShown, setIsShown] = React.useState(false)
  useClickAway(colorPickerRef, () => {
    setIsShown(false)
  })
  return (
    <div ref={colorPickerRef} className="relative">
      <button
        onClick={() => setIsShown(!isShown)}
        className={`rounded p-2 flex justify-center items-center hover:bg-gray-400 transition-colors duration-150 focus:outline-none ${
          isShown ? 'bg-gray-400' : 'bg-gray-200'
        }`}
      >
        <IconColorSwatch className="w-5" />
        <span className="ml-2">Colorpicker</span>
      </button>
      {isShown && (
        <div className="absolute right-0 bottom-0 z-10" css={{bottom: '4rem'}}>
          <HexColorPicker color={triangleColor} onChange={onChange} />
        </div>
      )}
    </div>
  )
}

const TriangleColor = ({params, setParams}) => (
  <>
    <h3 className="font-medium w-full text-lg mb-4 leading-none">
      Set color (HEX):
    </h3>
    <div className="flex justify-between items-end w-full space-x-10">
      <div className="flex items-center relative">
        <div className="absolute left-3 text-gray-400">#</div>
        <HexColorInput
          color={params.color}
          onChange={(e) =>
            setParams({
              ...params,
              color: e,
            })
          }
          className="appearance-none w-32 rounded p-2 transition-colors duration-150 border border-gray-300 focus:outline-none pl-6"
        />
      </div>
      <div className="flex flex-col">
        <ColorPickerButton
          triangleColor={params.color}
          onChange={(e) =>
            setParams({
              ...params,
              color: e,
            })
          }
        />
      </div>
    </div>
  </>
)

export default TriangleColor
