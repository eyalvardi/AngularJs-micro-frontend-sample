declare const PRODUCTION : boolean;

appRoutesConfig.$inject = ['$stateProvider','$uiRouterProvider'];
export function appRoutesConfig($stateProvider,$uiRouter){

    $stateProvider.state({
        name : 'todo-list',
        url  : '/todo-list',
        component : "todoList",
        lazyLoad: async function ($transition$) {
            const usersModule = await import('./todo/todo.module');
            return $transition$
                .injector()
                .get('$ocLazyLoad')
                .load({
                    name : 'todo.module'
                });
          }
    });   
}