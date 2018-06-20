const path = require('path');
const BabelWebpackPlugin = require('babel-minify-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
const webpack = require('webpack');

const plugins = [
  // Create a NODE_ENV const https://webpack.js.org/plugins/define-plugin
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),

  new webpack.HotModuleReplacementPlugin(),
];

if (NODE_ENV === 'production') {
  plugins.push(new BabelWebpackPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, 'app/App.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/',
  },
  watch: NODE_ENV !== 'production',
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 100,
  },

  // Add source map only for dev env
  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

  // Define where to look for a plugin
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '*'],
  },

  // Define where to look for a webpack loader
  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js'],
  },

  // Define tasks by file types
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'app/style'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: NODE_ENV === 'production',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style', 'css'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.resolve(__dirname, 'public/img'),
        use: [{ loader: 'file-loader' }],
      },
    ],
  },

  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
    inline: true,
  },

  plugins,
};
