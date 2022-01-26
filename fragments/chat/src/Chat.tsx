import React                          from 'react'

import { ChatButton, Chat as UIChat } from '@ui/chat'
import { SlideDrawer }                from '@ui/drawer'

import defaultMessages                from './messages'

export const Chat = ({
  intl,
  visible,
  messages,
  loading,
  discussions,
  activeChat,
  unread,
  owner,
  onSave,
  onChangeMessage,
  onOpen,
  onClose,
  onOpenChat,
}: any) => (
  <>
    <SlideDrawer
      visible={!visible}
      top='auto'
      left='auto'
      right={24}
      bottom={24}
      overflowY='visible'
      direction='bottom'
      lockScroll={false}
      bg='transparent'
    >
      <ChatButton onClick={onOpen} unread={unread} />
    </SlideDrawer>
    <SlideDrawer
      visible={visible}
      top={[0, 'auto']}
      left={[0, 'auto']}
      right={[0, 24]}
      bottom={[0, 24]}
      direction='bottom'
      lockScroll={false}
    >
      <UIChat
        messages={messages}
        discussions={discussions}
        inputPlaceholder={intl.formatMessage(defaultMessages.inputPlaceholder)}
        title={intl.formatMessage(defaultMessages.title)}
        owner={owner}
        disable={loading}
        activeChat={activeChat}
        onClose={onClose}
        onSend={onSave}
        onChange={onChangeMessage}
        onOpenChat={onOpenChat}
      />
    </SlideDrawer>
  </>
)
