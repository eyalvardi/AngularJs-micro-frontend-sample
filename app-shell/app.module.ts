import * as angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

import {appComponent} from "./app.component";
import {appRoutesConfig} from './app-routees.config';

// Webpack global var
declare const PRODUCTION : boolean;

export const appModule = angular
    .module('app.module',[
        'ui.router',
        'oc.lazyLoad',        
    ])
    .component('myApp',appComponent)
    .config(appRoutesConfig)
    .config([
        '$uiRouterProvider', function ($uiRouter) {

            if (!PRODUCTION) {
                // Show the UI-Router Visualizer
                import(
                    /* webpackChunkName: "ui-router-visualizer" */
                    "@uirouter/visualizer"
                    ).then(module => $uiRouter.plugin(module.Visualizer));

                // Enable tracing of each TRANSITION... (check the javascript console)
                // This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
                // Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
                $uiRouter.trace.enable(5);
            }
        }
    ])
