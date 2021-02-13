import angular from 'angular';
import IComponentOptions = angular.IComponentOptions;
import {IHttpService, ILogService} from "angular";

class AppComponent{
    name:string = 'Eyal Vardi';
    get version(){ return angular.version.full; }
    static $inject = ['$http','$log'];
    constructor(private $http:IHttpService ,$log:ILogService){}
}

export const appComponent : IComponentOptions = {
    controller: AppComponent,
    template : `
    <div>
        <h3>Micro Frontend with AngularJS :-)</h3>
        <pre>Webpack ^5.x | AngularJs : {{ ::$ctrl.version }} </pre>
        <hr>
        <nav>
            <a ui-sref="users" ui-sref-active="active">Users (local)</a> |
            <a ui-sref="remoteUsers" ui-sref-active="active">Users (remote)</a> |
            <a ui-sref="todo" ui-sref-active="active">Todo (remote)</a> |            
        </nav>
        <hr>
        <div ui-view="shellView"></div>
        
    </div>
`};
