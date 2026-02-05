const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({
      allowlist: [/@mailer/, /@protos/, /@identity/],
    }),
    'aws-sdk',
    '@aws-sdk/client-ses',
    'sqlite3',
    'argon2',
    'node-pre-gyp',
    'pg-native',
    'pg-query-stream',
    'oracledb',
    'mysql',
    'mysql2',
    'mssql',
    'better-sqlite3',
    'sql.js',
    'typeorm-aurora-data-api-driver',
    'class-transformer',
    'class-validator',
  ],
  externalsPresets: {
    node: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      'pg-native': false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        type: 'asset/resource',
      },
    ],
  },
  ignoreWarnings: [
    /Failed to parse source map/,
    /Critical dependency: the request of a dependency is an expression/,
    /Module not found.*react-native-sqlite-storage/,
    /Module not found.*redis/,
    /Module not found.*ioredis/,
    /Module not found.*mongodb/,
    /Module not found.*hdb-pool/,
    /Module not found.*@google-cloud\/spanner/,
    /Module not found.*@sap\/hana-client/,
  ],
  optimization: {
    minimize: false,
  },
};
