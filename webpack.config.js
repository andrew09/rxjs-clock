module.exports = {
    entry: './index.js',
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        historyApiFallback: true,
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname,
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
        ],
    },
};
