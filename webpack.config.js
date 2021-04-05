const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
	mode: "development",
	devServer: {
		open: true,
		hot: true,
		compress: false,
		port: 69,
		historyApiFallback: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html")
		})
	],
	module: {
	  rules: [
		{
		  test: /\.js?$/,
		  loader: "babel-loader",
		  exclude: /node_modules/
		},
		{
		  test: /\.s[ac]ss$/i,
		  use: [ "style-loader", "css-loader", "sass-loader" ]
		}
	  ]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	optimization: {
		splitChunks: { chunks: "all" },
		runtimeChunk: "single"
	},
	entry: {
		index: {
			import: path.resolve(__dirname, "src", "index.js"),
			dependOn: "shared"
		},
		frontpage: {
			import: path.resolve(__dirname, "src", "components", "Frontpage.js"),
			dependOn: "shared"
		},
		scorecard: {
			import: path.resolve(__dirname, "src", "components", "Scorecard.js"),
			dependOn: "shared"
		},
		shared: path.resolve(__dirname, "src", "components", "NotFound.js")
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, "build")
	}
};