import React           from 'react'

import Catalog         from '@fragments/catalog'
import Filters         from '@fragments/filters'
import Footer          from '@fragments/footer'
import Navigation      from '@fragments/navigation'
import Specialists     from '@fragments/specialists'
import { Layout, Row } from '@ui/layout'

import messages        from './messages'

export const SpecialistsPage = ({ intl, activeCategory, selectCategory }) => (
  <>
    <Navigation />
    <Catalog />
    <Layout justifyContent='center'>
      <Row maxWidth={1200} px={[20, 20, 40]} pt={40} boxSizing='border-box'>
        <Layout flexGrow={1} overflow='hidden'>
          <Specialists activeCategory={activeCategory} />
        </Layout>
        <Layout flexBasis={[0, 23]} flexShrink={0} />
        <Layout flexBasis={[210, 210, 256]} display={['none', 'flex']} flexShrink={0}>
          <Filters
            title={intl.formatMessage(messages.filterTitle)}
            activeCategory={activeCategory}
            selectCategory={selectCategory}
            check
          />
        </Layout>
      </Row>
    </Layout>
    <Footer />
  </>
)
