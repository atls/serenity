const { withExtractIntlMessages } = require('@atls/next-config-with-extract-intl-messages')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

const withWorkspaces = (() => {
  try {
    require.resolve('pnpapi')

    return require('@atls/next-config-with-pnp-workspaces').withWorkspaces
  } catch {
    return (config) => config
  }
})()

const nextConfig = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
  },
}

module.exports = withPlugins(
  [withWorkspaces, withExtractIntlMessages, withImages, withFonts],
  nextConfig
)
