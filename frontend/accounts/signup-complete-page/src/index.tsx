import React                  from 'react'

import { Seo }                from './Seo'
import { SignupCompletePage } from './SignupCompletePage'

class Page extends React.Component {
  static async getInitialProps(context) {
    if (!process.browser) {
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
        <SignupCompletePage {...this.props} />
      </>
    )
  }
}

export default Page
