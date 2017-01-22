(function(){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('itemsToBuyCtrl', itemsToBuyCtrl)
	.controller('itemsBoughtCtrl', itemsBoughtCtrl)
	.service('ShoppingListService', ShoppingListService);

	itemsToBuyCtrl.$inject = ['ShoppingListService'];
	function itemsToBuyCtrl(ShoppingListService){
		var toBuy = this;
		
		toBuy.items = ShoppingListService.getItemsToBuy();

		toBuy.markAsBought = function(index){
			ShoppingListService.markAsBought(index);
		}
	}

	itemsBoughtCtrl.$inject = ['ShoppingListService'];
	function itemsBoughtCtrl(ShoppingListService){
		var bought = this;
		
		bought.items = ShoppingListService.getBoughtItems();
	}

	function ShoppingListService() {
		var service = this;
		var toBuyItems = [
				{ name: "Cookies", quantity: 10 },
				{ name: "Chips", quantity: 5 },
				{ name: "Chocolates", quantity: 5 },
				{ name: "Cake", quantity: 2 },
				{ name: "Milk", quantity: 10 }
			];

		var boughtItems = [];

		service.getItemsToBuy = function () {
			return toBuyItems;
		};

		service.getBoughtItems = function () {
			return boughtItems;
		};

		service.markAsBought = function(index) {
			var item = {
				name: toBuyItems[index].name,
				quantity: toBuyItems[index].quantity
			}
			
			boughtItems.push(item);
			toBuyItems.splice(index, 1);
		}
	}

	// function ShoppingListService(){
	// 	return function() {
	// 		return new ShoppingListService();
	// 	}
	// }
}());