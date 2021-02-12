const path = require("path");
const {
  CleanPlugin,
  DefinePlugin,
} = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const SizePlugin = require('size-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const HtmlMinimizerPlugin   = require("html-minimizer-webpack-plugin");
const PreloadWebpackPlugin  = require('@alesmenzel/preload-webpack-plugin');
const PreloadWebpackPlugin2 = require('@vue/preload-webpack-plugin');

const devServerConfig = {
  name: 'root-dev-server',
  mode   : 'development',
  devServer: {
    publicPath : '/apollo/',
    port: 8080,
    //open: true,
    openPage: 'apollo/ng1-to-ng2',
    contentBase: path.join(__dirname, './dist/apollo/ng1-to-ng2'),
    contentBasePublicPath: '/apollo/ng1-to-ng2',
  },
  entry : {},
  output:{
    path       : path.resolve(__dirname, "./dist/apollo"),
    publicPath : 'http://localhost:8080/apollo/',
  },

  plugins : [
      new CopyWebpackPlugin({
        patterns : [
          {
            from : 'node_modules/bootstrap/dist/css/bootstrap.min.css',
            to   : './ng1-to-ng2/css'
          }
        ]
      })
  ]
}

const shellAppConfig = {
  name   : "shell",
  mode   : 'development',  
  devtool: "source-map",
  entry: {   
    'main' :   "./app-shell/main.ts"        
  },
  output: {
    filename   : "ng1-to-ng2/app-shell/[name].bundle.js",
    path       : path.resolve(__dirname, "./dist/apollo"),
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
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./ng1-to-ng2/app-shell/*']
      }),
      new DefinePlugin({
        PRODUCTION: JSON.stringify(true),
      }),
      new ModuleFederationPlugin({
        name   : "shell",
        remotes: {
          appTodo: "appTodo@http://localhost:8080/apollo/ng1-to-ng2/remoteEntry-todo-module.js",
        },
        exposes: {} ,
        //shared : { angular : {singleton : true} }
      }),
      new HtmlWebpackPlugin({
        template : "./app-shell/index.html",
        filename : "ng1-to-ng2/index.html",
        inject : 'body',
        scriptLoading : 'blocking',
        excludeChunks  : [
          'todo/todo.module'
        ]
      })
    ],
};

const todoAppConfig = {
  name   : "todo-app",
  mode   : 'development',  
  devtool: "source-map",
  entry: {   
    'app-todo-main' : "./app-todo/main.ts"
  },
  output: {
    path     : path.resolve(__dirname, "./dist/apollo"),
    filename : "ng1-to-ng2/app-todo/[name].bundle.js",
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
      /*new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./ng1-to-ng2/app-todo/!*']
      }),*/
      new ModuleFederationPlugin({
        name   : "appTodo",
        library: { type: "var", name: "appTodo" },
        filename: "ng1-to-ng2/remoteEntry-todo-module.js",
        exposes: {
          "./todoModule": "./app-todo/todo/todo.module",
        },
        shared: ['angular']
      }),
      new HtmlWebpackPlugin({
        inject : 'body',
        scriptLoading : 'blocking',
        template : "./app-todo/index.html",
        filename : "./ng1-to-ng2/app-todo/index.html"
      })
    ],
};

module.exports = [
  shellAppConfig,
  //todoAppConfig,
  devServerConfig
]
