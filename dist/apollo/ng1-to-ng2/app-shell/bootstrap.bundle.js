(self["webpackChunkapplication_name"] = self["webpackChunkapplication_name"] || []).push([["bootstrap"],{

/***/ "./app-shell/app-routees.config.ts":
/*!*****************************************!*\
  !*** ./app-shell/app-routees.config.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutesConfig": () => (/* binding */ appRoutesConfig)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
appRoutesConfig.$inject = ['$stateProvider', '$uiRouterProvider', '$stateRegistryProvider'];
function appRoutesConfig($stateProvider, $uiRouter, $stateRegistry) {
    var shellState = {
        name: 'shell',
        redirectTo: 'users',
        component: 'myApp'
    };
    /***********************************
     * Code splitting and lazy loading
     ***********************************/
    var localUsersState = {
        parent: 'shell',
        name: 'users',
        url: '/users',
        views: {
            shellView: { component: 'users' }
        },
        lazyLoad: function ($transition$) {
            return __awaiter(this, void 0, void 0, function () {
                var usersModule;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() | users/users.module */ "users/users.module").then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ "./app-shell/users/users.module.ts"))];
                        case 1:
                            usersModule = _a.sent();
                            return [2 /*return*/, $transition$
                                    .injector()
                                    .get('$ocLazyLoad')
                                    .load({
                                    name: 'users.module'
                                })];
                    }
                });
            });
        }
    };
    /***********************************
    * Load from micro frontend
    ***********************************/
    var todoState = {
        parent: 'shell',
        name: 'todo.**',
        url: '/todo',
        lazyLoad: function ($transition$) {
            return __awaiter(this, void 0, void 0, function () {
                var $ocLazyLoad;
                return __generator(this, function (_a) {
                    $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
                    return [2 /*return*/, __webpack_require__.e(/*! import() */ "webpack_container_remote_appTodo_todoModule").then(__webpack_require__.t.bind(__webpack_require__, /*! appTodo/todoModule */ "webpack/container/remote/appTodo/todoModule", 23))
                            .then(function (module) {
                            return $ocLazyLoad.load({ name: 'todo.module' });
                        })];
                });
            });
        }
    };
    var remoteUsersState = {
        parent: 'shell',
        name: 'remoteUsers.**',
        url: '/remoteUsers',
        lazyLoad: function ($transition$) {
            return __awaiter(this, void 0, void 0, function () {
                var $ocLazyLoad, todoModule;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
                            return [4 /*yield*/, __webpack_require__.e(/*! import() */ "webpack_container_remote_appUsers_usersModule").then(__webpack_require__.t.bind(__webpack_require__, /*! appUsers/usersModule */ "webpack/container/remote/appUsers/usersModule", 23))];
                        case 1:
                            todoModule = _a.sent();
                            return [2 /*return*/, $ocLazyLoad.load({ name: 'remoteUsers.module' })];
                    }
                });
            });
        }
    };
    $stateRegistry.register(shellState);
    $stateRegistry.register(localUsersState);
    $stateRegistry.register(remoteUsersState);
    $stateRegistry.register(todoState);
}


/***/ }),

/***/ "./app-shell/app.component.ts":
/*!************************************!*\
  !*** ./app-shell/app.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appComponent": () => (/* binding */ appComponent)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent($http, $log) {
        this.$http = $http;
        this.name = 'Eyal Vardi';
    }
    Object.defineProperty(AppComponent.prototype, "version", {
        get: function () { return (angular__WEBPACK_IMPORTED_MODULE_0___default().version.full); },
        enumerable: false,
        configurable: true
    });
    AppComponent.$inject = ['$http', '$log'];
    return AppComponent;
}());
var appComponent = {
    controller: AppComponent,
    template: "\n    <div>\n        <h3>Micro Frontend with AngularJS</h3>\n        <pre>Webpack ^5.x | AngularJs : {{ ::$ctrl.version }} </pre>\n        <hr>\n        <nav>\n            <a ui-sref=\"users\" ui-sref-active=\"active\">Users (local)</a> |\n            <a ui-sref=\"remoteUsers\" ui-sref-active=\"active\">Users (remote)</a> |\n            <a ui-sref=\"todo\" ui-sref-active=\"active\">Todo (remote)</a> |            \n        </nav>\n        <hr>\n        <div ui-view=\"shellView\"></div>\n        \n    </div>\n"
};


/***/ }),

/***/ "./app-shell/app.module.ts":
/*!*********************************!*\
  !*** ./app-shell/app.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appModule": () => (/* binding */ appModule)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uirouter_angularjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/lib-esm/index.js");
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oclazyload */ "./node_modules/oclazyload/dist/ocLazyLoad.js");
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oclazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app-shell/app.component.ts");
/* harmony import */ var _app_routees_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routees.config */ "./app-shell/app-routees.config.ts");





var appModule = angular__WEBPACK_IMPORTED_MODULE_0__.module('app.module', [
    'ui.router',
    'oc.lazyLoad',
])
    .component('myApp', _app_component__WEBPACK_IMPORTED_MODULE_3__.appComponent)
    .config(_app_routees_config__WEBPACK_IMPORTED_MODULE_4__.appRoutesConfig)
    .config([
    '$uiRouterProvider',
    function ($uiRouter) {
        // Enable tracing of each TRANSITION... (check the javascript console)
        // This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
        // Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
        $uiRouter.trace.enable(["TRANSITION"] || 0);
        if (false) {}
    }
]);


/***/ })

}]);
//# sourceMappingURL=bootstrap.bundle.js.map