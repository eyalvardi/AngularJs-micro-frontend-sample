import * as angular from 'angular';
import {appRoutesConfig} from "./app-routees.config";
import {todoListComponent} from "./todo.list.component";
import {TodoList} from "./todoList.model";
import {taskComponent} from "./task.component";

import IModule = angular.IModule;

export const todoModule: IModule = angular.module("todo.module", [])
	.component("todoList", todoListComponent)
	.component("task"    , taskComponent)
	.service  ("todo"    , TodoList)
	.config   (appRoutesConfig);
