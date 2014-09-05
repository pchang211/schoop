angular.module('StudentsCtrl', []).controller('studentsController', function($scope) {
	$scope.message = "This is the students page";

	$scope.getStudents = function() {
		console.log('getStudents');
	};
});