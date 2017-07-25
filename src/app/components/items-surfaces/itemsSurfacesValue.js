(function() {
	/*angular
		.module('disinfectants')
		.value('itemsSurfacesContent', content);
*/	
	angular
		.module('disinfectants')
		.value('itemsSurfaces', 
		
	[
		{
			name: 'Personal Service Settings',
			page: null,
			nodes: 
			[
				{
					name: 'Tattoo',
					page: 'partials/items-surfaces/tattoo/index.html',
					nodes: []
				},

				{
					name: 'Body Modifications',
					page: null,
					nodes: 
					[
						/*{
							name: 'Branding',
							page: 'partials/items-surfaces/body-modifications/branding.html',
							nodes: []
						},*/

						{
							name: 'Body Piercing',
							page: 'partials/items-surfaces/body-modifications/body-piercing.html',
							nodes: []
						}/*, 

						{
							name: 'Dermal Punching',
							page: 'partials/items-surfaces/body-modifications/dermal-punching.html',
							nodes: []
						},

						{
							name: 'Ear Shaping',
							page: 'partials/items-surfaces/body-modifications/ear-shaping.html',
							nodes: []
						}*/
					]//Body Modification
				},

				{
					name: 'Aesthetics and Spa',
					page: null,
					nodes: 
					[
						{
							name: 'Electrolysis',
							page: 'partials/items-surfaces/aesthetics-spa/electrolysis.html',
							nodes: []
						},

						{
							name: 'Hair Dressing/Barbering',
							page: 'partials/items-surfaces/aesthetics-spa/hair-barbering.html',
							nodes: []
						},

						{
							name: 'Nail Salons',
							page: 'partials/items-surfaces/aesthetics-spa/nail-salons.html',
							nodes: []
						},

						{
							name: 'Micropigmentation',
							page: 'partials/items-surfaces/aesthetics-spa/micropigmentation.html',
							nodes: []
						}					
						
						
						/*{
							name: 'Intense Pulsed Light',
							page: 'partials/items-surfaces/aesthetics-spa/intense-pulsed-light.html',
							nodes: []
						}*/
					]//Aesthetics and Spa
				}
			]//PSS
		}
	]);

	/*var content = {
		'Tattoo': {
			'Levels': {
				'Low': [], 
				'Medium': [],
				'High': [
					'Needles after attachment (ie soldering) to needle bar',
					'Reusable ink caps used between clients',
					'Tattoo grips, tubes and tips'
				]
			},

			'Single Use': [],
			'Sterile': []			
		},

		'Body Modifications': {
			'Levels': {
				'Low': [], 
				'Medium': [],
				'High': []
			},

			'Single Use': [],
			'Sterile': []			
		},

		'':{
			'Levels': {
				'Low': [], 
				'Medium': [],
				'High': []
			},

			'Single Use': [],
			'Sterile': []			
		},

		'': {
			'Levels': {
				'Low': [], 
				'Medium': [],
				'High': []
			},

			'Single Use': [],
			'Sterile': []			
		}
	}*/

})();