const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: '.index.js',
    output: {
        path : __dirname,
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'stage-0'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
};