import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { ModalsProvider } from '@atlantis-lab/react-modals'
import { IntlProvider } from 'react-intl'
import { addDecorator, addParameters, configure } from '@storybook/react'

import { DrawerProvider } from '@ui/drawer'
import { ThemeProvider, injectGlobalStyles } from '@ui/theme'

import theme from './theme'

injectGlobalStyles()

addDecorator((story) => (
  <MockedProvider mocks={[]} addTypename={false}>
    <ModalsProvider>
      <DrawerProvider>
        <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
          <ThemeProvider>{story()}</ThemeProvider>
        </IntlProvider>
      </DrawerProvider>
    </ModalsProvider>
  </MockedProvider>
))

addParameters({
  options: {
    theme,
  },
})

addParameters({
  backgrounds: [{ name: 'default', value: '#f6f6f6', default: true }],
})

configure(require.context('../../ui/', true, /^\.\/.+.stor(y|ies)$/), module)
