angular.module('invoiceFrontEndApp', ['ngRoute'])
.constant('api', {
	URL: 'http://localhost',
	PORT: 3002
})
.constant('defaultRoute', '/api/clients')
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
	.otherwise({
		redirectTo: '/clients'
	});

	$locationProvider.html5Mode(true);
})
.run(function ($rootScope, defaultRoute) {
	$rootScope.$on('$routeChangeStart', function (event, next, current) {		
		$rootScope.url = (next.$$route && next.$$route.url) || defaultRoute;		
	});
});