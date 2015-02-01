angular.module('PickBeauty').factory('Search', function($rootScope) {

	var _searchItems = [];

	return {
		addItems: function(object, type, fields, linkCB) {
			var searchItems = [];
			_.forEach(object, function(row) {
				_.forEach(fields, function(field) {
					if (row[field]) {
						var item = {
							type: type,
							name: row[field],
							experimented: row.experimented
						};
						if (linkCB) item.link = linkCB(item);
						searchItems.push(item)
					}
				});
			});
			_searchItems = _searchItems.concat(searchItems);
		},

		search: function(term) {
			if (term) {
				term = term.toLowerCase();
				var results = _.filter(_searchItems, function(item) {
					var exists = (item.name.toLowerCase().indexOf(term) > -1);
					return exists;
				});
				return results;
			}
		}

	};

});