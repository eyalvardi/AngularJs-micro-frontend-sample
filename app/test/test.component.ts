/**
 * Created by Eyal on 12/19/2016.
 */
import {Component} from "ng-metadata/core";
import ILogService = angular.ILogService;
import {Inject} from "ng-metadata/src/core/di/decorators";

@Component({
  selector: 'test',
  styles : [],
  template: `
<div>
  <h1>Test 123</h1>
  <button ng-click="$ctrl.foo()">test: {{$ctrl.name}} </button>
</div>
`})
export class TestComponent {
  name:string = 'eyal';

  constructor(@Inject('$log') private $log:ILogService){}

  foo(){
    this.name += '!'
  }
}

//Log()(Component({})(TestComponent));