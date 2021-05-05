import React             from 'react'
import { render }        from '@testing-library/react'

import { ThemeProvider } from '@ui/theme'

import { Reviews }       from '../Reviews'

describe('Reviews', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Reviews />
        </ThemeProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
