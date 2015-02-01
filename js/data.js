angular.module('PickBeauty').run(function($http, $rootScope, Search) {

	var domain = 'http://www.animal-testing-api.com/v1';

	$http.get(domain + '/product').success(function(products) {
		$rootScope.products = products;
		//Search.addItems(products, "product", ['name_he', 'name_en',]);
	});

	$http.get(domain + '/company').success(function(companies) {
		$rootScope.companies = companies;
		//Search.addItems(companies, "company", ['name']);
	});

	$http.get(domain + '/category').success(function(categories) {
		$rootScope.categories = categories;
		//Search.addItems(categories, "category", ['name'], function(x) { return "#/tab/products/" + x.name });
	});

});