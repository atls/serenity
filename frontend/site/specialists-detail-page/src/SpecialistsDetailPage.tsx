import React              from 'react'

import Catalog            from '@fragments/catalog'
import Footer             from '@fragments/footer'
import Navigation         from '@fragments/navigation'
import SpecialistsDetail  from '@fragments/specialists-detail'
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
