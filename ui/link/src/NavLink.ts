import styled   from '@emotion/styled'

import { Link } from './Link'

export const NavLink = styled(Link)(({ theme }: any) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes.tiny,
  textDecoration: 'none',
  outline: 0,
  whiteSpace: 'nowrap',
  color: theme.colors.white,
  '&::first-letter': {
    textTransform: 'uppercase',
  },
}))

NavLink.defaultProps = Link.defaultProps
