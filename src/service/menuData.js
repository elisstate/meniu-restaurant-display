export const categories = [
  'Gustarti calde',
  'Gustari reci',
  'Preparate din paste',
  'Ciorbe',
  'Preparate din peste',
  'Preparate din carne de vita',
  'Preparate din carne de pui',
  'Preparate din carne de porc',
  'Preparate la gratar',
  'Garnituri',
  'Salate',
  'Desert',
  'Bauturi'
]

export const frozenIngredients = [
	"ficatei",
	"pulpa vita",
	"piept de pui file",
	"burta",
	"pulpa spata porc",
	"piept pui file",
	"mazare",
	"fasole congelata",
	"baveta de vita",
	"pastrav",
	"somon file",
	"salau",
	"muschi vita",
	"broccoli",
	"cotlet de porc",
	"mici",
	"pulpe pui dezosate",
	"muschiulet de porc",
	"cartofi congelati",
	"amestec legume", 
]


export const foodEntries = [
	{
		category: "Gustari Reci",
		entries: [
			{
				name: "Telemea",
				weight: "100g",
				ingredients: ["telemea"],
				nutrients: "Valoare energetica: 139 kcal, Grasimi: 11.50g din care Acizi Grasi Saturati 7.60g, Glucide: 0.07g din care Zaharuri 0.05g, Proteine: 8.50g, Sare: 2.00g",
				allergens: ["Lapte"]
			},
			{
				name: "Cascaval",
				weight: "100g",
				ingredients: ["cascaval"],
				nutrients: "Valoare energetica: 164 kcal, Grasimi: 13.00g din care Acizi Grasi Saturati 8.50g, Glucide: 0.25g din care Zaharuri 0.25g, Proteine: 11.50g, Sare: 0.85g",
				allergens: ["Lapte"]
			},
			{
				name: "Sunca Praga",
				weight: "100g",
				ingredients: ["sunca praga"],
				nutrients: "Valoare energetica: 124 kcal, Grasimi: 3.20g din care Acizi Grasi Saturati 1.34g, Glucide: 2.25g din care Zaharuri 0.00g, Proteine: 16.20g, Sare: 2.30g",
				allergens: []
			},
			{
				name: "Muschi file",
				weight: "100g",
				ingredients: ["muschi file"],
				nutrients: "Valoare energetica: 100 kcal, Grasimi: 3g din care Acizi Grasi Saturati 1.3g, Glucide: 2.00g din care Zaharuri 0.40g, Proteine: 13g, Sare: 2.30g",
				allergens: []
			},
			{
				name: "Kaiser",
				weight: "100g",
				ingredients: ["kaise"],
				nutrients: "Valoare energetica: 308 kcal, Grasimi: 27.3g din care Acizi Grasi Saturati 8.1g, Glucide: 0.7g din care Zaharuri 0.5g, Proteine: 15.2g, Sare: 2.5g",
				allergens: []
			},
			{
				name: "Salam Sinaia",
				weight: "100g",
				ingredients: ["salam sinaia"],
				nutrients: "Valoare energetica: 440 kcal, Grasimi: 15g din care Acizi Grasi Saturati 15g, Glucide: 1g din care Zaharuri 1g, Proteine: 17g, Sare: 1.6g",
				allergens: []
			},
			{
				name: "Rosie",
				weight: "100g",
				ingredients: ["rosii"],
				nutrients: "Valoare energetica: 18 kcal, Grasimi: 0.20g din care Acizi Grasi Saturati 0.03g, Glucide: 3.89g din care Zaharuri 2.63g, Proteine: 0.88g, Sare: 0.01g",
				allergens: []
			},
			{
				name: "Iaurt",
				weight: "125g",
				ingredients: ["iaurt"],
				nutrients: "Valoare energetica: 112 kcal, Grasimi: 3.8g din care Acizi Grasi Saturati 1.9g, Glucide: 15g din care Zaharuri 12.5g, Proteine: 5g, Sare: 0.056g",
				allergens: ["lapte"]
			},
			{
				name: "Gem",
				weight: "1buc/20g",
				ingredients: ["gem"],
				nutrients: "Valoare energetica: 50 kcal, Grasimi: Og din care Acizi Grasi Saturati Og, Glucide: 13g din care Zaharuri 12g. Proteine: Og. Sare: Og",
				allergens: []
			},
			{
				name: "Unt",
				weight: "1 buc/10g",
				ingredients: ["unt"],
				nutrients: "Valoare energetica: 59 kcal, Grasimi: 4g din care Acizi Grasi Saturati 2.4g, Glucide: Og din care Zaharuri Og, Proteine: 0.6g, Sare: Og",
				allergens: []
			}
		]
	},
	{
		category: "Gustari Calde",
		entries: [
			{
				name: "Omleta simpla",
				weight: "80g",
				ingredients: ["oua", "ulei"],
				nutrients: "Valoare energetica: 237 kcal, Grasimi: 23.16g din care acizi grasi saturati 1.56g, Glucide: 0.36g din care Zaharuri 0.00g, Proteine: 6.3g, Sare: 0.46g",
				allergens: ["Oua"]
			},
			{
				name: "Omleta Taraneasca",
				weight: "140g",
				ingredients: ["oua", "cascaval", "ulei", "ceapa", "rosii"],
				nutrients: "Valoare energetica: 327 kcal, Grasimi: 29.78g din care acizi grasi saturati 5.38g, Glucide: 2.61g din care Zaharuri 0.00g, Proteine: 11.98g, Sare: 0.61g",
				allergens: ["Oua", "Lapte"]
			},
			{
				name: "Omleta cu cascaval",
				weight: "120g",
				ingredients: ["oua", "cascaval", "ulei"],
				nutrients: "Valoare energetica: 368 kcal, Grasimi: 33.56g din care Acizi Grasi Saturati 8.36g, Glucide: 0.56g din care Zaharuri 0.00g, Proteine: 15.50g, Sare: 1.14g",
				allergens: ["Oua", "Lapte"] // Corrected from 'Qua'
			},
			{
				name: "Omleta cu sunca",
				weight: "120g",
				ingredients: ["oua", "sunca praga", "ulei"],
				nutrients: "Valoare energetica: 283 kcal, Grasimi: 24.56g din care Acizi Grasi Saturati 2.08g, Glucide: 1.48g din care Zaharuri 0.00g. Proteine: 13.50g, Sare: 1.46g",
				allergens: ["Oua"]
			},
			{
				name: "Cascaval pane si rosie",
				weight: "100/100g",
				ingredients: ["rosii", "cascaval", "pesmet", "ulei", "faina", "oua"],
				nutrients: "Valoare energetica: 766 kcal, Grasimi: 52.28g din care Acizi Grasi Saturati 15.57g, Glucide: 45.00g din care Zaharuri 0.03g, Proteine: 29.23g, Sare: 2.99g",
				allergens: ["Gluten", "Oua", "Lapte"]
			},
			 {
				name: "Ficatei de pui la tigaie",
				weight: "180g",
				ingredients: ["ficatei", "ceapa", "ulei"],
				nutrients: "Valoare energetica: 469 kcal, Grasimi: 30.32g din care Acizi Grasi Saturati 0.04g, Glucide: 18.13g din care Zaharuri 2.12g, Proteine: 31.50g, Sare: 1.17g",
				allergens: ["Gluten"]
			},
			{
				name: "Mamaliguta Cu branza si smantana",
				weight: "300/120/100g",
				ingredients: ["telemea", "smantana", "malai"],
				nutrients: "Valoare energetica: 857 kcal, Grasimi: 45.70g din care Acizi Grasi Saturati 26.36g, Glucide: 80.48g din care Zaharuri 2.90g, Proteine: 29.60g, Sare: 5.68g",
				allergens: ["Lapte"]
			},
			{
				name: "Gustare calda taraneasca",
				weight: "50/50/2/200g",
				ingredients: ["oua", "malai", "telemea", "kaiser", "ulei"],
				nutrients: "Valoare energetica: 776 kcal, Grasimi: 49.36g din care Acizi Grasi Saturati 13.43g, Glucide: 54.97g din care Zaharuri 0.00g, Proteine: 26.86g, Sare: 3.71g",
				allergens: ["Oua", "Lapte"]
			}
		]
	},
	{
		category: "Preparate din Paste",
		entries: [
			 {
				name: "Spaghetti Carbonara",
				weight: "450g",
				ingredients: ["spaghete", "sunca praga", "cascaval", "oua", "smantana"],
				nutrients: "Valoare energetica: 886 kcal, Grasimi: 37.81g din care Acizi Grasi Saturati 15.90g, Glucide: 92.51g din care Zaharuri 0.10g, Proteine: 42.63g, Sare: 3.38g",
				allergens: ["Oua", "Lapte", "Gluten"]
			},
			{
				name: "Spaghetti Bolognese",
				weight: "450g",
				ingredients: ["spaghete", "pulpa vita", "pasta tomata", "cascaval", "ulei"],
				nutrients: "Valoare energetica: 935 kcal, Grasimi: 40.92g din care Acizi Grasi Saturati 5.50g, Glucide: 99.76g din care Zaharuri 0.00g, Proteine: 38.28g, Sare: 1.33g",
				allergens: ["Gluten", "Lapte"]
			},
			{
				name: "Spaghetti Milanese",
				weight: "450g",
				ingredients: ["spaghete", "pasta tomata", "ciuperci", "sunca praga", "smantana", "cascaval", "oua", "ceapa", "ulei"],
				nutrients: "Valoare energetica: 1002 kcal, Grasimi: 39.87g din care Acizi Grasi Saturati 14.36g, Glucide: 114.03g din care Zaharuri 0.00g. Proteine: 45.55g, Sare: 2.45g",
				allergens: ["Oua", "Lapte", "Gluten"]
			},
			{
				name: "Tagliatelle cu sunca si ciuperci",
				weight: "450g",
				ingredients: ["tagliatele", "ciuperci", "smantana", "sunca praga", "oua", "ulei", "cascaval"],
				nutrients: "Valoare energetica: 870 kcal, Grasimi: 42.12g din care Acizi Grasi Saturati 12.09g, Glucide: 81.81g din care Zaharuri 0.00g, Proteine: 40.51g, Sare: 5.39g",
				allergens: ["Oua", "Lapte", "Gluten"]
			},
			{
				name: "Tagliatelle cu pui si ciuperci",
				weight: "450g",
				ingredients: ["tagliatele", "piept de pui file", "ciuperci", "smantana", "oua", "cascaval", "ulei"],
				nutrients: "Valoare energetica: 916 kcal, Grasimi: 42.31g din care Acizi Grasi Saturati 11.75g, Glucide: 81.45g din care Zaharuri 0.42g, Proteine: 50.65g, Sare: 3.69g",
				allergens: ["Oua", "Lapte", "Gluten"]
			}
		]
	},
	{
		category: "Ciorbe",
		entries: [
			 {
				name: "Ciorba de burta (cu smantana si ardei)",
				weight: "100g/300ml",
				ingredients: ["burta", "smantana", "oua", "ulei", "morcovi", "ardei iute", "telina", "gogosari in otet"],
				nutrients: "Valoare energetica: 599 kcal, Grasimi: 46.34g din care Acizi Grasi Saturati 11.67g, Glucide: 13.47g din care Zaharuri 0.00g, Proteine: 31.69g, Sare: 2.76g",
				allergens: ["Lapte", "Oua", "Telina"]
			},
			 {
				name: "Ciorba de fasole boabe cu afumatura",
				weight: "40g/360ml",
				ingredients: ["fasole boabe", "kaiser", "morcovi", "telina", "ceapa", "pasta tomata", "ulei", "ardei"], 
				nutrients: "Valoare energetica: 690 kcal, Grasimi: 37.04g din care Acizi Grasi Saturati 5.00g, Glucide: 56.12g din care Zaharuri 1.05g, Proteine: 32.19g, Sare: 3.25g",
				allergens: ["Telina"]
			},
			{
				name: "Ciorba radauteana de pui",
				weight: "50g/350ml",
				ingredients: ["piept pui file", "smantana", "oua", "telina", "morcovi", "ceapa", "orez", "ulei"],
				nutrients: "Valoare energetica: 400 kcal, Grasimi: 27.18g din care Acizi Grasi Saturati 0.31g, Glucide: 20.10g din care Zaharuri 0.00g, Proteine: 17.72g, Sare: 1.94g",
				allergens: ["Lapte", "Oua", "Telina", "Gluten"]
			},
			 {
				name: "Ciorba taraneasca de vacuta",
				weight: "40g/360ml",
				ingredients: ["cartofi", "pulpa vita", "smantana", "ceapa", "fasole congelata", "morcovi", "telina", "pasta tomata", "ulei", "mazare", "ardei"], 
				nutrients: "Valoare nutritionala: 610 kcal, Grasimi: 39.52g din care Acizi Grasi Saturati 4.08g, Glucide: 42.45g din care Zaharuri 0.00g, Proteine: 20.97g, Sare: 2.99g",
				allergens: ["Lapte", "Telina"]
			},
			{
				name: "Ciorba taraneasca de legume",
				weight: "400ml",
				ingredients: ["cartofi", "morcovi", "ceapa", "telina", "pasta tomata", "fasole congelata", "mazare", "ulei", "ardei", "dovlecei"], 
				nutrients: "Valoare nutritionala: 362 kcal, Grasimi: 19.32g din care Acizi Grasi Saturati 0.20g, Glucide: 41.23g din care Zaharuri 0.63g, Proteine: 7.06g, Sare: 1.78g",
				allergens: ["Telina"]
			}
		]
	},
	{
		category: "Preparate din peste",
		entries: [
			 {
				name: "Pastrav prajit",
				weight: "100g",
				ingredients: ["pastrav", "ulei", "lamai"], 
				nutrients: "Valoare energetica: 413 kcal, Grasimi: 27.71g din care Acizi Grasi Saturati 1.62g, Glucide: 8.76g din care Zaharuri 0.00g, Proteine: 30.54g, Sare: 0.11g",
				allergens: ["Peste", "Gluten"]
			},
			{
				name: "File somon cu sos Meuniere",
				weight: "140/40g",
				ingredients: ["somon file", "lamai", "ulei", "faina", "capere", "unt"],
				nutrients: "Valoare energetica: 678 kcal, Grasimi: 48.81g din care Acizi Grasi Saturati 9.32g, Glucide: 18.55g din care Zaharuri 0.60g, Proteine: 40.27g, Sare: 1.39g",
				allergens: ["Peste", "Gluten", "Lapte"]
			},
			 {
				name: "File de salau pane",
				weight: "200g",
				ingredients: ["salau", "pesmet", "oua", "faina", "ulei", "lamai"], 
				nutrients: "Valoare energetica: 599 kcal, Grasimi: 23.68g din care Acizi Grasi Saturati 0.41g, Glucide: 46.64g din care Zaharuri 0.00g, Proteine: 47.39g, Sare: 1.77g",
				allergens: ["Peste", "Gluten", "Oua", "Gluten"] // Gluten listed twice in source
			}
		]
	},
	{
		category: "Preparate din carne de vita",
		entries: [
			{
				name: "Muschi de vita cu unt",
				weight: "130/25g",
				ingredients: ["muschi vita", "unt"],
				nutrients: "Valoare energetica: 598 kcal, Grasimi: 49.37g din care Acizi Grasi Saturati 9.75g, Glucide: 0.53g din care Zaharuri 0.00g, Proteine: 36.34g, Sare: 1.56g",
				allergens: ["Lapte"]
			},
			 {
				name: "Muschi de vita Pfeffersteak",
				weight: "130/50g",
				ingredients: ["muschi vita", "smantana", "unt", "lamai"],
				nutrients: "Valoare energetica: 689 kcal, Grasimi: 57.69g din care Acizi Grasi Saturati 12.13g, Glucide: 4.35g din care Zaharuri 0.87g, Proteine: 37.61g, Sare: 0.81g",
				allergens: ["Lapte"]
			},
			 {
				name: "Muschi de vita cu sos de ciuperci",
				weight: "130/150g",
				ingredients: ["muschi vita", "ciuperci", "smantana", "unt", "ceapa"], 
				nutrients: "Valoare energetica: 650 kcal, Grasimi: 50.26g din care Acizi Grasi Saturati 13.32g, Glucide: 7.81g din care Zaharuri 0.00g, Proteine: 41.30g, Sare: 1.49g",
				allergens: ["Lapte"]
			},
			{
				name: "Burger Black Angus",
				weight: "400g",
				ingredients: ["carne de vita", "cascaval", "rosii", "castraveti murati", "sos tzatziki", "salata verde"], 
				nutrients: "",
				allergens: ["Lapte"]
			},
			{
				name: "Baveta de vita cu hrean si sos de ciuperci",
				weight: "230/15/150g",
				ingredients: ["baveta de vita", "ciuperci", "smantana", "unt", "hrean"], 
				nutrients: "Valoare energetica: 663 kcal, Grasimi: 51.18g din care Acizi Grasi Saturati 13.39g, Glucide: 8.43g din care Zaharuri 0.00g, Proteine: 41.40g, Sare: 1.51g",
				allergens: ["Lapte"]
			},
		]
	},
	 {
		category: "Preparate din carne de pui",
		entries: [
			 {
				name: "Snitel de pui parizian",
				weight: "200g",
				ingredients: ["piept pui file", "ulei", "faina", "oua"], 
				nutrients: "Valoare energetica: 785 kcal, Grasimi: 51.92g din care Acizi Grasi Saturati 1.41g, Glucide: 27.93g din care Zaharuri 0.00g, Proteine: 46.95g, Sare: 0.88g",
				allergens: ["Gluten", "Oua"]
			},
			{
				name: "Snitel de pui pane",
				weight: "200g",
				ingredients: ["piept pui file", "ulei", "faina", "oua"], 
				nutrients: "Valoare energetica: 854 kcal, Grasimi: 51.86g din care Acizi Grasi Saturati 1.26g, Glucide: 44.74g din care Zaharuri 0.00g, Proteine: 48.84g, Sare: 1.63g",
				allergens: ["Gluten", "Gluten", "Oua"] // Gluten listed twice in source
			},
			{
				name: "Tochitura de pui cu mamaliguta",
				weight: "120/100/200g",
				ingredients: ["piept pui file", "malai", "ciuperci", "pasta tomata", "ceapa", "ulei"], 
				nutrients: "Valoare energetica: 840 kcal, Grasimi: 29.58g din care Acizi Grasi Saturati 1.38g, Glucide: 94.86g din care Zaharuri 1.27g, Proteine: 46.43g, Sare: 1.47g",
				allergens: [] // None listed
			},
			{
				name: "Snitel de pui in crusta de susan",
				weight: "160g",
				ingredients: ["piept pui file", "ulei", "oua", "susan"], 
				nutrients: "Valoare energetica: 642 kcal, Grasimi: 43.47g din care Acizi Grasi Saturati 2.97g, Glucide: 11.44g din care Zaharuri 0.30g, Proteine: 46.68g, Sare: 0.88g",
				allergens: ["Oua", "Susan", "Gluten"]
			},
			{
				name: "Piept de pui cu broccoli",
				weight: "170g",
				ingredients: ["piept pui file", "cascaval", "broccoli", "ulei", "masline"], 
				nutrients: "Valoare energetica: 721 kcal, Grasimi: 49.68g din care Acizi Grasi Saturati 13.86g, Glucide: 7.80g din care Zaharuri 0.00g, Proteine: 60.18g, Sare: 2.16g",
				allergens: ["Lapte"]
			},
			{
				name: "Rulou din piept de pui cu ciuperci",
				weight: "200g",
				ingredients: ["piept pui file", "ciuperci", "ulei", "pesmet", "cascaval", "oua", "faina"], 
				nutrients: "Valoare energetica: 938 kcal, Grasimi: 58.86g din care Acizi Grasi Saturati 5.66g, Glucide: 45.53g din care Zaharuri 0.42g, Proteine: 54.88g, Sare: 2.82g",
				allergens: ["Gluten", "Oua", "Lapte"]
			},
			{
				name: "Pui Shanghai",
				weight: "180g",
				ingredients: ["piept pui file", "faina", "ulei", "oua"],
				nutrients: "Valoare energetica: 610 kcal, Grasimi: 31.46g din care Acizi Grasi Saturati 1.82g, Glucide: 28.90g din care Zaharuri 0.00g, Proteine: 47.82g, Sare: 0.88g",
				allergens: ["Gluten", "Oua", "Susan"]
			}
		]
	},
	 {
		category: "Preparate din carne de porc",
		entries: [
			 {
				name: "Snitel de porc pane",
				weight: "200g",
				ingredients: ["cotlet de porc", "ulei", "pesmet", "faina", "oua"],
				nutrients: "Valoare energetica: 1082 kcal, Grasimi: 72.70g din care Acizi Grasi Saturati 0.24g, Glucide: 44.67g din care Zaharuri 0.60g, Proteine: 56.93g, Sare: 1.55g",
				allergens: ["Gluten", "Oua"]
			},
			 {
				name: "Snitel de porc parizian",
				weight: "200g",
				ingredients: ["cotlet de porc", "ulei", "faina", "oua"],
				nutrients: "Valoare energetica: 1014 kcal, Grasimi: 72.76g din care Acizi Grasi Saturati 0.39g, Glucide: 27.87g din care Zaharuri 0.05g, Proteine: 55.04g, Sare: 0.80g",
				allergens: ["Gluten", "Oua"]
			},
			{
				name: 'Cotlet de porc "Blue River"',
				weight: "200g",
				ingredients: ["cotlet de porc", "rosii", "ciuperci", "cascaval", "sunca praga", "salata verde", "ulei", "smantana"],
				nutrients: "Valoare energetica: 754 kcal, Grasimi: 54.19g din care Acizi Grasi Saturati 8.34g, Glucide: 7.02g din care Zaharuri 0.00g, Proteine: 57.17g, Sare: 3.27g",
				allergens: ["Lapte"]
			},
			 {
				name: 'Snitel "Cordon Bleu"',
				weight: "200g",
				ingredients: ["cotlet de porc", "ulei", "pesmet", "sunca praga", "cascaval", "oua", "faina"],
				nutrients: "Valoare energetica: 1226 kcal, Grasimi: 82.06g din care Acizi Grasi Saturati 5.90g, Glucide: 46.76g din care Zaharuri 0.00g, Proteine: 69.99g, Sare: 2.82g",
				allergens: ["Gluten", "Oua", "Lapte"]
			},
			{
				name: "Escalop de porc Zingara",
				weight: "100/200g",
				ingredients: ["cotlet de porc", "ciuperci", "ulei", "ceapa", "pasta tomata", "sunca presata"],
				nutrients: "Valoare energetica: 722 kcal, Grasimi: 49.17g din care Acizi Grasi Saturati 0.48g, Glucide: 18.42g din care Zaharuri 0.00g, Proteine: 48.34g, Sare: 1.68g",
				allergens: ["Gluten"]
			},
			 {
				name: "Ciolan de porc cu fasole",
				weight: "700/250g",
				ingredients: ["cionale cu os", "fasole boabe", "pasta tomata", "morcovi", "ulei", "ceapa"],
				nutrients: "Valoare energetica: 3215 kcal, Grasimi: 244.53g din care Acizi Grasi Saturati 0.12g, Glucide: 75.31g din care Zaharuri 0.95g, Proteine: 155.02g, Sare: 1.90g",
				allergens: []
			},
			{
				name: "Tochitura Olteneasca cu mamaliguta",
				weight: "300/40/200g",
				ingredients: ["pulpa spata porc", "malai", "pasta tomata", "carnati", "ceapa", "oua", "telemea", "kaiser", "ulei"],
				nutrients: "Valoare nutritionala: 1579 kcal, Grasimi: 83.71g din care Acizi Grasi Saturati 14.35g, Glucide: 100.79g din care Zaharuri 0.00g, Proteine: 99.76g, Sare: 5.67g",
				allergens: ["Oua", "Lapte"]
			},
			{
				name: "Carne de la garnita cu mamaliguta si ou ochi",
				weight: "300/200/1buc",
				ingredients: ["carne de la garnita", "malai", "oua", "ulei"],
				nutrients: "Valoare nutritionala: 1140 kcal, Grasimi: 78.00g din care Acizi Grasi Saturati 32.00g, Glucide: 36.00g din care Zaharuri 0.70g, Proteine: 86.00g, Sare: 2.7g",
				allergens: ["Oua"]
			}
		]
	},
	{
		category: "Preparate la gratar",
		entries: [
			 {
				name: "Mici la gratar cu mustar",
				weight: "70/20g",
				ingredients: ["mici", "mustar"],
				nutrients: "Valoare energetica: 215 kcal, Grasimi: 16.32g din care Acizi Grasi Saturati 7.51g, Glucide: 3.24g din care Zaharuri 0.58g, Proteine: 10.27g, Sare: 1.60g",
				allergens: ["Mustar"]
			},
			{
				name: "Piept de pui la gratar",
				weight: "160g",
				ingredients: ["piept pui file"],
				nutrients: "Valoare energetica: 270 kcal, Grasimi: 8.47g din care Acizi Grasi Saturati 1.13g, Glucide: 0.11g din care Zaharuri 0.00g, Proteine: 45.05g, Sare: 1.25g",
				allergens: [] // None listed
			},
			{
				name: "Pulpe de pui dezosate la gratar",
				weight: "160g",
				ingredients: ["pulpe pui dezosate"],
				nutrients: "Valoare energetica: 309 kcal, Grasimi: 18.04g din care Acizi Grasi Saturati 0.00g, Glucide: 3.42g din care Zaharuri 0.00g, Proteine: 31.14g, Sare: 0.78g",
				allergens: [] // None listed
			},
			 {
				name: "Carnati semiafumati la gratar",
				weight: "140/20g",
				ingredients: ["carnati", "mustar"],
				nutrients: "Valoare energetica: 377 kcal, Grasimi: 28.08g din care Acizi Grasi Saturati 11.38g, Glucide: 6.40g din care Zaharuri 0.42g, Proteine: 24.41g, Sare: 4.02g",
				allergens: ["Mustar"]
			},
			{
				name: "Cotlet de porc la gratar",
				weight: "160g",
				ingredients: ["cotlet de porc"],
				nutrients: "Valoare energetica: 524 kcal, Grasimi: 31.63g din care Acizi Grasi Saturati 0.00g, Glucide: 0.18g din care Zaharuri 0.00g, Proteine: 54.06g, Sare: 1.55g",
				allergens: []
			},
			{
				name: "Ceafa semiafumata la gratar",
				weight: "160g",
				ingredients: ["ceafa afumata"],
				nutrients: "Valoare energetica: 716 kcal, Grasimi: 53.83g din care Acizi Grasi Saturati 15.18g, Glucide: 0.11g din care Zaharuri 0.00g, Proteine: 33.17g, Sare: 7.00g",
				allergens: []
			},
			{
				name: "Ceafa la gratar",
				weight: "160g",
				ingredients: ["ceafa de porc"],
				nutrients: "Valoare energetica: 716 kcal, Grasimi: 53.83g din care Acizi Grasi Saturati 15.18g, Glucide: 0.11g din care Zaharuri 0.00g, Proteine: 33.17g, Sare: 7.00g",
				allergens: []
			},
			{
				name: "Muschiulet de porc la gratar",
				weight: "160g",
				ingredients: ["muschiulet de porc"],
				nutrients: "Valoare energetica: 366 kcal, Grasimi: 20.61g din care Acizi Grasi Saturati 0.00g, Glucide: 4.11g din care Zaharuri 0.00g, Proteine: 42.05g, Sare: 1.16g",
				allergens: []
			},
			{
				name: "Platoul casei",
				weight: "350/200g",
				ingredients: ["cartofi congelati", "mici", "ceafa afumata", "cotlet de porc", "piept pui file", "carnati", "ulei", "mustar"],
				nutrients: "Valoare energetica: 2336 kcal, Grasimi: 159.03g din care Acizi Grasi Saturati 30.67g, Glucide: 92.45g din care Zaharuri 1.17g, Proteine: 106.44g, Sare: 10.44g",
				allergens: ["Mustar"]
			},
			{
				name: "Platoul Blue River",
				weight: "650/200g",
				ingredients: ["cartofi", "pulpe pui dezosate", "muschiulet de porc", "ceafa afumata", "mici", "ulei", "mustar", "castraveti in otet", "salata verde"],
				nutrients: "Valoare energetica: 2562 kcal, Grasimi: 173.39g din care Acizi Grasi Saturati 30.35g, Glucide: 80.84g din care Zaharuri 1.17g, Proteine: 138.19g, Sare: 12.90g",
				allergens: ["Mustar"]
			}
		]
	},
	 {
		category: "Garnituri",
		entries: [
			{
				name: "Iahnie de fasole boabe",
				weight: "400g",
				ingredients: ["fasole boabe", "ceapa", "ulei", "pasta tomata", "morcovi"],
				nutrients: "Valoare energetica: 704 kcal, Grasimi: 25.96g din care Acizi Grasi Saturati 0.13g, Glucide: 81.05g din care Zaharuri 0.00g, Proteine: 34.30g, Sare: 1.06g",
				allergens: []
			},
			 {
				name: "Cartofi prajiti",
				weight: "200g",
				ingredients: ["cartofi congelati", "ulei"],
				nutrients: "Valoare energetica: 907 kcal, Grasimi: 60.50g din care Acizi Grasi Saturati 1.74g, Glucide: 79.75g din care Zaharuri 0.00g, Proteine: 7.25g, Sare: 2.06g", // Completed based on visible PDF text
				allergens: []
			},
			{
				name: "Cartofi natur",
				weight: "250g",
				ingredients: ["cartofi"],
				nutrients: "Valoare energetica: 331 kcal, Grasimi: 5.67g din care Acizi Grasi Saturati 3.24g, Glucide: 64.11g din care Zaharuri 0.00g, Proteine: 7.18g, Sare: 1.54g",
				allergens: ["Lapte"]
			},
			{
				name: "Legume mexicane",
				weight: "200g",
				ingredients: ["amestec legume", "morcovi"],
				nutrients: "Valoare energetica: 162 kcal, Grasimi: 7.32g din care Acizi Grasi Saturati 4.10g, Glucide: 15.93g din care Zaharuri 0.00g, Proteine: 5.02g, Sare: 1.49g",
				allergens: ["Lapte"]
			},
			{
				name: "Cartofi taranesti",
				weight: "250g",
				ingredients: ["cartofi", "ulei", "ceapa"],
				nutrients: "Valoare energetica: 636 kcal, Grasimi: 37.34g din care Acizi Grasi Saturati 0.14g, Glucide: 68.85g din care Zahari 1.05g, Proteine: 7.89g, Sare: 1.54g",
				allergens: []
			},
			{
				name: "Sote de ciuperci",
				weight: "150g",
				ingredients: ["ciuperci", "ceapa", "ulei"],
				nutrients: "Valoare energetica: 222 kcal, Grasimi: 19.05g din care Acizi Grasi Saturati 0.11g, Glucide: 9.72g din care Zahari 0.03g, Proteine: 5.80g, Sare: 0.97g",
				allergens: []
			},
			{
				name: "Legume la gratar",
				weight: "200g",
				ingredients: ["vinete", "rosii", "ardei", "dovlecei", "ceapa", "ciuperci champignon"],
				nutrients: "Valoare energetica: 174 kcal, Grasimi: 9.89g din care Acizi Grasi Saturati 1.66g, Glucide: 19.52g din care Zahari 0.00g, Proteine: 4.40g, Sare: 3.38g",
				allergens: []
			},
			{
				name: "Ciuperi la gratar",
				weight: "200g",
				ingredients: ["ciuperci champignon"],
				nutrients: "Valoare energetica: 57 kcal, Grasimi: 0.88g din care Acizi Grasi Saturati 0.13g, Glucide: 8.48g din care Zahari 5.15g, Proteine: 8.03g, Sare: 0.40g",
				allergens: []
			},
			{
				name: "Mamaliguta",
				weight: "300g",
				ingredients: ["telemea", "smantana", "malai"],
				nutrients: "Valoare energetica: 857 kcal, Grasimi: 45.70g din care Acizi Grasi Saturati 26.36g, Glucide: 80.48g din care Zaharuri 2.90g, Proteine: 29.60g, Sare: 5.68g",
				allergens: ["Lapte"]
			},
			{
				name: "Ketchup",
				weight: "50g/1buc",
				ingredients: ["ketchup"],
				nutrients: "Valoare energetica: 44 kcal, Grasimi: 0.00g din care Acizi Grasi Saturati 0.00g, Glucide: 10.50g din care Zaharuri 8.50g, Proteine: 0.50g, Sare: 1.10g",
				allergens: []
			},
			{
				name: "Sos Caesar",
				weight: "50g/1buc",
				ingredients: ["sos caesar"],
				nutrients: "Valoare energetica: 215 kcal, Grasimi: 23.00g din care Acizi Grasi Saturati 2.00g, Glucide: 0.45g din care Zaharuri 0.35g, Proteine: 0.60g, Sare: 0.75g",
				allergens: []
			},
			{
				name: "Mujdei de usturoi",
				weight: "50g",
				ingredients: ["usturoi", "smantana"],
				nutrients: "Valoare energetica: 71 kcal, Grasimi: 2.55g din care Acizi Grasi Saturati 1.59g, Glucide: 10.51g din care Zaharuri 1.27g, Proteine: 2.49g, Sare: 0.41g",
				allergens: []
			}
		]
	},
	{
		category: "Salate",
		entries: [
			{
				name: "Salata de varza",
				weight: "200g",
				ingredients: ["varza", "ulei"],
				nutrients: "Valoare energetica: 186 kcal, Grasimi: 14.05g din care Acizi Grasi Saturati 0.08g, Glucide: 14.47g din care Zaharuri 0.00g, Proteine: 3.12g, Sare: 1.60g",
				allergens: []
			},
			{
				name: "Salata asortata",
				weight: "200g",
				ingredients: ["varza", "rosii", "castraveti", "ulei"],
				nutrients: "Valoare energetica: 171 kcal, Grasimi: 14.13g din care Acizi Grasi Saturati 0.08g, Glucide: 10.73g din care Zaharuri 2.56g, Proteine: 2.25g, Sare: 0.80g",
				allergens: []
			},
			{
				name: "Salata de rosii/castraveti",
				weight: "200g",
				ingredients: ["castraveti", "rosii"],
				nutrients: "Valoare energetica: 119 kcal, Grasimi: 9.54g din care Acizi Grasi Saturati 0.07g, Glucide: 8.37g din care Zaharuri 0.00g, Proteine: 1.68g, Sare: 0.78g",
				allergens: []
			},
			{
				name: "Castraveti/Gogoasari in otet",
				weight: "200g",
				ingredients: ["gogosari in otet", "castraveti in otet"],
				nutrients: "Valoare energetica: 43 kcal, Grasimi: 0.29g din care Acizi Grasi Saturati 0.13g, Glucide: 7.60g din care Zaharuri 0.90g, Proteine: 1.89g, Sare: 3.50g",
				allergens: []
			},
			{
				name: "Ardei Copt",
				weight: "200g",
				ingredients: ["ardei copt"],
				nutrients: "Valoare energetica: 87 kcal, Grasimi: 6.04g din care Acizi Grasi Saturati 0.60g, Glucide: 9.82g din care Zaharuri 0.00g, Proteine: 1.60g, Sare: 1.80g",
				allergens: []
			},
			{
				name: "Salata de vara",
				weight: "200g",
				ingredients: ["rosii", "ardei", "ceapa", "castraveti", "salata verde", "ulei"],
				nutrients: "Valoare energetica: 171 kcal, Grasimi: 14.15g din care Acizi Grasi Saturati 0.07g, Glucide: 10.61g din care Zaharuri 1.68g, Proteine: 1.90g, Sare: 1.99g",
				allergens: []
			},
			{
				name: "Salata de ceapa rosie",
				weight: "200g",
				ingredients: ["ceapa", "ulei"],
				nutrients: "Valoare energetica: 211 kcal, Grasimi: 14.04g din care Acizi Grasi Saturati 0.09g, Glucide: 20.23g din care Zaharuri 0.00g, Proteine: 2.42g, Sare: 0.78g",
				allergens: []
			},
			{
				name: "Salata de sfecla rosie cu hrean",
				weight: "200g/10g",
				ingredients: ["sfecla rosie", "hrean"],
				nutrients: "Valoare energetica: 80 kcal, Grasimi: 0.63g din care Acizi Grasi Saturati 0.05g, Glucide: 15.90g din care Zaharuri 10.80g, Proteine: 2.41g, Sare: 3.05g",
				allergens: []
			},
			{
				name: "Salata bulgareasca",
				weight: "400g",
				ingredients: ["castraveti", "oua", "sunca praga", "rosii cherry", "ardei", "telemea", "salata verde", "masline", "ulei masline"],
				nutrients: "Valoare energetica: 413 kcal, Grasimi: 30.80g din care Acizi Grasi Saturati 9.82g, Glucide: 14.45g din care Zaharuri 0.10g, Proteine: 21.27g, Sare: 5.27g",
				allergens: ["Oua", "Lapte"]
			},
			{
				name: "Salata Casei",
				weight: "500g",
				ingredients: ["cartofi congelati", "rosii", "castraveti", "telemea", "oua", "ulei", "sos caesar", "sunca praga", "masline"],
				nutrients: "Valoare energetica: 1366 kcal, Grasimi: 101.21g din care Acizi Grasi Saturati 12.57g, Glucide: 83.41g din care Zaharuri 1.84g, Proteine: 27.53g, Sare: 4.68g",
				allergens: ["Lapte", "Oua"]
			},
			{
				name: "Salata Caesar",
				weight: "100/300g",
				ingredients: ["piept pui file", "paine", "cascaval", "salata verde", "sos caesar", "rosii cherry"],
				nutrients: "Valoare energetica: 732 kcal, Grasimi: 40.80g din care Acizi Grasi Saturati 11.59g, Glucide: 35.80g din care Zaharuri 0.25g, Proteine: 48.04g, Sare: 3.55g",
				allergens: ["Gluten", "Lapte"]
			}        
		]
	},
	{
		category: "Deserturi",
		entries: [
			{
				name: "Clatite cu dulceata",
				weight: "150g",
				ingredients: ["lapte", "faina", "dulceata", "zahar", "ulei", "oua"],
				nutrients: "Valoare nutritionala: 707 kcal, Grasimi: 17.36g din care Acizi Grasi Saturati 1.96g, Glucide: 118.01g din care Zaharuri 23.76g, Proteine: 13.03g, Sare: 0.48g",
				allergens: ["Lapte", "Gluten", "Oua"]
			},
			{
				name: "Clatite cu nutella",
				weight: "150g",
				ingredients: ["lapte", "faina", "nutella", "zahar", "ulei", "oua"],
				nutrients: "Valoare nutritionala: 874 kcal, Grasimi: 35.36g din care Acizi Grasi Saturati 9.96g, Glucide: 115.99g din care Zaharuri 56.00g, Proteine: 15.68g, Sare: 0.56g",
				allergens: ["Lapte", "Gluten", "Oua"]
			},
			{
				name: "Clatite cu branza si stafide",
				weight: "200g",
				ingredients: ["lapte", "faina", "branza proaspata", "oua", "zahar", "stafide", "smantana", "ulei"],
				nutrients: "Valoare energetica: 805 kcal, Grasimi: 24.04g din care Acizi Grasi Saturati 4.10g, Glucide: 114.59g din care Zaharuri 43.76g, Proteine: 24.95g, Sare: 0.53g",
				allergens: ["Lapte", "Gluten", "Oua", "Sulfiti (dioxid de sulf)"]
			},
			{
				name: "Papanasi cu dulceata si smantana",
				weight: "160/120/120g",
				ingredients: ["faina", "smantana", "dulceata", "ulei", "branza proaspata", "zahar", "oua"],
				nutrients: "Valoare energetica: 2066 kcal, Grasimi: 93.92g din care Acizi Grasi Saturati 10.15g, Glucide: 255.19g din care Zaharuri 34.00g, Proteine: 36.97g, Sare: 0.18g",
				allergens: ["Gluten", "Lapte", "Oua"]
			},
			{
				name: "Inghetata Betty",
				weight: "200g",
				ingredients: ["inghetata", "frisca"],
				nutrients: "Valoare energetica: 525 kcal, Grasimi: 24.20g din care Acizi Grasi Saturati 19.18g, Glucide: 71.77g din care Zaharuri 71.77g, Proteine: 5.12g, Sare: 0.04g",
				allergens: ["Lapte"]
			}
		]
	}
];
