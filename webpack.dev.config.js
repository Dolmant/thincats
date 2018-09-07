const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.config")

module.exports = merge(baseConfig, {
    devtool: "inline-source-map",
    devServer: {
        inline: true,
        port: "3001",
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    },
    mode: "development",
})
