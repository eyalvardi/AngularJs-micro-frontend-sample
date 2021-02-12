/**
 * Created by Eyal on 12/19/2016.
 */
import IComponentOptions = angular.IComponentOptions;
import {Task, TodoList} from "./todoList.model";

class TaskComponent{
    task:Task;
    todoList:TodoList;
    onDelete(){
        this.todoList.remove(this.task.id);
    }
}

export const taskComponent : IComponentOptions = {
    controller: TaskComponent,
    bindings:{
      task: '<source',
      todoList:'<'
    },
    template : `
    <div>
        <input type="checkbox" ng-model="$ctrl.task.isDone">
        {{$ctrl.task.id}} - {{$ctrl.task.desc}}
        <button ng-click="$ctrl.onDelete()">x</button>
    </div>
`};