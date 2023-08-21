
	Survey.StylesManager.applyTheme("defaultV2");
	//survey.firstPageIsStarted = true;


var surveyJSON =  {
	"locale": "pl",
	"title":"TOP 50 Gier Wszechczasów (2022)",
	"showProgressBar": "top",
	"questionsOnPageMode":"questionPerPage",
	"pages":[
//page  1
		{
			"name":"TOP50 Ankieta",
			"title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 1",
			"elements":[
				{
				"name": "osoba",
				"title": "Imię/nick:",
				"isRequired":true,
				 "hideNumber": true,
				"type": "text"
				},
				{
					"type":"panel",
					"name":"18XX",
					"title":"18XX (seria)",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"1_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/19/series-18xx\" target=\"_blank\"><img src=\"images/games/1_18xx.jpg\" alt=\"18XX (seria)\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"1",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "1_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{1} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"Kto_Da_Wiecej",
					"title":"Kto Da Więcej?",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"268_image",
					 "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"images/games/268_kto_da_wiecej.jpg\" alt=\"Kto Da Więcej?\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"268",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "268_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{268} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"Pandemic",
					"title":"Pandemic (seria)",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"189_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/3430/game-pandemic\" target=\"_blank\"><img src=\"images/games/189_pandemic.jpg\" alt=\"Pandemic (seria)\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"189",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "189_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{189} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"Blackout_HK",
					"title":"Blackout: Hong Kong",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"27_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/262215/blackout-hong-kong\" target=\"_blank\"><img src=\"images/games/27_blackout_hk.jpg\" alt=\"Blackout: Hong Kong\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"27",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "27_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{27} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"Wendake",
					"title":"Wendake",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"299_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/229265/wendake\" target=\"_blank\"><img src=\"images/games/299_wendake.jpg\" alt=\"Wendake\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"299",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "299_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{299} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"Epoka_Kamienia",
					"title":"Epoka Kamienia",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"78_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/34635/stone-age\" target=\"_blank\"><img src=\"images/games/78_epoka_kamienia.jpg\" alt=\"Epoka Kamienia\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"78",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "78_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{78} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"Scotland_Yard",
					"title":"Scotland Yard",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"232_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/438/scotland-yard\" target=\"_blank\"><img src=\"images/games/232_scotland_yard.jpg\" alt=\"Scotland Yard\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"232",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "232_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{232} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"5sekund",
					"title":"5 sekund",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"2_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/86073/5-second-rule\" target=\"_blank\"><img src=\"images/games/2_5sekund.jpg\" alt=\"5 sekund\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"2",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "2_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{2} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"SW_Rebelia",
					"title":"Star Wars: Rebelia",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"338_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/187645/star-wars-rebellion\" target=\"_blank\"><img src=\"images/games/338_sw_rebelia.jpg\" alt=\"Star Wars: Rebelia\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"338",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "338_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{338} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  },
				  {
					"type":"panel",
					"name":"EXIT",
					"title":"EXIT (seria)",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"82_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/36963/series-exit-game\" target=\"_blank\"><img src=\"images/games/82_exit.jpg\" alt=\"EXIT (seria)\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"82",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"images/icons/5_mini.png"},
					  {"value":"x","imageLink":"images/icons/x_mini.png"}
					 ],
					 "imageHeight":50,
					 "imageWidth":50
					},
					{
					  "type": "boolean",
					  
					  "name": "82_nextyear",
					  "title": "Chcesz ocenić tę grę za rok?",
					  "titleLocation": "default",
					  "labelTrue": "TAK",
					  "labelFalse": "NIE",
					  "defaultValue": true,
					  "visibleIf": "{82} = 'x'",
					  "hideNumber": true
					}
					
				   ]
					
				  }
			]

		},
//page 2		
		{
		   "name":"TOP50 Ankieta",
		   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 1",
		   "elements":[
		   {
				"type":"panel",
				"name":"Glen_More_II",
				"title":"Glen More II: Kroniki",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"348_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/265188/glen-more-ii-chronicles\" target=\"_blank\"><img src=\"images/games/348_glen_more_ii.jpg\" alt=\"Glen More II: Kroniki\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"348",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "348_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{348} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Alhambra",
				"title":"Alhambra",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"13_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/3431/game-alhambra\" target=\"_blank\"><img src=\"images/games/13_alhambra.jpg\" alt=\"Alhambra\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"13",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "13_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{13} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Sprawdzian",
				"title":"Sprawdzian",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"248_image",
				 "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"images/games/248_sprawdzian.jpg\" alt=\"Sprawdzian\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"248",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "248_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{248} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Martwa_Zima",
				"title":"Martwa Zima: Gra Rozdroży",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"156_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/150376/dead-winter-crossroads-game\" target=\"_blank\"><img src=\"images/games/156_martwa_zima.jpg\" alt=\"Martwa Zima: Gra Rozdroży\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"156",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "156_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{156} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Detektyw_Doradczy",
				"title":"Sherlock Holmes: Detektyw doradczy",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"237_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/204305/sherlock-holmes-consulting-detective-jack-ripper-w\" target=\"_blank\"><img src=\"images/games/237_detektyw_doradczy.jpg\" alt=\"Sherlock Holmes: Detektyw doradczy\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"237",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "237_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{237} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"ICECOOL",
				"title":"ICECOOL",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"110_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/177524/icecool\" target=\"_blank\"><img src=\"images/games/110_icecool.jpg\" alt=\"ICECOOL\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"110",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "110_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{110} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Pizza_XXL",
				"title":"Pizza XXL",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"202_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/156930/pizza-xxl\" target=\"_blank\"><img src=\"images/games/202_pizza_xxl.jpg\" alt=\"Pizza XXL\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"202",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "202_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{202} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"PartyTura",
				"title":"PARTYtura",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"194_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/321951/partytura\" target=\"_blank\"><img src=\"images/games/194_partytura.jpg\" alt=\"PARTYtura\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"194",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "194_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{194} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Walking_Dead",
				"title":"The Walking Dead: Card Game",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"279_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/136117/walking-dead-card-game\" target=\"_blank\"><img src=\"images/games/279_walking_dead.jpg\" alt=\"The Walking Dead: Card Game\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"279",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "279_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{279} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"GWT",
				"title":"Great Western Trail",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"102_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/193738/great-western-trail\" target=\"_blank\"><img src=\"images/games/102_gwt.jpg\" alt=\"Great Western Trail\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"102",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "102_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{102} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  
		   ]
		},
//page 3		
			{
		   "name":"TOP50 Ankieta",
		   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 1",
		   "elements":[
		   {
				"type":"panel",
				"name":"Bankrut",
				"title":"Bankrut",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"21_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/5393/wheedle\" target=\"_blank\"><img src=\"images/games/21_bankrut.jpg\" alt=\"Bankrut\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"21",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "21_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{21} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"OM",
				"title":"On Mars",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"182_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/184267/mars\" target=\"_blank\"><img src=\"images/games/182_om.jpg\" alt=\"On Mars\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"182",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "182_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{182} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Newton",
				"title":"Newton",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"170_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/244711/newton\" target=\"_blank\"><img src=\"images/games/170_newton.jpg\" alt=\"Newton\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"170",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "170_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{170} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Bridge",
				"title":"Brydż",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"33_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/2181/bridge\" target=\"_blank\"><img src=\"images/games/33_bridge.jpg\" alt=\"Brydż\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"33",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "33_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{33} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Scythe",
				"title":"Scythe",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"234_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/169786/scythe\" target=\"_blank\"><img src=\"images/games/234_scythe.jpg\" alt=\"Scythe\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"234",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "234_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{234} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Imperial_2030",
				"title":"Imperial 2030",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"113_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/54138/imperial-2030\" target=\"_blank\"><img src=\"images/games/113_imperial_2030.jpg\" alt=\"Imperial 2030\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"113",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "113_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{113} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Tajniacy",
				"title":"Tajniacy (seria)",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"267_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/37062/game-codenames\" target=\"_blank\"><img src=\"images/games/267_tajniacy.jpg\" alt=\"Tajniacy (seria)\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"267",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "267_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{267} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Ogrodek",
				"title":"Ogródek",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"181_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/204027/cottage-garden\" target=\"_blank\"><img src=\"images/games/181_ogrodek.jpg\" alt=\"Ogródek\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"181",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "181_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{181} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Belfort",
				"title":"Belfort",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"23_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/50750/belfort\" target=\"_blank\"><img src=\"images/games/23_belfort.jpg\" alt=\"Belfort\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"23",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "23_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{23} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Zgadnij_Kto",
				"title":"Zgadnij kto to?",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"324_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/4143/guess-who\" target=\"_blank\"><img src=\"images/games/324_zgadnij_kto.jpg\" alt=\"Zgadnij kto to?\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"324",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "324_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{324} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  
		   ]
		},
//page 4
		{
		   "name":"TOP50 Ankieta",
		   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 1",
		   "elements":[
		   {
				"type":"panel",
				"name":"Sigismundus",
				"title":"Sigismundus Augustus: Dei gratia rex Poloniae",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"239_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/133534/sigismundus-augustus-dei-gratia-rex-poloniae\" target=\"_blank\"><img src=\"images/games/239_sigismundus.jpg\" alt=\"Sigismundus Augustus: Dei gratia rex Poloniae\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"239",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "239_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{239} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Ciasteczkowe_potworki",
				"title":"Ciasteczkowe potworki",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"42_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/179794/me-want-cookies\" target=\"_blank\"><img src=\"images/games/42_ciasteczkowe_potworki.jpg\" alt=\"Ciasteczkowe potworki\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"42",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "42_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{42} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Tainted_Grail",
				"title":"Tainted Grail",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"333_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/264220/tainted-grail-fall-avalon\" target=\"_blank\"><img src=\"images/games/333_tainted_grail.jpg\" alt=\"Tainted Grail\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"333",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "333_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{333} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Black_Angel",
				"title":"Black Angel",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"25_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/230244/black-angel\" target=\"_blank\"><img src=\"images/games/25_black_angel.jpg\" alt=\"Black Angel\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"25",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "25_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{25} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Hobbit",
				"title":"Hobbit: Gra Karciana",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"108_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/126444/hobbit-card-game\" target=\"_blank\"><img src=\"images/games/108_hobbit.jpg\" alt=\"Hobbit: Gra Karciana\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"108",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "108_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{108} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Magazyn51",
				"title":"Magazyn 51",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"148_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/177702/warehouse-51\" target=\"_blank\"><img src=\"images/games/148_magazyn51.jpg\" alt=\"Magazyn 51\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"148",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "148_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{148} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Thunderstone",
				"title":"Kamień Gromu",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"122_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/53953/thunderstone\" target=\"_blank\"><img src=\"images/games/122_thunderstone.jpg\" alt=\"Kamień Gromu\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"122",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "122_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{122} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Deep_Sea",
				"title":"Deep Sea Adventure",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"61_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/169654/deep-sea-adventure\" target=\"_blank\"><img src=\"images/games/61_deep_sea.jpg\" alt=\"Deep Sea Adventure\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"61",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "61_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{61} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Pandemic_Legacy",
				"title":"Pandemic Legacy (seria)",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"190_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/3430/game-pandemic\" target=\"_blank\"><img src=\"images/games/190_pandemic_legacy.jpg\" alt=\"Pandemic Legacy (seria)\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"190",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "190_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{190} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Podaj_Dalej",
				"title":"Podaj Dalej",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"351_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/46213/telestrations\" target=\"_blank\"><img src=\"images/games/351_podaj_dalej.jpg\" alt=\"Podaj Dalej\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"351",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "351_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{351} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  
		   ]
		},
//page 5	
		{
		   "name":"TOP50 Ankieta",
		   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 1",
		   "elements":[
		   {
				"type":"panel",
				"name":"Keyflower",
				"title":"Keyflower",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"127_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/122515/keyflower\" target=\"_blank\"><img src=\"images/games/127_keyflower.jpg\" alt=\"Keyflower\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"127",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "127_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{127} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Wysokie_Karciane",
				"title":"Wysokie Napięcie: Gra karciana",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"317_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/203780/power-grid-card-game\" target=\"_blank\"><img src=\"images/games/317_wysokie_karciane.jpg\" alt=\"Wysokie Napięcie: Gra karciana\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"317",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "317_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{317} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Wiedenski_Lacznik",
				"title":"Wiedeński Łącznik",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"302_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/299255/vienna-connection\" target=\"_blank\"><img src=\"images/games/302_wiedenski_lacznik.jpg\" alt=\"Wiedeński Łącznik\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"302",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "302_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{302} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Dobble",
				"title":"Dobble",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"66_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/63268/spot-it\" target=\"_blank\"><img src=\"images/games/66_dobble.jpg\" alt=\"Dobble\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"66",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "66_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{66} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"GSC",
				"title":"Ganz schön clever",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"91_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/244522/s-pretty-clever\" target=\"_blank\"><img src=\"images/games/91_gsc.jpg\" alt=\"Ganz schön clever\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"91",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "91_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{91} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Wladca_Areny",
				"title":"Władca Areny",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"309_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/126550/wladca-areny\" target=\"_blank\"><img src=\"images/games/309_wladca_areny.jpg\" alt=\"Władca Areny\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"309",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "309_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{309} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Keyforge",
				"title":"KeyForge: Call of the Archons",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"128_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/257501/keyforge-call-archons\" target=\"_blank\"><img src=\"images/games/128_keyforge.jpg\" alt=\"KeyForge: Call of the Archons\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"128",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "128_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{128} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Pelny_Kurnik",
				"title":"Pełny Kurnik",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"197_image",
				 "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"images/games/197_pelny_kurnik.jpg\" alt=\"Pełny Kurnik\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"197",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "197_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{197} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Patchwork",
				"title":"Patchwork",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"359_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/163412/patchwork\" target=\"_blank\"><img src=\"images/games/359_patchwork.jpg\" alt=\"Patchwork\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"359",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "359_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{359} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Wyscig_do_Renu",
				"title":"Wyścig do Renu",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"319_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/148601/1944-race-rhine\" target=\"_blank\"><img src=\"images/games/319_wyscig_do_renu.jpg\" alt=\"Wyścig do Renu\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"319",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "319_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{319} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  
		   ]
		},
		//page 6
		{
		   "name":"TOP50 Ankieta",
		   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 1",
		   "elements":[
		   {
				"type":"panel",
				"name":"Vulgari_Elo",
				"title":"De Vulgari Eloquentia",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"59_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/275010/de-vulgari-eloquentia-deluxe-edition\" target=\"_blank\"><img src=\"images/games/59_vulgari_elo.jpg\" alt=\"De Vulgari Eloquentia\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"59",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "59_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{59} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Mind",
				"title":"The Mind",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"278_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/244992/mind\" target=\"_blank\"><img src=\"images/games/278_mind.jpg\" alt=\"The Mind\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"278",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "278_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{278} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Lisboa",
				"title":"Lisboa",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"335_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/161533/lisboa\" target=\"_blank\"><img src=\"images/games/335_lisboa.jpg\" alt=\"Lisboa\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"335",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "335_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{335} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Cytadela",
				"title":"Cytadela",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"57_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/478/citadels\" target=\"_blank\"><img src=\"images/games/57_cytadela.jpg\" alt=\"Cytadela\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"57",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "57_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{57} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Mombasa",
				"title":"Mombasa",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"158_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/172386/mombasa\" target=\"_blank\"><img src=\"images/games/158_mombasa.jpg\" alt=\"Mombasa\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"158",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "158_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{158} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Eldritch",
				"title":"Eldritch Horror",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"76_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/146021/eldritch-horror\" target=\"_blank\"><img src=\"images/games/76_eldritch.jpg\" alt=\"Eldritch Horror\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"76",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "76_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{76} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Wirus",
				"title":"Wirus",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"308_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/180020/virus\" target=\"_blank\"><img src=\"images/games/308_wirus.jpg\" alt=\"Wirus\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"308",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "308_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{308} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Carnegie",
				"title":"Carnegie",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"352_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/310873/carnegie\" target=\"_blank\"><img src=\"images/games/352_carnegie.jpg\" alt=\"Carnegie\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"352",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "352_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{352} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Montana",
				"title":"Montana",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"161_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/233955/montana\" target=\"_blank\"><img src=\"images/games/161_montana.jpg\" alt=\"Montana\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"161",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "161_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{161} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  },
			  {
				"type":"panel",
				"name":"Cardline",
				"title":"Cardline: Dinozaury/Marvel",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"38_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/23281/game-cardline\" target=\"_blank\"><img src=\"images/games/38_cardline.jpg\" alt=\"Cardline: Dinozaury/Marvel\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"38",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"images/icons/5_mini.png"},
				  {"value":"x","imageLink":"images/icons/x_mini.png"}
				 ],
				 "imageHeight":50,
				 "imageWidth":50
				},
				{
				  "type": "boolean",
				  
				  "name": "38_nextyear",
				  "title": "Chcesz ocenić tę grę za rok?",
				  "titleLocation": "default",
				  "labelTrue": "TAK",
				  "labelFalse": "NIE",
				  "defaultValue": true,
				  "visibleIf": "{38} = 'x'",
				  "hideNumber": true
				}
				
			   ]
				
			  }
			  
		   ]
		}		
	]
	
};


//survey.firstPageIsStarted = true;

function sendDataToServer(survey, options) {
    //send Ajax request to your web server.
	options.showDataSaving();
	$.ajax({
		url: 'https://script.google.com/macros/s/AKfycbxYC-DeF-667TpNdXRMPeXZaaSb8L6TcHir_VqYRqEPXrFKDNzSbFcz2d6mmZ8BFx0/exec',
		type: 'post',
		data: JSON.stringify(survey.data),
		headers: {
			"Content-Type": "text/plain"
		},
		processData: false,
		complete: function(res, status) {
			if (status == 'success') {
				options.showDataSavingSuccess();
			}else {
				options.showDataSavingError();
			}
		},
	});

	//alert("The results are:" + JSON.stringify(survey.data));
}


var survey = new Survey.Model(surveyJSON);

$("#surveyElement").Survey({
    model: survey,
    onComplete: sendDataToServer
});
