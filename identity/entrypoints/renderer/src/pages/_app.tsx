import { withHelmet }         from '@atls/next-app-with-helmet'
import App                    from 'next/app'
import React                  from 'react'
import compose                from 'recompose/compose'

import { ThemeProvider }      from '@ui/theme'
import { injectGlobalStyles } from '@ui/theme'

import { withEmotion }        from '../providers/index.js'
import { withIntl }           from '../providers/index.js'

if (typeof window !== 'undefined') {
  const { kratos }: any = require('@atls/next-identity-integration/dist/sdk')
  const { default: axios }: any = require('axios')

  const applyKratosBasePath = (client: any) => {
    client.basePath = '/kratos'

    if (client.configuration) {
      client.configuration.basePath = '/kratos'
    }
  }

  applyKratosBasePath(kratos)

  const browser = window as any

  if (!browser.__serenityKratosAxiosInterceptorInstalled) {
    const normalizeKratosUrl = (rawUrl: string) => {
      const isKratosAbsoluteUrl =
        rawUrl.startsWith('http://localhost:4433') ||
        rawUrl.startsWith('http://127.0.0.1:4433') ||
        rawUrl.startsWith('http://identity.localhost') ||
        rawUrl.startsWith('https://identity.localhost')

      if (!isKratosAbsoluteUrl) {
        return rawUrl
      }

      const parsed = new URL(rawUrl)

      return `${parsed.pathname}${parsed.search}`
    }

    axios.interceptors.request.use((config: any) => {
      const baseURL = String(config.baseURL || '')
      const rawUrl = String(config.url || '')
      const url = normalizeKratosUrl(rawUrl)
      const withLeadingSlash = url.startsWith('/') ? url : `/${url}`
      const proxyUrl = withLeadingSlash.startsWith('/kratos')
        ? withLeadingSlash
        : `/kratos${withLeadingSlash}`

      const isKratosRequest =
        baseURL.startsWith('/kratos') ||
        baseURL.includes('localhost:4433') ||
        baseURL.includes('127.0.0.1:4433') ||
        rawUrl.includes('localhost:4433') ||
        rawUrl.includes('127.0.0.1:4433') ||
        baseURL.includes('identity.localhost') ||
        rawUrl.includes('identity.localhost') ||
        withLeadingSlash.startsWith('/kratos/') ||
        url.startsWith('/self-service/') ||
        url.startsWith('/sessions/') ||
        url.startsWith('/version') ||
        url.startsWith('/health/')

      if (isKratosRequest) {
        return {
          ...config,
          url: proxyUrl,
          baseURL: '',
        }
      }

      return config
    })

    browser.__serenityKratosAxiosInterceptorInstalled = true
  }
}

class AccountsApp extends App {
  static async getInitialProps({ Component, ctx }: any): Promise<any> {
    let props: any = {}

    if (Component.getInitialProps) {
      props = await Component.getInitialProps(ctx)
    }

    if (!(process as any).browser) {
      const forwardedHost = ctx.req.headers['x-forwarded-host'] || ctx.req.headers.host
      const host = Array.isArray(forwardedHost)
        ? forwardedHost[0]
        : forwardedHost || 'localhost:3002'

      const forwardedProtocol = ctx.req.headers['x-forwarded-proto']
      const protocol = Array.isArray(forwardedProtocol)
        ? forwardedProtocol[0]
        : forwardedProtocol ||
          (host.includes('localhost') || host.startsWith('127.0.0.1') ? 'http' : 'https')

      props.accountUrl = `${protocol}://${host.replace('accounts.', 'cabinet.')}`
      props.siteUrl = `${protocol}://${host.replace('accounts.', '')}`
    }

    return props
  }

  render() {
    const { Component, ...props } = this.props

    return <Component {...props} />
  }
}

export const withProviders = compose(
  withIntl({
    default: 'ru',
  }),
  withEmotion({
    Provider: ThemeProvider,
    injectGlobalStyles,
  }),
  withHelmet()
)

export default withProviders(AccountsApp)
