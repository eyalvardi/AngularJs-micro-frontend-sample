const path = require("path");
const {CleanPlugin,DefinePlugin} = require("webpack");
const SizePlugin = require('size-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require('@alesmenzel/preload-webpack-plugin');
const PreloadWebpackPlugin2 = require('@vue/preload-webpack-plugin');




module.exports = {
  name   : "ng1tong2",
  mode   : 'development',  
  devtool: "eval",
  entry: {
    'angular' : 'angular',
    'main' :  {
      import : "./app/main.ts",
      dependOn : 'angular'
    },
    'todo/todo.module' : {
      import : './app/todo/todo.module.ts',
      dependOn : ['angular','main']
    }
  },
  output: {
    filename: "ng1-to-ng2/[name].bundle.js",
    path: path.resolve(__dirname, "./dist/apollo"),
    publicPath : '/apollo/'
  },
  devServer: {
    publicPath : '/apollo/',
    open: true,
    openPage: 'apollo/ng1-to-ng2',
  },
  optimization: {
    minimize: true,
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
      new HtmlWebpackPlugin({
        template : "./app/index.html",
        filename : "ng1-to-ng2/index.html",
        excludeChunks  : [
          'todo/todo.module'
        ]
      }),
      // new PreloadWebpackPlugin2({
      //   rel: 'preload',
      //   include: 'asyncChunks',
      //   as: 'script'
      // })
      // new PreloadWebpackPlugin({
      //   include: 'initial',
      //   rel: 'preload',
      // })
    ],
};
