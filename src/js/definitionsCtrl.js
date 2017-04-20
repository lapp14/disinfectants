(function(){
	angular
		.module('disinfectant')
		.controller('definitionsCtrl', definitionsCtrl);

	definitionsCtrl.$inject = ['definitions'];

	function definitionsCtrl(definitions) {
		
		var vm = this;

		vm.definitions = definitions;
		vm.search = '';
		vm.searchType = 'terms';
		vm.showDefinition = showDefinition;

		function showDefinition(def) {
			//search for words in the description
			if(vm.searchType === 'description') {
				return def.description.toLowerCase().indexOf(vm.search.toLowerCase()) != -1;
			} 

			//otherwise search the term
			return def.term.toLowerCase().indexOf(vm.search.toLowerCase()) != -1;
		}
	}

})();