"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractStylePlugin = new ExtractTextPlugin({
    filename: "./css/[name].css",
});

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

module.exports = {
    devtool: 'source-map',
    watch: true,
    mode: "development",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    entry: {
        admin: path.join(__dirname, './src/client/admin/index.jsx'),
        user: path.join(__dirname, './src/client/user/index.jsx')
    },
    output: {
        path: __dirname + '/build/',
        filename: './js/[name].js',
        publicPath: "/build/"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".json", ".jsx"],
        alias: {
            "babel-runtime": path.dirname(
                require.resolve("babel-runtime/package.json")
            )
        },
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(scss|css)$/,
                        loader: ExtractStylePlugin.extract({
                            fallback: {
                                loader: "style-loader",
                            },
                            use: [
                                {
                                    loader: "css-loader",
                                    options: {
                                        sourceMap: true,
                                        minimize: true,
                                    },
                                },
                                {
                                    loader: "resolve-url-loader",
                                    options: {
                                        sourceMap: true,
                                    }
                                },
                                {
                                    loader: "sass-loader",
                                    options: {
                                        sourceMap: true,
                                        sourceMapContents: true,
                                        includePaths: ["src/client/style"]
                                    }
                                }
                            ],
                        }),
                    },
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: "file-loader",
                        options: {
                            limit: 10000,
                            name: "media/[name].[ext]",
                        },
                    },
                    {
                        test: /\.(js|jsx)$/,
                        include: path.join(__dirname, "./src/client"),
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            sourceMap: true,
                            presets: [require.resolve("babel-preset-react-app")],
                            plugins: ["source-map-support"],
                            compact: true,
                        },
                    },
                    {
                        test: /\.svg$/,
                        loader: "raw-loader"
                    },
                    {
                        loader: "file-loader",
                        exclude: [/\.jsx?$/, /\.html$/, /\.json$/],
                        options: {
                            name: "./media/[name].[ext]",
                        },
                    },
                    {
                        test: /\.woff$/,
                        loader: "url-loader?mimetype=application/font-woff&name=media/[name].[ext]"
                    },
                    {
                        test: /\.woff2$/,
                        loader: "url-loader?mimetype=application/font-woff2&name=media/[name].[ext]"
                    },
                    {
                        test: /\.otf$/,
                        loader: "url-loader?mimetype=application/octet-stream&name=media/[name].[ext]"
                    },
                    {
                        test: /\.ttf$/,
                        loader: "url-loader?mimetype=application/octet-stream&name=media/[name].[ext]"
                    },
                    {
                        test: /\.eot$/,
                        loader: "url-loader?mimetype=application/vnd.ms-fontobject&name=media/[name].[ext]"
                    },
                ],
            },
        ],
    },
    plugins: [
        ExtractStylePlugin,
    ],
    node: {
        dgram: "empty",
        fs: "empty",
        net: "empty",
        tls: "empty",
        module: "empty",
        child_process: "empty",
    },
};