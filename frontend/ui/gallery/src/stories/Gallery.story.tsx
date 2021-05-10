import React, { useState }                                           from 'react'

import { Column, Layout, Text }                                      from '@design/ui'
import { Button }                                                    from '@ui/button'

import { Gallery }                                                   from '..'
import { test1ImageUrl, test2ImageUrl, test3ImageUrl, testImageUrl } from './assets'

export default {
  title: 'Компоненты|Галерея',
}

const images1 = [
  {
    id: 1,
    url: testImageUrl,
  },
  {
    id: 2,
    url: test1ImageUrl,
  },
  {
    id: 3,
    url: test2ImageUrl,
  },
]

const images2 = [
  {
    id: 4,
    url: test3ImageUrl,
  },
  {
    id: 5,
    url: test1ImageUrl,
  },
  {
    id: 6,
    url: test2ImageUrl,
  },
  {
    id: 7,
    url: test3ImageUrl,
  },
]

export const GalleryStory = () => {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [images, setImages] = useState([])

  const openGallery = (activeImages, activeName) => {
    setImages(activeImages)
    setName(activeName)
    setVisible(true)
  }

  return (
    <>
      <Column>
        <Layout mt={15} mx={20}>
          <Text fontSize='giant'>Галерея</Text>
        </Layout>
        <Layout mt={15} mx={20}>
          <Button onClick={() => openGallery(images1, 'Test1')} color='stormdust'>
            Открыть галерею
          </Button>
        </Layout>
        <Layout mt={15} mx={20}>
          <Button onClick={() => openGallery(images2, 'Test2')} color='stormdust'>
            Открыть галерею
          </Button>
        </Layout>
      </Column>
      <Gallery visible={visible} name={name} images={images} onClose={() => setVisible(false)} />
    </>
  )
}

GalleryStory.story = {
  name: 'Галерея',
}
