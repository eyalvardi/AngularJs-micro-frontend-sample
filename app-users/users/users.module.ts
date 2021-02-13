import * as angular from 'angular';
import {usersRoutesConfig} from "./app-routees.config";

import IModule = angular.IModule;
import {UserProxy} from "./user.proxy.service";
import {usersComponent} from "./users.component";
import {userComponent} from "./user.component";

export const usersModule: IModule = angular
    .module('remoteUsers.module',[])
    .service('proxy',UserProxy)
    .component('users',usersComponent)
    .component('user',userComponent)
	.config(usersRoutesConfig)
;
