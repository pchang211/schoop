var StudentsCtrl = angular.module('StudentsCtrl', ['StudentsService']).controller('studentsController', function($scope, studentsRepository) {
	$scope.message = "This is the students page";

	$scope.student = {};
	$scope.student.name = "Name";
	$scope.student.age = 0;

	$scope.getStudents = function() {

		studentsRepository.get().success(function(data) {
			$scope.students = data;
			console.log($scope.students);
		});

	};

	$scope.createStudent = function() {

		console.log($scope.student);
		studentsRepository.create($scope.student);

	};

	$scope.deleteStudent = function(id) {

		studentsRepository.delete(id);

	}

	$scope.students = $scope.getStudents();

});
