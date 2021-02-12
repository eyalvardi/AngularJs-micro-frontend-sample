
appRoutesConfig.$inject = ['$stateProvider','$stateRegistryProvider'];
export function appRoutesConfig($stateProvider,$stateRegistry){

    const todoState = {
        parent : 'shell',
        name : 'todo',
        url  : '/todo',
        views : {
            '!$default.shellView' : { component : 'todoList' }
        }
    };
    $stateRegistry.register(todoState);
}
