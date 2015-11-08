angular.module('invoiceFrontEndApp')
.controller('InvoicesViewCtrl', function ($rootScope, $routeParams, $scope, $http, api) {
	var url = $rootScope.url;

	$scope.showInvoice = function (invoice) {
		console.log(invoice);
	};

	$http.get(api.URL + ':' + api.PORT + url)
	.success(function (invoices) {
		$scope.invoices = invoices;
	})
	.error(function (err) {
		console.error(err);
	});
});