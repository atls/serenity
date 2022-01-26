import React      from 'react'

import Catalog    from '@site/catalog-fragment'
import Main       from '@site/main-fragment'
import Navigation from '@fragments/navigation'

export const IndexPage = () => (
  <>
    <Navigation />
    <Catalog />
    <Main />
  </>
)
