angular.module('invoiceFrontEndApp')
.service('http', function ($http, $window, $log) {
	return {
		getConfig: getConfig,
		config: config,
		get: getMethod,
		post: postMethod,
		'delete': deleteMethod,
		put: putMethod
	};

	var origin;

	function config(o) {
		if (o) origin = o;
	}

	function getConfig() {
		return {
			origin: origin			
		};
	}

	function getMethod(endpoint, config) {
		var u = origin + endpoint;
		return $http.get(u, config);
	}

	function postMethod(endpoint, data, config) {
		var u = origin + endpoint;
		return $http.post(u, data, config);
	}

	function deleteMethod(endpoint, config) {
		var u = origin + endpoint;
		return $http.delete(u, config);
	}

	function putMethod(endpoint, data, config) {
		var u = origin + endpoint;
		return $http.put(u, data, config);
	}	
});