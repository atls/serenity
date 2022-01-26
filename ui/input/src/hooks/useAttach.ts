/* eslint-disable no-else-return */

export const useAttach = ({ attach, addonBefore, addonAfter }) => {
  if (attach) {
    return { attach }
  } else if (addonBefore && addonAfter) {
    return { attach: 'both' }
  } else if (addonBefore) {
    return { attach: 'left' }
  } else if (addonAfter) {
    return { attach: 'right' }
  }

  return null
}
