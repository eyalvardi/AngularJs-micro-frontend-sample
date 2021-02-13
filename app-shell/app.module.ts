import * as angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

import {appComponent} from "./app.component";
import {appRoutesConfig} from './app-routees.config';

// Webpack global var
declare const IS_UI_VISUALIZER : boolean;
declare const UI_TRACE_LEVEL   : string[];

export const appModule = angular
    .module('app.module',[
        'ui.router',
        'oc.lazyLoad',        
    ])
    .component('myApp',appComponent)
    .config(appRoutesConfig)
    .config([
        '$uiRouterProvider', function ($uiRouter) {
            const $urlService = $uiRouter.urlService;
            $urlService.rules.otherwise({ state: 'users' });
            // Webpack variable
            $uiRouter.trace.enable( ...UI_TRACE_LEVEL );
            // Webpack variable
            if (IS_UI_VISUALIZER) {
                // Show the UI-Router Visualizer
                import(
                    /* webpackChunkName: "ui-router-visualizer" */
                    "@uirouter/visualizer"
                    ).then(module => $uiRouter.plugin(module.Visualizer));
            }
        }
    ])
