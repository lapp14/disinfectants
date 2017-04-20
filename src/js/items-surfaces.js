(function() {
	
	angular
		.module('disinfectant')
		.value('itemsSurfaces', [
		{
			name: 'Personal Service Settings',
			page: 'partials/items-surfaces/pss.html',
			nodes: 
			[
				{
					name: 'Tattoo',
					page: 'partials/items-surfaces/tattoo/index.html',
					nodes: []
				},

				{
					name: 'Body Modifications',
					page: 'partials/items-surfaces/body-modifications/index.html',
					nodes: 
					[
						{
							name: 'Branding',
							page: 'partials/items-surfaces/body-modifications/branding.html',
							nodes: []
						},

						{
							name: 'Body Piercing',
							page: 'partials/items-surfaces/body-modifications/body-piercing.html',
							nodes: []
						}, 

						{
							name: 'Dermal Punching',
							page: 'partials/items-surfaces/body-modifications/dermal-punching.html',
							nodes: []
						},

						{
							name: 'Ear Shaping',
							page: 'partials/items-surfaces/body-modifications/ear-shaping.html',
							nodes: []
						}
					]//Body Modification
				},

				{
					name: 'Aesthetics and Spa',
					page: 'partials/items-surfaces/aesthetics-spa/index.html',
					nodes: 
					[
						{
							name: 'Electrolysis',
							page: 'partials/items-surfaces/aesthetics-spa/electrolysis.html',
							nodes: []
						},

						{
							name: 'Intense Pulsed Light',
							page: 'partials/items-surfaces/aesthetics-spa/intense-pulsed-light.html',
							nodes: []
						}
					]//Aesthetics and Spa
				}
			]//PSS
		}
	]);	
	
})();