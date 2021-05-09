import React      from 'react'

import Catalog    from '@fragments/catalog'
import Main       from '@fragments/main'
import Navigation from '@fragments/navigation'

export const IndexPage = () => (
  <>
    <Navigation />
    <Catalog />
    <Main />
  </>
)
