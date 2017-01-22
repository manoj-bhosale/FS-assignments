(function(){
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController)
	.filter('makeUpperCase', makeUpperCaseFilter);

	LunchCheckController.$inject = ['$scope', 'makeUpperCaseFilter'];

	function LunchCheckController($scope, makeUpperCaseFilter){
		$scope.lunchMenu = '';

		//$scope.lunchMenu = makeUpperCaseFilter($scope.lunchMenu);
	}

	function makeUpperCaseFilter() {
		return function(msg){
			return msg.toUpperCase();
		}
	}
}());