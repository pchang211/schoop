var FilterService = angular.module('FilterService', []).factory('filterRepository', function($http) {
	return {
		getYearFilter : function() {
			return $http({method: 'GET', url: '/api/years'});		}
	}
});