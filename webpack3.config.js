const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BabelWebpackPlugin = require('babel-minify-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
const webpack = require('webpack');

const plugins = [
  // Do not emit a file with errors
  new webpack.NoEmitOnErrorsPlugin(),

  // Create a NODE_ENV const https://webpack.js.org/plugins/define-plugin
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(NODE_ENV),
  }),

  new webpack.HotModuleReplacementPlugin(),
];

// Define style loaders for production
// Extract css in a separate file
// const productionStyleLoaders = ExtractTextPlugin.extract({
//   fallback: 'style',
//   use: [
//     {
//       loader: 'css',
//       options: {
//         minimize: true,
//       },
//     },
//     {
//       loader: 'less',
//     },
//   ],
// });

module.exports = {
  entry: path.resolve(__dirname, 'src/App.jsx'),
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
        include: path.resolve(__dirname, 'src/style'),
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         minimize: NODE_ENV === 'production',
        //         root: '.',
        //       },
        //     },
        //     { loader: 'sass-loader' },
        //   ],
        // }),
        use: ['style', 'css', 'sass'],
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
