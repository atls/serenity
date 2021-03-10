import React                     from 'react'
import { MockedProvider }        from '@apollo/react-testing'
import { IntlProvider, useIntl } from 'react-intl'
import { render }                from '@testing-library/react'

import { ThemeProvider }         from '@ui/theme'

import { ProjectReply }          from '../ProjectReply'

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
