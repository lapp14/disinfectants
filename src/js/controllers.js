(function() {

	angular
		.module('disinfectant')
		.controller('disinfectantCtrl', disinfectantCtrl);


	function disinfectantCtrl() {

		var vm = this;
		
		vm.unicode = {
			check: 	'\u2713',
			x: 		'\u2717', 
		}

		vm.summaries = {
			index: 0,
			list: [
				{ level: 'None', text: '' },
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered an intermediate level disinfectant, it must ALSO be effective against Fungi, Viruses and Mycobacterium tuberculosis.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered an intermediate level disinfectant, it must ALSO be effective against Fungi and Viruses.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered an intermediate level disinfectant, it must ALSO be effective against  Viruses and Mycobacterium tuberculosis.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered an intermediate level disinfectant, it must ALSO be effective against Viruses.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered an intermediate level disinfectant, it must ALSO be effective against Fungi.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered an intermediate level disinfectant, it must ALSO be effective against Mycobacterium tuberculosis.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered an intermediate level disinfectant, it must ALSO be effective against Mycobacterium tuberculosis.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant with BROAD-SPECTRUM VIRUCIDAL capabilities, to be considered an intermediate level disinfectant, it must ALSO be effective against Fungi.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered a high level disinfectant, it must ALSO be effective against Fungi.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a LOW LEVEL disinfectant, to be considered a sterilant, it must ALSO be effective against Fungi.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be an INTERMEDIATE LEVEL disinfectant, to be considered a high level disinfectant, it must ALSO be effective against some bacterial spores.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be an INTERMEDIATE LEVEL disinfectant with BROAD-SPECTRUM VIRUCIDAL capabilities. To be considered a high level disinfectant, it must ALSO be effective against some bacterial spores.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a HIGH LEVEL disinfectant, to be considered a sterilant, it must ALSO be effective against ALL bacterial spores.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a HIGH LEVEL disinfectant with BROAD-SPECTRUM VIRUCIDAL capabilities. To be considered a sterilant, it must ALSO be effective against ALL bacterial spores.'},
				{ level: 'Low', text: 'Your disinfectant is considered to be a STERILANT and considered to be capable of destorying or irreversibly inactivating all forms of microbial life.'}

			]
		}

		vm.disinfectant = {};
		vm.questions = {};

		vm.change = questionChange;

		vm.textColor = textColor;

		vm.pages = {
			currentPage: 0,
			lastPage: 7
		};

		vm.buttons = {
			prevText: 'Instructions',
			nextText: 'Next',//'Question 1',
			updateText: updateButtonText
		};

		vm.events = {
			next: nextButtonPressed,
			prev: prevButtonPressed,
			reset: reset
		};

		reset();

		//event fired when questions are changed
		function questionChange(question) {
			var q = vm.questions;
			var d = vm.disinfectant;

			switch(question) {
				case 1:
					d.bactericide.kills = (q.q1.salmonellaEnterica || q.q1.staphylococcusAureus || q.q1.pseudomonasAeruginosa);								
					break;

				case 2:
					d.fungicide.kills = q.q2.trichophytonMentagrophytes;
					break;

				case 3:
					d.broadSpectrumVirucide.kills = d.virucide.kills = (q.q3.broadSpectrumVirucide == 'yes');
					
					if(q.q3.broadSpectrumVirucide == 'yes') {
						q.q4.virus = false;
					}

					break;

				case 4:
					d.virucide.kills = q.q4.virus;
					break;

				case 5:
					d.tuberculocide.kills = (q.q5.mycobacteriumBovis || q.q5.mycobacteriumTerrae);
					break;

				case 6:
					d.sporicideSome.kills = (q.q6.bactillusSubtilisSpores || q.q6.clostridiumSporogenesSpores || q.q6.other);
					d.sporicide.kills = (q.q6.bactillusSubtilisSpores && q.q6.clostridiumSporogenesSpores);
					break;

				default:
			}

			summarize();
		};	

		//button event for Next
		function nextButtonPressed() {
			if(vm.pages.currentPage < vm.pages.lastPage) {
				vm.pages.currentPage++;
			}

			//check for Q3 yes, skip Q4 if yes
			if(vm.pages.currentPage === 4 && vm.questions.q3.broadSpectrumVirucide == 'yes') {
				vm.pages.currentPage++;
			}

			vm.buttons.updateText();
		};

		//button event for Prev
		function prevButtonPressed() {
			if(vm.pages.currentPage > 0) {
				vm.pages.currentPage--;
			}

			//check for Q3 yes, skip Q4 if yes
			if(vm.pages.currentPage === 4 && vm.questions.q3.broadSpectrumVirucide == 'yes') {
				vm.pages.currentPage--;
			}

			vm.buttons.updateText();
		}

		//reset questionnaire and start over
		function reset(startingPage) {
			vm.disinfectant = {	
				bactericide: 			{ text: 'Bactericide', kills: false },
				fungicide:  			{ text: 'Fungicide', kills: false },
				virucide:  				{ text: 'Virucide', kills: false },
				broadSpectrumVirucide: 	{ text: 'Broad-spectrum Virucide', kills: false },
				tuberculocide: 			{ text: 'Tuberculocide', kills: false },
				sporicideSome: 			{ text: 'Sporicide (some)', kills: false },
				sporicide: 				{ text: 'Sporicide', kills: false }
			};

			vm.questions = {
				q1: {
					salmonellaEnterica: 	false,
					staphylococcusAureus: 	false,
					pseudomonasAeruginosa: 	false
				},

				q2: {
					trichophytonMentagrophytes: false
				},

				q3: {
					broadSpectrumVirucide: 'no'
				},

				q4: {
					virus: false
				},

				q5: {
					mycobacteriumBovis: 	false,
					mycobacteriumTerrae: 	false
				},

				q6: {
					bactillusSubtilisSpores: 		false,
					clostridiumSporogenesSpores: 	false,
					other: 		 					false
				}
			}

			updateButtonText();
			vm.summaries.index = 0;
			
			if(typeof startingPage != 'undefined') {
				vm.pages.currentPage = startingPage;
			} else {
				vm.pages.currentPage = 0;
			}
		}

		//returns class name for coloring kill claim red or green
		function textColor(disinfectantKills) {
			return disinfectantKills ? 'text-green' : 'text-red';
		}

		//changes button text for Next/Prev depending on which question you are on
		function updateButtonText() {
			this.prevText = 'Prev'; //'Question ' + (vm.pages.currentPage - 1);
			this.nextText = 'Next'; //'Question ' + (vm.pages.currentPage + 1);

			if(vm.pages.currentPage - 1 <= 0) {
				this.prevText = 'Instructions';
			}

			if(vm.pages.currentPage === vm.pages.lastPage - 1) {
				this.nextText = 'Results'
			} 
		}

		//determines which Summary text to display based on the level of disinfectant
		function summarize() {		
			var d = vm.disinfectant;

			if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				!d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				!d.virucide.kills &&
				!d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 1;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				!d.virucide.kills &&
				!d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 2;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				!d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				!d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 3;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				!d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 4;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				!d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 5;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				!d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 6;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				!d.tuberculocide.kills &&
				d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 7;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				!d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 8;
			} else if(
				!d.sporicide.kills &&
				d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				!d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 9;
			} else if(
				d.sporicide.kills &&
				d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				!d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 10;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 11;
			} else if(
				!d.sporicide.kills &&
				!d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 12;
			} else if(
				!d.sporicide.kills &&
				d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				!d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 13;
			} else if(
				!d.sporicide.kills &&
				d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 14;
			} else if(
				d.sporicide.kills &&
				d.sporicideSome.kills &&
				d.tuberculocide.kills &&
				d.broadSpectrumVirucide.kills &&
				d.virucide.kills &&
				d.fungicide.kills &&
				d.bactericide.kills) {
					vm.summaries.index = 15;
			} else {
				vm.summaries.index = 0;
			}

		}
	}

})();