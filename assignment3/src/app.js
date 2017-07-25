(function() {
    'use strict';

    angular.module('MenuSearchApp', [])
        .controller('MenuSearchCtrl', MenuSearchCtrl)
        .service('MenuService', MenuService)
        .constant('ApiBasePath', 'http://davids-restaurant.herokuapp.com')
        .directive('foundItems', MenuItemsDirective);

    MenuSearchCtrl.$inject = ['MenuService'];

    function MenuSearchCtrl(MenuService) {
        var vm = this;
        vm.found = [];
        vm.searchTerm = 'chicken';
        vm.narrowSearch = function() {
            if (vm.searchTerm === '' || typeof vm.searchTerm === 'undefined') {
                return;
            }
            var promise = MenuService.getMenuItems();
            promise.then(function(response) {
                var menuItems = response.data.menu_items;
                angular.forEach(menuItems, function(menuItem) {
                    if (menuItem.description.indexOf(vm.searchTerm) > -1) {
                        vm.found.push(menuItem);
                    }
                });
            }).catch(function(error) {
                console.log(error);
            });
        }

        vm.removeItem = function(index) {
            vm.found.splice(index, 1);
        }
    }

    MenuService.$inject = ['$http', 'ApiBasePath'];

    function MenuService($http, ApiBasePath) {
        var service = this;
        service.getMenuItems = function() {
            return $http({
                url: (ApiBasePath + "/menu_items.json")
            });
        };
    }

    function MenuItemsDirective() {
        return {
            templateUrl: './templates/found-items-tmpl.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        }
    }

}());