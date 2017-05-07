const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      layout: path.resolve(__dirname, 'src/layout'),
      ui: path.resolve(__dirname, 'src/ui'),
      styles: path.resolve(__dirname, 'src/styles'),
      public: path.resolve(__dirname, 'public'),
    },
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
            options: {
              modules: true,
              sourceMap: true,
              alias: {
                fonts: path.resolve(__dirname, 'public/fonts'),
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        query: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new DashboardPlugin(),
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
