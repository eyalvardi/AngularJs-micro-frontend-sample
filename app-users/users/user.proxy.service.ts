import IHttpService = angular.IHttpService;

export class UserProxy{

    static $inject = ["$http"];
    constructor(private $http:IHttpService){}

    load(num=1){
        return this.$http
            .get(`https://api.randomuser.me/?results=${num}`)
            .then(resp=>resp.data['results']);
    }
}