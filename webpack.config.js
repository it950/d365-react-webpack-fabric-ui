const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const publicPath = path.resolve(__dirname, 'public')
const htmlPath = path.resolve(__dirname, 'src/index.html')

module.exports = env => {
  return {
    devtool:
      env === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
    resolve: {
      modules: [path.resolve('./src'), path.resolve('./node_modules')],
    },
    entry: {
      app: './src/index.js',
      vendor: [
        'babel-polyfill',
        'whatwg-fetch',
        'react',
        'react-dom',
        'office-ui-fabric-react',
      ],
    },
    target: 'web',
    output: {
      path: publicPath,
      filename: 'app.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: htmlPath,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
      }),
      new ExtractTextPlugin('styles.css'),
    ],
    devServer: {
      contentBase: publicPath,
      compress: true,
      port: 3000,
    },
  }
}
