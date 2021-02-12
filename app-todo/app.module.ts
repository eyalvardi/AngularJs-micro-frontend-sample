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
		'$uiRouterProvider', function ($uiRouter) {
			// Enable tracing of each TRANSITION... (check the javascript console)
			// This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
			// Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
			$uiRouter.trace.enable(5);
		}
	])
	.config([
		'$stateProvider', '$uiRouterProvider', '$stateRegistryProvider',
		($stateProvider, $uiRouter, $stateRegistry) => {

			import(
				/* webpackChunkName: "ui-router-visualizer" */
				"@uirouter/visualizer"
				)
				.then(module => $uiRouter.plugin(module.Visualizer));

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
