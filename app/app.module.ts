import * as angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

import {appComponent} from "./app.component";
import {bezeqIntComponent} from "./temp/bezeq-int.component";
import {appRoutesConfig} from './app-routees.config';

// import {TestModule} from "./test/test.module";
// import { bundle} from 'ng-metadata/core';
// let test = bundle(TestModule);

export const appModule = angular
    .module('app.module',[
        'ui.router',
        'oc.lazyLoad',        
        //bundle(TestModule).name
    ])
    .config(appRoutesConfig)
    .component('myApp',appComponent)
    .component('bezeqInt',bezeqIntComponent);