const path = require('C://Project-React/shop-parts-autostrada/client')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: 
        [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
      },
    plugins: [
        new HtmlWebpackPlugin()
      ],
    mode: 'production'
}
