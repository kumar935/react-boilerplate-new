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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        /* to load svg icons or font-awesome icons as fonts */
        test: /\.font\.(js|json)$/,
        loader: 'style-loader!css-loader!fontgen-loader',
      },
      {
        /* This url-loader is also used by fontgen to embed icon fonts
         * (e.g. svg icons to font),
         * and also used to load character fonts
         * (e.g. ttf font files that are used in @font-face declarations)
         * The 10kb limit doesn't affect the fontgen embed functionality
         * As for the ttf font files are larger that 10kb, it's not embedded
         * in the css file, and is generated in the dist folder */
        test: /\.(woff|eot|ttf|svg)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
};
