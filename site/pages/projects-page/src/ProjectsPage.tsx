import React           from 'react'

import Catalog         from '@site/catalog-fragment'
import Filters         from '@site/filters-fragment'
import Footer          from '@fragments/footer'
import Navigation      from '@fragments/navigation'
import Projects        from '@site/projects-fragment'
import { Layout, Row } from '@ui/layout'

import messages        from './messages'

export const ProjectsPage = ({ intl, activeCategory, selectCategory }) => (
  <>
    <Navigation />
    <Catalog />
    <Layout justifyContent='center'>
      <Row maxWidth={1200} px={[20, 20, 40]} pt={40} boxSizing='border-box'>
        <Layout flexGrow={1}>
          <Projects activeCategory={activeCategory} />
        </Layout>
        <Layout flexBasis={[0, 24]} />
        <Layout flexBasis={[200, 216, 256]} display={['none', 'flex']} flexShrink={0}>
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
