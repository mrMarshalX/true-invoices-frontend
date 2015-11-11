angular.module('invoiceFrontEndApp', ['ngRoute'])
.constant('defaultRoute', '')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when('/clients', {
		templateUrl: 'views/clientView.html',
		controller: 'ClientViewCtrl',
		url: '/api/clients'
	})
	.when('/invoices', {
		templateUrl: 'views/invoicesView.html',
		controller: 'InvoicesViewCtrl',
		url: '/api/invoices'
	})
	.when('/invoices/generate', {
		templateUrl: 'views/invoicesGenarateView.html',
		controller: 'InvoicesGenerateViewCtrl',
		url: '/api/invoices'
	})
	.otherwise({
		redirectTo: '/clients'
	});

	$locationProvider.html5Mode(true);
})
.run(function ($rootScope, $window, http, defaultRoute) {
	http.config($window.location.origin);

	$rootScope.$on('$routeChangeStart', function (event, next, current) {		
		$rootScope.url = (next.$$route && next.$$route.url) || defaultRoute;		
	});
});