import * as angular from 'angular';

import(
    /* webpackChunkName: "bootstrap" */
    './app.module'
    ).then( module => {
    angular.bootstrap(document,[ module.appModule.name]);
})
