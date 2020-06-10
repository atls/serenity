const { withWorkspaces } = require('@atlantis-lab/next-config-with-workspaces')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withPlugins([withWorkspaces, withImages, withFonts])
