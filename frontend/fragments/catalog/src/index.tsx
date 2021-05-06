import React             from 'react'

import { Box }           from '@ui/layout'
import { useDrawer }     from '@ui/drawer'
import { useWindowSize } from '@ui/utils'

import { Desktop }       from './Desktop'
import { Mobile }        from './Mobile'
import { useData }       from './useData'

const CatalogFragment =  () => {
  const { visible, close } = useDrawer('catalog')
  const { innerWidth } = useWindowSize()
  const data = useData()
  const linksPath = '/specialists?catId='

  return (
    <Box height='100%'>
      <Desktop data={data} visible={visible && innerWidth >= 640} linksPath={linksPath} />
      <Mobile
        data={data}
        linksPath={linksPath}
        visible={visible && innerWidth < 640}
        onClose={close}
      />
    </Box>
  )
}

export default CatalogFragment
