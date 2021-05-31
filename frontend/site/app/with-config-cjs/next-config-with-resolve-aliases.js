const withAliases = (aliases) => (nextConfig) => ({
  ...nextConfig,
  webpack(config,options) {
    // eslint-disable-next-line
    aliases.forEach(alias => config.resolve.alias[alias] = require.resolve(alias))

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  }
})

module.exports = { withAliases }
