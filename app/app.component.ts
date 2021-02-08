import IComponentOptions = angular.IComponentOptions;
import {IHttpService, ILogService} from "angular";

class AppComponent{
    name:string = 'Eyal Vardi';
    constructor(private $http:IHttpService ,$log:ILogService){}
    foo(){
        this.name+= '!';
    }
}

export const appComponent : IComponentOptions = {
    controller: AppComponent,
    template : `
    <div>
        <h3>AngularJS with Webpack</h3>
        <nav>
            <a ui-sref="users" ui-sref-active="active">Users</a> |
            <a ui-sref="todo-list" ui-sref-active="active">Todo List</a> |
        </nav>
        <hr>
        <div ui-view></div>
        
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