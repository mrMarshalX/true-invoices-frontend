angular.module('invoiceFrontEndApp')
.controller('InvoicesViewCtrl', function ($rootScope, $routeParams, $scope, $http, api) {
	var url = $rootScope.url;		

	$http.get(api.URL + ':' + api.PORT + url)
	.success(function (invoices) {
		$scope.invoices = invoices;
	})
	.error(function (err) {
		console.error(err);
	});
});