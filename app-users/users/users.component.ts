/**
 * Created by Eyal on 12/19/2016.
 */
import IComponentOptions = angular.IComponentOptions;
import {UserProxy} from "./user.proxy.service";

class UsersComponent{
    users:any[];

    static $inject = ["proxy"];
    constructor(private proxy:UserProxy){}
    $onInit(){
        this.load(3);
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
        <h4>Micro frontend: App users</h4>
        <user source="user" ng-repeat="user in $ctrl.users">{{user.name.first}}</user>
    </div>
`};
