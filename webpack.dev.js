const path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-source-map',

	// 多入口，则打包出对应的文件
	entry: {
		app: './src/index.js',
		vendor: ['lodash', 'react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{ // 对.js文件中导入的.css文件进行解析，并以样式的形式添加到head中
			test: /\.css$/,
			// use: [
			// 	'style-loader',
			// 	'css-loader'
			// ],
			use: ExtractTextPlugin.extract({
			  use: 'css-loader'
			})
		}, { // 对css中的图片资源进行解析，必须！解析到output.path目录
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		}]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	]
}