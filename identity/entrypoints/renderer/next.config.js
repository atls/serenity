const { existsSync } = require('node:fs')
const { join } = require('node:path')

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
    outputFileTracingRoot: join(__dirname, '../../..'),
    outputStandalone: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
  },
  async rewrites() {
    return [
      {
        source: '/kratos/:path*',
        destination: 'http://kratos:4433/:path*',
      },
    ]
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^\.\.?\/.*\.js$/, (resource) => {
        const request = resource.request.slice(0, -3)

        for (const extension of ['.tsx', '.ts', '.jsx']) {
          if (existsSync(join(resource.context, `${request}${extension}`))) {
            resource.request = `${request}${extension}`
            break
          }
        }
      })
    )

    return config
  },
}

module.exports = withPlugins(
  [withExtractIntlMessages, withWorkspaces, withImages, withFonts],
  nextConfig
)
