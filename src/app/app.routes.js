(function() {
	'use strict'; 
	
	angular
		.module('disinfectants')
		.config(routing)
		.run(run);
		
	function routing($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			pageTitle	: 'Disinfectant Encyclopedia',
			pageDesc	: '',	
			templateUrl : './src/app/components/home/home.html',
			controller  : null
		})

		.when('/disinfectant-level', {
			pageTitle	: 'Determine Disinfectant Level - Disinfectant Encyclopedia',
			pageDesc	: '',
			templateUrl : './src/app/components/disinfectant-level/disinfectant-level.html',

			controller  : 'disinfectantCtrl',
			controllerAs: 'vm'
		})

		.when('/items-surfaces', {
			pageTitle	: 'Disinfectants for Items and Surfaces - Disinfectant Encyclopedia',
			pageDesc	: '',
			templateUrl : './src/app/components/items-surfaces/items-surfaces.html',

			controller  : 'itemsSurfacesCtrl',
			controllerAs: 'IS'
		})

		.when('/definitions', {
			pageTitle	: 'Definitions - Disinfectant Encyclopedia',
			pageDesc	: '',
			templateUrl : './src/app/components/definitions/definitions.html',

			controller  : 'definitionsCtrl',
			controllerAs: 'vm'
		})
		
		.when('/faq', {
			pageTitle	: 'FAQs - Disinfectant Encyclopedia',
			pageDesc	: '',
			templateUrl : './src/app/components/faq/faq.html'
		})

		.when('/links', {
			pageTitle	: 'Links - Disinfectant Encyclopedia',
			pageDesc	: '',
			templateUrl : './src/app/components/links/links.html'
		})
		
		.when('/chlorine', {
			pageTitle	: 'Chlorine Dilution - Disinfectant Encyclopedia',
			pageDesc	: '',
			templateUrl : './src/app/components/chlorine/chlorine.html'
		})

		.otherwise({
			redirectTo: './'
		});
	}

	function run($rootScope, $location, $anchorScroll, $routeParams) {
		$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
			$rootScope.pageTitle = current.$$route.pageTitle;
			$rootScope.pageDesc  = current.$$route.pageDesc;
			$location.hash($routeParams.scrollTo);
			$anchorScroll.yOffset = document.getElementById('nav-container').clientHeight + 10;
			$anchorScroll();
		});
	};
})();