(self["webpackChunkapplication_name"] = self["webpackChunkapplication_name"] || []).push([["bootstrap"],{

/***/ "./app-todo/app.component.ts":
/*!***********************************!*\
  !*** ./app-todo/app.component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appComponent": () => (/* binding */ appComponent)
/* harmony export */ });
var AppComponent = /** @class */ (function () {
    function AppComponent($http, $log) {
        this.$http = $http;
        this.name = 'App-Todo';
    }
    AppComponent.$inject = ['$http', '$log'];
    return AppComponent;
}());
var appComponent = {
    controller: AppComponent,
    template: "\n    <div>\n        <h3>App Todo Micro Frontend</h3>       \n        <div ui-view=\"shellView\"></div>        \n    </div>  \n"
};


/***/ }),

/***/ "./app-todo/app.module.ts":
/*!********************************!*\
  !*** ./app-todo/app.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appModule": () => (/* binding */ appModule)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "webpack/sharing/consume/default/angular/angular?ba14");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/lib-esm/index.js");
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oclazyload */ "./node_modules/oclazyload/dist/ocLazyLoad.js");
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oclazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todo_todo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.module */ "./app-todo/todo/todo.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app-todo/app.component.ts");





var appModule = angular__WEBPACK_IMPORTED_MODULE_0__.module('app.module', [
    'ui.router',
    'oc.lazyLoad',
    _todo_todo_module__WEBPACK_IMPORTED_MODULE_3__.todoModule.name
])
    .component('myApp', _app_component__WEBPACK_IMPORTED_MODULE_4__.appComponent)
    .config([
    '$stateProvider', '$uiRouterProvider', '$stateRegistryProvider',
    function ($stateProvider, $uiRouter, $stateRegistry) {
        // If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
        var $urlService = $uiRouter.urlService;
        $urlService.rules.otherwise({ state: 'todo' });
        var shellState = {
            name: 'shell',
            redirectTo: 'todo',
            component: 'myApp'
        };
        $stateRegistry.register(shellState);
    }
]);


/***/ }),

/***/ "./app-todo/todo/app-routees.config.ts":
/*!*********************************************!*\
  !*** ./app-todo/todo/app-routees.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutesConfig": () => (/* binding */ appRoutesConfig)
/* harmony export */ });
appRoutesConfig.$inject = ['$stateProvider', '$stateRegistryProvider'];
function appRoutesConfig($stateProvider, $stateRegistry) {
    var todoState = {
        parent: 'shell',
        name: 'todo',
        url: '/todo',
        views: {
            '!$default.shellView': { component: 'todoList' }
        }
    };
    $stateRegistry.register(todoState);
}


/***/ }),

/***/ "./app-todo/todo/task.component.ts":
/*!*****************************************!*\
  !*** ./app-todo/todo/task.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskComponent": () => (/* binding */ taskComponent)
/* harmony export */ });
var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.onDelete = function () {
        this.todoList.remove(this.task.id);
    };
    return TaskComponent;
}());
var taskComponent = {
    controller: TaskComponent,
    bindings: {
        task: '<source',
        todoList: '<'
    },
    template: "\n    <div>\n        <input type=\"checkbox\" ng-model=\"$ctrl.task.isDone\">\n        {{$ctrl.task.id}} - {{$ctrl.task.desc}}\n        <button ng-click=\"$ctrl.onDelete()\">x</button>\n    </div>\n"
};


/***/ }),

/***/ "./app-todo/todo/todo.list.component.ts":
/*!**********************************************!*\
  !*** ./app-todo/todo/todo.list.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoListComponent": () => (/* binding */ todoListComponent)
/* harmony export */ });
/* harmony import */ var _todoList_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.model */ "./app-todo/todo/todoList.model.ts");

var TodoListComponent = /** @class */ (function () {
    function TodoListComponent($log, $http, todo) {
        this.$log = $log;
        this.$http = $http;
        this.todo = todo;
        this.vm = new _todoList_model__WEBPACK_IMPORTED_MODULE_0__.TodoList();
        this.vm.add('bla bla');
        this.vm.add('bezeqInt');
        $log.debug('hi constructor');
    }
    TodoListComponent.prototype.add = function (desc) {
        // TODO:
        this.vm.add(desc);
    };
    Object.defineProperty(TodoListComponent.prototype, "tasks", {
        get: function () {
            return this.vm.tasks;
        },
        enumerable: false,
        configurable: true
    });
    TodoListComponent.$inject = ["$log", "$http", "todo"];
    return TodoListComponent;
}());
var todoListComponent = {
    controller: TodoListComponent,
    template: "\n    <div>\n        <h4>Micro frontend: App todo</h4>\n        <input type=\"text\" ng-model=\"$ctrl.desc\">\n        <button ng-click=\"$ctrl.add($ctrl.desc)\">Add</button>\n        <hr>        \n        <task \n            source=\"modelTask\"\n            todo-list=\"$ctrl.vm\"\n            ng-repeat=\"modelTask in $ctrl.tasks\" >            \n        </task>\n    </div>\n"
};


/***/ }),

/***/ "./app-todo/todo/todo.module.ts":
/*!**************************************!*\
  !*** ./app-todo/todo/todo.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoModule": () => (/* binding */ todoModule)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "webpack/sharing/consume/default/angular/angular?ba14");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routees_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routees.config */ "./app-todo/todo/app-routees.config.ts");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.list.component */ "./app-todo/todo/todo.list.component.ts");
/* harmony import */ var _todoList_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList.model */ "./app-todo/todo/todoList.model.ts");
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.component */ "./app-todo/todo/task.component.ts");





var todoModule = angular__WEBPACK_IMPORTED_MODULE_0__.module("todo.module", [])
    .component("todoList", _todo_list_component__WEBPACK_IMPORTED_MODULE_2__.todoListComponent)
    .component("task", _task_component__WEBPACK_IMPORTED_MODULE_4__.taskComponent)
    .service("todo", _todoList_model__WEBPACK_IMPORTED_MODULE_3__.TodoList)
    .config(_app_routees_config__WEBPACK_IMPORTED_MODULE_1__.appRoutesConfig);


/***/ }),

/***/ "./app-todo/todo/todoList.model.ts":
/*!*****************************************!*\
  !*** ./app-todo/todo/todoList.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoTask": () => (/* binding */ TodoTask),
/* harmony export */   "TodoList": () => (/* binding */ TodoList)
/* harmony export */ });
/**
 * Created by Eyal on 12/19/2016.
 */
var counter = 0;
var TodoTask = /** @class */ (function () {
    function TodoTask(desc, isDone) {
        if (isDone === void 0) { isDone = false; }
        this.id = counter++;
        this.isDone = isDone;
        this.desc = desc;
    }
    return TodoTask;
}());

var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.add = function (desc) {
        this.tasks.push(new TodoTask(desc));
        /*this.tasks.push({
            id:counter++,
            desc:desc,
            isDone:false
        });*/
        console.log(JSON.stringify(this.tasks));
    };
    TodoList.prototype.remove = function (id) {
        var index = this.tasks.findIndex(function (t) { return t.id == id; });
        this.tasks.splice(index, 1);
    };
    return TodoList;
}());



/***/ })

}]);
//# sourceMappingURL=bootstrap.bundle.js.map