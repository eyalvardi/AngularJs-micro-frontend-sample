import angular from 'angular';
import IComponentOptions = angular.IComponentOptions;
import {IHttpService, ILogService} from "angular";

class AppComponent{
    name:string = 'Eyal Vardi';
    get version(){ return angular.version.full; }
    static $inject = ['$http','$log'];
    constructor(private $http:IHttpService ,$log:ILogService){}
    async foo(){
        this.name+= '!';
        //const todoModule = await import('todo/todoModule');
    }
    async loadAppTodoBuild(){
        /*const appTodoModule = await import(
            /!* webpackIgnore : true   *!/
            /!* webpackMode   : "lazy" *!/
            `http://localhost:8080/apollo/ng1-to-ng2/`
            );*/

        const todoModule = await import('appTodo/todoModule');
    }
}

export const appComponent : IComponentOptions = {
    controller: AppComponent,
    template : `
    <div>
        <h3>Micro Frontend with AngularJS and Webpack</h3>
        <strong>AngularJs : {{ ::$ctrl.version }}</strong>
        <hr>
        <nav>
            <a ui-sref="users" ui-sref-active="active">Users</a> |
            <a ui-sref="todo-list" ui-sref-active="active">Todo List</a> |
            <button ng-click="$ctrl.loadAppTodoBuild()">Load app-todo from dist</button>
            <button ng-click="$ctrl.foo()">Load Todo</button>
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
