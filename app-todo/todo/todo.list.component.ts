import IComponentOptions = angular.IComponentOptions;
import {TodoList} from "./todoList.model";
import ILogService = angular.ILogService;
import IHttpService = angular.IHttpService;

class TodoListComponent{
    vm:TodoList = new TodoList();
    desc:string;

    static $inject = ["$log","$http","todo"];

    constructor(
        private $log:ILogService,
        private $http:IHttpService,
        private todo:TodoList
    ){
        this.vm.add('bla bla');
        this.vm.add('bezeqInt');
        $log.debug('hi constructor');
    }

    add(desc:string){
        // TODO:
        this.vm.add(desc);
    }

    get tasks(){
        return this.vm.tasks;
    }
}

export const todoListComponent : IComponentOptions = {
    controller: TodoListComponent,
    template : `
    <div>
        <h3>Todo List Demo</h3>
        <input type="text" ng-model="$ctrl.desc">
        <button ng-click="$ctrl.add($ctrl.desc)">Add</button>
        <hr>        
        <task 
            source="modelTask"
            todo-list="$ctrl.vm"
            ng-repeat="modelTask in $ctrl.tasks" >            
        </task>
    </div>
`};