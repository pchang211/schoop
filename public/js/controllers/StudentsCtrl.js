var StudentsCtrl = angular.module('StudentsCtrl', ['StudentsService']).controller('studentsController', function($scope, studentsRepository) {
	$scope.message = "This is the students page";

	$scope.newStudent = {};
	// $scope.newStudent.name = "Name";
	// $scope.newStudent.age = 0;

	$scope.getStudents = function() {

		studentsRepository.get().success(function(data) {
			$scope.students = data;
		});

	};

	$scope.createStudent = function() {

		studentsRepository.create($scope.newStudent).success(function(response) {
			$scope.newStudent = {};
		});
		$scope.updateStudentList();

	};

	$scope.deleteStudent = function(id) {

		studentsRepository.delete(id);
		$scope.updateStudentList();

	}

	$scope.updateStudentList = function() {

		$scope.students = $scope.getStudents();

	}

	$scope.students = $scope.getStudents();

});
