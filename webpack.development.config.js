const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/App.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        // include: path.resolve(__dirname, 'src/style'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.resolve(__dirname, 'public/img'),
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
};
