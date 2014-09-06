angular.module('StudentsService', []).factory('studentsRepository', function($http) {
	return {
		get : function(query) {
			return $http({method: 'GET', url: '/api/students', params: query});
			// return $http.get('/api/students');
		},

		create : function(student) {
			// console.log(student);
			return $http({method: 'POST', url: '/api/students', data: student});
		},

		delete : function(id) {
			// console.log(id);
			return $http({method: 'DELETE', url: '/api/students/' + id});
		}
	}
});

// angular.module('StudentsService', ['ngResource']).factory('Student', ['$resource', 
// 	function($resource) {
// 		return $resource('/api/students', {}, {
// 			query: {method:'GET', params:{}, isArray:true}
// 		});
// }]);