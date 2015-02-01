angular.module('PickBeauty')

.controller('SearchCtrl', function($scope, Search) {
	$scope.search = {};
	$scope.$watch('search.query', function(term) {
		$scope.searchResults = Search.search(term);
	})
})

.controller('CompaniesCtrl', function($scope) { })

.controller('CompanyCtrl', function($scope, $rootScope, $stateParams) {
	$scope.company = $rootScope.companies[$stateParams.company];
	$scope.companyProducts = _.filter($rootScope.products, function(x) {
		return (x.company_en == $scope.company.name || x.company_he == $scope.company.name);
	});
})

.controller('CategoriesCtrl', function($scope) {})

.controller('ProductsCtrl', function($scope, $stateParams) {
	$scope.categoryName = $stateParams.category;
})

.controller('InfoCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {});

