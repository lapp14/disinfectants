(function() {

	angular
		.module('disinfectants')
		.controller("itemsSurfacesCtrl", itemsSurfacesCtrl);

	itemsSurfacesCtrl.$inject = ['itemsSurfaces'];

	function itemsSurfacesCtrl(itemsSurfaces) {

		var baseUrl = './src/'
		var vm = this;	    
	    vm.tree = itemsSurfaces;

	    vm.page = baseUrl + 'partials/items-surfaces/index.html';

	    vm.setContent = setContent;

	    function setContent(page) {
	    	vm.page = baseUrl + page;
	    }
	}
})();