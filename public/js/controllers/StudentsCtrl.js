var StudentsCtrl = angular.module('StudentsCtrl', ['StudentsService', 'FilterService']);

StudentsCtrl.controller('studentsController', function($scope, studentsRepository, filterRepository) {
	$scope.message = "This is the students page";

	$scope.newStudent = {};
	$scope.query = {};
	// $scope.newStudent.name = "Name";
	// $scope.newStudent.age = 0;

	$scope.getYearFilter = function() {
		filterRepository.getYearFilter().success(function(data) {
			$scope.years = data;
		});
	}

	$scope.updateStudentList = function() {
		studentsRepository.get($scope.query).success(function(data) {
			$scope.students = data;
		});
	}

	$scope.updateQuery = function(updatedQuery) {
		$scope.query = updatedQuery;
	}
	
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


	// just for now
	// $scope.query = {};



});
