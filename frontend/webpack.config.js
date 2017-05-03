const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require('babel-plugin-transform-object-rest-spread')],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { modules: true, sourceMap: true },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],

  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 9001,
    clientLogLevel: 'error',
    historyApiFallback: true,
    noInfo: true,
  },
};
