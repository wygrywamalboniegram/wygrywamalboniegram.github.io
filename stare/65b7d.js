
	Survey.StylesManager.applyTheme("defaultV2");
	//survey.firstPageIsStarted = true;


var surveyJSON =  {
	"locale": "pl",
	"title":"TOP 50 Gier Wszechczasów (2024)",
	"showProgressBar": "top",
	"pages":[
//page  1
		{
			"name":"TOP50 Ankieta",
			"title":"TOP 50 Gier Wszechczasów (2024)",
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
					"visibleIf": "!({1} = 'not')",
					"name":"18XX",
					"title":"18XX (seria)",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"1_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/19/series-18xx\" target=\"_blank\"><img src=\"../images/games/1_18xx.jpg\" alt=\"18XX (seria)\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"1",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({268} = 'not')",
					"name":"Kto_Da_Wiecej",
					"title":"Kto Da Więcej?",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"268_image",
					 "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"../images/games/268_kto_da_wiecej.jpg\" alt=\"Kto Da Więcej?\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"268",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({189} = 'not')",
					"name":"Pandemic",
					"title":"Pandemic (seria)",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"189_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/3430/game-pandemic\" target=\"_blank\"><img src=\"../images/games/189_pandemic.jpg\" alt=\"Pandemic (seria)\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"189",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({27} = 'not')",
					"name":"Blackout_HK",
					"title":"Blackout: Hong Kong",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"27_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/262215/blackout-hong-kong\" target=\"_blank\"><img src=\"../images/games/27_blackout_hk.jpg\" alt=\"Blackout: Hong Kong\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"27",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({299} = 'not')",
					"name":"Wendake",
					"title":"Wendake",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"299_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/229265/wendake\" target=\"_blank\"><img src=\"../images/games/299_wendake.jpg\" alt=\"Wendake\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"299",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({78} = 'not')",
					"name":"Epoka_Kamienia",
					"title":"Epoka Kamienia",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"78_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/34635/stone-age\" target=\"_blank\"><img src=\"../images/games/78_epoka_kamienia.jpg\" alt=\"Epoka Kamienia\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"78",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({232} = 'not')",
					"name":"Scotland_Yard",
					"title":"Scotland Yard",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"232_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/438/scotland-yard\" target=\"_blank\"><img src=\"../images/games/232_scotland_yard.jpg\" alt=\"Scotland Yard\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"232",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({2} = 'not')",
					"name":"5sekund",
					"title":"5 sekund",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"2_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/86073/5-second-rule\" target=\"_blank\"><img src=\"../images/games/2_5sekund.jpg\" alt=\"5 sekund\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"2",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({338} = 'not')",
					"name":"SW_Rebelia",
					"title":"Star Wars: Rebelia",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"338_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgame/187645/star-wars-rebellion\" target=\"_blank\"><img src=\"../images/games/338_sw_rebelia.jpg\" alt=\"Star Wars: Rebelia\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"338",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
					"visibleIf": "!({82} = 'not')",
					"name":"EXIT",
					"title":"EXIT (seria)",
					"isRequired":true,
					"questionsOrder": "initial",
					"showNumber":true,
					"elements":[
					{
					 "type":"html",
					 "name":"82_image",
					 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/36963/series-exit-game\" target=\"_blank\"><img src=\"../images/games/82_exit.jpg\" alt=\"EXIT (seria)\" style=\"max-width:95%;\"> </a>"
					},
					{
					 "type":"imagepicker",
					 "name":"82",
					 "titleLocation":"hidden",
					 "defaultValue":"x",
					 "isRequired":true,
					 "choices":[
					  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
					  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
					  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
					 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
					  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
					  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				  },
				{
				"type":"panel",
				"visibleIf": "!({348} = 'not')",
				"name":"Glen_More_II",
				"title":"Glen More II: Kroniki",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"348_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/265188/glen-more-ii-chronicles\" target=\"_blank\"><img src=\"../images/games/348_glen_more_ii.jpg\" alt=\"Glen More II: Kroniki\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"348",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({13} = 'not')",
				"name":"Alhambra",
				"title":"Alhambra",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"13_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/3431/game-alhambra\" target=\"_blank\"><img src=\"../images/games/13_alhambra.jpg\" alt=\"Alhambra\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"13",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({248} = 'not')",
				"name":"Sprawdzian",
				"title":"Sprawdzian",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"248_image",
				 "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"../images/games/248_sprawdzian.jpg\" alt=\"Sprawdzian\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"248",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({156} = 'not')",
				"name":"Martwa_Zima",
				"title":"Martwa Zima: Gra Rozdroży",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"156_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/150376/dead-winter-crossroads-game\" target=\"_blank\"><img src=\"../images/games/156_martwa_zima.jpg\" alt=\"Martwa Zima: Gra Rozdroży\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"156",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({237} = 'not')",
				"name":"Detektyw_Doradczy",
				"title":"Sherlock Holmes: Detektyw doradczy",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"237_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/204305/sherlock-holmes-consulting-detective-jack-ripper-w\" target=\"_blank\"><img src=\"../images/games/237_detektyw_doradczy.jpg\" alt=\"Sherlock Holmes: Detektyw doradczy\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"237",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({110} = 'not')",
				"name":"ICECOOL",
				"title":"ICECOOL",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"110_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/177524/icecool\" target=\"_blank\"><img src=\"../images/games/110_icecool.jpg\" alt=\"ICECOOL\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"110",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({202} = 'not')",
				"name":"Pizza_XXL",
				"title":"Pizza XXL",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"202_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/156930/pizza-xxl\" target=\"_blank\"><img src=\"../images/games/202_pizza_xxl.jpg\" alt=\"Pizza XXL\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"202",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({194} = 'not')",
				"name":"PartyTura",
				"title":"PARTYtura",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"194_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/321951/partytura\" target=\"_blank\"><img src=\"../images/games/194_partytura.jpg\" alt=\"PARTYtura\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"194",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({279} = 'not')",
				"name":"Walking_Dead",
				"title":"The Walking Dead: Card Game",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"279_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/136117/walking-dead-card-game\" target=\"_blank\"><img src=\"../images/games/279_walking_dead.jpg\" alt=\"The Walking Dead: Card Game\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"279",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({102} = 'not')",
				"name":"GWT",
				"title":"Great Western Trail",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"102_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/193738/great-western-trail\" target=\"_blank\"><img src=\"../images/games/102_gwt.jpg\" alt=\"Great Western Trail\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"102",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
     		  {
				"type":"panel",
				"visibleIf": "!({21} = 'not')",
				"name":"Bankrut",
				"title":"Bankrut",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"21_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/5393/wheedle\" target=\"_blank\"><img src=\"../images/games/21_bankrut.jpg\" alt=\"Bankrut\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"21",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({182} = 'not')",
				"name":"OM",
				"title":"On Mars",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"182_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/184267/mars\" target=\"_blank\"><img src=\"../images/games/182_om.jpg\" alt=\"On Mars\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"182",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({170} = 'not')",
				"name":"Newton",
				"title":"Newton",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"170_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/244711/newton\" target=\"_blank\"><img src=\"../images/games/170_newton.jpg\" alt=\"Newton\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"170",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({33} = 'not')",
				"name":"Bridge",
				"title":"Brydż",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"33_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/2181/bridge\" target=\"_blank\"><img src=\"../images/games/33_bridge.jpg\" alt=\"Brydż\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"33",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({234} = 'not')",
				"name":"Scythe",
				"title":"Scythe",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"234_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/169786/scythe\" target=\"_blank\"><img src=\"../images/games/234_scythe.jpg\" alt=\"Scythe\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"234",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({113} = 'not')",
				"name":"Imperial_2030",
				"title":"Imperial 2030",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"113_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/54138/imperial-2030\" target=\"_blank\"><img src=\"../images/games/113_imperial_2030.jpg\" alt=\"Imperial 2030\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"113",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({267} = 'not')",
				"name":"Tajniacy",
				"title":"Tajniacy (seria)",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"267_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/37062/game-codenames\" target=\"_blank\"><img src=\"../images/games/267_tajniacy.jpg\" alt=\"Tajniacy (seria)\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"267",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({181} = 'not')",
				"name":"Ogrodek",
				"title":"Ogródek",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"181_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/204027/cottage-garden\" target=\"_blank\"><img src=\"../images/games/181_ogrodek.jpg\" alt=\"Ogródek\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"181",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({23} = 'not')",
				"name":"Belfort",
				"title":"Belfort",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"23_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/50750/belfort\" target=\"_blank\"><img src=\"../images/games/23_belfort.jpg\" alt=\"Belfort\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"23",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({324} = 'not')",
				"name":"Zgadnij_Kto",
				"title":"Zgadnij kto to?",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"324_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/4143/guess-who\" target=\"_blank\"><img src=\"../images/games/324_zgadnij_kto.jpg\" alt=\"Zgadnij kto to?\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"324",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
		     {
				"type":"panel",
				"visibleIf": "!({239} = 'not')",
				"name":"Sigismundus",
				"title":"Sigismundus Augustus: Dei gratia rex Poloniae",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"239_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/133534/sigismundus-augustus-dei-gratia-rex-poloniae\" target=\"_blank\"><img src=\"../images/games/239_sigismundus.jpg\" alt=\"Sigismundus Augustus: Dei gratia rex Poloniae\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"239",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({42} = 'not')",
				"name":"Ciasteczkowe_potworki",
				"title":"Ciasteczkowe potworki",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"42_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/179794/me-want-cookies\" target=\"_blank\"><img src=\"../images/games/42_ciasteczkowe_potworki.jpg\" alt=\"Ciasteczkowe potworki\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"42",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({333} = 'not')",
				"name":"Tainted_Grail",
				"title":"Tainted Grail",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"333_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/264220/tainted-grail-fall-avalon\" target=\"_blank\"><img src=\"../images/games/333_tainted_grail.jpg\" alt=\"Tainted Grail\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"333",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({25} = 'not')",
				"name":"Black_Angel",
				"title":"Black Angel",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"25_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/230244/black-angel\" target=\"_blank\"><img src=\"../images/games/25_black_angel.jpg\" alt=\"Black Angel\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"25",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({108} = 'not')",
				"name":"Hobbit",
				"title":"Hobbit: Gra Karciana",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"108_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/126444/hobbit-card-game\" target=\"_blank\"><img src=\"../images/games/108_hobbit.jpg\" alt=\"Hobbit: Gra Karciana\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"108",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({148} = 'not')",
				"name":"Magazyn51",
				"title":"Magazyn 51",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"148_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/177702/warehouse-51\" target=\"_blank\"><img src=\"../images/games/148_magazyn51.jpg\" alt=\"Magazyn 51\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"148",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({122} = 'not')",
				"name":"Thunderstone",
				"title":"Kamień Gromu",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"122_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/53953/thunderstone\" target=\"_blank\"><img src=\"../images/games/122_thunderstone.jpg\" alt=\"Kamień Gromu\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"122",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({61} = 'not')",
				"name":"Deep_Sea",
				"title":"Deep Sea Adventure",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"61_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/169654/deep-sea-adventure\" target=\"_blank\"><img src=\"../images/games/61_deep_sea.jpg\" alt=\"Deep Sea Adventure\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"61",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({190} = 'not')",
				"name":"Pandemic_Legacy",
				"title":"Pandemic Legacy (seria)",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"190_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/3430/game-pandemic\" target=\"_blank\"><img src=\"../images/games/190_pandemic_legacy.jpg\" alt=\"Pandemic Legacy (seria)\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"190",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({351} = 'not')",
				"name":"Podaj_Dalej",
				"title":"Podaj Dalej",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"351_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/46213/telestrations\" target=\"_blank\"><img src=\"../images/games/351_podaj_dalej.jpg\" alt=\"Podaj Dalej\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"351",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
		   {
				"type":"panel",
				"visibleIf": "!({127} = 'not')",
				"name":"Keyflower",
				"title":"Keyflower",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"127_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/122515/keyflower\" target=\"_blank\"><img src=\"../images/games/127_keyflower.jpg\" alt=\"Keyflower\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"127",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({317} = 'not')",
				"name":"Wysokie_Karciane",
				"title":"Wysokie Napięcie: Gra karciana",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"317_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/203780/power-grid-card-game\" target=\"_blank\"><img src=\"../images/games/317_wysokie_karciane.jpg\" alt=\"Wysokie Napięcie: Gra karciana\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"317",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({302} = 'not')",
				"name":"Wiedenski_Lacznik",
				"title":"Wiedeński Łącznik",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"302_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/299255/vienna-connection\" target=\"_blank\"><img src=\"../images/games/302_wiedenski_lacznik.jpg\" alt=\"Wiedeński Łącznik\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"302",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({66} = 'not')",
				"name":"Dobble",
				"title":"Dobble",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"66_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/63268/spot-it\" target=\"_blank\"><img src=\"../images/games/66_dobble.jpg\" alt=\"Dobble\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"66",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({91} = 'not')",
				"name":"GSC",
				"title":"Ganz schön clever",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"91_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/244522/s-pretty-clever\" target=\"_blank\"><img src=\"../images/games/91_gsc.jpg\" alt=\"Ganz schön clever\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"91",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({309} = 'not')",
				"name":"Wladca_Areny",
				"title":"Władca Areny",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"309_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/126550/wladca-areny\" target=\"_blank\"><img src=\"../images/games/309_wladca_areny.jpg\" alt=\"Władca Areny\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"309",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({128} = 'not')",
				"name":"Keyforge",
				"title":"KeyForge: Call of the Archons",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"128_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/257501/keyforge-call-archons\" target=\"_blank\"><img src=\"../images/games/128_keyforge.jpg\" alt=\"KeyForge: Call of the Archons\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"128",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({197} = 'not')",
				"name":"Pelny_Kurnik",
				"title":"Pełny Kurnik",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"197_image",
				 "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"../images/games/197_pelny_kurnik.jpg\" alt=\"Pełny Kurnik\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"197",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({359} = 'not')",
				"name":"Patchwork",
				"title":"Patchwork",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"359_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/163412/patchwork\" target=\"_blank\"><img src=\"../images/games/359_patchwork.jpg\" alt=\"Patchwork\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"359",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({319} = 'not')",
				"name":"Wyscig_do_Renu",
				"title":"Wyścig do Renu",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"319_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/148601/1944-race-rhine\" target=\"_blank\"><img src=\"../images/games/319_wyscig_do_renu.jpg\" alt=\"Wyścig do Renu\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"319",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
		   {
				"type":"panel",
				"visibleIf": "!({59} = 'not')",
				"name":"Vulgari_Elo",
				"title":"De Vulgari Eloquentia",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"59_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/275010/de-vulgari-eloquentia-deluxe-edition\" target=\"_blank\"><img src=\"../images/games/59_vulgari_elo.jpg\" alt=\"De Vulgari Eloquentia\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"59",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({278} = 'not')",
				"name":"Mind",
				"title":"The Mind",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"278_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/244992/mind\" target=\"_blank\"><img src=\"../images/games/278_mind.jpg\" alt=\"The Mind\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"278",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({335} = 'not')",
				"name":"Lisboa",
				"title":"Lisboa",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"335_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/161533/lisboa\" target=\"_blank\"><img src=\"../images/games/335_lisboa.jpg\" alt=\"Lisboa\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"335",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({57} = 'not')",
				"name":"Cytadela",
				"title":"Cytadela",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"57_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/478/citadels\" target=\"_blank\"><img src=\"../images/games/57_cytadela.jpg\" alt=\"Cytadela\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"57",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({158} = 'not')",
				"name":"Mombasa",
				"title":"Mombasa",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"158_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/172386/mombasa\" target=\"_blank\"><img src=\"../images/games/158_mombasa.jpg\" alt=\"Mombasa\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"158",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({76} = 'not')",
				"name":"Eldritch",
				"title":"Eldritch Horror",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"76_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/146021/eldritch-horror\" target=\"_blank\"><img src=\"../images/games/76_eldritch.jpg\" alt=\"Eldritch Horror\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"76",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({308} = 'not')",
				"name":"Wirus",
				"title":"Wirus",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"308_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/180020/virus\" target=\"_blank\"><img src=\"../images/games/308_wirus.jpg\" alt=\"Wirus\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"308",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({352} = 'not')",
				"name":"Carnegie",
				"title":"Carnegie",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"352_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/310873/carnegie\" target=\"_blank\"><img src=\"../images/games/352_carnegie.jpg\" alt=\"Carnegie\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"352",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({161} = 'not')",
				"name":"Montana",
				"title":"Montana",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"161_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgame/233955/montana\" target=\"_blank\"><img src=\"../images/games/161_montana.jpg\" alt=\"Montana\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"161",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				"visibleIf": "!({38} = 'not')",
				"name":"Cardline",
				"title":"Cardline: Dinozaury/Marvel",
				"isRequired":true,
				"questionsOrder": "initial",
				"showNumber":true,
				"elements":[
				{
				 "type":"html",
				 "name":"38_image",
				 "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/23281/game-cardline\" target=\"_blank\"><img src=\"../images/games/38_cardline.jpg\" alt=\"Cardline: Dinozaury/Marvel\" style=\"max-width:95%;\"> </a>"
				},
				{
				 "type":"imagepicker",
				 "name":"38",
				 "titleLocation":"hidden",
				 "defaultValue":"x",
				 "isRequired":true,
				 "choices":[
				  {"value":"t1","imageLink":"../images/icons/1_mini.png"},
				  {"value":"t2","imageLink":"../images/icons/2_mini.png"},
				  {"value":"t3","imageLink":"../images/icons/3_mini.png"},
				 {"value":"t4","imageLink":"../images/icons/4_mini.png"},
				  {"value":"t5","imageLink":"../images/icons/5_mini.png"},
				  {"value":"x","imageLink":"../images/icons/x_mini.png"}
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
				
			  },
   {
        "type":"panel",
		"visibleIf": "!({172} = 'not')",
        "name":"Norderwind",
        "title":"Norderwind",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"172_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/153425/north-wind\" target=\"_blank\"><img src=\"../images/games/172_norderwind.jpg\" alt=\"Norderwind\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"172",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "172_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{172} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({288} = 'not')",
        "name":"1000",
        "title":"Tysiąc",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"288_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/42499/1000\" target=\"_blank\"><img src=\"../images/games/288_1000.jpg\" alt=\"Tysiąc\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"288",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "288_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{288} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({7} = 'not')",
        "name":"Adrenalina",
        "title":"Adrenalina",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"7_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/202408/adrenaline\" target=\"_blank\"><img src=\"../images/games/7_adrenalina.jpg\" alt=\"Adrenalina\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"7",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "7_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{7} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({163} = 'not')",
        "name":"Na_Ratunek",
        "title":"Na ratunek!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"163_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/255803/na-ratunek\" target=\"_blank\"><img src=\"../images/games/163_na_ratunek.jpg\" alt=\"Na ratunek!\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"163",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "163_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{163} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({273} = 'not')",
        "name":"Teotihuacan",
        "title":"Teotihuacan: Miasto Bogów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"273_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/229853/teotihuacan-city-gods\" target=\"_blank\"><img src=\"../images/games/273_teotihuacan.jpg\" alt=\"Teotihuacan: Miasto Bogów\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"273",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "273_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{273} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({250} = 'not')",
        "name":"Statki",
        "title":"Statki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"250_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2425/battleship\" target=\"_blank\"><img src=\"../images/games/250_statki.jpg\" alt=\"Statki\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"250",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "250_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{250} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({200} = 'not')",
        "name":"5_Tribes",
        "title":"Pięć Klanów: Dżiny Naqali",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"200_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/157354/five-tribes\" target=\"_blank\"><img src=\"../images/games/200_5_tribes.jpg\" alt=\"Pięć Klanów: Dżiny Naqali\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"200",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "200_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{200} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({56} = 'not')",
        "name":"CV",
        "title":"CV",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"56_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/143986/cv\" target=\"_blank\"><img src=\"../images/games/56_cv.jpg\" alt=\"CV\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"56",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "56_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{56} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({98} = 'not')",
        "name":"GH",
        "title":"Gloomhaven",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"98_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/174430/gloomhaven\" target=\"_blank\"><img src=\"../images/games/98_gh.jpg\" alt=\"Gloomhaven\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"98",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "98_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{98} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({62} = 'not')",
        "name":"Descent",
        "title":"Descent",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"62_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/104162/descent-journeys-dark-second-edition\" target=\"_blank\"><img src=\"../images/games/62_descent.jpg\" alt=\"Descent\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"62",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "62_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{62} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      
   {
        "type":"panel",
				"visibleIf": "!({174} = 'not')",
        "name":"NWS",
        "title":"Nowy wspaniały świat",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"174_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/271324/its-wonderful-world\" target=\"_blank\"><img src=\"../images/games/174_nws.jpg\" alt=\"Nowy wspaniały świat\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"174",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "174_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{174} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({314} = 'not')",
        "name":"El_Dorado",
        "title":"Wyprawa do El Dorado",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"314_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/217372/quest-el-dorado\" target=\"_blank\"><img src=\"../images/games/314_el_dorado.jpg\" alt=\"Wyprawa do El Dorado\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"314",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "314_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{314} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({72} = 'not')",
        "name":"Dungeon_Alliance",
        "title":"Dungeon Alliance",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"72_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/209660/dungeon-alliance\" target=\"_blank\"><img src=\"../images/games/72_dungeon_alliance.jpg\" alt=\"Dungeon Alliance\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"72",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "72_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{72} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({167} = 'not')",
        "name":"Nemesis",
        "title":"Nemesis",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"167_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/167355/nemesis\" target=\"_blank\"><img src=\"../images/games/167_nemesis.jpg\" alt=\"Nemesis\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"167",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "167_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{167} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({81} = 'not')",
        "name":"Ewolucja",
        "title":"Ewolucja: Pochodzenie gatunków",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"81_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/71021/evolution-origin-species\" target=\"_blank\"><img src=\"../images/games/81_ewolucja.jpg\" alt=\"Ewolucja: Pochodzenie gatunków\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"81",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "81_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{81} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({208} = 'not')",
        "name":"Luxtorpeda",
        "title":"Polska Luxtorpeda",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"208_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/32405/alles-tomate\" target=\"_blank\"><img src=\"../images/games/208_luxtorpeda.jpg\" alt=\"Polska Luxtorpeda\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"208",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "208_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{208} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({298} = 'not')",
        "name":"Way_of_the_Panda",
        "title":"Way of the Panda",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"298_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/204575/way-panda\" target=\"_blank\"><img src=\"../images/games/298_way_of_the_panda.jpg\" alt=\"Way of the Panda\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"298",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "298_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{298} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({254} = 'not')",
        "name":"Suburbia",
        "title":"Suburbia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"254_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/123260/suburbia\" target=\"_blank\"><img src=\"../images/games/254_suburbia.jpg\" alt=\"Suburbia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"254",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "254_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{254} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({150} = 'not')",
        "name":"MiM",
        "title":"Magia i Miecz",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"150_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/714/talisman\" target=\"_blank\"><img src=\"../images/games/150_mim.jpg\" alt=\"Magia i Miecz\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"150",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "150_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{150} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({244} = 'not')",
        "name":"Space_Alert",
        "title":"Space Alert",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"244_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/38453/space-alert\" target=\"_blank\"><img src=\"../images/games/244_space_alert.jpg\" alt=\"Space Alert\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"244",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "244_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{244} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
   {
        "type":"panel",
				"visibleIf": "!({223} = 'not')",
        "name":"Rummikub",
        "title":"Rummikub",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"223_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/811/rummikub\" target=\"_blank\"><img src=\"../images/games/223_rummikub.jpg\" alt=\"Rummikub\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"223",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "223_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{223} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({358} = 'not')",
        "name":"London",
        "title":"Londyn",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"358_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/236191/london-second-edition\" target=\"_blank\"><img src=\"../images/games/358_london.jpg\" alt=\"Londyn\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"358",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "358_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{358} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({256} = 'not')",
        "name":"Super_Kartkowka",
        "title":"Super Kartkówka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"256_image",
         "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"../images/games/256_super_kartkowka.jpg\" alt=\"Super Kartkówka\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"256",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "256_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{256} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({342} = 'not')",
        "name":"Dice_Settlers",
        "title":"Dice Settlers",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"342_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/230267/dice-settlers\" target=\"_blank\"><img src=\"../images/games/342_dice_settlers.jpg\" alt=\"Dice Settlers\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"342",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "342_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{342} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({326} = 'not')",
        "name":"ZigZak",
        "title":"ZigZak: Skoki narciarskie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"326_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/170675/zigzak-skoki-narciarskie\" target=\"_blank\"><img src=\"../images/games/326_zigzak.jpg\" alt=\"ZigZak: Skoki narciarskie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"326",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "326_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{326} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({19} = 'not')",
        "name":"Aquasphere",
        "title":"Badacze Głębin",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"19_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/159508/aquasphere\" target=\"_blank\"><img src=\"../images/games/19_aquasphere.jpg\" alt=\"Badacze Głębin\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"19",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "19_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{19} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({243} = 'not')",
        "name":"Smart_Ass",
        "title":"Smart Ass",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"243_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/27389/smart-ass\" target=\"_blank\"><img src=\"../images/games/243_smart_ass.jpg\" alt=\"Smart Ass\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"243",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "243_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{243} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({67} = 'not')",
        "name":"Dobry_Glina",
        "title":"Dobry Glina Zły Glina",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"67_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/153064/good-cop-bad-cop\" target=\"_blank\"><img src=\"../images/games/67_dobry_glina.jpg\" alt=\"Dobry Glina Zły Glina\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"67",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "67_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{67} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({323} = 'not')",
        "name":"CoB",
        "title":"Zamki Burgundii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"323_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/84876/castles-burgundy\" target=\"_blank\"><img src=\"../images/games/323_cob.jpg\" alt=\"Zamki Burgundii\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"323",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "323_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{323} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({347} = 'not')",
        "name":"Startups",
        "title":"Startups",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"347_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/223770/startups\" target=\"_blank\"><img src=\"../images/games/347_startups.jpg\" alt=\"Startups\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"347",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "347_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{347} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
   {
        "type":"panel",
				"visibleIf": "!({209} = 'not')",
        "name":"Potwory_Szafa",
        "title":"Potwory do szafy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"209_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/43578/monster-chase\" target=\"_blank\"><img src=\"../images/games/209_potwory_szafa.jpg\" alt=\"Potwory do szafy\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"209",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "209_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{209} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({224} = 'not')",
        "name":"Runewars",
        "title":"Runewars",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"224_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/59294/runewars\" target=\"_blank\"><img src=\"../images/games/224_runewars.jpg\" alt=\"Runewars\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"224",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "224_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{224} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({207} = 'not')",
        "name":"Pokolenia",
        "title":"Pokolenia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"207_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/104006/village\" target=\"_blank\"><img src=\"../images/games/207_pokolenia.jpg\" alt=\"Pokolenia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"207",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "207_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{207} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({210} = 'not')",
        "name":"Potwory_Tokio",
        "title":"Potwory w Tokio",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"210_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/70323/king-tokyo\" target=\"_blank\"><img src=\"../images/games/210_potwory_tokio.jpg\" alt=\"Potwory w Tokio\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"210",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "210_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{210} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({143} = 'not')",
        "name":"Lifeform",
        "title":"Lifeform",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"143_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/155065/lifeform\" target=\"_blank\"><img src=\"../images/games/143_lifeform.jpg\" alt=\"Lifeform\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"143",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "143_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{143} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({339} = 'not')",
        "name":"Reavers_Midgard",
        "title":"Reavers of Midgard",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"339_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/242684/reavers-midgard\" target=\"_blank\"><img src=\"../images/games/339_reavers_midgard.jpg\" alt=\"Reavers of Midgard\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"339",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "339_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{339} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({199} = 'not')",
        "name":"Pedzace_Zolwie",
        "title":"Pędzące żółwie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"199_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/9441/ribbit\" target=\"_blank\"><img src=\"../images/games/199_pedzace_zolwie.jpg\" alt=\"Pędzące żółwie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"199",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "199_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{199} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({154} = 'not')",
        "name":"Marco_Polo",
        "title":"Marco Polo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"154_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171623/voyages-marco-polo\" target=\"_blank\"><img src=\"../images/games/154_marco_polo.jpg\" alt=\"Marco Polo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"154",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "154_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{154} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({10} = 'not')",
        "name":"Agricola",
        "title":"Agricola",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"10_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/31260/agricola\" target=\"_blank\"><img src=\"../images/games/10_agricola.jpg\" alt=\"Agricola\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"10",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "10_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{10} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({15} = 'not')",
        "name":"Arkwright",
        "title":"Arkwright",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"15_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/154825/arkwright\" target=\"_blank\"><img src=\"../images/games/15_arkwright.jpg\" alt=\"Arkwright\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"15",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "15_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{15} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
   {
        "type":"panel",
				"visibleIf": "!({283} = 'not')",
        "name":"Trismegistus",
        "title":"Trismegistus: Ostateczna formuła",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"283_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/281442/trismegistus-ultimate-formula\" target=\"_blank\"><img src=\"../images/games/283_trismegistus.jpg\" alt=\"Trismegistus: Ostateczna formuła\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"283",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "283_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{283} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({123} = 'not')",
        "name":"Kanban",
        "title":"Kanban",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"123_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/284378/kanban-ev\" target=\"_blank\"><img src=\"../images/games/123_kanban.jpg\" alt=\"Kanban\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"123",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "123_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{123} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({272} = 'not')",
        "name":"Teomachia",
        "title":"Teomachia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"272_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/129951/teomachia\" target=\"_blank\"><img src=\"../images/games/272_teomachia.jpg\" alt=\"Teomachia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"272",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "272_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{272} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({149} = 'not')",
        "name":"MK",
        "title":"Mage Knight: Gra Planszowa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"149_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/96848/mage-knight-board-game\" target=\"_blank\"><img src=\"../images/games/149_mk.jpg\" alt=\"Mage Knight: Gra Planszowa\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"149",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "149_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{149} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({58} = 'not')",
        "name":"TtA",
        "title":"Cywilizacja: Poprzez Wieki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"58_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/182028/through-ages-new-story-civilization\" target=\"_blank\"><img src=\"../images/games/58_tta.jpg\" alt=\"Cywilizacja: Poprzez Wieki\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"58",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "58_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{58} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({134} = 'not')",
        "name":"Koncept",
        "title":"Koncept",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"134_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/147151/concept\" target=\"_blank\"><img src=\"../images/games/134_koncept.jpg\" alt=\"Koncept\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"134",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "134_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{134} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({63} = 'not')",
        "name":"Detektyw",
        "title":"Detektyw: Kryminalna gra planszowa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"63_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/223321/detective-modern-crime-board-game\" target=\"_blank\"><img src=\"../images/games/63_detektyw.jpg\" alt=\"Detektyw: Kryminalna gra planszowa\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"63",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "63_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{63} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({275} = 'not')",
        "name":"TM",
        "title":"Terraformacja Marsa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"275_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/167791/terraforming-mars\" target=\"_blank\"><img src=\"../images/games/275_tm.jpg\" alt=\"Terraformacja Marsa\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"275",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "275_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{275} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({47} = 'not')",
        "name":"Cluedo",
        "title":"Cluedo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"47_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1294/clue\" target=\"_blank\"><img src=\"../images/games/47_cluedo.jpg\" alt=\"Cluedo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"47",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "47_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{47} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({70} = 'not')",
        "name":"Dominion",
        "title":"Dominion: Rozdarte Królestwo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"70_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/36218/dominion\" target=\"_blank\"><img src=\"../images/games/70_dominion.jpg\" alt=\"Dominion: Rozdarte Królestwo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"70",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "70_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{70} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
   {
        "type":"panel",
				"visibleIf": "!({175} = 'not')",
        "name":"OMGoods",
        "title":"O mój Zboże!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"175_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/183840/oh-my-goods\" target=\"_blank\"><img src=\"../images/games/175_omgoods.jpg\" alt=\"O mój Zboże!\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"175",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "175_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{175} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({177} = 'not')",
        "name":"Ninja_Camp",
        "title":"Obóz Ninja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"177_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/176565/ninja-camp\" target=\"_blank\"><img src=\"../images/games/177_ninja_camp.jpg\" alt=\"Obóz Ninja\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"177",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "177_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{177} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({18} = 'not')",
        "name":"Azul",
        "title":"Azul (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"18_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/57039/game-azul\" target=\"_blank\"><img src=\"../images/games/18_azul.jpg\" alt=\"Azul (seria)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"18",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "18_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{18} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({166} = 'not')",
        "name":"Nehemiah",
        "title":"Nehemiah",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"166_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/129225/nehemiah\" target=\"_blank\"><img src=\"../images/games/166_nehemiah.jpg\" alt=\"Nehemiah\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"166",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "166_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{166} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({74} = 'not')",
        "name":"Eclipse",
        "title":"Eclipse",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"74_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/72125/eclipse\" target=\"_blank\"><img src=\"../images/games/74_eclipse.jpg\" alt=\"Eclipse\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"74",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "74_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{74} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({340} = 'not')",
        "name":"WoT_Rush",
        "title":"World of Tanks: Rush",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"340_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/147030/world-tanks-rush\" target=\"_blank\"><img src=\"../images/games/340_wot_rush.jpg\" alt=\"World of Tanks: Rush\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"340",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "340_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{340} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({264} = 'not')",
        "name":"TIME_Stories",
        "title":"T.I.M.E. Stories",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"264_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/146508/time-stories\" target=\"_blank\"><img src=\"../images/games/264_time_stories.jpg\" alt=\"T.I.M.E. Stories\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"264",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "264_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{264} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({97} = 'not')",
        "name":"Gizmos",
        "title":"Gizmos",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"97_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/246192/gizmos\" target=\"_blank\"><img src=\"../images/games/97_gizmos.jpg\" alt=\"Gizmos\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"97",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "97_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{97} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({3} = 'not')",
        "name":"51Stan",
        "title":"51. Stan: Master Set",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"3_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/192458/51st-state-master-set\" target=\"_blank\"><img src=\"../images/games/3_51stan.jpg\" alt=\"51. Stan: Master Set\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"3",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "3_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{3} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({301} = 'not')",
        "name":"Wiarusi",
        "title":"Wiarusi",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"301_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171668/grizzled\" target=\"_blank\"><img src=\"../images/games/301_wiarusi.jpg\" alt=\"Wiarusi\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"301",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "301_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{301} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
   {
        "type":"panel",
				"visibleIf": "!({277} = 'not')",
        "name":"Gallerist",
        "title":"The Gallerist",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"277_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/125153/gallerist\" target=\"_blank\"><img src=\"../images/games/277_gallerist.jpg\" alt=\"The Gallerist\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"277",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "277_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{277} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({141} = 'not')",
        "name":"LE_Alien",
        "title":"Legendary Encounters: An Alien Deck Building Game",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"141_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/146652/legendary-encounters-alien-deck-building-game\" target=\"_blank\"><img src=\"../images/games/141_le_alien.jpg\" alt=\"Legendary Encounters: An Alien Deck Building Game\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"141",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "141_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{141} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({193} = 'not')",
        "name":"Pantheon",
        "title":"Pantheon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"193_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/94480/pantheon\" target=\"_blank\"><img src=\"../images/games/193_pantheon.jpg\" alt=\"Pantheon\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"193",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "193_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{193} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({26} = 'not')",
        "name":"Black_Orchestra",
        "title":"Black Orchestra",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"26_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/156858/black-orchestra\" target=\"_blank\"><img src=\"../images/games/26_black_orchestra.jpg\" alt=\"Black Orchestra\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"26",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "26_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{26} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({187} = 'not')",
        "name":"Owce_Wypas",
        "title":"Owce na wypasie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"187_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/54137/battle-sheep\" target=\"_blank\"><img src=\"../images/games/187_owce_wypas.jpg\" alt=\"Owce na wypasie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"187",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "187_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{187} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({109} = 'not')",
        "name":"Hotel_Samoa",
        "title":"Hotel Samoa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"109_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/63740/hotel-samoa\" target=\"_blank\"><img src=\"../images/games/109_hotel_samoa.jpg\" alt=\"Hotel Samoa\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"109",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "109_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{109} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({55} = 'not')",
        "name":"Cthulhu_Gloom",
        "title":"Cthulhu Gloom",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"55_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/95234/cthulhu-gloom\" target=\"_blank\"><img src=\"../images/games/55_cthulhu_gloom.jpg\" alt=\"Cthulhu Gloom\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"55",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "55_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{55} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({115} = 'not')",
        "name":"Intrepid",
        "title":"Intrepid",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"115_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/302461/intrepid\" target=\"_blank\"><img src=\"../images/games/115_intrepid.jpg\" alt=\"Intrepid\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"115",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "115_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{115} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({263} = 'not')",
        "name":"Swiatowy_Konflikt",
        "title":"Światowy Konflikt",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"263_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/131357/coup\" target=\"_blank\"><img src=\"../images/games/263_swiatowy_konflikt.jpg\" alt=\"Światowy Konflikt\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"263",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "263_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{263} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({160} = 'not')",
        "name":"Monopoly_Gamer",
        "title":"Monopoly Gamer",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"160_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/230408/monopoly-gamer\" target=\"_blank\"><img src=\"../images/games/160_monopoly_gamer.jpg\" alt=\"Monopoly Gamer\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"160",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "160_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{160} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      
   {
        "type":"panel",
				"visibleIf": "!({84} = 'not')",
        "name":"Fasolki",
        "title":"Fasolki (Bohnanza)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"84_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/11/bohnanza\" target=\"_blank\"><img src=\"../images/games/84_fasolki.jpg\" alt=\"Fasolki (Bohnanza)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"84",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "84_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{84} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({345} = 'not')",
        "name":"Boze_Igrzysko",
        "title":"Boże Igrzysko",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"345_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/57998/boze-igrzysko\" target=\"_blank\"><img src=\"../images/games/345_boze_igrzysko.jpg\" alt=\"Boże Igrzysko\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"345",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "345_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{345} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({5} = 'not')",
        "name":"7W_Duel",
        "title":"7 Cudów Świata: Pojedynek",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"5_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173346/7-wonders-duel\" target=\"_blank\"><img src=\"../images/games/5_7w_duel.jpg\" alt=\"7 Cudów Świata: Pojedynek\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"5",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "5_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{5} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({337} = 'not')",
        "name":"Raiders_Scythia",
        "title":"Najeźdźcy ze Scytii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"337_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/301880/raiders-scythia\" target=\"_blank\"><img src=\"../images/games/337_raiders_scythia.jpg\" alt=\"Najeźdźcy ze Scytii\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"337",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "337_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{337} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({180} = 'not')",
        "name":"Ognisty_Podmuch",
        "title":"Ognisty Podmuch",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"180_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/100901/flash-point-fire-rescue\" target=\"_blank\"><img src=\"../images/games/180_ognisty_podmuch.jpg\" alt=\"Ognisty Podmuch\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"180",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "180_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{180} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({165} = 'not')",
        "name":"For_Sale",
        "title":"Na sprzedaż",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"165_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172/sale\" target=\"_blank\"><img src=\"../images/games/165_for_sale.jpg\" alt=\"Na sprzedaż\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"165",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "165_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{165} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({215} = 'not')",
        "name":"Pulsar",
        "title":"Pulsar 2849",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"215_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/228341/pulsar-2849\" target=\"_blank\"><img src=\"../images/games/215_pulsar.jpg\" alt=\"Pulsar 2849\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"215",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "215_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{215} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({325} = 'not')",
        "name":"ZhanGuo",
        "title":"ZhanGuo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"325_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/160495/zhanguo\" target=\"_blank\"><img src=\"../images/games/325_zhanguo.jpg\" alt=\"ZhanGuo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"325",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "325_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{325} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({284} = 'not')",
        "name":"Troyes",
        "title":"Troyes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"284_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/73439/troyes\" target=\"_blank\"><img src=\"../images/games/284_troyes.jpg\" alt=\"Troyes\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"284",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "284_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{284} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({24} = 'not')",
        "name":"Bitwy_Westeros",
        "title":"Bitwy Westeros",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"24_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/67492/battles-westeros\" target=\"_blank\"><img src=\"../images/games/24_bitwy_westeros.jpg\" alt=\"Bitwy Westeros\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"24",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "24_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{24} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      
   {
        "type":"panel",
				"visibleIf": "!({138} = 'not')",
        "name":"Cosa_Nostra",
        "title":"La Cosa Nostra",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"138_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/151771/la-cosa-nostra\" target=\"_blank\"><img src=\"../images/games/138_cosa_nostra.jpg\" alt=\"La Cosa Nostra\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"138",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "138_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{138} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({60} = 'not')",
        "name":"Decrypto",
        "title":"Decrypto",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"60_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/225694/decrypto\" target=\"_blank\"><img src=\"../images/games/60_decrypto.jpg\" alt=\"Decrypto\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"60",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "60_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{60} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({238} = 'not')",
        "name":"Siedem",
        "title":"Siedem",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"238_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172662/seven7s\" target=\"_blank\"><img src=\"../images/games/238_siedem.jpg\" alt=\"Siedem\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"238",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "238_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{238} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({159} = 'not')",
        "name":"Monopoly",
        "title":"Monopoly",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"159_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1406/monopoly\" target=\"_blank\"><img src=\"../images/games/159_monopoly.jpg\" alt=\"Monopoly\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"159",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "159_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{159} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({201} = 'not')",
        "name":"Pipeline",
        "title":"Pipeline",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"201_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256730/pipeline\" target=\"_blank\"><img src=\"../images/games/201_pipeline.jpg\" alt=\"Pipeline\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"201",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "201_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{201} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({305} = 'not')",
        "name":"Wielka_Wystawa_Dinozaurow",
        "title":"Wielka Wystawa Dinozaurów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"305_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/179071/great-dinosaur-rush\" target=\"_blank\"><img src=\"../images/games/305_wielka_wystawa_dinozaurow.jpg\" alt=\"Wielka Wystawa Dinozaurów\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"305",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "305_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{305} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({300} = 'not')",
        "name":"Western_Legends",
        "title":"Western Legends",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"300_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/232405/western-legends\" target=\"_blank\"><img src=\"../images/games/300_western_legends.jpg\" alt=\"Western Legends\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"300",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "300_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{300} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({253} = 'not')",
        "name":"Stronghold",
        "title":"Stronghold",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"253_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/179460/stronghold-2nd-edition\" target=\"_blank\"><img src=\"../images/games/253_stronghold.jpg\" alt=\"Stronghold\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"253",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "253_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{253} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({297} = 'not')",
        "name":"Waleczne_Piksele",
        "title":"Waleczne piksele",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"297_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/125548/pixel-tactics\" target=\"_blank\"><img src=\"../images/games/297_waleczne_piksele.jpg\" alt=\"Waleczne piksele\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"297",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "297_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{297} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({92} = 'not')",
        "name":"Gejsze",
        "title":"Gejsze",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"92_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/158600/hanamikoji\" target=\"_blank\"><img src=\"../images/games/92_gejsze.jpg\" alt=\"Gejsze\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"92",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "92_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{92} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      
   {
        "type":"panel",
				"visibleIf": "!({310} = 'not')",
        "name":"LotR_Confrontation",
        "title":"Władca Pierścieni: Konfrontacja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"310_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/3201/lord-rings-confrontation\" target=\"_blank\"><img src=\"../images/games/310_lotr_confrontation.jpg\" alt=\"Władca Pierścieni: Konfrontacja\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"310",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "310_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{310} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({147} = 'not')",
        "name":"Machina",
        "title":"Machina",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"147_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/24743/machina\" target=\"_blank\"><img src=\"../images/games/147_machina.jpg\" alt=\"Machina\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"147",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "147_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{147} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({39} = 'not')",
        "name":"Cashflow",
        "title":"Cashflow",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"39_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/6552/cashflow-101\" target=\"_blank\"><img src=\"../images/games/39_cashflow.jpg\" alt=\"Cashflow\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"39",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "39_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{39} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({114} = 'not')",
        "name":"Innowacje",
        "title":"Innowacje",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"114_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/63888/innovation\" target=\"_blank\"><img src=\"../images/games/114_innowacje.jpg\" alt=\"Innowacje\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"114",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "114_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{114} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({111} = 'not')",
        "name":"iKNOW",
        "title":"iKNOW",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"111_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/130680/iknow\" target=\"_blank\"><img src=\"../images/games/111_iknow.jpg\" alt=\"iKNOW\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"111",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "111_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{111} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({145} = 'not')",
        "name":"Lords_of_War",
        "title":"Lords of War: Władcy Wojny",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"145_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/24131/series-lords-war-black-box\" target=\"_blank\"><img src=\"../images/games/145_lords_of_war.jpg\" alt=\"Lords of War: Władcy Wojny\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"145",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "145_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{145} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({152} = 'not')",
        "name":"MtG",
        "title":"Magic the Gathering",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"152_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/463/magic-gathering\" target=\"_blank\"><img src=\"../images/games/152_mtg.jpg\" alt=\"Magic the Gathering\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"152",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "152_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{152} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({54} = 'not')",
        "name":"Cry_Havoc",
        "title":"Cry Havoc",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"54_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/192457/cry-havoc\" target=\"_blank\"><img src=\"../images/games/54_cry_havoc.jpg\" alt=\"Cry Havoc\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"54",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "54_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{54} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({52} = 'not')",
        "name":"Concordia",
        "title":"Concordia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"52_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/124361/concordia\" target=\"_blank\"><img src=\"../images/games/52_concordia.jpg\" alt=\"Concordia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"52",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "52_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{52} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({95} = 'not')",
        "name":"Gierki_Malzenskie",
        "title":"Gierki Małżeńskie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"95_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/191077/gierki-malzenskie\" target=\"_blank\"><img src=\"../images/games/95_gierki_malzenskie.jpg\" alt=\"Gierki Małżeńskie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"95",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "95_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{95} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
   {
        "type":"panel",
				"visibleIf": "!({265} = 'not')",
        "name":"Taboo",
        "title":"Taboo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"265_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1111/taboo\" target=\"_blank\"><img src=\"../images/games/265_taboo.jpg\" alt=\"Taboo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"265",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "265_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{265} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({276} = 'not')",
        "name":"7th_Continent",
        "title":"The 7th Continent",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"276_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/180263/7th-continent\" target=\"_blank\"><img src=\"../images/games/276_7th_continent.jpg\" alt=\"The 7th Continent\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"276",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "276_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{276} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({245} = 'not')",
        "name":"Spadajace_Malpki",
        "title":"Spadające Małpki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"245_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12826/tumblin-monkeys\" target=\"_blank\"><img src=\"../images/games/245_spadajace_malpki.jpg\" alt=\"Spadające Małpki\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"245",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "245_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{245} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({219} = 'not')",
        "name":"Robinson",
        "title":"Robinson Crusoe: Przygoda na przeklętej wyspie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"219_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/121921/robinson-crusoe-adventures-cursed-island\" target=\"_blank\"><img src=\"../images/games/219_robinson.jpg\" alt=\"Robinson Crusoe: Przygoda na przeklętej wyspie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"219",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "219_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{219} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({64} = 'not')",
        "name":"Dice_Brewing",
        "title":"Dice Brewing",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"64_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/157322/dice-brewing\" target=\"_blank\"><img src=\"../images/games/64_dice_brewing.jpg\" alt=\"Dice Brewing\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"64",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "64_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{64} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({99} = 'not')",
        "name":"Goa",
        "title":"Goa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"99_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/9216/goa\" target=\"_blank\"><img src=\"../images/games/99_goa.jpg\" alt=\"Goa\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"99",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "99_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{99} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({240} = 'not')",
        "name":"Skip-Bo",
        "title":"Skipbo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"240_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1269/skip-bo\" target=\"_blank\"><img src=\"../images/games/240_skip-bo.jpg\" alt=\"Skipbo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"240",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "240_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{240} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({107} = 'not')",
        "name":"HP_2P",
        "title":"Harry Potter: Hogwarts Battle - Obrona przed czarną magią",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"107_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/254192/harry-potter-hogwarts-battle-defence-against-dark\" target=\"_blank\"><img src=\"../images/games/107_hp_2p.jpg\" alt=\"Harry Potter: Hogwarts Battle - Obrona przed czarną magią\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"107",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "107_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{107} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({65} = 'not')",
        "name":"Dixit",
        "title":"Dixit",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"65_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/39856/dixit\" target=\"_blank\"><img src=\"../images/games/65_dixit.jpg\" alt=\"Dixit\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"65",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "65_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{65} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({87} = 'not')",
        "name":"Flickem_Up",
        "title":"Flick'em Up!: Dzika strzelanka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"87_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/169124/flick-em\" target=\"_blank\"><img src=\"../images/games/87_flickem_up.jpg\" alt=\"Flick'em Up!: Dzika strzelanka\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"87",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "87_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{87} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
         {
        "type":"panel",
				"visibleIf": "!({103} = 'not')",
        "name":"Grzybobranie",
        "title":"Grzybobranie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"103_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/32236/grzybobranie\" target=\"_blank\"><img src=\"../images/games/103_grzybobranie.jpg\" alt=\"Grzybobranie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"103",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "103_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{103} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({364} = 'not')",
        "name":"Dungeon_Fortune",
        "title":"Dungeon of Fortune",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"364_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/170415/dungeon-fortune\" target=\"_blank\"><img src=\"../images/games/364_dungeon_fortune.jpg\" alt=\"Dungeon of Fortune\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"364",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "364_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{364} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({14} = 'not')",
        "name":"Antarctica",
        "title":"Antarctica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"14_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/182074/antarctica\" target=\"_blank\"><img src=\"../images/games/14_antarctica.jpg\" alt=\"Antarctica\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"14",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "14_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{14} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({274} = 'not')",
        "name":"Terra_M",
        "title":"Terra Mystica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"274_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/120677/terra-mystica\" target=\"_blank\"><img src=\"../images/games/274_terra_m.jpg\" alt=\"Terra Mystica\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"274",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "274_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{274} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({169} = 'not')",
        "name":"New_Angeles",
        "title":"New Angeles: Miasto Korporacji",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"169_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/205716/new-angeles\" target=\"_blank\"><img src=\"../images/games/169_new_angeles.jpg\" alt=\"New Angeles: Miasto Korporacji\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"169",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "169_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{169} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({350} = 'not')",
        "name":"Pax_Pamir2",
        "title":"Pax Pamir: Second Edition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"350_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256960/pax-pamir-second-edition\" target=\"_blank\"><img src=\"../images/games/350_pax_pamir2.jpg\" alt=\"Pax Pamir: Second Edition\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"350",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "350_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{350} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({258} = 'not')",
        "name":"Szachy",
        "title":"Szachy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"258_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171/chess\" target=\"_blank\"><img src=\"../images/games/258_szachy.jpg\" alt=\"Szachy\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"258",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "258_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{258} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({262} = 'not')",
        "name":"Shogun",
        "title":"Szogun",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"262_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/20551/shogun\" target=\"_blank\"><img src=\"../images/games/262_shogun.jpg\" alt=\"Szogun\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"262",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "262_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{262} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({94} = 'not')",
        "name":"Getaway_Driver",
        "title":"Getaway Driver",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"94_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/253719/getaway-driver\" target=\"_blank\"><img src=\"../images/games/94_getaway_driver.jpg\" alt=\"Getaway Driver\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"94",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "94_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{94} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({137} = 'not')",
        "name":"Ksiestwo",
        "title":"Księstwo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"137_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/90041/principato\" target=\"_blank\"><img src=\"../images/games/137_ksiestwo.jpg\" alt=\"Księstwo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"137",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "137_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{137} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
   {
        "type":"panel",
				"visibleIf": "!({266} = 'not')",
        "name":"Tajemnicze_Domostwo",
        "title":"Tajemnicze Domostwo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"266_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/113997/tajemnicze-domostwo\" target=\"_blank\"><img src=\"../images/games/266_tajemnicze_domostwo.jpg\" alt=\"Tajemnicze Domostwo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"266",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "266_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{266} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({112} = 'not')",
        "name":"Imago",
        "title":"Imago",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"112_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/191894/imagine\" target=\"_blank\"><img src=\"../images/games/112_imago.jpg\" alt=\"Imago\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"112",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "112_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{112} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({45} = 'not')",
        "name":"Clank",
        "title":"Clank! (Brzdęk)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"45_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/201808/clank-deck-building-adventure\" target=\"_blank\"><img src=\"../images/games/45_clank.jpg\" alt=\"Clank! (Brzdęk)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"45",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "45_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{45} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({153} = 'not')",
        "name":"Maracaibo",
        "title":"Maracaibo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"153_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/276025/maracaibo\" target=\"_blank\"><img src=\"../images/games/153_maracaibo.jpg\" alt=\"Maracaibo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"153",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "153_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{153} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({40} = 'not')",
        "name":"Charterstone",
        "title":"Charterstone",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"40_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/197376/charterstone\" target=\"_blank\"><img src=\"../images/games/40_charterstone.jpg\" alt=\"Charterstone\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"40",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "40_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{40} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({357} = 'not')",
        "name":"Boonlake",
        "title":"Boonlake",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"357_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/343905/boonlake\" target=\"_blank\"><img src=\"../images/games/357_boonlake.jpg\" alt=\"Boonlake\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"357",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "357_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{357} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({124} = 'not')",
        "name":"Kartografowie",
        "title":"Kartografowie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"124_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/263918/cartographers\" target=\"_blank\"><img src=\"../images/games/124_kartografowie.jpg\" alt=\"Kartografowie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"124",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "124_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{124} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({131} = 'not')",
        "name":"Klany_Kaledonii",
        "title":"Klany Kaledonii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"131_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/216132/clans-caledonia\" target=\"_blank\"><img src=\"../images/games/131_klany_kaledonii.jpg\" alt=\"Klany Kaledonii\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"131",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "131_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{131} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({96} = 'not')",
        "name":"Gildie_Londynu",
        "title":"Gildie Londynu",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"96_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/134157/guilds-london\" target=\"_blank\"><img src=\"../images/games/96_gildie_londynu.jpg\" alt=\"Gildie Londynu\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"96",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "96_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{96} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({43} = 'not')",
        "name":"Galaxy_Trucker",
        "title":"Ciężarówką przez Galaktykę",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"43_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/31481/galaxy-trucker\" target=\"_blank\"><img src=\"../images/games/43_galaxy_trucker.jpg\" alt=\"Ciężarówką przez Galaktykę\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"43",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "43_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{43} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
       {
        "type":"panel",
				"visibleIf": "!({151} = 'not')",
        "name":"Magic_Maze",
        "title":"Magic Maze: Weź i czmychaj",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"151_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/209778/magic-maze\" target=\"_blank\"><img src=\"../images/games/151_magic_maze.jpg\" alt=\"Magic Maze: Weź i czmychaj\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"151",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "151_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{151} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({343} = 'not')",
        "name":"Boss_Monster",
        "title":"Boss Monster",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"343_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/131835/boss-monster-dungeon-building-card-game\" target=\"_blank\"><img src=\"../images/games/343_boss_monster.jpg\" alt=\"Boss Monster\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"343",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "343_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{343} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({349} = 'not')",
        "name":"Cryptid",
        "title":"Cryptid",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"349_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/246784/cryptid\" target=\"_blank\"><img src=\"../images/games/349_cryptid.jpg\" alt=\"Cryptid\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"349",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "349_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{349} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({185} = 'not')",
        "name":"Orlean",
        "title":"Orlean",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"185_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/164928/orleans\" target=\"_blank\"><img src=\"../images/games/185_orlean.jpg\" alt=\"Orlean\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"185",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "185_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{185} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({144} = 'not')",
        "name":"Love_Letter",
        "title":"List Miłosny",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"144_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/129622/love-letter\" target=\"_blank\"><img src=\"../images/games/144_love_letter.jpg\" alt=\"List Miłosny\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"144",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "144_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{144} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({41} = 'not')",
        "name":"Chinczyk",
        "title":"Chińczyk",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"41_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2136/pachisi\" target=\"_blank\"><img src=\"../images/games/41_chinczyk.jpg\" alt=\"Chińczyk\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"41",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "41_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{41} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({183} = 'not')",
        "name":"Onirim",
        "title":"Onirim",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"183_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/71836/onirim\" target=\"_blank\"><img src=\"../images/games/183_onirim.jpg\" alt=\"Onirim\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"183",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "183_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{183} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({233} = 'not')",
        "name":"Scrabble",
        "title":"Scrabble",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"233_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/320/scrabble\" target=\"_blank\"><img src=\"../images/games/233_scrabble.jpg\" alt=\"Scrabble\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"233",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "233_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{233} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({86} = 'not')",
        "name":"Feierabend",
        "title":"Feierabend",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"86_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/310442/feierabend\" target=\"_blank\"><img src=\"../images/games/86_feierabend.jpg\" alt=\"Feierabend\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"86",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "86_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{86} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({116} = 'not')",
        "name":"Irish_Gauge",
        "title":"Irish Gauge",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"116_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/161882/irish-gauge\" target=\"_blank\"><img src=\"../images/games/116_irish_gauge.jpg\" alt=\"Irish Gauge\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"116",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "116_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{116} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({50} = 'not')",
        "name":"Coloma",
        "title":"Coloma: Deluxe Edition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"50_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/277448/coloma-deluxe-edition\" target=\"_blank\"><img src=\"../images/games/50_coloma.jpg\" alt=\"Coloma: Deluxe Edition\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"50",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "50_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{50} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({192} = 'not')",
        "name":"Panic_Lab",
        "title":"Panic Lab",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"192_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/121073/panic-lab\" target=\"_blank\"><img src=\"../images/games/192_panic_lab.jpg\" alt=\"Panic Lab\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"192",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "192_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{192} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({198} = 'not')",
        "name":"Perigon",
        "title":"Perigon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"198_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/93493/perigon\" target=\"_blank\"><img src=\"../images/games/198_perigon.jpg\" alt=\"Perigon\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"198",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "198_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{198} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({360} = 'not')",
        "name":"Point_Salad",
        "title":"Point Salad",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"360_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/274960/point-salad\" target=\"_blank\"><img src=\"../images/games/360_point_salad.jpg\" alt=\"Point Salad\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"360",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "360_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{360} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({294} = 'not')",
        "name":"Valeria",
        "title":"Valeria: Wioski",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"294_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/180040/villages-valeria\" target=\"_blank\"><img src=\"../images/games/294_valeria.jpg\" alt=\"Valeria: Wioski\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"294",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "294_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{294} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({77} = 'not')",
        "name":"Elizjum",
        "title":"Elysium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"77_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/163968/elysium\" target=\"_blank\"><img src=\"../images/games/77_elizjum.jpg\" alt=\"Elysium\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"77",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "77_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{77} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({227} = 'not')",
        "name":"Saboteur",
        "title":"Sabotażysta",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"227_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/9220/saboteur\" target=\"_blank\"><img src=\"../images/games/227_saboteur.jpg\" alt=\"Sabotażysta\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"227",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "227_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{227} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({80} = 'not')",
        "name":"Everdell",
        "title":"Everdell",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"80_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199792/everdell\" target=\"_blank\"><img src=\"../images/games/80_everdell.jpg\" alt=\"Everdell\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"80",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "80_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{80} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({196} = 'not')",
        "name":"Pax_Em",
        "title":"Pax Emancipation",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"196_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/245928/pax-emancipation\" target=\"_blank\"><img src=\"../images/games/196_pax_em.jpg\" alt=\"Pax Emancipation\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"196",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "196_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{196} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({106} = 'not')",
        "name":"HP",
        "title":"Harry Potter: Hogwarts Battle",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"106_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199042/harry-potter-hogwarts-battle\" target=\"_blank\"><img src=\"../images/games/106_hp.jpg\" alt=\"Harry Potter: Hogwarts Battle\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"106",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "106_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{106} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({195} = 'not')",
        "name":"Paryz_Miasto_Swiatel",
        "title":"Paryż: Miasto Świateł",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"195_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/276498/paris-la-cite-de-la-lumiere\" target=\"_blank\"><img src=\"../images/games/195_paryz_miasto_swiatel.jpg\" alt=\"Paryż: Miasto Świateł\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"195",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "195_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{195} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({327} = 'not')",
        "name":"Zimna_W",
        "title":"Zimna Wojna 1945 - 1989",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"327_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12333/twilight-struggle\" target=\"_blank\"><img src=\"../images/games/327_zimna_w.jpg\" alt=\"Zimna Wojna 1945 - 1989\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"327",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "327_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{327} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({9} = 'not')",
        "name":"AoS",
        "title":"Age of Steam",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"9_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/4098/age-steam\" target=\"_blank\"><img src=\"../images/games/9_aos.jpg\" alt=\"Age of Steam\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"9",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "9_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{9} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({130} = 'not')",
        "name":"Kingdomino",
        "title":"Kingdomino",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"130_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/204583/kingdomino\" target=\"_blank\"><img src=\"../images/games/130_kingdomino.jpg\" alt=\"Kingdomino\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"130",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "130_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{130} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({221} = 'not')",
        "name":"Root",
        "title":"Root",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"221_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/237182/root\" target=\"_blank\"><img src=\"../images/games/221_root.jpg\" alt=\"Root\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"221",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "221_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{221} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({30} = 'not')",
        "name":"Brass_B",
        "title":"Brass: Birmingham",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"30_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/224517/brass-birmingham\" target=\"_blank\"><img src=\"../images/games/30_brass_b.jpg\" alt=\"Brass: Birmingham\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"30",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "30_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{30} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({121} = 'not')",
        "name":"Kalambury",
        "title":"Kalambury",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"121_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/5122/charades\" target=\"_blank\"><img src=\"../images/games/121_kalambury.jpg\" alt=\"Kalambury\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"121",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "121_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{121} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({118} = 'not')",
        "name":"Jungle_Speed",
        "title":"Jungle Speed",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"118_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/8098/jungle-speed\" target=\"_blank\"><img src=\"../images/games/118_jungle_speed.jpg\" alt=\"Jungle Speed\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"118",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "118_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{118} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({83} = 'not')",
        "name":"Famiglia",
        "title":"Famiglia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"83_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/81453/famiglia\" target=\"_blank\"><img src=\"../images/games/83_famiglia.jpg\" alt=\"Famiglia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"83",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "83_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{83} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({35} = 'not')",
        "name":"Było_sobie_zycie",
        "title":"Było sobie życie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"35_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/144374/once-upon-time-life\" target=\"_blank\"><img src=\"../images/games/35_bylo_sobie_zycie.jpg\" alt=\"Było sobie życie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"35",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "35_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{35} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({225} = 'not')",
        "name":"Rycerze_Zamki",
        "title":"Rycerze i Zamki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"225_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/159774/rycerze-i-zamki\" target=\"_blank\"><img src=\"../images/games/225_rycerze_zamki.jpg\" alt=\"Rycerze i Zamki\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"225",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "225_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{225} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({261} = 'not')",
        "name":"Szeryf_Nottingham",
        "title":"Szeryf z Nottingham",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"261_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/157969/sheriff-nottingham\" target=\"_blank\"><img src=\"../images/games/261_szeryf_nottingham.jpg\" alt=\"Szeryf z Nottingham\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"261",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "261_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{261} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({322} = 'not')",
        "name":"Zalozyciele_Imperium",
        "title":"Założyciele Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"322_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/148639/founders-empire\" target=\"_blank\"><img src=\"../images/games/322_zalozyciele_imperium.jpg\" alt=\"Założyciele Imperium\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"322",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "322_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{322} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({212} = 'not')",
        "name":"Projekt_Gaja",
        "title":"Projekt Gaja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"212_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/220308/gaia-project\" target=\"_blank\"><img src=\"../images/games/212_projekt_gaja.jpg\" alt=\"Projekt Gaja\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"212",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "212_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{212} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({321} = 'not')",
        "name":"Crew",
        "title":"Załoga: W poszukiwaniu dziewiątej planety",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"321_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine\" target=\"_blank\"><img src=\"../images/games/321_crew.jpg\" alt=\"Załoga: W poszukiwaniu dziewiątej planety\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"321",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "321_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{321} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({100} = 'not')",
        "name":"GoT",
        "title":"Gra o Tron",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"100_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/103343/game-thrones-board-game-second-edition\" target=\"_blank\"><img src=\"../images/games/100_got.jpg\" alt=\"Gra o Tron\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"100",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "100_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{100} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({105} = 'not')",
        "name":"Hardback",
        "title":"Hardback",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"105_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/223750/hardback\" target=\"_blank\"><img src=\"../images/games/105_hardback.jpg\" alt=\"Hardback\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"105",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "105_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{105} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({292} = 'not')",
        "name":"Uno",
        "title":"UNO",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"292_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2223/uno\" target=\"_blank\"><img src=\"../images/games/292_uno.jpg\" alt=\"UNO\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"292",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "292_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{292} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({164} = 'not')",
        "name":"Wingspan",
        "title":"Na skrzydłach",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"164_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/266192/wingspan\" target=\"_blank\"><img src=\"../images/games/164_wingspan.jpg\" alt=\"Na skrzydłach\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"164",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "164_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{164} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({120} = 'not')",
        "name":"K2",
        "title":"K2",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"120_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/73761/k2\" target=\"_blank\"><img src=\"../images/games/120_k2.jpg\" alt=\"K2\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"120",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "120_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{120} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({89} = 'not')",
        "name":"Ganges",
        "title":"Ganges",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"89_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/220877/rajas-ganges\" target=\"_blank\"><img src=\"../images/games/89_ganges.jpg\" alt=\"Ganges\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"89",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "89_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{89} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({356} = 'not')",
        "name":"Colt_Express",
        "title":"Colt Express",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"356_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/158899/colt-express\" target=\"_blank\"><img src=\"../images/games/356_colt_express.jpg\" alt=\"Colt Express\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"356",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "356_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{356} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({280} = 'not')",
        "name":"TWoM",
        "title":"This War of Mine: Gra planszowa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"280_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/188920/war-mine-board-game\" target=\"_blank\"><img src=\"../images/games/280_twom.jpg\" alt=\"This War of Mine: Gra planszowa\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"280",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "280_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{280} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({117} = 'not')",
        "name":"Jenga",
        "title":"Jenga",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"117_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2452/jenga\" target=\"_blank\"><img src=\"../images/games/117_jenga.jpg\" alt=\"Jenga\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"117",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "117_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{117} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({336} = 'not')",
        "name":"CO2",
        "title":"CO2: Second Chance",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"336_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/214887/co-second-chance\" target=\"_blank\"><img src=\"../images/games/336_co2.jpg\" alt=\"CO2: Second Chance\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"336",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "336_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{336} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({132} = 'not')",
        "name":"Klask",
        "title":"KLASK",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"132_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/165722/klask\" target=\"_blank\"><img src=\"../images/games/132_klask.jpg\" alt=\"KLASK\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"132",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "132_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{132} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({216} = 'not')",
        "name":"Quadropolis",
        "title":"Quadropolis",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"216_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/176396/quadropolis\" target=\"_blank\"><img src=\"../images/games/216_quadropolis.jpg\" alt=\"Quadropolis\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"216",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "216_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{216} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({303} = 'not')",
        "name":"Wielka_Ksiega",
        "title":"Wielka Księga Szaleństwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"303_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171233/big-book-madness\" target=\"_blank\"><img src=\"../images/games/303_wielka_ksiega.jpg\" alt=\"Wielka Księga Szaleństwa\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"303",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "303_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{303} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({285} = 'not')",
        "name":"Trzy_Zyczenia",
        "title":"Trzy życzenia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"285_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/198836/3-wishes\" target=\"_blank\"><img src=\"../images/games/285_trzy_zyczenia.jpg\" alt=\"Trzy życzenia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"285",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "285_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{285} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({142} = 'not')",
        "name":"Legendy_BM",
        "title":"Legendy Blue Moon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"142_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/147154/blue-moon-legends\" target=\"_blank\"><img src=\"../images/games/142_legendy_bm.jpg\" alt=\"Legendy Blue Moon\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"142",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "142_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{142} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({179} = 'not')",
        "name":"Odkrycia_LC",
        "title":"Odkrycia: Dzienniki Lewisa i Clarka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"179_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171669/discoveries-journals-lewis-clark\" target=\"_blank\"><img src=\"../images/games/179_odkrycia_lc.jpg\" alt=\"Odkrycia: Dzienniki Lewisa i Clarka\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"179",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "179_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{179} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({32} = 'not')",
        "name":"Broom_Service",
        "title":"Broom Service",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"32_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172308/broom-service\" target=\"_blank\"><img src=\"../images/games/32_broom_service.jpg\" alt=\"Broom Service\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"32",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "32_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{32} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({214} = 'not')",
        "name":"Puerto_Rico",
        "title":"Puerto Rico",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"214_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/3076/puerto-rico\" target=\"_blank\"><img src=\"../images/games/214_puerto_rico.jpg\" alt=\"Puerto Rico\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"214",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "214_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{214} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({173} = 'not')",
        "name":"Nowe_Pokolenia",
        "title":"Nowe Pokolenia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"173_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172381/my-village\" target=\"_blank\"><img src=\"../images/games/173_nowe_pokolenia.jpg\" alt=\"Nowe Pokolenia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"173",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "173_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{173} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({4} = 'not')",
        "name":"7W",
        "title":"7 Cudów Świata",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"4_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/68448/7-wonders\" target=\"_blank\"><img src=\"../images/games/4_7w.jpg\" alt=\"7 Cudów Świata\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"4",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "4_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{4} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({146} = 'not')",
        "name":"Lorenzo",
        "title":"Lorenzo il Magnifico",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"146_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/203993/lorenzo-il-magnifico\" target=\"_blank\"><img src=\"../images/games/146_lorenzo.jpg\" alt=\"Lorenzo il Magnifico\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"146",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "146_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{146} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({228} = 'not')",
        "name":"Sagrada",
        "title":"Sagrada",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"228_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199561/sagrada\" target=\"_blank\"><img src=\"../images/games/228_sagrada.jpg\" alt=\"Sagrada\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"228",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "228_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{228} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({168} = 'not')",
        "name":"Neuroshima_Hex",
        "title":"Neuroshima Hex!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"168_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/21241/neuroshima-hex-30\" target=\"_blank\"><img src=\"../images/games/168_neuroshima_hex.jpg\" alt=\"Neuroshima Hex!\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"168",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "168_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{168} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({140} = 'not')",
        "name":"LE",
        "title":"Leaving Earth",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"140_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173064/leaving-earth\" target=\"_blank\"><img src=\"../images/games/140_le.jpg\" alt=\"Leaving Earth\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"140",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "140_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{140} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({226} = 'not')",
        "name":"Rydzyk_Fidzyk",
        "title":"Ryzyk Fizyk",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"226_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/20100/wits-wagers\" target=\"_blank\"><img src=\"../images/games/226_rydzyk_fidzyk.jpg\" alt=\"Ryzyk Fizyk\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"226",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "226_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{226} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({313} = 'not')",
        "name":"Wyprawa_do_Dzungli",
        "title":"Wyprawa do dżungli",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"313_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/148600/wyprawa-do-dzungli\" target=\"_blank\"><img src=\"../images/games/313_wyprawa_do_dzungli.jpg\" alt=\"Wyprawa do dżungli\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"313",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "313_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{313} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({290} = 'not')",
        "name":"Ubongo_3D",
        "title":"Ubongo 3D",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"290_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/46396/ubongo-3-d\" target=\"_blank\"><img src=\"../images/games/290_ubongo_3d.jpg\" alt=\"Ubongo 3D\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"290",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "290_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{290} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({316} = 'not')",
        "name":"Wysokie_N",
        "title":"Wysokie Napięcie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"316_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2651/power-grid\" target=\"_blank\"><img src=\"../images/games/316_wysokie_n.jpg\" alt=\"Wysokie Napięcie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"316",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "316_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{316} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({257} = 'not')",
        "name":"Sushi_Go",
        "title":"Sushi Go!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"257_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/133473/sushi-go\" target=\"_blank\"><img src=\"../images/games/257_sushi_go.jpg\" alt=\"Sushi Go!\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"257",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "257_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{257} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({282} = 'not')",
        "name":"Trajan",
        "title":"Trajan",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"282_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/102680/trajan\" target=\"_blank\"><img src=\"../images/games/282_trajan.jpg\" alt=\"Trajan\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"282",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "282_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{282} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({16} = 'not')",
        "name":"Atlantyda",
        "title":"Atlantyda",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"16_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/27532/vineta\" target=\"_blank\"><img src=\"../images/games/16_atlantyda.jpg\" alt=\"Atlantyda\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"16",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "16_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{16} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({328} = 'not')",
        "name":"Zloto_Bohaterow",
        "title":"Złoto Bohaterów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"328_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/180785/mighty-monsters\" target=\"_blank\"><img src=\"../images/games/328_zloto_bohaterow.jpg\" alt=\"Złoto Bohaterów\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"328",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "328_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{328} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({366} = 'not')",
        "name":"Ludzie_Kamienie",
        "title":"Ludzie kontra Kamienie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"366_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/202737/are-you-dumber-box-rocks\" target=\"_blank\"><img src=\"../images/games/366_ludzie_kamienie.jpg\" alt=\"Ludzie kontra Kamienie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"366",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "366_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{366} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({186} = 'not')",
        "name":"Catan",
        "title":"Osadnicy z Catanu",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"186_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/13/catan\" target=\"_blank\"><img src=\"../images/games/186_catan.jpg\" alt=\"Osadnicy z Catanu\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"186",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "186_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{186} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({222} = 'not')",
        "name":"RR",
        "title":"Rosyjskie Koleje",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"222_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/144733/russian-railroads\" target=\"_blank\"><img src=\"../images/games/222_rr.jpg\" alt=\"Rosyjskie Koleje\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"222",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "222_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{222} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({171} = 'not')",
        "name":"Herbaceous",
        "title":"Niezłe ziółka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"171_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/195314/herbaceous\" target=\"_blank\"><img src=\"../images/games/171_herbaceous.jpg\" alt=\"Niezłe ziółka\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"171",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "171_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{171} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({37} = 'not')",
        "name":"Carcasonne",
        "title":"Carcassonne",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"37_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/822/carcassonne\" target=\"_blank\"><img src=\"../images/games/37_carcasonne.jpg\" alt=\"Carcassonne\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"37",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "37_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{37} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({129} = 'not')",
        "name":"Kingdom_Rush",
        "title":"Kingdom Rush: Rift in Time",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"129_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/272533/kingdom-rush-rift-time\" target=\"_blank\"><img src=\"../images/games/129_kingdom_rush.jpg\" alt=\"Kingdom Rush: Rift in Time\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"129",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "129_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{129} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({211} = 'not')",
        "name":"Prehistory",
        "title":"Prehistory",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"211_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/234948/prehistory\" target=\"_blank\"><img src=\"../images/games/211_prehistory.jpg\" alt=\"Prehistory\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"211",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "211_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{211} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({287} = 'not')",
        "name":"T&E",
        "title":"Tygrys i Eufrat",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"287_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/42/tigris-euphrates\" target=\"_blank\"><img src=\"../images/games/287_t&e.jpg\" alt=\"Tygrys i Eufrat\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"287",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "287_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{287} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({17} = 'not')",
        "name":"Avalon",
        "title":"Avalon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"17_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/128882/resistance-avalon\" target=\"_blank\"><img src=\"../images/games/17_avalon.jpg\" alt=\"Avalon\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"17",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "17_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{17} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({133} = 'not')",
        "name":"Kolejka",
        "title":"Kolejka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"133_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/85325/kolejka\" target=\"_blank\"><img src=\"../images/games/133_kolejka.jpg\" alt=\"Kolejka\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"133",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "133_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{133} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({217} = 'not')",
        "name":"RftG",
        "title":"Race for the Galaxy: Narodziny Imperiów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"217_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/28143/race-galaxy\" target=\"_blank\"><img src=\"../images/games/217_rftg.jpg\" alt=\"Race for the Galaxy: Narodziny Imperiów\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"217",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "217_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{217} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({104} = 'not')",
        "name":"Hanabi",
        "title":"Hanabi",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"104_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/98778/hanabi\" target=\"_blank\"><img src=\"../images/games/104_hanabi.jpg\" alt=\"Hanabi\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"104",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "104_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{104} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({330} = 'not')",
        "name":"Zelazna_Kurtyna",
        "title":"Żelazna kurtyna",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"330_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/228411/iron-curtain\" target=\"_blank\"><img src=\"../images/games/330_zelazna_kurtyna.jpg\" alt=\"Żelazna kurtyna\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"330",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "330_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{330} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({101} = 'not')",
        "name":"Gra_Pomylek",
        "title":"Gra pomyłek",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"101_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/130004/think-again\" target=\"_blank\"><img src=\"../images/games/101_gra_pomylek.jpg\" alt=\"Gra pomyłek\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"101",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "101_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{101} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({341} = 'not')",
        "name":"Gutenberg",
        "title":"Gutenberg",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"341_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/339958/gutenberg\" target=\"_blank\"><img src=\"../images/games/341_gutenberg.jpg\" alt=\"Gutenberg\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"341",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "341_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{341} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({255} = 'not')",
        "name":"Super_Farmer",
        "title":"Super Farmer",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"255_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/17557/super-farmer\" target=\"_blank\"><img src=\"../images/games/255_super_farmer.jpg\" alt=\"Super Farmer\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"255",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "255_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{255} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({162} = 'not')",
        "name":"MS_Batory",
        "title":"MS Batory",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"162_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/233094/ms-batory\" target=\"_blank\"><img src=\"../images/games/162_ms_batory.jpg\" alt=\"MS Batory\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"162",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "162_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{162} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({29} = 'not')",
        "name":"Brainbenders",
        "title":"Brainbenders",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"29_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/21976/mindbenders\" target=\"_blank\"><img src=\"../images/games/29_brainbenders.jpg\" alt=\"Brainbenders\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"29",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "29_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{29} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({291} = 'not')",
        "name":"Ucho_Krola",
        "title":"Ucho króla",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"291_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/156062/ucho-krola\" target=\"_blank\"><img src=\"../images/games/291_ucho_krola.jpg\" alt=\"Ucho króla\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"291",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "291_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{291} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({206} = 'not')",
        "name":"Poker",
        "title":"Poker",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"206_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1115/poker\" target=\"_blank\"><img src=\"../images/games/206_poker.jpg\" alt=\"Poker\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"206",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "206_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{206} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({184} = 'not')",
        "name":"Onitama",
        "title":"Onitama",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"184_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/160477/onitama\" target=\"_blank\"><img src=\"../images/games/184_onitama.jpg\" alt=\"Onitama\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"184",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "184_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{184} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({306} = 'not')",
        "name":"Wiertla_Skaly",
        "title":"Wiertła, Skały, Minerały",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"306_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/162286/super-motherload\" target=\"_blank\"><img src=\"../images/games/306_wiertla_skaly.jpg\" alt=\"Wiertła, Skały, Minerały\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"306",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "306_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{306} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({68} = 'not')",
        "name":"Egizia",
        "title":"Dolina Królów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"68_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/58421/egizia\" target=\"_blank\"><img src=\"../images/games/68_egizia.jpg\" alt=\"Dolina Królów\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"68",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "68_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{68} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({362} = 'not')",
        "name":"Ksiega_Smokow",
        "title":"Księga Smoków",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"362_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/358796/ksiega-smokow\" target=\"_blank\"><img src=\"../images/games/362_ksiega_smokow.jpg\" alt=\"Księga Smoków\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"362",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "362_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{362} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({203} = 'not')",
        "name":"Pluszowe",
        "title":"Pluszowe opowieści",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"203_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/233312/stuffed-fables\" target=\"_blank\"><img src=\"../images/games/203_pluszowe.jpg\" alt=\"Pluszowe opowieści\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"203",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "203_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{203} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({354} = 'not')",
        "name":"Spacer_Burano",
        "title":"Spacer po Burano",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"354_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/257769/walking-burano\" target=\"_blank\"><img src=\"../images/games/354_spacer_burano.jpg\" alt=\"Spacer po Burano\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"354",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "354_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{354} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({79} = 'not')",
        "name":"Eurobiznes",
        "title":"Eurobiznes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"79_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/42050/eurobusiness\" target=\"_blank\"><img src=\"../images/games/79_eurobiznes.jpg\" alt=\"Eurobiznes\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"79",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "79_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{79} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({249} = 'not')",
        "name":"Star_Realms",
        "title":"Star Realms",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"249_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/147020/star-realms\" target=\"_blank\"><img src=\"../images/games/249_star_realms.jpg\" alt=\"Star Realms\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"249",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "249_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{249} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({271} = 'not')",
        "name":"Tekhenu",
        "title":"Tekhenu: Obelisk Słońca",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"271_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/297030/tekhenu-obelisk-sun\" target=\"_blank\"><img src=\"../images/games/271_tekhenu.jpg\" alt=\"Tekhenu: Obelisk Słońca\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"271",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "271_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{271} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({8} = 'not')",
        "name":"Aeons_End",
        "title":"Aeon's End (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"8_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/50251/game-aeons-end\" target=\"_blank\"><img src=\"../images/games/8_aeons_end.jpg\" alt=\"Aeon's End (seria)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"8",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "8_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{8} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({126} = 'not')",
        "name":"Kawerna",
        "title":"Kawerna: Rolnicy z Jaskiń",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"126_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/102794/caverna-cave-farmers\" target=\"_blank\"><img src=\"../images/games/126_kawerna.jpg\" alt=\"Kawerna: Rolnicy z Jaskiń\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"126",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "126_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{126} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({213} = 'not')",
        "name":"Wielblady",
        "title":"Przebiegłe Wielbłądy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"213_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/153938/camel\" target=\"_blank\"><img src=\"../images/games/213_wielblady.jpg\" alt=\"Przebiegłe Wielbłądy\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"213",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "213_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{213} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({235} = 'not')",
        "name":"SHASN",
        "title":"SHASN",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"235_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/257305/shasn\" target=\"_blank\"><img src=\"../images/games/235_shasn.jpg\" alt=\"SHASN\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"235",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "235_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{235} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({311} = 'not')",
        "name":"Nations",
        "title":"Wojna Narodów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"311_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/126042/nations\" target=\"_blank\"><img src=\"../images/games/311_nations.jpg\" alt=\"Wojna Narodów\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"311",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "311_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{311} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({34} = 'not')",
        "name":"Burgle_Bros",
        "title":"Burgle Bros.",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"34_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172081/burgle-bros\" target=\"_blank\"><img src=\"../images/games/34_burgle_bros.jpg\" alt=\"Burgle Bros.\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"34",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "34_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{34} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({90} = 'not')",
        "name":"Gangi_NY",
        "title":"Gangi Nowego Jorku",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"90_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/170431/kings-kilt\" target=\"_blank\"><img src=\"../images/games/90_gangi_ny.jpg\" alt=\"Gangi Nowego Jorku\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"90",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "90_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{90} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({346} = 'not')",
        "name":"Skull",
        "title":"Skull",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"346_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/92415/skull\" target=\"_blank\"><img src=\"../images/games/346_skull.jpg\" alt=\"Skull\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"346",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "346_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{346} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({93} = 'not')",
        "name":"Gentes",
        "title":"Gentes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"93_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/217780/gentes\" target=\"_blank\"><img src=\"../images/games/93_gentes.jpg\" alt=\"Gentes\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"93",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "93_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{93} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({286} = 'not')",
        "name":"TI",
        "title":"Twilight Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"286_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12493/twilight-imperium-third-edition\" target=\"_blank\"><img src=\"../images/games/286_ti.jpg\" alt=\"Twilight Imperium\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"286",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "286_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{286} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({157} = 'not')",
        "name":"Mechs_Minions",
        "title":"Mechs vs. Minions",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"157_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/209010/mechs-vs-minions\" target=\"_blank\"><img src=\"../images/games/157_mechs_minions.jpg\" alt=\"Mechs vs. Minions\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"157",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "157_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{157} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({71} = 'not')",
        "name":"Draftozaur",
        "title":"Draftozaur",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"71_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/264055/draftosaurus\" target=\"_blank\"><img src=\"../images/games/71_draftozaur.jpg\" alt=\"Draftozaur\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"71",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "71_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{71} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({295} = 'not')",
        "name":"Viticulture",
        "title":"Viticulture Essential Edition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"295_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/183394/viticulture-essential-edition\" target=\"_blank\"><img src=\"../images/games/295_viticulture.jpg\" alt=\"Viticulture Essential Edition\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"295",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "295_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{295} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({353} = 'not')",
        "name":"Kolejowy_Szlak",
        "title":"Kolejowy Szlak (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"353_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/57676/game-railroad-ink\" target=\"_blank\"><img src=\"../images/games/353_kolejowy_szlak.jpg\" alt=\"Kolejowy Szlak (seria)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"353",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "353_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{353} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({75} = 'not')",
        "name":"Exploding_Kittens",
        "title":"Eksplodujące kotki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"75_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172225/exploding-kittens\" target=\"_blank\"><img src=\"../images/games/75_exploding_kittens.jpg\" alt=\"Eksplodujące kotki\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"75",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "75_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{75} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({242} = 'not')",
        "name":"Slup_Ognia",
        "title":"Słup Ognia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"242_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/217949/column-fire\" target=\"_blank\"><img src=\"../images/games/242_slup_ognia.jpg\" alt=\"Słup Ognia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"242",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "242_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{242} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({247} = 'not')",
        "name":"Splendor",
        "title":"Splendor",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"247_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/148228/splendor\" target=\"_blank\"><img src=\"../images/games/247_splendor.jpg\" alt=\"Splendor\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"247",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "247_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{247} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({296} = 'not')",
        "name":"W_Roku_Smoka",
        "title":"W roku smoka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"296_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/31594/year-dragon\" target=\"_blank\"><img src=\"../images/games/296_w_roku_smoka.jpg\" alt=\"W roku smoka\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"296",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "296_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{296} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({204} = 'not')",
        "name":"Podwodne_Miasta",
        "title":"Podwodne Miasta",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"204_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/247763/underwater-cities\" target=\"_blank\"><img src=\"../images/games/204_podwodne_miasta.jpg\" alt=\"Podwodne Miasta\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"204",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "204_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{204} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({251} = 'not')",
        "name":"Statki_Lupy",
        "title":"Statki, łupy, kościotrupy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"251_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/176606/rattle-battle-grab-loot\" target=\"_blank\"><img src=\"../images/games/251_statki_lupy.jpg\" alt=\"Statki, łupy, kościotrupy\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"251",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "251_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{251} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({231} = 'not')",
        "name":"Santorini",
        "title":"Santorini",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"231_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/194655/santorini\" target=\"_blank\"><img src=\"../images/games/231_santorini.jpg\" alt=\"Santorini\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"231",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "231_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{231} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({176} = 'not')",
        "name":"Obecnosc",
        "title":"Obecność",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"176_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/194879/not-alone\" target=\"_blank\"><img src=\"../images/games/176_obecnosc.jpg\" alt=\"Obecność\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"176",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "176_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{176} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({259} = 'not')",
        "name":"Szalona_Misja",
        "title":"Szalona misja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"259_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/136991/loony-quest\" target=\"_blank\"><img src=\"../images/games/259_szalona_misja.jpg\" alt=\"Szalona misja\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"259",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "259_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{259} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({51} = 'not')",
        "name":"Compounded",
        "title":"Compounded",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"51_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/118174/compounded\" target=\"_blank\"><img src=\"../images/games/51_compounded.jpg\" alt=\"Compounded\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"51",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "51_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{51} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({178} = 'not')",
        "name":"Odbudowa_Warszawy",
        "title":"Odbudowa Warszawy 1945-1980",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"178_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/167404/warsaw-rising-1945-1980\" target=\"_blank\"><img src=\"../images/games/178_odbudowa_warszawy.jpg\" alt=\"Odbudowa Warszawy 1945-1980\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"178",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "178_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{178} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({88} = 'not')",
        "name":"Forum_Trajanum",
        "title":"Forum Trajanum",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"88_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/244049/forum-trajanum\" target=\"_blank\"><img src=\"../images/games/88_forum_trajanum.jpg\" alt=\"Forum Trajanum\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"88",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "88_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{88} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({136} = 'not')",
        "name":"Kolko_Krzyzyk",
        "title":"Kółko i Krzyżyk",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"136_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/11901/tic-tac-toe\" target=\"_blank\"><img src=\"../images/games/136_kolko_krzyzyk.jpg\" alt=\"Kółko i Krzyżyk\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"136",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "136_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{136} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({48} = 'not')",
        "name":"Codex",
        "title":"Codex: Starter Set",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"48_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/215436/codex-card-time-strategy-starter-set\" target=\"_blank\"><img src=\"../images/games/48_codex.jpg\" alt=\"Codex: Starter Set\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"48",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "48_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{48} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({11} = 'not')",
        "name":"Alchemicy",
        "title":"Alchemicy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"11_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/161970/alchemists\" target=\"_blank\"><img src=\"../images/games/11_alchemicy.jpg\" alt=\"Alchemicy\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"11",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "11_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{11} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({318} = 'not')",
        "name":"Wyspa_Skye",
        "title":"Wyspa Skye",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"318_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/176494/isle-skye-chieftain-king\" target=\"_blank\"><img src=\"../images/games/318_wyspa_skye.jpg\" alt=\"Wyspa Skye\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"318",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "318_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{318} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({361} = 'not')",
        "name":"Boarding",
        "title":"Boarding",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"361_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/230200/overbooked\" target=\"_blank\"><img src=\"../images/games/361_boarding.jpg\" alt=\"Boarding\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"361",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "361_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{361} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({363} = 'not')",
        "name":"Smoczy_Wyscig",
        "title":"Smoczy Wyścig",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"363_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/168582/dragon-racer\" target=\"_blank\"><img src=\"../images/games/363_smoczy_wyscig.jpg\" alt=\"Smoczy Wyścig\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"363",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "363_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{363} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({6} = 'not')",
        "name":"Acquire",
        "title":"Acquire",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"6_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/5/acquire\" target=\"_blank\"><img src=\"../images/games/6_acquire.jpg\" alt=\"Acquire\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"6",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "6_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{6} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({260} = 'not')",
        "name":"Crazy_Carts",
        "title":"Szalone wózki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"260_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/195518/crazy-karts\" target=\"_blank\"><img src=\"../images/games/260_crazy_carts.jpg\" alt=\"Szalone wózki\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"260",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "260_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{260} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({220} = 'not')",
        "name":"Roll",
        "title":"Roll for the Galaxy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"220_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/132531/roll-galaxy\" target=\"_blank\"><img src=\"../images/games/220_roll.jpg\" alt=\"Roll for the Galaxy\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"220",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "220_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{220} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({135} = 'not')",
        "name":"Kosmiczna_Misja",
        "title":"Kosmiczna Misja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"135_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/154728/kosmiczna-misja\" target=\"_blank\"><img src=\"../images/games/135_kosmiczna_misja.jpg\" alt=\"Kosmiczna Misja\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"135",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "135_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{135} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({344} = 'not')",
        "name":"FCM",
        "title":"Food Chain Magnate",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"344_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/175914/food-chain-magnate\" target=\"_blank\"><img src=\"../images/games/344_fcm.jpg\" alt=\"Food Chain Magnate\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"344",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "344_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{344} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({191} = 'not')",
        "name":"Pandemic_Lekarstwo",
        "title":"Pandemic: Lekarstwo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"191_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/150658/pandemic-cure\" target=\"_blank\"><img src=\"../images/games/191_pandemic_lekarstwo.jpg\" alt=\"Pandemic: Lekarstwo\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"191",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "191_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{191} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({331} = 'not')",
        "name":"Cooper_Island",
        "title":"Cooper Island",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"331_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/269511/cooper-island\" target=\"_blank\"><img src=\"../images/games/331_cooper_island.jpg\" alt=\"Cooper Island\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"331",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "331_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{331} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({12} = 'not')",
        "name":"Alea_Evangelii",
        "title":"Alea Evangelii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"12_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/33693/alea-evangelii\" target=\"_blank\"><img src=\"../images/games/12_alea_evangelii.jpg\" alt=\"Alea Evangelii\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"12",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "12_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{12} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({334} = 'not')",
        "name":"Unsettled",
        "title":"Unsettled",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"334_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/290484/unsettled\" target=\"_blank\"><img src=\"../images/games/334_unsettled.jpg\" alt=\"Unsettled\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"334",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "334_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{334} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({315} = 'not')",
        "name":"Wyrocznia_Delficka",
        "title":"Wyrocznia Delficka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"315_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/193558/oracle-delphi\" target=\"_blank\"><img src=\"../images/games/315_wyrocznia_delficka.jpg\" alt=\"Wyrocznia Delficka\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"315",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "315_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{315} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({218} = 'not')",
        "name":"Rattus",
        "title":"Rattus",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"218_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/42452/rattus\" target=\"_blank\"><img src=\"../images/games/218_rattus.jpg\" alt=\"Rattus\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"218",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "218_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{218} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({46} = 'not')",
        "name":"Cloudage",
        "title":"CloudAge",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"46_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316858/cloudage\" target=\"_blank\"><img src=\"../images/games/46_cloudage.jpg\" alt=\"CloudAge\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"46",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "46_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{46} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({241} = 'not')",
        "name":"Sludzy_Ciemnosci",
        "title":"Słudzy ciemności",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"241_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/181153/butts-away-heroes\" target=\"_blank\"><img src=\"../images/games/241_sludzy_ciemnosci.jpg\" alt=\"Słudzy ciemności\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"241",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "241_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{241} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({365} = 'not')",
        "name":"Metropolia",
        "title":"Metropolia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"365_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/185817/metropolia\" target=\"_blank\"><img src=\"../images/games/365_metropolia.jpg\" alt=\"Metropolia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"365",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "365_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{365} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({20} = 'not')",
        "name":"BANG_Dice",
        "title":"BANG! Gra Kościana",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"20_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/143741/bang-dice-game\" target=\"_blank\"><img src=\"../images/games/20_bang_dice.jpg\" alt=\"BANG! Gra Kościana\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"20",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "20_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{20} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({270} = 'not')",
        "name":"Takie_Zycie",
        "title":"Takie życie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"270_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgameexpansion/131221/mindmaze\" target=\"_blank\"><img src=\"../images/games/270_takie_zycie.jpg\" alt=\"Takie życie\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"270",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "270_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{270} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({252} = 'not')",
        "name":"Story_Cubes",
        "title":"Story Cubes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"252_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/20545/rorys-story-cubes\" target=\"_blank\"><img src=\"../images/games/252_story_cubes.jpg\" alt=\"Story Cubes\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"252",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "252_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{252} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({307} = 'not')",
        "name":"Winnica",
        "title":"Winnica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"307_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/205045/avenue\" target=\"_blank\"><img src=\"../images/games/307_winnica.jpg\" alt=\"Winnica\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"307",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "307_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{307} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({49} = 'not')",
        "name":"Coimbra",
        "title":"Coimbra",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"49_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/245638/coimbra\" target=\"_blank\"><img src=\"../images/games/49_coimbra.jpg\" alt=\"Coimbra\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"49",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "49_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{49} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({139} = 'not')",
        "name":"Le_Havre",
        "title":"Le Havre",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"139_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/35677/le-havre\" target=\"_blank\"><img src=\"../images/games/139_le_havre.jpg\" alt=\"Le Havre\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"139",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "139_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{139} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({229} = 'not')",
        "name":"Saloon",
        "title":"Saloon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"229_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2496/saloon\" target=\"_blank\"><img src=\"../images/games/229_saloon.jpg\" alt=\"Saloon\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"229",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "229_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{229} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({85} = 'not')",
        "name":"Fauna",
        "title":"Fauna",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"85_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/35497/fauna\" target=\"_blank\"><img src=\"../images/games/85_fauna.jpg\" alt=\"Fauna\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"85",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "85_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{85} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({269} = 'not')",
        "name":"Ark_Nova",
        "title":"Ark Nova",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"269_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/342942/ark-nova\" target=\"_blank\"><img src=\"../images/games/269_ark_nova.jpg\" alt=\"Ark Nova\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"269",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "269_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{269} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({22} = 'not')",
        "name":"Barrage",
        "title":"Barrage",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"22_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/251247/barrage\" target=\"_blank\"><img src=\"../images/games/22_barrage.jpg\" alt=\"Barrage\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"22",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "22_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{22} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({44} = 'not')",
        "name":"CotBS",
        "title":"City of the Big Shoulders",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"44_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/214880/city-big-shoulders\" target=\"_blank\"><img src=\"../images/games/44_cotbs.jpg\" alt=\"City of the Big Shoulders\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"44",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "44_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{44} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({36} = 'not')",
        "name":"Cafe",
        "title":"Café",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"36_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/284936/cafe\" target=\"_blank\"><img src=\"../images/games/36_cafe.jpg\" alt=\"Café\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"36",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "36_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{36} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({332} = 'not')",
        "name":"Marvel_United",
        "title":"Marvel United (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"332_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/298047/marvel-united\" target=\"_blank\"><img src=\"../images/games/332_marvel_united.jpg\" alt=\"Marvel United (seria)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"332",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "332_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{332} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({53} = 'not')",
        "name":"Council_of4",
        "title":"Council of 4",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"53_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173101/council-4\" target=\"_blank\"><img src=\"../images/games/53_council_of4.jpg\" alt=\"Council of 4\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"53",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "53_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{53} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({73} = 'not')",
        "name":"Dyplomacja",
        "title":"Dyplomacja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"73_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/483/diplomacy\" target=\"_blank\"><img src=\"../images/games/73_dyplomacja.jpg\" alt=\"Dyplomacja\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"73",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "73_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{73} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({312} = 'not')",
        "name":"TtR",
        "title":"Wsiąść do Pociągu (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"312_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/17/game-ticket-ride-official\" target=\"_blank\"><img src=\"../images/games/312_ttr.jpg\" alt=\"Wsiąść do Pociągu (seria)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"312",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "312_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{312} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({293} = 'not')",
        "name":"Basniowa_Ucieczka",
        "title":"Unpublished prototype (Baśniowa ucieczka)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"293_image",
         "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"../images/games/293_basniowa_ucieczka.jpg\" alt=\"Unpublished prototype (Baśniowa ucieczka)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"293",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "293_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{293} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({246} = 'not')",
        "name":"SI",
        "title":"Spirit Island",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"246_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/162886/spirit-island\" target=\"_blank\"><img src=\"../images/games/246_si.jpg\" alt=\"Spirit Island\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"246",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "246_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{246} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({304} = 'not')",
        "name":"Wielka_Petla",
        "title":"Wielka Pętla",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"304_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199478/flamme-rouge\" target=\"_blank\"><img src=\"../images/games/304_wielka_petla.jpg\" alt=\"Wielka Pętla\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"304",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "304_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{304} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({329} = 'not')",
        "name":"Zombie_Kidz",
        "title":"Zombie Kidz: Ewolucja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"329_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256952/zombie-kidz-evolution\" target=\"_blank\"><img src=\"../images/games/329_zombie_kidz.jpg\" alt=\"Zombie Kidz: Ewolucja\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"329",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "329_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{329} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({320} = 'not')",
        "name":"Yunnan",
        "title":"Yunnan",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"320_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/143401/yunnan\" target=\"_blank\"><img src=\"../images/games/320_yunnan.jpg\" alt=\"Yunnan\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"320",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "320_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{320} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({230} = 'not')",
        "name":"Santa_Maria",
        "title":"Santa Maria",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"230_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/229220/santa-maria\" target=\"_blank\"><img src=\"../images/games/230_santa_maria.jpg\" alt=\"Santa Maria\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"230",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "230_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{230} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({28} = 'not')",
        "name":"Blood_Rage",
        "title":"Blood Rage",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"28_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/170216/blood-rage\" target=\"_blank\"><img src=\"../images/games/28_blood_rage.jpg\" alt=\"Blood Rage\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"28",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "28_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{28} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({119} = 'not')",
        "name":"JL_Hero_Dice",
        "title":"Justice League: Hero Dice (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"119_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/46104/game-justice-league-hero-dice\" target=\"_blank\"><img src=\"../images/games/119_jl_hero_dice.jpg\" alt=\"Justice League: Hero Dice (seria)\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"119",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "119_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{119} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({281} = 'not')",
        "name":"Timeline_Polska",
        "title":"Timeline: Polska",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"281_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/203655/timeline-polska\" target=\"_blank\"><img src=\"../images/games/281_timeline_polska.jpg\" alt=\"Timeline: Polska\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"281",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "281_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{281} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({69} = 'not')",
        "name":"Dominant Species",
        "title":"Dominant Species",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"69_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/62219/dominant-species\" target=\"_blank\"><img src=\"../images/games/69_dominant_species.jpg\" alt=\"Dominant Species\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"69",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "69_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{69} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({355} = 'not')",
        "name":"Arnak",
        "title":"Zaginiona Wyspa Arnak",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"355_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/312484/lost-ruins-arnak\" target=\"_blank\"><img src=\"../images/games/355_arnak.jpg\" alt=\"Zaginiona Wyspa Arnak\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"355",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "355_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{355} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({289} = 'not')",
        "name":"Tzolkin",
        "title":"Tzol'kin: Kalendarz Majów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"289_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/126163/tzolk-mayan-calendar\" target=\"_blank\"><img src=\"../images/games/289_tzolkin.jpg\" alt=\"Tzol'kin: Kalendarz Majów\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"289",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "289_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{289} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({205} = 'not')",
        "name":"DC_Pojedynek",
        "title":"Pojedynek Superbohaterów DC",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"205_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/125678/dc-comics-deck-building-game\" target=\"_blank\"><img src=\"../images/games/205_dc_pojedynek.jpg\" alt=\"Pojedynek Superbohaterów DC\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"205",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "205_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{205} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({31} = 'not')",
        "name":"Brass_L",
        "title":"Brass: Lancashire",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"31_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/28720/brass-lancashire\" target=\"_blank\"><img src=\"../images/games/31_brass_l.jpg\" alt=\"Brass: Lancashire\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"31",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "31_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{31} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({155} = 'not')",
        "name":"Marrakech",
        "title":"Marrakech",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"155_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/29223/marrakech\" target=\"_blank\"><img src=\"../images/games/155_marrakech.jpg\" alt=\"Marrakech\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"155",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "155_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{155} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({125} = 'not')",
        "name":"Kawerna_2P",
        "title":"Kawerna: Jaskinia Kontra Jaskinia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"125_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/220520/caverna-cave-vs-cave\" target=\"_blank\"><img src=\"../images/games/125_kawerna_2p.jpg\" alt=\"Kawerna: Jaskinia Kontra Jaskinia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"125",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "125_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{125} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({188} = 'not')",
        "name":"Palec_Bozy",
        "title":"Palec Boży",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"188_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/281194/flick-faith\" target=\"_blank\"><img src=\"../images/games/188_palec_bozy.jpg\" alt=\"Palec Boży\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"188",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "188_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{188} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({236} = 'not')",
        "name":"Sherlock",
        "title":"Sherlock",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"236_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/149869/sherlock-13\" target=\"_blank\"><img src=\"../images/games/236_sherlock.jpg\" alt=\"Sherlock\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"236",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "236_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{236} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({367} = 'not')",
        "name":"Lamaland",
        "title":"Lamaland",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"367_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/330038/llamaland\" target=\"_blank\"><img src=\"../images/games/367_lamaland.jpg\" alt=\"Lamaland\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"367",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "367_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{367} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({368} = 'not')",
        "name":"Gloom",
        "title":"Gloom: Gra Niefortunnych Zdarzeń",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"368_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12692/gloom\" target=\"_blank\"><img src=\"../images/games/368_gloom.jpg\" alt=\"Gloom: Gra Niefortunnych Zdarzeń\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"368",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "368_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{368} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
				"visibleIf": "!({369} = 'not')",
        "name":"Mathable_Q",
        "title":"Mathable Quattro",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"369_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/131526/mathable-quattro\" target=\"_blank\"><img src=\"../images/games/369_mathable_q.jpg\" alt=\"Mathable Quattro\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"369",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"../images/icons/1_mini.png"},
          {"value":"t2","imageLink":"../images/icons/2_mini.png"},
          {"value":"t3","imageLink":"../images/icons/3_mini.png"},
         {"value":"t4","imageLink":"../images/icons/4_mini.png"},
          {"value":"t5","imageLink":"../images/icons/5_mini.png"},
          {"value":"x","imageLink":"../images/icons/x_mini.png"}
         ],
         "imageHeight":50,
         "imageWidth":50
        },
        {
          "type": "boolean",
          
          "name": "369_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{369} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
	  {
        "type":"panel",
			"visibleIf": "!({413} = 'not')",
        "name":"Volt",
        "title":"VOLT",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"413_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/211454/volt\" target=\"_blank\"><img src=\"images/games/413_Volt.jpg\" alt=\"VOLT\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"413",
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
          "indent": "15",
          "name": "413_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{413} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
	  {
        "type":"panel",
			"visibleIf": "!({410} = 'not')",
        "name":"TMB",
        "title":"Too Many Bones",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"410_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/192135/too-many-bones\" target=\"_blank\"><img src=\"images/games/410_TMB.jpg\" alt=\"Too Many Bones\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"410",
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
          "indent": "15",
          "name": "410_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{410} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({380} = 'not')",
        "name":"Coatl",
        "title":"Coatl",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"380_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/274841/coatl\" target=\"_blank\"><img src=\"images/games/380_Coatl.jpg\" alt=\"Coatl\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"380",
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
          "indent": "15",
          "name": "380_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{380} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({400} = 'not')",
        "name":"robin_hood",
        "title":"Robin Hood",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"400_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256998/robin-wood\" target=\"_blank\"><img src=\"images/games/400_robin_hood.jpg\" alt=\"Robin Hood\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"400",
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
          "indent": "15",
          "name": "400_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{400} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({406} = 'not')",
        "name":"TM_Ares",
        "title":"Terraformacja Marsa: Ekspedycja Ares",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"406_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/328871/terraforming-mars-ares-expedition\" target=\"_blank\"><img src=\"images/games/406_TM_Ares.jpg\" alt=\"Terraformacja Marsa: Ekspedycja Ares\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"406",
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
          "indent": "15",
          "name": "406_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{406} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({404} = 'not')",
        "name":"SW_OuterRim",
        "title":"Star Wars: Zewnętrzne Rubieże",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"404_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/271896/star-wars-outer-rim\" target=\"_blank\"><img src=\"images/games/404_SW_OuterRim.jpg\" alt=\"Star Wars: Zewnętrzne Rubieże\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"404",
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
          "indent": "15",
          "name": "404_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{404} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({388} = 'not')",
        "name":"Khora",
        "title":"Khôra: Rozkwit Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"388_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/299684/khora-rise-empire\" target=\"_blank\"><img src=\"images/games/388_Khora.jpg\" alt=\"Khôra: Rozkwit Imperium\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"388",
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
          "indent": "15",
          "name": "388_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{388} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({379} = 'not')",
        "name":"CoC",
        "title":"Clash of Cultures",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"379_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/299659/clash-cultures-monumental-edition\" target=\"_blank\"><img src=\"images/games/379_CoC.jpg\" alt=\"Clash of Cultures\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"379",
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
          "indent": "15",
          "name": "379_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{379} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({390} = 'not')",
        "name":"La_Granja",
        "title":"La Granja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"390_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/146886/la-granja\" target=\"_blank\"><img src=\"images/games/390_La_Granja.jpg\" alt=\"La Granja\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"390",
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
          "indent": "15",
          "name": "390_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{390} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({382} = 'not')",
        "name":"Eter",
        "title":"Eter",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"382_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/365653/eter\" target=\"_blank\"><img src=\"images/games/382_Eter.jpg\" alt=\"Eter\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"382",
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
          "indent": "15",
          "name": "382_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{382} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({399} = 'not')",
        "name":"bus_route",
        "title":"Proszę Wsiadać: Nowy Jork & Londyn",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"399_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/347013/get-board-new-york-london\" target=\"_blank\"><img src=\"images/games/399_bus_route.jpg\" alt=\"Proszę Wsiadać: Nowy Jork & Londyn\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"399",
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
          "indent": "15",
          "name": "399_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{399} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
	  {
        "type":"panel",
			"visibleIf": "!({402} = 'not')",
        "name":"Scout",
        "title":"SCOUT",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"402_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/291453/scout\" target=\"_blank\"><img src=\"images/games/402_Scout.jpg\" alt=\"SCOUT\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"402",
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
          "indent": "15",
          "name": "402_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{402} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({389} = 'not')",
        "name":"Kohaku",
        "title":"Kōhaku",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"389_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/270143/khaku\" target=\"_blank\"><img src=\"images/games/389_Kohaku.jpg\" alt=\"Kōhaku\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"389",
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
          "indent": "15",
          "name": "389_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{389} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({395} = 'not')",
        "name":"Loop",
        "title":"Pętla",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"395_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316412/loop\" target=\"_blank\"><img src=\"images/games/395_Loop.jpg\" alt=\"Pętla\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"395",
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
          "indent": "15",
          "name": "395_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{395} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({418} = 'not')",
        "name":"Ex_Libris",
        "title":"Ex Libris",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"418_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/201825/ex-libris\" target=\"_blank\"><img src=\"images/games/418_Ex_Libris.jpg\" alt=\"Ex Libris\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"418",
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
          "indent": "15",
          "name": "418_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{418} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({421} = 'not')",
        "name":"Viscounts",
        "title":"Wicehrabiowie Zachodniego Królestwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"421_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/296151/viscounts-west-kingdom\" target=\"_blank\"><img src=\"images/games/421_Viscounts.jpg\" alt=\"Wicehrabiowie Zachodniego Królestwa\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"421",
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
          "indent": "15",
          "name": "421_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{421} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({377} = 'not')",
        "name":"BrainBox_HP",
        "title":"BrainBox: Harry Potter",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"377_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/349165/brainbox-harry-potter\" target=\"_blank\"><img src=\"images/games/377_BrainBox_HP.jpg\" alt=\"BrainBox: Harry Potter\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"377",
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
          "indent": "15",
          "name": "377_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{377} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({392} = 'not')",
        "name":"Manitoba",
        "title":"Manitoba",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"392_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/260201/manitoba\" target=\"_blank\"><img src=\"images/games/392_Manitoba.jpg\" alt=\"Manitoba\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"392",
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
          "indent": "15",
          "name": "392_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{392} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({372} = 'not')",
        "name":"ANetrunner",
        "title":"Android: Netrunner",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"372_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/124742/android-netrunner\" target=\"_blank\"><img src=\"images/games/372_ANetrunner.jpg\" alt=\"Android: Netrunner\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"372",
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
          "indent": "15",
          "name": "372_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{372} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({378} = 'not')",
        "name":"Brian_Boru",
        "title":"Brian Boru: Wielki Król Irlandii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"378_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/337765/brian-boru-high-king-ireland\" target=\"_blank\"><img src=\"images/games/378_Brian_Boru.jpg\" alt=\"Brian Boru: Wielki Król Irlandii\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"378",
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
          "indent": "15",
          "name": "378_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{378} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({409} = 'not')",
        "name":"Transcontinental",
        "title":"The Transcontinental",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"409_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/312512/transcontinental\" target=\"_blank\"><img src=\"images/games/409_Transcontinental.jpg\" alt=\"The Transcontinental\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"409",
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
          "indent": "15",
          "name": "409_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{409} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
	  {
        "type":"panel",
			"visibleIf": "!({371} = 'not')",
        "name":"Abyss",
        "title":"Abyss",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"371_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/155987/abyss\" target=\"_blank\"><img src=\"images/games/371_Abyss.jpg\" alt=\"Abyss\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"371",
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
          "indent": "15",
          "name": "371_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{371} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({375} = 'not')",
        "name":"Blue_Skies",
        "title":"Blue Skies",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"375_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/309000/blue-skies\" target=\"_blank\"><img src=\"images/games/375_Blue_Skies.jpg\" alt=\"Blue Skies\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"375",
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
          "indent": "15",
          "name": "375_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{375} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({376} = 'not')",
        "name":"Boomerang",
        "title":"Boomerang (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"376_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/254213/boomerang\" target=\"_blank\"><img src=\"images/games/376_Boomerang.jpg\" alt=\"Boomerang (seria)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"376",
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
          "indent": "15",
          "name": "376_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{376} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({398} = 'not')",
        "name":"Precognition",
        "title":"Precognition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"398_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/364556/precognition\" target=\"_blank\"><img src=\"images/games/398_Precognition.jpg\" alt=\"Precognition\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"398",
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
          "indent": "15",
          "name": "398_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{398} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({397} = 'not')",
        "name":"Praga_Caput",
        "title":"Praga Caput Regni",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"397_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/308765/praga-caput-regni\" target=\"_blank\"><img src=\"images/games/397_Praga_Caput.jpg\" alt=\"Praga Caput Regni\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"397",
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
          "indent": "15",
          "name": "397_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{397} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({414} = 'not')",
        "name":"Wayfarers",
        "title":"Wędrowcy Znad Południowego Tygrysu",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"414_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/350316/wayfarers-south-tigris\" target=\"_blank\"><img src=\"images/games/414_Wayfarers.jpg\" alt=\"Wędrowcy Znad Południowego Tygrysu\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"414",
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
          "indent": "15",
          "name": "414_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{414} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({394} = 'not')",
        "name":"Osadnicy_RW",
        "title":"Osadnicy: Wykreślane Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"394_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/270836/imperial-settlers-roll-write\" target=\"_blank\"><img src=\"images/games/394_Osadnicy_RW.jpg\" alt=\"Osadnicy: Wykreślane Imperium\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"394",
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
          "indent": "15",
          "name": "394_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{394} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({373} = 'not')",
        "name":"Aquatica",
        "title":"Aquatica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"373_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/283393/aquatica\" target=\"_blank\"><img src=\"images/games/373_Aquatica.jpg\" alt=\"Aquatica\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"373",
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
          "indent": "15",
          "name": "373_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{373} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({419} = 'not')",
        "name":"Calico",
        "title":"Calico",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"419_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/283155/calico\" target=\"_blank\"><img src=\"images/games/419_Calico.jpg\" alt=\"Calico\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"419",
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
          "indent": "15",
          "name": "419_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{419} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({381} = 'not')",
        "name":"Diuna_I",
        "title":"Diuna: Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"381_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316554/dune-imperium\" target=\"_blank\"><img src=\"images/games/381_Diuna_I.jpg\" alt=\"Diuna: Imperium\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"381",
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
          "indent": "15",
          "name": "381_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{381} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
	  {
        "type":"panel",
			"visibleIf": "!({401} = 'not')",
        "name":"pacjent0",
        "title":"Pacjent Zero",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"401_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/320862/save-patient-zero\" target=\"_blank\"><img src=\"images/games/401_pacjent0.jpg\" alt=\"Pacjent Zero\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"401",
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
          "indent": "15",
          "name": "401_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{401} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({396} = 'not')",
        "name":"PlanetX",
        "title":"Poszukiwanie Planety X",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"396_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/279537/search-planet-x\" target=\"_blank\"><img src=\"images/games/396_PlanetX.jpg\" alt=\"Poszukiwanie Planety X\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"396",
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
          "indent": "15",
          "name": "396_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{396} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({387} = 'not')",
        "name":"Imperium",
        "title":"Imperium (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"387_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/318184/imperium-classics\" target=\"_blank\"><img src=\"images/games/387_Imperium.jpg\" alt=\"Imperium (seria)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"387",
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
          "indent": "15",
          "name": "387_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{387} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({393} = 'not')",
        "name":"Mrowki",
        "title":"Mrówki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"393_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/212288/rainbow-35\" target=\"_blank\"><img src=\"images/games/393_Mrowki.jpg\" alt=\"Mrówki\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"393",
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
          "indent": "15",
          "name": "393_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{393} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({405} = 'not')",
        "name":"Stationfall",
        "title":"Stationfall",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"405_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316624/stationfall\" target=\"_blank\"><img src=\"images/games/405_Stationfall.jpg\" alt=\"Stationfall\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"405",
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
          "indent": "15",
          "name": "405_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{405} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({422} = 'not')",
        "name":"Architects",
        "title":"Architekci Zachodniego Królestwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"422_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/236457/architects-west-kingdom\" target=\"_blank\"><img src=\"images/games/422_Architects.jpg\" alt=\"Architekci Zachodniego Królestwa\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"422",
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
          "indent": "15",
          "name": "422_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{422} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({420} = 'not')",
        "name":"Paladins",
        "title":"Paladyni Zachodniego Królestwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"420_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/266810/paladins-west-kingdom\" target=\"_blank\"><img src=\"images/games/420_Paladins.jpg\" alt=\"Paladyni Zachodniego Królestwa\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"420",
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
          "indent": "15",
          "name": "420_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{420} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({385} = 'not')",
        "name":"Hegemony",
        "title":"Hegemony: Lead Your Class to Victory",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"385_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/321608/hegemony-lead-your-class-victory\" target=\"_blank\"><img src=\"images/games/385_Hegemony.jpg\" alt=\"Hegemony: Lead Your Class to Victory\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"385",
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
          "indent": "15",
          "name": "385_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{385} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({411} = 'not')",
        "name":"Ukryta_tozsamosc",
        "title":"Ukryta tożsamość",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"411_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/347112/secret-identity\" target=\"_blank\"><img src=\"images/games/411_Ukryta_tozsamosc.jpg\" alt=\"Ukryta tożsamość\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"411",
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
          "indent": "15",
          "name": "411_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{411} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({408} = 'not')",
        "name":"The_Game",
        "title":"The Game",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"408_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173090/game\" target=\"_blank\"><img src=\"images/games/408_The_Game.jpg\" alt=\"The Game\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"408",
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
          "indent": "15",
          "name": "408_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{408} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
	  {
        "type":"panel",
			"visibleIf": "!({391} = 'not')",
        "name":"Heist",
        "title":"Live Mission Game: The Heist – Crime Does Pay",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"391_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/349258/live-mission-game-heist-crime-does-pay\" target=\"_blank\"><img src=\"images/games/391_Heist.jpg\" alt=\"Live Mission Game: The Heist – Crime Does Pay\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"391",
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
          "indent": "15",
          "name": "391_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{391} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({416} = 'not')",
        "name":"Woodcraft",
        "title":"Woodcraft",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"416_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/355093/woodcraft\" target=\"_blank\"><img src=\"images/games/416_Woodcraft.jpg\" alt=\"Woodcraft\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"416",
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
          "indent": "15",
          "name": "416_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{416} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({403} = 'not')",
        "name":"Solar_city",
        "title":"Solar City",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"403_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/248182/solar-city\" target=\"_blank\"><img src=\"images/games/403_Solar_city.jpg\" alt=\"Solar City\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"403",
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
          "indent": "15",
          "name": "403_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{403} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({417} = 'not')",
        "name":"Earth",
        "title":"Ziemia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"417_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/350184/earth\" target=\"_blank\"><img src=\"images/games/417_Earth.jpg\" alt=\"Ziemia\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"417",
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
          "indent": "15",
          "name": "417_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{417} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({384} = 'not')",
        "name":"GoT_Sojusze",
        "title":"Gra o Tron: Sojusze",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"384_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/346199/game-thrones-btwixt\" target=\"_blank\"><img src=\"images/games/384_GoT_Sojusze.jpg\" alt=\"Gra o Tron: Sojusze\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"384",
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
          "indent": "15",
          "name": "384_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{384} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({374} = 'not')",
        "name":"BtS",
        "title":"Beyond the Sun",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"374_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/317985/beyond-sun\" target=\"_blank\"><img src=\"images/games/374_BtS.jpg\" alt=\"Beyond the Sun\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"374",
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
          "indent": "15",
          "name": "374_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{374} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({407} = 'not')",
        "name":"TM_Dice",
        "title":"Terraformacja Marsa: Gra Kościana",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"407_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/296108/terraforming-mars-dice-game\" target=\"_blank\"><img src=\"images/games/407_TM_Dice.jpg\" alt=\"Terraformacja Marsa: Gra Kościana\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"407",
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
          "indent": "15",
          "name": "407_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{407} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({383} = 'not')",
        "name":"Golem",
        "title":"Golem",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"383_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/298383/golem\" target=\"_blank\"><img src=\"images/games/383_Golem.jpg\" alt=\"Golem\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"383",
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
          "indent": "15",
          "name": "383_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{383} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({412} = 'not')",
        "name":"Sleeping_Gods",
        "title":"Uśpieni bogowie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"412_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/255984/sleeping-gods\" target=\"_blank\"><img src=\"images/games/412_Sleeping_Gods.jpg\" alt=\"Uśpieni bogowie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"412",
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
          "indent": "15",
          "name": "412_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{412} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({370} = 'not')",
        "name":"6nimmt",
        "title":"6. bierze!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"370_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/432/take-5\" target=\"_blank\"><img src=\"images/games/370_6nimmt.jpg\" alt=\"6. bierze!\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"370",
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
          "indent": "15",
          "name": "370_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{370} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
	  {
        "type":"panel",
			"visibleIf": "!({415} = 'not')",
        "name":"WM",
        "title":"Weather Machine",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"415_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/237179/weather-machine\" target=\"_blank\"><img src=\"images/games/415_WM.jpg\" alt=\"Weather Machine\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"415",
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
          "indent": "15",
          "name": "415_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{415} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      {
        "type":"panel",
			"visibleIf": "!({386} = 'not')",
        "name":"HF4All",
        "title":"High Frontier 4 All",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"386_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/281655/high-frontier-4-all\" target=\"_blank\"><img src=\"images/games/386_HF4All.jpg\" alt=\"High Frontier 4 All\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"386",
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
          "indent": "15",
          "name": "386_nextyear",
          "title": "Chcesz ocenić tę grę za rok?",
          "titleLocation": "default",
          "labelTrue": "TAK",
          "labelFalse": "NIE",
          "defaultValue": true,
          "visibleIf": "{386} = 'x'",
          "hideNumber": true
        }
        
       ]
        
      },
      
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
var odp = $.getJSON("65b7d.json", function(data) {
    // data zawiera sparsowane dane z pliku JSON
    survey.data = data;
}).fail(function(jqxhr, textStatus, error) {
    // Obsługa błędu w przypadku niepowodzenia wczytania pliku JSON
    console.log("Wystąpił błąd: " + textStatus + ", " + error);
});
//survey.data = JSON.parse("odpowiedzi.json")
//console.log(survey.data);
//console.log("test");
$("#surveyElement").Survey({
    model: survey,
    onComplete: sendDataToServer
});
