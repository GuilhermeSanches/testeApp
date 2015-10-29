angular.module("starter",['ionic']).factory("cityAPI", function ($http, config) {
	var _getCities = function () {
		return $http.get(config.baseUrl + "/city");
	};

//	var _saveContato = function (contato) {
	//	return $http.post(config.baseUrl + "/contatos", contato);
	//};

	return {
		getCities: _getCities,		
	};
});