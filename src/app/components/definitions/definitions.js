(function() {
	angular
		.module('disinfectants')
		.value('definitions', [
			{ term: "Antimicrobial agent", description: "Defined in section C.01A.001 of the Food and Drug Regulations as:<br/>"
				+"a drug that is capable of destroying pathogenic micro-organisms and that is labelled as being for use in the disinfection of environmental surfaces or medical devices, as defined by the Medical Devices Regulations, that"
				+'<ul>'
				+	"<li>(a) are not invasive devices as defined in those Regulations; and</li>"
				+	"<li>(b) that are intended to come into contact with intact skin only.</li>"
				+"</ul>"},
			{ term: "Bactericide", description:  "A substance, or mixture of substances, capable of destroying vegetative bacteria, but not necessarily bacterial spores or mycobacteria, present on environmental surfaces and inanimate objects. Disinfectants with efficacy at a minimum against vegetative bacteria can be registered as limited disinfectants, general disinfectants or hospital disinfectants"},
			{ term: "Bacteriostat", description: "A substance, or mixture of substances, that inhibits the growth of vegetative bacteria on environmental surfaces and inanimate objects."},
			{ term: "Biofilm", description: "A dynamic accumulated mass of bacteria and extracellular material that is tightly adhered to a surface and cannot be easily removed, and which may protect bacteria within from being destroyed by disinfectants."},
			{ term: "Broad-spectrum virucide", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating at a minimum one representative hard to kill non-enveloped virus, and which is expected to inactivate other enveloped and non-enveloped viruses present on environmental surfaces and inanimate objects."},
			{ term: "Cleaner", description: "A substance, or mixture of substances, that physically removes foreign material (e.g., soil, inorganic and organic material) from environmental surfaces and inanimate objects due to the detergent or enzymatic properties of the formulation."},
			{ term: "Contact time", description: "The length of time a disinfectant drug must be in contact with a target surface or device to achieve the desired efficacy result."},
			{ term: "Critical medical devices", description: "Devices that are introduced directly into the human body through the penetration of mucous membranes or skin into normally sterile areas of the body, or through direct contact with the bloodstream (e.g., surgical instruments, cardiac and urinary catheters, implantable devices, hemodialysis tubing, blood oxygenators), and for which reprocessing using sterilization processes is required. These items present a high risk for the transmission of infection from pathogenic (disease-causing) and potentially pathogenic (opportunistic) microorganisms if contaminated, including bacterial spores, and therefore are expected to be sterile."},
			{ term: "Disinfectant", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating pathogenic (disease-causing) and potentially pathogenic (opportunistic) microorganisms, but not necessarily bacterial spores, present on environmental surfaces and inanimate objects due to the antimicrobial action of the active ingredient(s)." },
			{ term: "Disinfectant-sanitizer", description: "A chemical product represented for use as a sanitizer on hard non-porous environmental surfaces and inanimate objects which is also represented for use as a hard surface disinfectant." },
			{ term: "Drug", description: "Defined in section 2 of the Food and Drugs Act as:<br/>any substance or mixture of substances manufactured, sold or represented for use in<ul><li>(a) the diagnosis, treatment, mitigation or prevention of a disease, disorder, or abnormal physical state, or its symptoms, in human beings or animals;</li><li>(b) restoring, correcting or modifying organic functions in human beings or animals; or</li><li>(c) disinfection in premises where food is manufactured, prepared or kept.</li></ul>" },
			{ term: "Drug Identification Number (DIN)", description: "A computer-generated eight-digit number assigned by Health Canada to a drug product which has been granted market authorization in accordance with the Food and Drugs Act and Regulations. The DIN uniquely identifies the product and must appear on the marketed product label for all drugs authorized for sale in Canada." },
			{ term: "Establishment licence", description: " A licence issued to a person in Canada which indicates that a building has been inspected and assessed as compliant to conduct any of these licensable activities: fabricate, package/label, test, import, distribute or wholesale a drug, as set out in Part C, Division 1A of the Food and Drug Regulations." },
			{ term: "Food contact surface sanitizer", description: "A substance, or mixture of substances, that reduces the bacterial population on environmental surfaces and inanimate objects which may come into direct contact with food or beverages (e.g., eating and drinking utensils, cutting boards, countertops, food processing equipment) by significant numbers (e.g., a minimum 3 log<sub>10</sub> reduction), but which does not destroy all bacteria." },
			{ term: "Fungicide", description: "A substance, or mixture of substances, capable of destroying fungi (including yeast) and fungal spores, pathogenic to humans or other animals present on environmental surfaces and inanimate objects." },
			{ term: "Fungistat", description: "A substance, or mixture of substances, that inhibits the growth of fungi on environmental surfaces and inanimate objects (e.g., prevents/controls the growth of mould and mildew). Also referred to as mildewstat." },
			{ term: "General disinfectant", description: "A substance, or mixture of substances, capable of destroying both Gram-positive bacteria and Gram-negative bacteria present on environmental surfaces and inanimate objects. Also referred to as a broad-spectrum disinfectant, however applicants are encouraged to use the preferred term general disinfectant on their labelling." },
			{ term: "Germicide", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating pathogenic (disease-causing) and potentially pathogenic (opportunistic) microorganisms, but not necessarily bacterial spores, present on environmental surfaces and inanimate objects. Applicants are encouraged to use the preferred term disinfectant on their labelling." },
			{ term: "Germ", description: "A term commonly used in public health communications in reference to pathogenic (disease-causing) microorganisms, such as bacteria, fungi and viruses.  Disinfectants with efficacy at a minimum as a general disinfectant, or a hospital disinfectant can be registered with \"Kills germs\" claims on their label." },
			{ term: "Good Laboratory Practice (GLP)", description: "The organizational process and conditions under which laboratory studies are planned, performed, monitored, recorded, archived and reported.  They are intended to promote the quality and validity of test data and improve the international acceptance of data generated in adherence to its principles." },
			{ term: "Good Manufacturing Practices (GMP)", description: "The part of quality assurance that ensures that drugs are consistently produced and controlled in such a way to meet the quality standards appropriate for their intended use, as required by the marketing authorization, as set out in Part C, Division 2 of the Food and Drug Regulations" },
			{ term: "Hard surface disinfectant", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating, at a minimum, vegetative bacteria present on non-critical medical devices, environmental surfaces and inanimate objects."},
			{ term: "High-level disinfectant", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating all microbial pathogens, but not necessarily large numbers of bacterial spores. A high-level disinfectant may be recommended for the disinfection of non-critical medical devices, environmental surface and inanimate objects, or for the reprocessing of reusable semi-critical medical devices. When represented for the reprocessing of reusable semi-critical medical devices, a high-level disinfectant is required to demonstrate the same efficacy as a sterilant, but within a shorter contact time." },
			{ term: "Hospital disinfectant", description: "A substance, or mixture of substances, capable of destroying both Gram- positive bacteria and Gram-negative bacteria present on non-critical medical devices, environmental surfaces and inanimate objects, and that is represented for use in hospitals, medical clinics, dental offices or any other healthcare-related facility." },
			{ term: "Incidental additive", description: "Chemical products used in food processing facilities which are often not intended to come into direct contact with food but which may potentially become residues in food." },
			{ term: "Intermediate-level disinfectant", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating all microbial pathogens, including mycobacteria but not bacterial spores. An intermediate-level disinfectant may be recommended for the disinfection of non-critical medical devices, environmental surface and inanimate objects. Additionally, an intermediate-level disinfectant may be recommended for the reprocessing of some reusable semi-critical medical devices, depending on the type of item and its intended use (e.g., hydrotherapy tanks and bed side rails used by patients whose skin is not intact, hair clippers), as recommended in infection prevention and control protocols." },
			{ term: "Limited disinfectant", description: "A substance, or mixture of substances, capable of destroying Gram- positive bacteria or Gram-negative bacteria, but not both." },
			{ term: "Low-level disinfectant", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating, at a minimum, vegetative bacteria. A low-level disinfectant may be recommended for the disinfection of non-critical medical devices, environmental surfaces and inanimate objects." },
			{ term: "Market authorization", description: "A legal document issued by Health Canada, authorizing the sale of a drug based on the requirements of the Food and Drugs Act and Regulations. The marketing authorization may be in the form of a Notice of Compliance or a Drug Identification Number.  Also referred to as pre-market authorization." },
			{ term: "Microbicide", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating pathogenic (disease-causing) and potentially pathogenic (opportunistic) microorganisms, but not necessarily bacterial spores, present on environmental surfaces and inanimate objects due to the antimicrobial action of the active ingredient(s). Applicants are encouraged to use the preferred term disinfectant on their labelling." },
			{ term: "Mycobactericide", description: " A substance, or mixture of substances, capable of destroying or irreversibly inactivating mycobacteria present on environmental surfaces and inanimate objects. Also referred to as a tuberculocide, however applicants are encouraged to use the preferred term mycobactericide on their labelling." },
			{ term: "New drug", description: "Regulated under Part C, Division 8 of the Food and Drug Regulations as:<br/><ul><li>a drug that contains or consists of a substance, whether as an active or inactive ingredient, carrier, coating, excipient, menstruum or other component, that has not been sold as a drug in Canada for sufficient time and in sufficient quantity to establish in Canada the safety and effectiveness of that substance for use as a drug;</li><li>a drug that is a combination of two or more drugs, with or without other ingredients, and that has not been sold in that combination or in the proportion in which those drugs are combined in that drug, for sufficient time and in sufficient quantity to establish in Canada the safety and effectiveness of that combination and proportion for use as a drug; or</li><li>a drug, with respect to which the manufacturer prescribes, recommends, proposes or claims a use as a drug, or a condition of use as a drug, including dosage, route of administration, or duration of action and that has not been sold for that use or condition of use in Canada, for sufficient time and in sufficient quantity to establish in Canada the safety and effectiveness of that use or condition of use of that drug.</li></ul>" },
			{ term: "New Drug Submission (NDS)", description: "Refers to the submission process applicable to drugs defined under Part C, Division 8 of the Food and Drug Regulations as a new drug. The pre-market assessment process includes the review of supporting efficacy, safety and quality data, and leads to the issuance of both a DIN and a NOC." },
			{ term: "Notice of Compliance (NOC)", description: "A notification, issued pursuant to Division 8 of the Food and Drug Regulations, which is issued to the sponsor of a new drug submission following the satisfactory review of the supporting efficacy, safety and quality data." },
			{ term: "Non-Medicinal Ingredient (NMI)", description: "A substance, other than the active ingredient, that is added to a drug formulation during the manufacturing process and that is present in the finished drug product (e.g., solvents, stabilizer, surfactants), also referred to as inactive ingredient or inert ingredient." },
			{ term: "Non-critical medical devices", description: "Devices that contact intact skin but not mucous membranes during routine use (e.g., stethoscopes, blood pressure cuffs, wheelchairs), and for which reprocessing using low-level or intermediate-level disinfectants are commonly recommended." },
			{ term: "Non-food contact surface sanitizer", description: " A substance, or mixture of substances, that reduces the bacterial population on environmental surfaces and inanimate objects which do not come into direct contact with food or beverages (e.g., floors, walls, furniture) by significant numbers (e.g., minimum 3 log<sub>10</sub> reduction), but which does not destroy all bacteria." },
			{ term: "One-step cleaner/disinfectant", description: "a substance, or mixture of substances, that has been tested and found to be effective in the presence of light to moderate amounts of soil (e.g., a 5% organic soil load), and therefore may be used without a pre-cleaning step for light to moderate amounts of soil in the labelled directions for use." },
			{ term: "Prion", description: "Proteinaceous infectious particles that are transmissible and pathogenic agents and which cause a variety of progressive neurodegenerative diseases of the central nervous system in humans and animals, collectively called transmissible spongiform encephalopathies (TSEs or prion disesases) (e.g., bovine spongiform encephalopathy in cattle, and Creutzfeld-Jakob disease in humans). Prions are unlike any other infectious pathogens because they are composed of  abnormal folding conformations of a normal, ubiquitous cellular protein, the \"cellular\" prion protein (PrPC). Prions demonstrate a high level of resistance to inactivation by sterilization processes and disinfectants." },
			{ term: "Residual self-sanitizer", description: "A substance, or mixture of substances, that provides residual sanitizing action (e.g., significant reduction in numbers of infectious microorganisms which may be present or subsequently deposited) on treated hard, non-porous environmental surfaces." },
			{ term: "Sanitizer", description: "A substance, or mixture of substances, that reduces the bacterial population on environmental surfaces and inanimate objects by significant numbers (e.g., a minimum 3 log<sub>10</sub> reduction) due to the antimicrobial action of the active ingredient(s), but which does not destroy all bacteria." },
			{ term: "Semi-critical medical devices", description: "Devices that contact intact mucous membranes or non-intact skin during use, but do not penetrate the blood barrier or normally sterile areas of the body (e.g., respiratory therapy and anaesthesia equipment, some flexible endoscopes, some dental equipment), and for which reprocessing using a high-level disinfectant, at a minimum, is required. For some reusable semi-critical medical devices that may come in contact with non-intact skin for a brief period of time (e.g., hydrotherapy tanks, bed side rails, hair clippers) reprocessing using an intermediate-level disinfectant may be appropriate, depending on the type of item and its intended use, and as specifically recommended in infection prevention and control protocols." },
			{ term: "Spaulding classification system", description: "Categorizes medical devices used in patient care based on the invasiveness of the procedure that the device will be used for. The system divides these devices into three categories according to the degree of risk for infection involved in the use of the items: 1) non-critical; 2) semi-critical; and 3) critical. Based on these categories, there are four recommended levels of disinfectant activity that could be applicable to reprocessing these devices: 1) low-level disinfectants; 2) intermediate-level disinfectants; 3) high-level disinfectants; or 4) sterilants. Of note, a certain level of flexibility is required in implementing this classification system as not all medical devices clearly fit into one device category, and therefore public health guidelines and infection prevention and control protocols may recommend different levels of disinfectant activity for some medical devices (e.g., the reprocessing of flexible endoscopes, disinfection of hydrotherapy tanks)." },
			{ term: "Sporicide", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating bacterial endospores (also referred to as bacterial spores) present on environmental surfaces and inanimate objects." },
			{ term: "Sterilant", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating all forms of microbial life present on inanimate objects, including all forms of vegetative bacteria, bacterial spores, fungi, fungal spores, and viruses, present on inanimate objects. These are also referred to as <em>chemical sterilants</em> or <em>chemosterilants</em>, and include substances which at the time of use are liquids, gases or vapours (e.g., ethylene oxide, hydrogen peroxide gas plasma).  Infection prevention and control guidelines generally recommended that the use of sterilants to reprocess reusable semi-critical or critical medical devices be limited to those which are heat-sensitive (e.g., flexibile endoscopes) and which are incompatible with other sterilization processes (e.g., steam sterilization)." },
			{ term: "Tuberculocide", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating mycobacteria, specifically tubercle bacilli (i.e., <em>Mycobacterium tuberculosis</em>), present on environmental surfaces and inanimate objects. Applicants are encouraged to use the preferred term <em>mycobactericide</em> on their labelling." },
			{ term: "Virucide", description: "A substance, or mixture of substances, capable of destroying or irreversibly inactivating viruses present on environmental surfaces and inanimate objects. Disinfectants with efficacy at a minimum against any specific virus can be registered as a virucide." }
		]);
})();

