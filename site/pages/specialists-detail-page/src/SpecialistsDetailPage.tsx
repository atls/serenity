import React              from 'react'

import Catalog            from '@site/catalog-fragment'
import Footer             from '@fragments/footer'
import Navigation         from '@fragments/navigation'
import SpecialistsDetail  from '@site/specialists-detail-fragment'
import { Column, Layout } from '@ui/layout'

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
