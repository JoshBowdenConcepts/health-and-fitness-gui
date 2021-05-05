const { ProcessName } = require('./CONSTANTS')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify(ProcessName.production),
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false },
        }),
    ],
}
