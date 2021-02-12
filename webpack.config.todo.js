const path = require("path");
const {
  CleanPlugin,
  DefinePlugin,   
} = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;const SizePlugin = require('size-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require('@alesmenzel/preload-webpack-plugin');
const PreloadWebpackPlugin2 = require('@vue/preload-webpack-plugin');




module.exports = {
  name   : "todo-module",
  mode   : 'development',  
  devtool: "source-map",
  entry: {    
    'todo' : "./app/todo/todo.module",
    //'todo' : "./app/todo/index"
  },
  output: {
    filename: "ng1-to-ng2/todo/[name].bundle.js",
    path: path.resolve(__dirname, "./dist/apollo"),
    publicPath : 'http://localhost:3001/apollo/',
  },
  devServer: {    
    port: 3001,
    contentBase: path.join(__dirname, "dist/apollo"),
    //open: true,
    openPage: 'apollo/ng1-to-ng2/todo',
  },
  optimization: {
    minimize: false,
    minimizer : [
      '...',
      new HtmlMinimizerPlugin(),
    ],
    chunkIds: 'named',
    mergeDuplicateChunks: true,
    runtimeChunk :{
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader : "ts-loader",
          options: {
            transpileOnly: true
          }
        },
       
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
      new CleanPlugin(),
      //new SizePlugin(),
      new DefinePlugin({
        PRODUCTION: JSON.stringify(true),
      }),
      new ModuleFederationPlugin({
        name: "todo",
        library: { type: "var", name: "todo" },
        filename: "remoteEntry-todo-module.js",
        exposes: {
          "./todoModule": "./app/todo/todo.module",
        },
        shared: ['angular']
      }),
      new HtmlWebpackPlugin({
        template : "./app/index.html",
        filename : "ng1-to-ng2/todo/index.html"        
      })
    ],
};
