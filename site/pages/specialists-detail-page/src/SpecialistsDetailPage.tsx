import React             from 'react'

import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import Catalog           from '@site/catalog-fragment'
import Footer            from '@site/footer-fragment'
import Navigation        from '@site/navigation-fragment'
import SpecialistsDetail from '@site/specialists-detail-fragment'

export const SpecialistsDetailPage = ({ specialist = {} }: any) => (
  <>
    <Navigation />
    <Catalog />
    <Column>
      <SpecialistsDetail {...specialist} />
      <Layout flexBasis={[40, 60, 80]} />
    </Column>
    <Footer />
  </>
)
