const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: `production`,
    entry: `./src/js/script.js`,
    output: {
        filename: `bundle.js`,
        path: path.resolve(__dirname, `dist`),
    },
    module: {
        rules: [{
                test: /\.s(a|c)ss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    `css-loader`,
                    `sass-loader`
                ]
            },
            {
                test: /\.svg$/,
                type: `asset/inline`
            },
            {
                test: /\.(jpg|png)$/,
                type: `asset/resource`
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `./index.html`
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 9000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        liveReload: false,
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        }
    }
}