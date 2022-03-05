const path = require('path');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/javascript/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascript/main.js'
        },
    module: {
        rules:[
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtraPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtraPlugin({
            filename: './stylesheets/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
}



