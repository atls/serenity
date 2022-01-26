import styled from '@emotion/styled'

export const DropdownItem = styled.div(({ theme }: any) => ({
  margin: '9px 0',
  '& *': {
    display: 'flex',
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes.normal,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.stormdust,
    cursor: 'pointer',
    textDecoration: 'none',
    wordBreak: 'break-word',
    '&:hover': {
      color: theme.colors.stardust,
    },
  },
}))
