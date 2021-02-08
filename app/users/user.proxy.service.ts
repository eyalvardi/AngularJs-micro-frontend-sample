import IHttpService = angular.IHttpService;

export class UserProxy{

    constructor(private $http:IHttpService){}

    load(num=1){
        return this.$http
            .get(`https://api.randomuser.me/?results=${num}`)
            .then(resp=>resp.data['results']);
    }
}