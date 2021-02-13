import * as angular from 'angular';

Promise.all([
    import( /* webpackChunkName: "remote-users.module" */ './users/users.module'),
    import( /* webpackChunkName: "bootstrap" */ './app.module'),
]).then( values => {
     angular.bootstrap(document,[ 'app-users.module']);
})
