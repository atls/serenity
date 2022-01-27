import styled       from '@emotion/styled'

import React        from 'react'

import { ChatIcon } from '@ui/icons'

const StyledChatButton = styled.div(({ theme, unread }: any) => ({
  width: 56,
  height: 56,
  background: theme.colors.white,
  boxSizing: 'border-box',
  borderRadius: '50%',
  boxShadow: theme.shadows.woodsmoke,
  border: theme.borders.codgray,
  zIndex: 9,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    boxShadow: theme.shadows.codgray,
  },
  '&:active': {
    transform: 'scale(0.9)',
  },
  '&::after': {
    display: unread ? 'block' : 'none',
    content: '""',
    position: 'absolute',
    top: '3px',
    right: '3px',
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: theme.colors.chicago,
  },
}))

const doNothing = () => {
  // do nothing
}

export const ChatButton = ({ onClick = doNothing, unread = false }) => (
  <StyledChatButton onClick={onClick} unread={unread}>
    <ChatIcon width={20} height={20} color='#999999' />
  </StyledChatButton>
)
