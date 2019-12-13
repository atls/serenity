import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { ModalsProvider } from '@monstrs/react-modals'
import { ThemeProvider, injectGlobalStyles } from '@ui/theme'
import { DrawerProvider } from '@ui/drawer'
import { IntlProvider } from 'react-intl'
import { MockedProvider } from '@apollo/react-testing'
import theme from './theme'

injectGlobalStyles()

addDecorator(story => (
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
