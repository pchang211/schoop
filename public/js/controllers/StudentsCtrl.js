var StudentsCtrl = angular.module('StudentsCtrl', ['StudentsService']).controller('studentsController', function($scope, studentsRepository) {
	$scope.message = "This is the students page";

	$scope.getStudents = function() {

		studentsRepository.get().success(function(data) {
			$scope.students = data;
			console.log($scope.students);
		});

	};

	$scope.createStudent = function() {

		var student = {'name': 'new-user', 'age': 69};
		studentsRepository.create(student);

	};

	$scope.students = $scope.getStudents();

});
