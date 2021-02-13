import * as angular from 'angular';

Promise.all([
    import( /* webpackChunkName: "todo.module" */ './todo/todo.module'),
    import( /* webpackChunkName: "bootstrap" */ './app.module'),
]).then( values => {
     angular.bootstrap(document,[ 'app-todo.module']);
})
