const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const { withExtractIntlMessages } = require('@atls/next-config-with-extract-intl-messages')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

const nextConfig = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
  },
}

module.exports = withPlugins(
  [withExtractIntlMessages, withWorkspaces, withImages, withFonts],
  nextConfig
)
