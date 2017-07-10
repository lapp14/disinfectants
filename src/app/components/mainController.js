(function() {
	'use strict';

	angular
		.module('disinfectants')
		.controller('mainController', mainController);

	function mainController($scope, $location, $anchorScroll) {
		
		var vm = this;

		vm.menuClass = menuClass;

		function menuClass(page) {
			var current = $location.path().substring(1);			
			return page === current ? 'active' : '';
		}
	} 
})();