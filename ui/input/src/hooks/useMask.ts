import MaskedTextInput from 'react-text-mask'

export const useMask = ({ mask }) => {
  if (!mask) {
    return {}
  }

  return {
    as: MaskedTextInput,
  }
}
