const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/components/Main.jsx',
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: path.join(__dirname, '/src'),
      },
    ],
  },
};
