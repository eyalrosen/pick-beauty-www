angular.module('PickBeauty').config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		// setup an abstract state for the tabs directive
		.state('tab', {
			url: "/tab",
			abstract: true,
			templateUrl: "templates/tabs.html"
		})

		// Each tab has its own nav history stack:

		.state('tab.info', {
			url: '/info',
			views: {
				'tab-info': {
					templateUrl: 'templates/tab-info.html',
					controller: 'InfoCtrl'
				}
			}
		})

		.state('tab.search', {
			url: '/search',
			views: {
				'tab-search': {
					templateUrl: 'templates/tab-search.html',
					controller: 'SearchCtrl'
				}
			}
		})

		.state('tab.companies', {
			url: '/companies',
			views: {
				'tab-companies': {
					templateUrl: 'templates/tab-companies.html',
					controller: 'CompaniesCtrl'
				}
			}
		})

		.state('tab.company', {
			url: '/company/:company',
			views: {
				'tab-companies': {
					templateUrl: 'templates/tab-company.html',
					controller: 'CompanyCtrl'
				}
			}
		})

		.state('tab.categories', {
			url: '/categories',
			views: {
				'tab-categories': {
					templateUrl: 'templates/tab-categories.html',
					controller: 'CategoriesCtrl'
				}
			}
		})
		.state('tab.products', {
			url: '/products/:category',
			views: {
				'tab-categories': {
					templateUrl: 'templates/products.html',
					controller: 'ProductsCtrl'
				}
			}
		})

		.state('tab.about', {
			url: '/about',
			views: {
				'tab-about': {
					templateUrl: 'templates/tab-about.html',
					controller: 'AboutCtrl'
				}
			}
		});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/companies');

});