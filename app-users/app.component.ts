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
        <h3>App Users Micro Frontend</h3>       
        <div ui-view="shellView"></div>        
    </div>    
`};
