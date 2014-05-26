'use strict';

angular.module('instagramFeedApiApp')
  

	.controller('MainCtrl', function ($scope, $http) {
		
		$scope.accessToken = '';

		$scope.retrieveAccessToken = function() {
			$scope.accessToken = localStorage.getItem('token')
		}

		var config = {
			headers:  {
	            'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
	            'Access-Control-Allow-Origin': true
       		}
       	};

		$scope.retrieveAccessToken();

		$http.defaults.useXDomain = true;
		delete $http.defaults.headers.common['X-Requested-With'];
		
		$http({
			method: 'GET',
			url: 'https://api.instagram.com/v1/users/self/feed/',
			params: {
				access_token: $scope.accessToken
			}
		})
		.success(function(obj){
			$scope.data = obj.data;
			console.log($scope.data);
		})
		.error(function(err){
			$scope.error = err.data;
		});
	
	})


	.controller('LoginCtrl', function ($scope) {

		// $scope.loginClick = function(){
		// 	$http({
		// 		method: 'GET',
		// 		url: 'https://instagram.com/oauth/authorize/',
		// 		params: {
		// 			client_id: '9e5b87ff55124687a064d58b1a7b3b67',
		// 			redirect_uri: 'http://127.0.0.1:9000/#/home',
		// 			response_type: 'token'
		// 		}
		// 	}).then(function(obj)){
		// 		$scope.data = obj.data;
		// 		$scope.getFeed($scope.data);
		// 	});
		// }

	})

	.controller('TokenCtrl', function ($scope, $stateParams, $state) {
		
		$scope.token = $stateParams.token;

		$scope.saveAccessToken = function() {
			localStorage.setItem('token', $scope.token);
		}

		$scope.saveAccessToken();
		$state.go('MainCtrl');
	});