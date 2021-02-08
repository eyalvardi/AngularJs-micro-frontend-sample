import * as angular from 'angular';

import IModule = angular.IModule;
import {UserProxy} from "./user.proxy.service";
import {usersComponent} from "./users.component";
import {userComponent} from "./user.component";

export const usersModule: IModule = angular
    .module('users.module',[])
    .service('proxy',UserProxy)
    .component('users',usersComponent)
    .component('user',userComponent);