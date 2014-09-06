var StudentsCtrl = angular.module('StudentsCtrl', ['StudentsService']);

StudentsCtrl.controller('studentsController', function($scope, $routeParams, studentsRepository) {
	
	studentsRepository.getStudent($routeParams.id).success(function(data) {
		$scope.student = data;
	});

});
