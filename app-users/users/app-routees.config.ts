declare const PRODUCTION : boolean;

usersRoutesConfig.$inject = ['$stateProvider','$uiRouterProvider','$stateRegistryProvider'];
export function usersRoutesConfig( $stateProvider, $uiRouter , $stateRegistry){

    const usersState = {
        parent : 'shell',
        name : 'remoteUsers',
        url  : '/remoteUsers',
        views : {
            '!$default.shellView' : { component : 'users' }
        }
    };
    $stateRegistry.register(usersState);
}
