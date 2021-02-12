import IComponentOptions = angular.IComponentOptions;
import {IHttpService, ILogService} from "angular";

class AppComponent{
    name:string = 'App-Todo';
    static $inject = ['$http','$log'];
    constructor(private $http:IHttpService ,$log:ILogService){}
}

export const appComponent : IComponentOptions = {
    controller: AppComponent,
    template : `
    <div>
        <h3>App Todo Micro Frontend</h3>       
        <div ui-view="shellView"></div>        
    </div>  
`};
