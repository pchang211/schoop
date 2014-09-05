var StudentsCtrl = angular.module('StudentsCtrl', ['StudentsService']).controller('studentsController', function($scope, studentsRepository) {
	$scope.message = "This is the students page";

	$scope.getStudents = function() {

		studentsRepository.get().success(function(students) {
			console.log(students);
		});

	};
});
