var StudentsCtrl = angular.module('StudentsCtrl', ['StudentsService']).controller('studentsController', function($scope, studentsRepository) {
	$scope.message = "This is the students page";

	$scope.helloworld = function() {
		console.log('hello world');
	}

	$scope.getStudents = function() {

		studentsRepository.get().success(function(data) {
			$scope.students = data;
			console.log($scope.students);
		});

	};

	$scope.students = $scope.getStudents();

});
