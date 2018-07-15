const path = require("path")
const webpack = require('webpack'); // eslint-disable-line
const ExtractTextPlugin = require("extract-text-webpack-plugin") // eslint-disable-line import/no-extraneous-dependencies
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin; // eslint-disable-line
const CopyWebpackPlugin = require("copy-webpack-plugin") // eslint-disable-line import/no-extraneous-dependencies
const CleanWebpackPlugin = require("clean-webpack-plugin")

const extractLess = new ExtractTextPlugin({
    filename: "styles.css",
})

module.exports = {
    entry: path.resolve(__dirname, "./src/main.js"),
    module: {
        rules: [
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff",
            },
            {
                test: /\.ttf(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-ttf",
            },
            {
                test: /\.eot(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-eot",
            },
            {
                test: /\.(gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader",
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                    }, {
                        loader: "less-loader",
                    }],
                    fallback: "style-loader",
                }),
            },
            {
                test: /\.scss$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                    }, {
                        loader: "sass-loader",
                    }],
                    fallback: "style-loader",
                }),
            },
        ],
    },
    plugins: [
        extractLess,
        new WebpackBundleSizeAnalyzerPlugin("./plain-report.txt"),
        new CopyWebpackPlugin([{from: "index.html", to: path.resolve(__dirname, "./dist")}]),
        new CopyWebpackPlugin([{from: "index.html", toType: "file", to: path.resolve(__dirname, "./dist/resources.html")}]),
        new CleanWebpackPlugin(["dist"]),
    ],
    resolve: {
        extensions: [".js", ".less", "scss", ".svg"],
        alias: {
            assets: path.resolve(__dirname, "./assets"),
            pages: path.resolve(__dirname, "./src/pages"),
            components: path.resolve(__dirname, "./src/components"),
            store: path.resolve(__dirname, "./src/store/store.js"),
            types: path.resolve(__dirname, "./src/types/types.js"),
            util: path.resolve(__dirname, "./src/util"),
        },
    },
}
