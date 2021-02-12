declare const PRODUCTION : boolean;

appRoutesConfig.$inject = ['$stateProvider','$uiRouterProvider','$stateRegistryProvider'];
export function appRoutesConfig( $stateProvider, $uiRouter , $stateRegistry){

    if (!PRODUCTION) {
        // Show the UI-Router Visualizer
        import(
            /* webpackChunkName: "ui-router-visualizer" */
            "@uirouter/visualizer"
        ).then(module => $uiRouter.plugin(module.Visualizer));
    }

    const shellState = {
        name: 'shell',
        redirectTo: 'users',
        component: 'myApp'
    }


    /*
    * Load from micro frontend app-todo
    * */
    const todoState = {
        parent : 'shell',
        name : 'todo.**',
        url  : '/todo',
        lazyLoad: async function ($transition$) {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
            const todoModule = await import('appTodo/todoModule');
            return $ocLazyLoad.load({ name : 'todo.module' });
          }
    }

    const usersState = {
        parent : 'shell',
        name : 'users',
        url  : '/users',
        views : {
            shellView : {component : 'users'}
        },
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
    };

    $stateRegistry.register(todoState);
    $stateRegistry.register(shellState);
    $stateRegistry.register(usersState);
}
