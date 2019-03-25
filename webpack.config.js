const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getRules = function (mode) {
    const rules = [
        // js, jsx
        {
            test: /\.(js|jsx)$/,
            exclude: /node_module/,
            use: ['babel-loader']
        },
        // css,scss
        {
            test: /\.(css|scss)$/,
            use: [
                // fallback to style-loader in development
                mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },
        // images
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: 'assets', // default is output.publicPath
                    },
                },
            ],
        },
    ];
    return rules;
}

const getPlugins = function (mode) {
    let plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(src, 'index.html'),
            filename: 'index.html',
            // inject: 'body'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ];
    if (mode === 'production') {
        plugins.push(new CleanWebpackPlugin());
    }
    return plugins;
}

let config = {
    entry: {
        index: path.resolve(src, 'index.js')
    },
    output: {
        filename: '[name].js',
        path: dist,
        publicPath: 'assets'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8081,
        contentBase: dist,
        hot: true
    },
    module: {
        rules: []
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: []
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.output = {
            filename: '[name].js',
            path: dist
        };
    }

    if (argv.mode === 'production') {
        config.output = {
            filename: '[name].min.js',
            path: dist
        };
    }

    config.module.rules = getRules();
    config.plugins = getPlugins(argv.mode);

    return config;
}