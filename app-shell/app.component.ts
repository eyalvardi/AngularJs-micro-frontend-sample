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
        <h3>Micro Frontend with AngularJS and Webpack</h3>
        <pre>AngularJs : {{ ::$ctrl.version }}</pre>
        <hr>
        <nav>
            <a ui-sref="users" ui-sref-active="active">
                Users (from app-shell)
            </a> |
            <a ui-sref="todo" ui-sref-active="active">
                Todo (from app-todo)
            </a> |            
        </nav>
        <hr>
        <div ui-view="shellView"></div>
        
    </div>
    <!--
    <test ng-click="$ctrl.foo()"></test>
    <users></users>
    -->
    <!--<div>
        <h1> Hi {{$ctrl.name}}</h1>
        <button ng-click="$ctrl.foo()">Click me</button>
        <bezeq-int msg="by" ></bezeq-int>
        <todo-list></todo-list>
    </div>-->
`};
