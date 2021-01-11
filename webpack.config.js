const path = require('path');
const BabelWebpackPlugin = require('babel-minify-webpack-plugin');
// const { ModuleFederationPlugin } = require('webpack').container;
const webpack = require('webpack');

const NODE_ENV_DEVELOPMENT = 'development';
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : NODE_ENV_DEVELOPMENT;

const plugins = [
  // new ModuleFederationPlugin({
  //   name: 'app1',
  //   remotes: {
  //     app2: 'app2_remote',
  //   },
  //   exposes: { './potterApp': './app/App' },
  //   shared: ['react', 'react-dom'],
  // }),
  // Create a NODE_ENV const https://webpack.js.org/plugins/define-plugin
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
];

if (NODE_ENV === NODE_ENV_DEVELOPMENT) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (NODE_ENV === 'production') {
  plugins.push(new BabelWebpackPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, 'app/App.jsx'),
  // todo
  // entry: {
  //   home: path.resolve(__dirname, 'app/App.jsx'),
  //   room: {
  //     import: './app/containers/OfficeRoomWithEmployees',
  //     filename: 'app/containers/OfficeRoomWithEmployees.js',
  //   },
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
  },
  mode: NODE_ENV,
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 100,
  },

  // Add source map only for dev env
  devtool: NODE_ENV === 'development' ? 'source-map' : 'eval',

  // Define where to look for a plugin
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '*'],
  },

  // Define where to look for a webpack loader
  resolveLoader: {
    modules: ['node_modules'],
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.resolve(__dirname, 'public/img'),
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    inline: true,
  },

  plugins,

  // todo
  // optimization: {
  //   splitChunks: {
  //     minSize: {
  //       javascript: 30000,
  //     },
  //   },
  // },
};
