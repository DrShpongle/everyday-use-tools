const getWidth = (w) => (w ? `${Math.round(w)}px` : '0')
const getColor = (c) => c || 'transparent'

const outputCss = ({w, c}) => {
  return `width: 0;
height: 0;
border-style: solid;
border-width: ${getWidth(w.t)} ${getWidth(w.r)} ${getWidth(w.b)} ${getWidth(
    w.l,
  )};
border-color: ${getColor(c.t)} ${getColor(c.r)} ${getColor(c.b)} ${getColor(
    c.l,
  )};`
}

const outputJss = ({w, c}) => {
  return `width: 0,
height: 0,
borderStyle: "solid",
borderWidth: "${getWidth(w.t)} ${getWidth(w.r)} ${getWidth(w.b)} ${getWidth(
    w.l,
  )}",
borderColor: "${getColor(c.t)} ${getColor(c.r)} ${getColor(c.b)} ${getColor(
    c.l,
  )}",`
}

const outputDemo = ({w, c}) => {
  return {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: `${getWidth(w.t)} ${getWidth(w.r)} ${getWidth(w.b)} ${getWidth(
      w.l,
    )}`,
    borderColor: `${getColor(c.t)} ${getColor(c.r)} ${getColor(c.b)} ${getColor(
      c.l,
    )}`,
  }
}

export const getOutput = (values, outputType) => {
  let outputFunc = () => {}
  switch (outputType) {
    case 'css':
      outputFunc = outputCss
      break
    case 'jss':
      outputFunc = outputJss
      break
    case 'demo':
      outputFunc = outputDemo
      break
    default:
      outputFunc = outputCss
  }
  return outputFunc(values)
}
