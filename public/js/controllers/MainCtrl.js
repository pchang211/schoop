var MainCtrl = angular.module('MainCtrl', ['StudentsService', 'FilterService']);

MainCtrl.controller('mainController', function($scope, studentsRepository, filterRepository) {
	$scope.message = "This is the Home Page";

	$scope.newStudent = {};
	$scope.query = {};

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
		$scope.updateStudentList();
	}
	
	$scope.createStudent = function() {

		studentsRepository.create($scope.newStudent).success(function(response) {
			$scope.newStudent = {};
			$scope.updateStudentList();
		});

	};

	$scope.deleteStudent = function(id) {

		studentsRepository.delete(id);
		$scope.updateStudentList();

	}

});