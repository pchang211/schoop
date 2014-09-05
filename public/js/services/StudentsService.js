angular.module('StudentsService', []).factory('studentsRepository', function($http) {
	return {
		get : function() {
			return $http({method: 'GET', url: '/api/students'});
			// return $http.get('/api/students');
		},

		create : function(student) {
			console.log('students service:');
			console.log(student);
			// return $http({method: 'POST', url: '/api/students'});
			return $http({method: 'POST', url: '/api/students', data: student});
		}
	}
});

// angular.module('StudentsService', ['ngResource']).factory('Student', ['$resource', 
// 	function($resource) {
// 		return $resource('/api/students', {}, {
// 			query: {method:'GET', params:{}, isArray:true}
// 		});
// }]);