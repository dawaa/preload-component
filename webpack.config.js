const path = require( 'path' )

module.exports = {
  entry: './src/index.tsx',
  output: {
    path       : path.resolve( 'dist' ),
    publicPath : '/dist/',
    filename   : 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      { test: /\.tsx?/, loader: 'ts-loader' }
    ]
  }
}
