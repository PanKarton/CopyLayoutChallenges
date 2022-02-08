const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `dist`),
  },
  devtool: `inline-source-map`,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, `css-loader`, `sass-loader`],
      },
      {
        test: /\.html/,
        loader: `html-loader`,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `./index.html`,
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    liveReload: false,
  },
};
