import * as angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

import {todoModule} from './todo/todo.module';
import {appComponent} from "./app.component";


export const appModule = angular
	.module('app.module', [
		'ui.router',
		'oc.lazyLoad',
		todoModule.name
	])
	.component('myApp', appComponent)
	.config([
		'$stateProvider', '$uiRouterProvider', '$stateRegistryProvider',
		($stateProvider, $uiRouter, $stateRegistry) => {

			// If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
			const $urlService = $uiRouter.urlService;
			$urlService.rules.otherwise({ state: 'todo' });

			const shellState = {
				name      : 'shell',
				redirectTo: 'todo',
				component : 'myApp'
			}
			$stateRegistry.register(shellState);

		}
	]);
