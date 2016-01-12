/* eslint strict: 0 */
const path = require('path');

const buildQS = function(props) {
	"use strict";
	let out = [];
	for (let prop in props) {
		out.push(props[prop].map((item) => `${prop}[]=${item}`).join(","));
	}
	return out.join(",");
}

const babelcmd = 'babel?' + buildQS({
	presets: [
		"react",
		"es2015",
		"stage-0"
	],
	plugins: [
		"transform-decorators-legacy"
	]
});

module.exports = {
	babelcmd: babelcmd,
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: [babelcmd],
			exclude: /node_modules/
		},{
			test: /\.eot|.otf|.woff|\.ttf/,
			loader: 'file'
		}]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
	},
	plugins: [

	],
	externals: [
		// put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
	]
};