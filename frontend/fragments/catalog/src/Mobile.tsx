import React           from 'react'

import { SlideDrawer } from '@ui/drawer'
import { Hamburger }   from '@ui/hamburger'
import { Listview }    from '@ui/listview'

export const Mobile = ({ data, linksPath, visible, onClose }) => (
  <SlideDrawer visible={visible} direction='bottom'>
    <Listview
      data={data}
      closeIcon={<Hamburger active={visible} onClose={onClose} />}
      path={linksPath}
    />
  </SlideDrawer>
)
