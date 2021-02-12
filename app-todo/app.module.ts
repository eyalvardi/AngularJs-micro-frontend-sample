import * as angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

import {appComponent} from "./app.component";
import {appRoutesConfig} from './app-routees.config';



export const appModule = angular
    .module('app.module',[
        'ui.router',
        'oc.lazyLoad',        
    ])
    .config(appRoutesConfig)
    .component('myApp',appComponent);
