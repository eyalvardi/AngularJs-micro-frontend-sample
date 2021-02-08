/**
 * Created by Eyal on 12/19/2016.
 */
import IComponentOptions = angular.IComponentOptions;
import {UserProxy} from "./user.proxy.service";

class UsersComponent{
    users:any[];

    constructor(private proxy:UserProxy){
        this.load(8);
    }

    load(num){
        this.proxy
            .load(num)
            .then(users => {
                this.users = users;
            })
    }
}

export const usersComponent : IComponentOptions = {
    controller: UsersComponent,
    template : `
    <div>
        <user source="user" ng-repeat="user in $ctrl.users">{{user.name.first}}</user>
    </div>
`};