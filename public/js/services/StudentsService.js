angular.module('StudentsService', []).factory('studentsRepository', function($http) {
	return {
		get : function() {
			return $http.get('/api/students');
		}
	}
});

// angular.module('StudentsService', ['ngResource']).factory('Student', ['$resource', 
// 	function($resource) {
// 		return $resource('/api/students', {}, {
// 			query: {method:'GET', params:{}, isArray:true}
// 		});
// }]);