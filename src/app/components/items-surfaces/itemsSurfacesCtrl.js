(function() {

	angular
		.module('disinfectants')
		.controller("itemsSurfacesCtrl", itemsSurfacesCtrl);

	itemsSurfacesCtrl.$inject = ['itemsSurfaces'];

	function itemsSurfacesCtrl(itemsSurfaces) {
		var vm = this;	    
	    vm.tree = itemsSurfaces;
	    vm.page = 'partials/items-surfaces/index.html';

	    vm.setContent = setContent;

	    function setContent(page) {
	    	vm.page = page;
	    }
	}
})();