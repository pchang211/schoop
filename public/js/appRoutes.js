angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		.when('/students', {
			templateUrl: 'views/students.html',
			controller: 'studentsController'
		});

	$locationProvider.html5Mode(true);

}]);