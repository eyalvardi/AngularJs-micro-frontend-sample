appRoutesConfig.$inject = ['$stateProvider','$uiRouterProvider','$stateRegistryProvider'];
export function appRoutesConfig( $stateProvider, $uiRouter , $stateRegistry){

    const shellState = {
        name: 'shell',
        redirectTo: 'users',
        component: 'myApp'
    }

    /***********************************
     * Code splitting and lazy loading
     ***********************************/
    const localUsersState = {
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

    /***********************************
    * Load from micro frontend
    ***********************************/
    const todoState = {
        parent : 'shell',
        name   : 'todo.**',
        url    : '/todo',
        lazyLoad: async function ($transition$) {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
            return import('appTodo/todoModule')
                .then( module =>
                    $ocLazyLoad.load({ name : 'todo.module' })
                );
        }
    }
    const remoteUsersState = {
        parent : 'shell',
        name   : 'remoteUsers.**',
        url    : '/remoteUsers',
        lazyLoad: async function ($transition$) {
            const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
            const todoModule = await import('appUsers/usersModule');
            return $ocLazyLoad.load({ name : 'remoteUsers.module' });
        }
    };

    $stateRegistry.register(shellState);
    $stateRegistry.register(localUsersState);
    $stateRegistry.register(remoteUsersState);
    $stateRegistry.register(todoState);
}
