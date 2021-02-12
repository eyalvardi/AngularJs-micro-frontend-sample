const path = require("path");
const {
    CleanPlugin,
    DefinePlugin,
} = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const SizePlugin = require('size-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require('@alesmenzel/preload-webpack-plugin');
const PreloadWebpackPlugin2 = require('@vue/preload-webpack-plugin');

const devServerConfig = {
    name: 'root-dev-server',
    mode: 'development',
    devServer: {
        publicPath: '/apollo/',
        port: 8080,
        //open: true,
        openPage: 'apollo/ng1-to-ng2',
        contentBase: path.join(__dirname, './dist/apollo/ng1-to-ng2'),
        contentBasePublicPath: '/apollo/ng1-to-ng2',
    },
    entry: {},
    output: {
        path: path.resolve(__dirname, "./dist/apollo"),
        publicPath: 'http://localhost:8080/apollo/',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                    to: './ng1-to-ng2/css'
                }
            ]
        })
    ]
}

const shellAppConfig = {
    name: "app-shell",
    mode: 'development',
    devtool: "source-map",
    entry: {
        'app-shell-main': "./app-shell/main.ts"
    },
    output: {
        path: path.resolve(__dirname, "./dist/apollo/ng1-to-ng2"),
        filename: "app-shell/[name].bundle.js",
    },
    optimization: {
        minimize: false,
        minimizer: [
            '...',
            new HtmlMinimizerPlugin(),
        ],
        chunkIds: 'named',
        mergeDuplicateChunks: true,
        runtimeChunk: {
            name: 'runtime',
        },
        /*splitChunks: {
            chunks: 'all',
            //name : false
        },*/
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
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
            PRODUCTION: JSON.stringify(false),
        }),
        new ModuleFederationPlugin({
            name: "shell",
            remotes: {
                appTodo: "appTodo@http://localhost:8080/apollo/ng1-to-ng2/remoteEntry-todo-module.js",
            },
            exposes: {},
            //shared : { angular : {singleton : true} }
        }),
        new HtmlWebpackPlugin({
            template: "./app-shell/index.html",
            filename: "../index.html",
            inject: 'body',
            scriptLoading: 'blocking'
        })
    ],
};

const todoAppConfig = {
    name: "todo-app",
    mode: 'development',
    devtool: "source-map",
    entry: {
        'app-todo-main': "./app-todo/main.ts"
    },
    output: {
        path: path.resolve(__dirname, "./dist/apollo/ng1-to-ng2"),
        filename: "app-todo/[name].bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
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
            name: "appTodo",
            library: {type: "var", name: "appTodo"},
            filename: 'remoteEntry-todo-module.js',
            exposes: {
                "./todoModule": "./app-todo/todo/todo.module",
            },
            shared: ['angular']
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            scriptLoading: 'blocking',
            template: "./app-todo/index.html",
            filename: "./app-todo/index.html",
            chunks : [
                'app-todo-main'
            ]
        })
    ],
};

const projectsMap = new Map([['shellAppConfig',shellAppConfig],['todoAppConfig',todoAppConfig]]);

module.exports = (env, webpackArgs) => {
    return require('./webpack/cli').then(args => {
        const projects = [];
        args.projects.forEach( pro => {
            if( projectsMap.has(pro)){
                projects.push(projectsMap.get(pro));
            }
        });

        projects.push(devServerConfig);
        console.log(projects);

        return projects;
    })
}

/*

module.exports = [
  shellAppConfig,
  //todoAppConfig,
  devServerConfig
]
*/
