import { theme } from '@ui/theme'

export const replacements = {
  LogoIcon: {
    '#FFFFFF': `{props.color || '${theme.colors.white}'}`,
  },
  ArrowDownIcon: {
    '#FFFFFF': `{props.color || '${theme.colors.white}'}`,
  },
  ArrowRightIcon: {
    '#000000': `{props.color || '${theme.colors.white}'}`,
  },
  ArrowLeftIcon: {
    '#000000': `{props.color || '${theme.colors.white}'}`,
  },
  CheckIcon: {
    '#000000': `{props.color || '${theme.colors.black}'}`,
  },
  StarIcon: {
    '#D8D8D8': `{props.color || '${theme.colors.alto}'}`,
  },
  ChatIcon: {
    white: `{props.color || '${theme.colors.white}'}`,
  },
  ArrowForwardIcon: {
    '#999999': `{props.color || '${theme.colors.mountainmist}'}`,
  },
  ArrowBackwardIcon: {
    '#999999': `{props.color || '${theme.colors.mountainmist}'}`,
  },
  CloseIcon: {
    '#FFFFFF': `{props.color || '${theme.colors.white}'}`,
  },
  ForwardArrowLeftIcon: {
    '#FFFFFF': `{props.color || '${theme.colors.white}'}`,
  },
}
