const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    // We do not want to minimize our code.
    minimize: false
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  // plugins: [
  //   new webpack.IgnorePlugin(/^pg-native$/)
  // ]
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        include: __dirname,
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack'),
          ],
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@Components': path.resolve(__dirname, '/src/Components'),
      '@Controllers': path.resolve(__dirname, '/src/Controllers')
    }
  }
}