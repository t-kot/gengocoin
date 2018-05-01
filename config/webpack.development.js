const webpack = require("webpack");
const sharedConfig = require('./webpack.shared');
const merge = require('webpack-merge');

module.exports = merge.smartStrategy({
    'plugins': 'prepend',
})(sharedConfig, {
    mode: 'development',
});
