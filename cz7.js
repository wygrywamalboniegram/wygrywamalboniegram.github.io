
	Survey.StylesManager.applyTheme("defaultV2");
	//survey.firstPageIsStarted = true;


var surveyJSON =  {
	"locale": "pl",
	"title":"TOP 50 Gier Wszechczasów (2024)",
	"showProgressBar": "top",
	"pages":[
//page 1
		{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2024) - CZĘŚĆ 6",
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
        "name":"DC_Pojedynek",
        "title":"Pojedynek Superbohaterów DC",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"205_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/125678/dc-comics-deck-building-game\" target=\"_blank\"><img src=\"images/games/205_dc_pojedynek.jpg\" alt=\"Pojedynek Superbohaterów DC\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"205",
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
        "name":"Brass_L",
        "title":"Brass: Lancashire",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"31_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/28720/brass-lancashire\" target=\"_blank\"><img src=\"images/games/31_brass_l.jpg\" alt=\"Brass: Lancashire\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"31",
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
        "name":"Marrakech",
        "title":"Marrakech",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"155_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/29223/marrakech\" target=\"_blank\"><img src=\"images/games/155_marrakech.jpg\" alt=\"Marrakech\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"155",
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
        "name":"Kawerna_2P",
        "title":"Kawerna: Jaskinia Kontra Jaskinia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"125_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/220520/caverna-cave-vs-cave\" target=\"_blank\"><img src=\"images/games/125_kawerna_2p.jpg\" alt=\"Kawerna: Jaskinia Kontra Jaskinia\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"125",
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
        "name":"Palec_Bozy",
        "title":"Palec Boży",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"188_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/281194/flick-faith\" target=\"_blank\"><img src=\"images/games/188_palec_bozy.jpg\" alt=\"Palec Boży\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"188",
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
        "name":"Sherlock",
        "title":"Sherlock",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"236_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/149869/sherlock-13\" target=\"_blank\"><img src=\"images/games/236_sherlock.jpg\" alt=\"Sherlock\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"236",
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
        "name":"Lamaland",
        "title":"Lamaland",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"367_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/330038/llamaland\" target=\"_blank\"><img src=\"images/games/367_lamaland.jpg\" alt=\"Lamaland\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"367",
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
        "name":"Gloom",
        "title":"Gloom: Gra Niefortunnych Zdarzeń",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"368_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12692/gloom\" target=\"_blank\"><img src=\"images/games/368_gloom.jpg\" alt=\"Gloom: Gra Niefortunnych Zdarzeń\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"368",
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
        "name":"Mathable_Q",
        "title":"Mathable Quattro",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"369_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/131526/mathable-quattro\" target=\"_blank\"><img src=\"images/games/369_mathable_q.jpg\" alt=\"Mathable Quattro\" style=\"max-width:95%;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"369",
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
        "name":"Volt",
        "title":"VOLT",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"413_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/211454/volt\" target=\"_blank\"><img src=\"images/games/413_volt.jpg\" alt=\"VOLT\" style=\"max-width:95%;\"> </a>"
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
      
   ]
},
//page 2
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2024) - CZĘŚĆ 7",
   "elements":[
   {
        "type":"panel",
        "name":"TMB",
        "title":"Too Many Bones",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"410_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/192135/too-many-bones\" target=\"_blank\"><img src=\"images/games/410_tmb.jpg\" alt=\"Too Many Bones\" style=\"max-width:95%;\"> </a>"
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
        "name":"Coatl",
        "title":"Coatl",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"380_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/274841/coatl\" target=\"_blank\"><img src=\"images/games/380_coatl.jpg\" alt=\"Coatl\" style=\"max-width:95%;\"> </a>"
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
        "name":"robin_hood",
        "title":"Robin Hood",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"400_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256998/robin-wood\" target=\"_blank\"><img src=\"images/games/400_robin_hood.jpg\" alt=\"Robin Hood\" style=\"max-width:95%;\"> </a>"
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
        "name":"TM_Ares",
        "title":"Terraformacja Marsa: Ekspedycja Ares",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"406_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/328871/terraforming-mars-ares-expedition\" target=\"_blank\"><img src=\"images/games/406_tm_ares.jpg\" alt=\"Terraformacja Marsa: Ekspedycja Ares\" style=\"max-width:95%;\"> </a>"
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
        "name":"SW_OuterRim",
        "title":"Star Wars: Zewnętrzne Rubieże",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"404_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/271896/star-wars-outer-rim\" target=\"_blank\"><img src=\"images/games/404_sw_outerrim.jpg\" alt=\"Star Wars: Zewnętrzne Rubieże\" style=\"max-width:95%;\"> </a>"
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
        "name":"Khora",
        "title":"Khôra: Rozkwit Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"388_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/299684/khora-rise-empire\" target=\"_blank\"><img src=\"images/games/388_khora.jpg\" alt=\"Khôra: Rozkwit Imperium\" style=\"max-width:95%;\"> </a>"
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
        "name":"CoC",
        "title":"Clash of Cultures",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"379_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/299659/clash-cultures-monumental-edition\" target=\"_blank\"><img src=\"images/games/379_coc.jpg\" alt=\"Clash of Cultures\" style=\"max-width:95%;\"> </a>"
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
        "name":"La_Granja",
        "title":"La Granja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"390_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/146886/la-granja\" target=\"_blank\"><img src=\"images/games/390_la_granja.jpg\" alt=\"La Granja\" style=\"max-width:95%;\"> </a>"
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
        "name":"Eter",
        "title":"Eter",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"382_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/365653/eter\" target=\"_blank\"><img src=\"images/games/382_eter.jpg\" alt=\"Eter\" style=\"max-width:95%;\"> </a>"
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
        "name":"bus_route",
        "title":"Proszę Wsiadać: Nowy Jork & Londyn",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"399_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/347013/get-board-new-york-london\" target=\"_blank\"><img src=\"images/games/399_bus_route.jpg\" alt=\"Proszę Wsiadać: Nowy Jork & Londyn\" style=\"max-width:95%;\"> </a>"
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
      
   ]
},
//page 3
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2024) - CZĘŚĆ 7",
   "elements":[
   {
        "type":"panel",
        "name":"Scout",
        "title":"SCOUT",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"402_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/291453/scout\" target=\"_blank\"><img src=\"images/games/402_scout.jpg\" alt=\"SCOUT\" style=\"max-width:95%;\"> </a>"
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
        "name":"Kohaku",
        "title":"Kōhaku",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"389_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/270143/khaku\" target=\"_blank\"><img src=\"images/games/389_kohaku.jpg\" alt=\"Kōhaku\" style=\"max-width:95%;\"> </a>"
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
        "name":"Loop",
        "title":"Pętla",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"395_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316412/loop\" target=\"_blank\"><img src=\"images/games/395_loop.jpg\" alt=\"Pętla\" style=\"max-width:95%;\"> </a>"
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
        "name":"Ex_Libris",
        "title":"Ex Libris",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"418_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/201825/ex-libris\" target=\"_blank\"><img src=\"images/games/418_ex_libris.jpg\" alt=\"Ex Libris\" style=\"max-width:95%;\"> </a>"
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
        "name":"Viscounts",
        "title":"Wicehrabiowie Zachodniego Królestwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"421_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/296151/viscounts-west-kingdom\" target=\"_blank\"><img src=\"images/games/421_viscounts.jpg\" alt=\"Wicehrabiowie Zachodniego Królestwa\" style=\"max-width:95%;\"> </a>"
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
        "name":"BrainBox_HP",
        "title":"BrainBox: Harry Potter",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"377_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/349165/brainbox-harry-potter\" target=\"_blank\"><img src=\"images/games/377_brainbox_hp.jpg\" alt=\"BrainBox: Harry Potter\" style=\"max-width:95%;\"> </a>"
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
        "name":"Manitoba",
        "title":"Manitoba",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"392_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/260201/manitoba\" target=\"_blank\"><img src=\"images/games/392_manitoba.jpg\" alt=\"Manitoba\" style=\"max-width:95%;\"> </a>"
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
        "name":"ANetrunner",
        "title":"Android: Netrunner",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"372_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/124742/android-netrunner\" target=\"_blank\"><img src=\"images/games/372_anetrunner.jpg\" alt=\"Android: Netrunner\" style=\"max-width:95%;\"> </a>"
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
        "name":"Brian_Boru",
        "title":"Brian Boru: Wielki Król Irlandii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"378_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/337765/brian-boru-high-king-ireland\" target=\"_blank\"><img src=\"images/games/378_brian_boru.jpg\" alt=\"Brian Boru: Wielki Król Irlandii\" style=\"max-width:95%;\"> </a>"
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
        "name":"Transcontinental",
        "title":"The Transcontinental",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"409_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/312512/transcontinental\" target=\"_blank\"><img src=\"images/games/409_transcontinental.jpg\" alt=\"The Transcontinental\" style=\"max-width:95%;\"> </a>"
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
      
   ]
},
//page 4
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2024) - CZĘŚĆ 7",
   "elements":[
   {
        "type":"panel",
        "name":"Abyss",
        "title":"Abyss",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"371_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/155987/abyss\" target=\"_blank\"><img src=\"images/games/371_abyss.jpg\" alt=\"Abyss\" style=\"max-width:95%;\"> </a>"
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
        "name":"Blue_Skies",
        "title":"Blue Skies",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"375_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/309000/blue-skies\" target=\"_blank\"><img src=\"images/games/375_blue_skies.jpg\" alt=\"Blue Skies\" style=\"max-width:95%;\"> </a>"
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
        "name":"Boomerang",
        "title":"Boomerang (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"376_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/254213/boomerang\" target=\"_blank\"><img src=\"images/games/376_boomerang.jpg\" alt=\"Boomerang (seria)\" style=\"max-width:95%;\"> </a>"
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
        "name":"Precognition",
        "title":"Precognition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"398_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/364556/precognition\" target=\"_blank\"><img src=\"images/games/398_precognition.jpg\" alt=\"Precognition\" style=\"max-width:95%;\"> </a>"
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
        "name":"Praga_Caput",
        "title":"Praga Caput Regni",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"397_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/308765/praga-caput-regni\" target=\"_blank\"><img src=\"images/games/397_praga_caput.jpg\" alt=\"Praga Caput Regni\" style=\"max-width:95%;\"> </a>"
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
        "name":"Wayfarers",
        "title":"Wędrowcy Znad Południowego Tygrysu",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"414_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/350316/wayfarers-south-tigris\" target=\"_blank\"><img src=\"images/games/414_wayfarers.jpg\" alt=\"Wędrowcy Znad Południowego Tygrysu\" style=\"max-width:95%;\"> </a>"
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
        "name":"Osadnicy_RW",
        "title":"Osadnicy: Wykreślane Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"394_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/270836/imperial-settlers-roll-write\" target=\"_blank\"><img src=\"images/games/394_osadnicy_rw.jpg\" alt=\"Osadnicy: Wykreślane Imperium\" style=\"max-width:95%;\"> </a>"
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
        "name":"Aquatica",
        "title":"Aquatica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"373_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/283393/aquatica\" target=\"_blank\"><img src=\"images/games/373_aquatica.jpg\" alt=\"Aquatica\" style=\"max-width:95%;\"> </a>"
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
        "name":"Calico",
        "title":"Calico",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"419_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/283155/calico\" target=\"_blank\"><img src=\"images/games/419_calico.jpg\" alt=\"Calico\" style=\"max-width:95%;\"> </a>"
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
        "name":"Diuna_I",
        "title":"Diuna: Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"381_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316554/dune-imperium\" target=\"_blank\"><img src=\"images/games/381_diuna_i.jpg\" alt=\"Diuna: Imperium\" style=\"max-width:95%;\"> </a>"
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
      
   ]
},
//page 5
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2024) - CZĘŚĆ 7",
   "elements":[
   {
        "type":"panel",
        "name":"pacjent0",
        "title":"Pacjent Zero",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"401_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/320862/save-patient-zero\" target=\"_blank\"><img src=\"images/games/401_pacjent0.jpg\" alt=\"Pacjent Zero\" style=\"max-width:95%;\"> </a>"
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
        "name":"PlanetX",
        "title":"Poszukiwanie Planety X",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"396_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/279537/search-planet-x\" target=\"_blank\"><img src=\"images/games/396_planetx.jpg\" alt=\"Poszukiwanie Planety X\" style=\"max-width:95%;\"> </a>"
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
        "name":"Imperium",
        "title":"Imperium (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"387_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/318184/imperium-classics\" target=\"_blank\"><img src=\"images/games/387_imperium.jpg\" alt=\"Imperium (seria)\" style=\"max-width:95%;\"> </a>"
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
        "name":"Mrowki",
        "title":"Mrówki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"393_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/212288/rainbow-35\" target=\"_blank\"><img src=\"images/games/393_mrowki.jpg\" alt=\"Mrówki\" style=\"max-width:95%;\"> </a>"
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
        "name":"Stationfall",
        "title":"Stationfall",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"405_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316624/stationfall\" target=\"_blank\"><img src=\"images/games/405_stationfall.jpg\" alt=\"Stationfall\" style=\"max-width:95%;\"> </a>"
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
        "name":"Architects",
        "title":"Architekci Zachodniego Królestwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"422_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/236457/architects-west-kingdom\" target=\"_blank\"><img src=\"images/games/422_architects.jpg\" alt=\"Architekci Zachodniego Królestwa\" style=\"max-width:95%;\"> </a>"
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
        "name":"Paladins",
        "title":"Paladyni Zachodniego Królestwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"420_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/266810/paladins-west-kingdom\" target=\"_blank\"><img src=\"images/games/420_paladins.jpg\" alt=\"Paladyni Zachodniego Królestwa\" style=\"max-width:95%;\"> </a>"
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
        "name":"Hegemony",
        "title":"Hegemony: Lead Your Class to Victory",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"385_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/321608/hegemony-lead-your-class-victory\" target=\"_blank\"><img src=\"images/games/385_hegemony.jpg\" alt=\"Hegemony: Lead Your Class to Victory\" style=\"max-width:95%;\"> </a>"
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
        "name":"Ukryta_tozsamosc",
        "title":"Ukryta tożsamość",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"411_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/347112/secret-identity\" target=\"_blank\"><img src=\"images/games/411_ukryta_tozsamosc.jpg\" alt=\"Ukryta tożsamość\" style=\"max-width:95%;\"> </a>"
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
        "name":"The_Game",
        "title":"The Game",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"408_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173090/game\" target=\"_blank\"><img src=\"images/games/408_the_game.jpg\" alt=\"The Game\" style=\"max-width:95%;\"> </a>"
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
      
   ]
},
//page 6
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2024) - CZĘŚĆ 7",
   "elements":[
   {
        "type":"panel",
        "name":"Heist",
        "title":"Live Mission Game: The Heist – Crime Does Pay",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"391_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/349258/live-mission-game-heist-crime-does-pay\" target=\"_blank\"><img src=\"images/games/391_heist.jpg\" alt=\"Live Mission Game: The Heist – Crime Does Pay\" style=\"max-width:95%;\"> </a>"
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
        "name":"Woodcraft",
        "title":"Woodcraft",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"416_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/355093/woodcraft\" target=\"_blank\"><img src=\"images/games/416_woodcraft.jpg\" alt=\"Woodcraft\" style=\"max-width:95%;\"> </a>"
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
        "name":"Solar_city",
        "title":"Solar City",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"403_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/248182/solar-city\" target=\"_blank\"><img src=\"images/games/403_solar_city.jpg\" alt=\"Solar City\" style=\"max-width:95%;\"> </a>"
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
        "name":"Earth",
        "title":"Ziemia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"417_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/350184/earth\" target=\"_blank\"><img src=\"images/games/417_earth.jpg\" alt=\"Ziemia\" style=\"max-width:95%;\"> </a>"
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
        "name":"GoT_Sojusze",
        "title":"Gra o Tron: Sojusze",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"384_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/346199/game-thrones-btwixt\" target=\"_blank\"><img src=\"images/games/384_got_sojusze.jpg\" alt=\"Gra o Tron: Sojusze\" style=\"max-width:95%;\"> </a>"
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
        "name":"BtS",
        "title":"Beyond the Sun",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"374_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/317985/beyond-sun\" target=\"_blank\"><img src=\"images/games/374_bts.jpg\" alt=\"Beyond the Sun\" style=\"max-width:95%;\"> </a>"
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
        "name":"TM_Dice",
        "title":"Terraformacja Marsa: Gra Kościana",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"407_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/296108/terraforming-mars-dice-game\" target=\"_blank\"><img src=\"images/games/407_tm_dice.jpg\" alt=\"Terraformacja Marsa: Gra Kościana\" style=\"max-width:95%;\"> </a>"
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
        "name":"Golem",
        "title":"Golem",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"383_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/298383/golem\" target=\"_blank\"><img src=\"images/games/383_golem.jpg\" alt=\"Golem\" style=\"max-width:95%;\"> </a>"
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
        "name":"Sleeping_Gods",
        "title":"Uśpieni bogowie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"412_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/255984/sleeping-gods\" target=\"_blank\"><img src=\"images/games/412_sleeping_gods.jpg\" alt=\"Uśpieni bogowie\" style=\"max-width:95%;\"> </a>"
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
        "name":"6nimmt",
        "title":"6. bierze!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"370_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/432/take-5\" target=\"_blank\"><img src=\"images/games/370_6nimmt.jpg\" alt=\"6. bierze!\" style=\"max-width:95%;\"> </a>"
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
      
   ]
},
//page 7
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2024) - CZĘŚĆ 7",
   "elements":[
   {
        "type":"panel",
        "name":"WM",
        "title":"Weather Machine",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"415_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/237179/weather-machine\" target=\"_blank\"><img src=\"images/games/415_wm.jpg\" alt=\"Weather Machine\" style=\"max-width:95%;\"> </a>"
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
        "name":"HF4All",
        "title":"High Frontier 4 All",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"386_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/281655/high-frontier-4-all\" target=\"_blank\"><img src=\"images/games/386_hf4all.jpg\" alt=\"High Frontier 4 All\" style=\"max-width:95%;\"> </a>"
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

$("#surveyElement").Survey({
    model: survey,
    onComplete: sendDataToServer
});
