import {getOutput} from '../../utils'

export const stylesTemplates = {
  top: (sizes, color, output) =>
    getOutput(
      {
        w: {
          r: sizes.width / 2,
          b: sizes.height,
          l: sizes.width / 2,
        },
        c: {b: color},
      },
      output,
    ),
  topRight: (sizes, color, output) =>
    getOutput(
      {
        w: {
          r: sizes.width,
          b: sizes.height,
        },
        c: {r: color},
      },
      output,
    ),
  right: (sizes, color, output) =>
    getOutput(
      {
        w: {
          t: sizes.height / 2,
          b: sizes.height / 2,
          l: sizes.width,
        },
        c: {l: color},
      },
      output,
    ),
  bottomRight: (sizes, color, output) =>
    getOutput(
      {
        w: {
          b: sizes.height,
          l: sizes.width,
        },
        c: {b: color},
      },
      output,
    ),
  bottom: (sizes, color, output) =>
    getOutput(
      {
        w: {
          t: sizes.height,
          r: sizes.width / 2,
          l: sizes.width / 2,
        },
        c: {t: color},
      },
      output,
    ),
  bottomLeft: (sizes, color, output) =>
    getOutput(
      {
        w: {
          t: sizes.width,
          l: sizes.height,
        },
        c: {l: color},
      },
      output,
    ),
  left: (sizes, color, output) =>
    getOutput(
      {
        w: {
          t: sizes.height / 2,
          r: sizes.width,
          b: sizes.height / 2,
        },
        c: {r: color},
      },
      output,
    ),
  topLeft: (sizes, color, output) =>
    getOutput(
      {
        w: {
          t: sizes.height,
          r: sizes.width,
        },
        c: {t: color},
      },
      output,
    ),
}
