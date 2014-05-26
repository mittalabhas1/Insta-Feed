'use strict';

angular
  .module('instagramFeedApiApp', [
    'ngResource',
    'ngSanitize',
    'ui.router',
    'restangular'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })

        .state('accessToken', {
        	url: '/access_token=*token',
        	templateUrl: 'views/token.html',
        	controller: 'TokenCtrl'
        });
        
	});