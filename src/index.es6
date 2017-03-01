const angular = require('angular');
const uiRouter = require('angular-ui-router');

import styles from './assets/main.scss';
import { HomeController } from './app/home/home.controller.es6';
import { TransactionController } from './app/transaction/transaction.controller.es6';
import { ApiService } from './app/_core/api.service.es6';

let app = angular.module('testApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		  $urlRouterProvider.otherwise("/");
		  $stateProvider
		    .state('home', {
				url: '/',
				views: {
					'': {
						templateUrl: 'src/app/home/home.tmpl.html',
						controller: 'HomeController',
						controllerAs: 'homeCtrl'
					}
				}
			})
			.state('transactions', {
				url: '/transactions',
				views: {
					'': {
						templateUrl: 'src/app/transaction/transaction.tmpl.html',
						controller: 'TransactionController',
						controllerAs: 'transactionCtrl'
					}
				}
			}) 
	}])
    .controller('HomeController', HomeController)
	.controller('TransactionController', TransactionController)
    .factory('ApiService', ApiService);

// initialize app
angular.bootstrap(document, ['testApp']);