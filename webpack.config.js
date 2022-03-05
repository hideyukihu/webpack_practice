const path = require('path');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/javascript/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascript/main.js'
        },
    module: {
        rules:[
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { 'targets': '> 30%, not dead' }],
                            ],
                        }
                    }
                ],
            },

            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtraPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                },
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         esModule: false,
                    //         name: 'images/[name].[ext]'
                    //     }
                    // },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            // mozjpeg: {
                            //     progressive: true,
                            //     quality: 65,
                            // }
                        },
                    }
                ]
            },
            {
                test: /\.pug/,
                use: [{
                    loader: 'html-loader',
        
                },
                {
                    loader: 'pug-html-loader',
                    options: {
                        pretty: true,
                    }
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
            template: './src/template/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/template/access.pug',
            filename: 'access.html'
                }),
        new CleanWebpackPlugin(),
    ],
}



