const webback = require('webpack')
const path = require('path')

module.exports = {
    entry: "./assets/js/app.js",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "public/dist/js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}