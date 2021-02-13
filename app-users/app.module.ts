import * as angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

import {usersModule} from "./users/users.module";
import {appComponent} from "./app.component";
import {appRoutesConfig} from './users/app-routees.config';

export const appModule = angular
    .module('app.module',[
        'ui.router',
        'oc.lazyLoad',
        usersModule.name
    ])
    .component('myApp',appComponent)
    .config([
        '$stateProvider', '$uiRouterProvider', '$stateRegistryProvider',
        ($stateProvider, $uiRouter, $stateRegistry) => {


            // If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
            const $urlService = $uiRouter.urlService;
            $urlService.rules.otherwise({ state: 'users' });

            const shellState = {
                name      : 'shell',
                redirectTo: 'users',
                component : 'myApp'
            }
            $stateRegistry.register(shellState);

        }
    ]);
