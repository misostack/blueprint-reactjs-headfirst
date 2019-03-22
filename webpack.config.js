const path = require('path')
const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(src, 'index.js')
    },
    output: {
        filename: '[name].js',
        path: dist
    },
    mode: 'development',
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
}