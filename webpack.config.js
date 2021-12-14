const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

const loadModeConfig = (env) => require(`./webpack/${env.mode}.config`)(env);

module.exports = (env) =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path]/[name].[ext]',
                  limit: 5000,
                },
              },
            ],
          },
          {
            test: /\.html$/,
            use: 'html-loader',
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
    },
    loadModeConfig(env),
  );
