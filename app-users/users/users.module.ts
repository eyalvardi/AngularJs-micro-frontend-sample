import {usersRoutesConfig} from "./app-routees.config";


import {UserProxy} from "./user.proxy.service";
import {usersComponent} from "./users.component";
import {userComponent} from "./user.component";

export const usersModule = window.angular
    .module('remoteUsers.module',[])
    .service('proxy',UserProxy)
    .component('users',usersComponent)
    .component('user',userComponent)
	.config(usersRoutesConfig)
;
