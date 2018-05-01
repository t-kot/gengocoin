const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
const DEBUG = (NODE_ENV === 'development' || NODE_ENV === undefined);
const base_filename = DEBUG ? `[name]` : `[name]-[hash]`;
const rootDir = path.resolve(__dirname);
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require('./paths');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const getClientEnvironment = require('./env');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        paths.appIndexJs,
    ],
    output: {
        path: paths.appBuild,
        pathinfo: true,
        filename: 'static/js/bundle.js',
        publicPath: publicPath
    },
    devtool: (DEBUG ? 'source-map' : false),
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: paths.appHtml,
            filename: 'index.html'
        }),
        new webpack.DefinePlugin(env),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl,
        }),
        // new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        new ExtractTextPlugin(`${base_filename}.css`),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader?name=[name].[ext]'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        { loader: 'sass-loader' }
                    ],
                }),
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?mimetype=image/svg+xml'
            },
            {
                test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader?name=[path][name]-[hash].[ext]'
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(`${rootDir}/src`),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.css', '.scss']
    }
};
