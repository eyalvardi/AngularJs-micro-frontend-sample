(self["webpackChunkapplication_name"] = self["webpackChunkapplication_name"] || []).push([["app-users_users_users_module_ts"],{

/***/ "./app-users/users/app-routees.config.ts":
/*!***********************************************!*\
  !*** ./app-users/users/app-routees.config.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersRoutesConfig": () => (/* binding */ usersRoutesConfig)
/* harmony export */ });
usersRoutesConfig.$inject = ['$stateProvider', '$uiRouterProvider', '$stateRegistryProvider'];
function usersRoutesConfig($stateProvider, $uiRouter, $stateRegistry) {
    var usersState = {
        parent: 'shell',
        name: 'remoteUsers',
        url: '/remoteUsers',
        views: {
            '!$default.shellView': { component: 'users' }
        }
    };
    $stateRegistry.register(usersState);
}


/***/ }),

/***/ "./app-users/users/user.component.ts":
/*!*******************************************!*\
  !*** ./app-users/users/user.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userComponent": () => (/* binding */ userComponent)
/* harmony export */ });
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    return UserComponent;
}());
var userComponent = {
    controller: UserComponent,
    bindings: {
        user: '<source'
    },
    template: "\n    <div class=\"row\">\n    <div class=\"col-lg-5\">\n        <div class=\"media\">\n            <a class=\"pull-left\" href=\"#\">\n                <img class=\"media-object dp img-circle\" \n                ng-src=\"{{$ctrl.user.picture.thumbnail}}\" style=\"width: 100px;height:100px;\">\n            </a>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{$ctrl.user.name.first}} {{$ctrl.user.name.last}} <small> {{$ctrl.user.location.state}}</small></h4>\n                <h5>Software Developer at <a href=\"http://gridle.in\">Gridle.in</a></h5>\n                <hr style=\"margin:8px auto\">\n\n                <span class=\"label label-default\">HTML5/CSS3</span>\n                <span class=\"label label-default\">jQuery</span>\n                <span class=\"label label-info\">CakePHP</span>\n                <span class=\"label label-default\">Android</span>\n            </div>\n        </div>\n    </div>\n</div>\n"
};


/***/ }),

/***/ "./app-users/users/user.proxy.service.ts":
/*!***********************************************!*\
  !*** ./app-users/users/user.proxy.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProxy": () => (/* binding */ UserProxy)
/* harmony export */ });
var UserProxy = /** @class */ (function () {
    function UserProxy($http) {
        this.$http = $http;
    }
    UserProxy.prototype.load = function (num) {
        if (num === void 0) { num = 1; }
        return this.$http
            .get("https://api.randomuser.me/?results=" + num)
            .then(function (resp) { return resp.data['results']; });
    };
    UserProxy.$inject = ["$http"];
    return UserProxy;
}());



/***/ }),

/***/ "./app-users/users/users.component.ts":
/*!********************************************!*\
  !*** ./app-users/users/users.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersComponent": () => (/* binding */ usersComponent)
/* harmony export */ });
var UsersComponent = /** @class */ (function () {
    function UsersComponent(proxy) {
        this.proxy = proxy;
    }
    UsersComponent.prototype.$onInit = function () {
        this.load(3);
    };
    UsersComponent.prototype.load = function (num) {
        var _this = this;
        this.proxy
            .load(num)
            .then(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.$inject = ["proxy"];
    return UsersComponent;
}());
var usersComponent = {
    controller: UsersComponent,
    template: "\n    <div>\n        <h4>Micro frontend: App users</h4>\n        <user source=\"user\" ng-repeat=\"user in $ctrl.users\">{{user.name.first}}</user>\n    </div>\n"
};


/***/ }),

/***/ "./app-users/users/users.module.ts":
/*!*****************************************!*\
  !*** ./app-users/users/users.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersModule": () => (/* binding */ usersModule)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "webpack/sharing/consume/default/angular/angular?ba14");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routees_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routees.config */ "./app-users/users/app-routees.config.ts");
/* harmony import */ var _user_proxy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.proxy.service */ "./app-users/users/user.proxy.service.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./app-users/users/users.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./app-users/users/user.component.ts");





var usersModule = angular__WEBPACK_IMPORTED_MODULE_0__.module('remoteUsers.module', [])
    .service('proxy', _user_proxy_service__WEBPACK_IMPORTED_MODULE_2__.UserProxy)
    .component('users', _users_component__WEBPACK_IMPORTED_MODULE_3__.usersComponent)
    .component('user', _user_component__WEBPACK_IMPORTED_MODULE_4__.userComponent)
    .config(_app_routees_config__WEBPACK_IMPORTED_MODULE_1__.usersRoutesConfig);


/***/ })

}]);
//# sourceMappingURL=app-users_users_users_module_ts.bundle.js.map