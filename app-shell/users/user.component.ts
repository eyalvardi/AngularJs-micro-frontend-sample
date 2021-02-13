/**
 * Created by Eyal on 12/19/2016.
 */
import IComponentOptions = angular.IComponentOptions;

class UserComponent{
    user:any;
}

export const userComponent : IComponentOptions = {
    controller: UserComponent,
    bindings:{
        user:'<source'
    },
    template : `
    <div class="row">
    <div>
        <div class="media">
            <a class="pull-left" href="#">
                <img class="media-object dp img-circle" 
                ng-src="{{$ctrl.user.picture.thumbnail}}" style="width: 100px;height:100px;">
            </a>
            <div class="media-body">
                <h4 class="media-heading">{{$ctrl.user.name.first}} {{$ctrl.user.name.last}} <small> {{$ctrl.user.location.state}}</small></h4>
                <h5>Software Developer at <a href="http://gridle.in">Gridle.in</a></h5>
                <hr style="margin:8px auto">

                <span class="label label-default">HTML5/CSS3</span>
                <span class="label label-default">jQuery</span>
                <span class="label label-info">CakePHP</span>
                <span class="label label-default">Android</span>
            </div>
        </div>
    </div>
</div>
`};
