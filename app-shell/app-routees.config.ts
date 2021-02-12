declare const PRODUCTION : boolean;

appRoutesConfig.$inject = ['$stateProvider','$uiRouterProvider'];
export function appRoutesConfig( $stateProvider, $uiRouter ){

    /*
    * Load from micro frontend app-todo
    * */
    $stateProvider.state({
        name : 'todo-list',
        url  : '/todo-list',
        component : "todoList",
        lazyLoad: async function ($transition$) {
            const usersModule = await import('appTodo/todoModule');
            return $transition$
                .injector()
                .get('$ocLazyLoad')
                .load({
                    name : 'todo.module'
                });
          }
    });

    $stateProvider.state({
        name : 'users',
        url  : '/users',
        component : 'users',
        lazyLoad: async function ($transition$) {
            const usersModule = await import(
                /* webpackChunkName: "users/users.module" */
                /* webpackMode: "lazy"              */
                /* webpackPrefetch: true            */
                './users/users.module');
            return $transition$
                .injector()
                .get('$ocLazyLoad')
                .load({
                    name : 'users.module'
                });
          }
    });
    if (!PRODUCTION) {
        // Show the UI-Router Visualizer
        import("@uirouter/visualizer").then(module => $uiRouter.plugin(module.Visualizer));
      }    
}
