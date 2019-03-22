const path = require('path')
const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

let config = {
    entry: {
        index: path.resolve(src, 'index.js')
    },
    output: {
        filename: '[name].js',
        path: dist
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8081,
        contentBase: dist,
        hot: true
    },
    module: {
        rules: [
            // js, jsx
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(src, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
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
    return config;
}