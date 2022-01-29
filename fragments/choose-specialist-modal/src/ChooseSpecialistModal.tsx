import React      from 'react'

import { Avatar } from '@ui/avatar'
import { Button } from '@ui/button'
import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Modal }  from '@ui/modal'
import { Text }   from '@ui/text'

import messages   from './messages'

export const ChooseSpecialistModal = ({ intl, visible, onClose, onSave, data = {} }: any) => (
  <Modal visible={visible} onClose={onClose} opacity='small'>
    <Box
      maxWidth={['none', 512]}
      width='100%'
      backgroundColor='white'
      borderRadius='extra'
      p='20px 32px 32px'
      m='auto'
      mx={20}
      flexDirection='column'
    >
      <Layout>
        <Text fontSize='massive' lineHeight='medium' fontWeight='semiBold' color='black'>
          {intl.formatMessage(messages.selection)}
        </Text>
      </Layout>
      <Layout flexBasis={10} />
      <Layout>
        <Text fontSize='regular' lineHeight='large' color='black'>
          {intl.formatMessage(messages.selectionDescription)}
        </Text>
      </Layout>
      <Layout flexBasis={30} />
      <Box
        width='100%'
        borderRadius='extra'
        boxShadow='black'
        border='black'
        p={16}
        alignItems='center'
      >
        <Layout>
          <Avatar src={data.photo && data.photo.url} width={56} height={56} color='alto' />
        </Layout>
        <Layout flexBasis={16} />
        <Layout>
          <Column>
            <Layout>
              <Text fontWeight='medium' fontSize='regular' lineHeight='medium' color='black'>
                {data.personalInformation && data.personalInformation.firstName}{' '}
                {data.personalInformation && data.personalInformation.lastName}
              </Text>
            </Layout>
          </Column>
        </Layout>
      </Box>
      <Layout flexBasis={24} />
      <Layout>
        <Row>
          <Layout flexGrow={1}>
            <Button onClick={onClose} size='large' fill>
              {intl.formatMessage(messages.cancel)}
            </Button>
          </Layout>
          <Layout flexBasis={16} />
          <Layout flexGrow={3}>
            <Button onClick={onSave} size='large' color='chicago' fill>
              {intl.formatMessage(messages.assign)}
            </Button>
          </Layout>
        </Row>
      </Layout>
    </Box>
  </Modal>
)
