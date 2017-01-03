(function(){
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.lunchMenu = $scope.message = $scope.cssClass ='';

		$scope.isTooMuch = function(){
			var menuItemsArray = $scope.lunchMenu.split(','),

				// To NOT considering empty item
				validMenuItemsArray = menuItemsArray.filter(function(menuItem){
					return menuItem.trim() !== '';
				});
				
			if(validMenuItemsArray.length > 0) {
				$scope.message = validMenuItemsArray.length <= 3 ? 'Enjoy!' : 'Too much!'
				$scope.cssClass = 'has-success';
			} else {
				$scope.message = 'Please enter data first';
				$scope.cssClass = 'has-error';
			}
		}
	}
}());