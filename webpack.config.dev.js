/* eslint strict: 0 */
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.common');

const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

console.log("[Development config] Adding hot-reload entrypoints");
config.entry = [
	"webpack-dev-server/client?http://127.0.0.1:3000",
	"webpack/hot/only-dev-server",
	'./app/index'
];

config.output.publicPath = 'http://localhost:3000/dist/';

config.module.loaders[0].loaders = ["react-hot", "babel?presets[]=react,presets[]=es2015,presets[]=stage-0"];

console.log("[Development config] Adding CSS compiling");

config.module.loaders.push({
	test: /^((?!\.module).)*\.scss$/,
	loaders: [
		'style',
		'css',
		'sass?sourceMap'
	]
}, {
	test: /^((?!\.module).)*\.css$/,
	loaders: [
		'style',
		'css',
		'sass?sourceMap'
	]
}, {
	test: /\.module\.scss$/,
	loaders: [
		'style',
		'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!',
		'sass?sourceMap'
	]
});


console.log("[Development config] Adding plugins");
config.plugins.push(
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		'__DEV__': true,
		'process.env': {
			'NODE_ENV': JSON.stringify('development')
		}
	})
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;