/**
 * @jest-environment jsdom
 */

import { MockedProvider } from '@apollo/react-testing'
import { IntlProvider }   from 'react-intl'
import { useIntl }        from 'react-intl'
import React              from 'react'

import { ThemeProvider }  from '@ui/theme'
import { render }         from '@testing-library/react'

import { ProjectsDetail } from '../ProjectsDetail.js'

const TestComponent = () => {
  const intl = useIntl()

  return <ProjectsDetail intl={intl} />
}

describe('Project detail', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <MockedProvider mocks={[]} addTypename={false}>
          <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
            <ThemeProvider>
              <TestComponent />
            </ThemeProvider>
          </IntlProvider>
        </MockedProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
