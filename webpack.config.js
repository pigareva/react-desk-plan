const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabelWebpackPlugin = require('babel-minify-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
const webpack = require('webpack');

const plugins = [
  // Do not emit a file with errors
  new webpack.NoEmitOnErrorsPlugin(),

  // Create a NODE_ENV const https://webpack.js.org/plugins/define-plugin
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(NODE_ENV),
  }),
];

if (NODE_ENV === 'production') {
  // Extract css into separate file
  // https://github.com/webpack-contrib/extract-text-webpack-plugin
  plugins.push(new ExtractTextPlugin({ filename: 'css/style.css' }),
    new BabelWebpackPlugin());
}

if (NODE_ENV === 'hmr') {
  // Display relative path of the module for HMR
  // Enable HMR
  plugins.push(new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin());
}

// Define style loaders for development
// Do not extract css in a separate file
const devStyleLoaders = [
  {
    loader: 'style',
  },
  {
    loader: 'css',
  },
  {
    loader: 'sass',
  },
];

// Define style loaders for production
// Extract css in a separate file
const productionStyleLoaders = ExtractTextPlugin.extract({
  fallback: 'style',
  use: [
    {
      loader: 'css',
      options: {
        minimize: true,
      },
    },
    {
      loader: 'less',
    },
  ],
});

module.exports = {
  entry: path.resolve(__dirname, 'app/App.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/',
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 100,
  },

  // Add source map only for dev env
  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

  // Define where to look for a plugin
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '*'],
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
        test: /\.less$/,
        include: path.resolve(__dirname, 'res/scss'),
        use: NODE_ENV === 'production' ? productionStyleLoaders : devStyleLoaders,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            // Copy images in `dist` directory for production
            loader: NODE_ENV === 'production' ? 'file-loader?hash=sha512&digest=hex&name=img/[name][hash].[ext]' : 'url',
          },
          {
            loader: 'image-webpack-loader?bypassOnDebug',
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },

  plugins,
};
