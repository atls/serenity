import React                        from 'react'

import { RegistrationCompletePage } from './RegistrationCompletePage.js'
import { Seo }                      from './Seo.js'

export default class Page extends React.Component {
  static async getInitialProps(context) {
    if (!(process as any).browser) {
      const host = context.req.headers['x-forwarded-host']

      return {
        accountUrl: `https://${host.replace('accounts.', 'cabinet.')}`,
        siteUrl: `https://${host.replace('accounts.', '')}`,
      }
    }

    return {}
  }

  render() {
    return (
      <>
        <Seo />
        <RegistrationCompletePage {...(this as any).props} />
      </>
    )
  }
}
