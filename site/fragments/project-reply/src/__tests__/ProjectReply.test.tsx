/**
 * @jest-environment jsdom
 */

import { MockedProvider } from '@apollo/react-testing'
import { IntlProvider }   from 'react-intl'
import { useIntl }        from 'react-intl'
import React              from 'react'

import { ThemeProvider }  from '@ui/theme'
import { render }         from '@testing-library/react'

import { ProjectReply }   from '../ProjectReply.js'

const TestComponent = () => {
  const intl = useIntl()

  return <ProjectReply intl={intl} />
}

describe('Project reply', () => {
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
