import * as angular from 'angular';

import('./app.module').then( module => {
    angular.bootstrap(document,[ module.appModule.name]);
})