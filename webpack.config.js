const path = require('path');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
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
        new MiniCssExtraPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}



