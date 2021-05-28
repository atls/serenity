const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withPlugins([withWorkspaces, withImages, withFonts])
