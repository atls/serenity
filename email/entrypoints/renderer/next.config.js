const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const { withExtractIntlMessages } = require('@atls/next-config-with-extract-intl-messages')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

const { withAliases } = require('./with-config-cjs')

const nextConfig = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
  },
}

module.exports = withPlugins([
  withWorkspaces,
  withExtractIntlMessages,
  withImages,
  withFonts,
  withAliases(['@emotion/react', '@emotion/styled', 'react-intl']),
], nextConfig)
