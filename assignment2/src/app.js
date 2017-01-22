(function(){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('itemsToBuyCtrl', itemsToBuyCtrl)
	.controller('itemsBoughtCtrl', itemsBoughtCtrl)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	itemsToBuyCtrl.$inject = ['ShoppingListCheckOffService'];
	function itemsToBuyCtrl(ShoppingListCheckOffService){
		var toBuy = this;
		
		toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

		toBuy.markAsBought = function(index){
			ShoppingListCheckOffService.markAsBought(index);
		}
	}

	itemsBoughtCtrl.$inject = ['ShoppingListCheckOffService'];
	function itemsBoughtCtrl(ShoppingListCheckOffService){
		var bought = this;
		
		bought.items = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService() {
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

	// function ShoppingListCheckOffService(){
	// 	return function() {
	// 		return new ShoppingListCheckOffService();
	// 	}
	// }
}());