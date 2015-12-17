/* eslint strict: 0 */
const path = require('path');

module.exports = {
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
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