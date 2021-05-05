import React, { useState }   from 'react'
import { useIntl }           from 'react-intl'

import { useChat }           from '@ui/chat'

import { SpecialistsDetail } from './SpecialistsDetail'

export default data => {
  const intl = useIntl()
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [images, setImages] = useState([])
  const { openChat } = useChat('chat')

  const openGallery = (activeImages, activeName) => {
    setImages(activeImages)
    setName(activeName)
    setVisible(true)
  }

  return (
    <SpecialistsDetail
      intl={intl}
      {...data}
      visible={visible}
      name={name}
      images={images}
      openGallery={openGallery}
      closeGallery={() => setVisible(false)}
      onContact={openChat}
    />
  )
}
