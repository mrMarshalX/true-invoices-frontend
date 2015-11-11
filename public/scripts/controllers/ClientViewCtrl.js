angular.module('invoiceFrontEndApp')
.controller('ClientViewCtrl', function ($rootScope, $scope, http, formResetService) {
	var url = $rootScope.url;

	$scope.newClient = {
		name: '',
		address: '',
		taxIdentifier: '',
		role: 'Purchaser'
	};
	$scope.currentClient = null;

	$scope.showClientInfoModal = function (client) {		
		$scope.currentClient = client;
		$('#client-info-modal').openModal({
			complete: function () {
				$scope.currentClient = null;
			}	
		});
	};

	$scope.showClientAddModal = function () {
		$('#client-add-modal').openModal();
	};

	$scope.saveClient = function () {
		$scope.clients.push($scope.newClient);
		$scope.newClient = {
			name: '',
			address: '',
			taxIdentifier: '',
			role: 'Purchaser'
		};
		formResetService.resetForm();
		$('#client-add-modal').closeModal();
	};

	http.get(url)
	.success(function (clients) {
		$scope.clients = clients;
	})
	.error(function (err) {
		console.error(err);
	});
});