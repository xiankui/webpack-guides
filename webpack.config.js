const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{ // 对.js文件中导入的.css文件进行解析，并以样式的形式添加到head中
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, { // 对css中的图片资源进行解析，必须！解析到output.path目录
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		}]
	}
}