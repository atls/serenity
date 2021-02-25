import styled from '@emotion/styled'

export const Dropdown = styled.div(({ theme }: any) => ({
  display: 'flex',
  position: 'fixed',
  backgroundColor: theme.colors.white,
  flexDirection: 'column',
  width: '160px',
  padding: '7px 16px',
  zIndex: 15,
  boxSizing: 'border-box',
  border: theme.borders.black,
  right: 32,
  top: 56,
}))
