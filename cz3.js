
	Survey.StylesManager.applyTheme("defaultV2");
	//survey.firstPageIsStarted = true;


var surveyJSON =  {
	"locale": "pl",
	"title":"TOP 50 Gier Wszechczasów (2022)",
	"showProgressBar": "top",
	"pages":[
//page 1
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 3",
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
        "name":"Gallerist",
        "title":"The Gallerist",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"277_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/125153/gallerist\" target=\"_blank\"><img src=\"images/games/277_gallerist.jpg\" alt=\"The Gallerist\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"277",
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
        "name":"LE_Alien",
        "title":"Legendary Encounters: An Alien Deck Building Game",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"141_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/146652/legendary-encounters-alien-deck-building-game\" target=\"_blank\"><img src=\"images/games/141_le_alien.jpg\" alt=\"Legendary Encounters: An Alien Deck Building Game\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"141",
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
        "name":"Pantheon",
        "title":"Pantheon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"193_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/94480/pantheon\" target=\"_blank\"><img src=\"images/games/193_pantheon.jpg\" alt=\"Pantheon\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"193",
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
        "name":"Black_Orchestra",
        "title":"Black Orchestra",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"26_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/156858/black-orchestra\" target=\"_blank\"><img src=\"images/games/26_black_orchestra.jpg\" alt=\"Black Orchestra\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"26",
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
        "name":"Owce_Wypas",
        "title":"Owce na wypasie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"187_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/54137/battle-sheep\" target=\"_blank\"><img src=\"images/games/187_owce_wypas.jpg\" alt=\"Owce na wypasie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"187",
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
        "name":"Hotel_Samoa",
        "title":"Hotel Samoa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"109_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/63740/hotel-samoa\" target=\"_blank\"><img src=\"images/games/109_hotel_samoa.jpg\" alt=\"Hotel Samoa\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"109",
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
        "name":"Cthulhu_Gloom",
        "title":"Cthulhu Gloom",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"55_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/95234/cthulhu-gloom\" target=\"_blank\"><img src=\"images/games/55_cthulhu_gloom.jpg\" alt=\"Cthulhu Gloom\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"55",
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
        "name":"Intrepid",
        "title":"Intrepid",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"115_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/302461/intrepid\" target=\"_blank\"><img src=\"images/games/115_intrepid.jpg\" alt=\"Intrepid\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"115",
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
        "name":"Swiatowy_Konflikt",
        "title":"Światowy Konflikt",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"263_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/131357/coup\" target=\"_blank\"><img src=\"images/games/263_swiatowy_konflikt.jpg\" alt=\"Światowy Konflikt\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"263",
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
        "name":"Monopoly_Gamer",
        "title":"Monopoly Gamer",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"160_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/230408/monopoly-gamer\" target=\"_blank\"><img src=\"images/games/160_monopoly_gamer.jpg\" alt=\"Monopoly Gamer\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"160",
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
      
   ]
},	
//page 2		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 3",
   "elements":[
   {
        "type":"panel",
        "name":"Fasolki",
        "title":"Fasolki (Bohnanza)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"84_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/11/bohnanza\" target=\"_blank\"><img src=\"images/games/84_fasolki.jpg\" alt=\"Fasolki (Bohnanza)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"84",
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
        "name":"Boze_Igrzysko",
        "title":"Boże Igrzysko",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"345_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/57998/boze-igrzysko\" target=\"_blank\"><img src=\"images/games/345_boze_igrzysko.jpg\" alt=\"Boże Igrzysko\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"345",
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
        "name":"7W_Duel",
        "title":"7 Cudów Świata: Pojedynek",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"5_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173346/7-wonders-duel\" target=\"_blank\"><img src=\"images/games/5_7w_duel.jpg\" alt=\"7 Cudów Świata: Pojedynek\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"5",
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
        "name":"Raiders_Scythia",
        "title":"Najeźdźcy ze Scytii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"337_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/301880/raiders-scythia\" target=\"_blank\"><img src=\"images/games/337_raiders_scythia.jpg\" alt=\"Najeźdźcy ze Scytii\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"337",
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
        "name":"Ognisty_Podmuch",
        "title":"Ognisty Podmuch",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"180_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/100901/flash-point-fire-rescue\" target=\"_blank\"><img src=\"images/games/180_ognisty_podmuch.jpg\" alt=\"Ognisty Podmuch\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"180",
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
        "name":"For_Sale",
        "title":"Na sprzedaż",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"165_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172/sale\" target=\"_blank\"><img src=\"images/games/165_for_sale.jpg\" alt=\"Na sprzedaż\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"165",
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
        "name":"Pulsar",
        "title":"Pulsar 2849",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"215_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/228341/pulsar-2849\" target=\"_blank\"><img src=\"images/games/215_pulsar.jpg\" alt=\"Pulsar 2849\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"215",
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
        "name":"ZhanGuo",
        "title":"ZhanGuo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"325_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/160495/zhanguo\" target=\"_blank\"><img src=\"images/games/325_zhanguo.jpg\" alt=\"ZhanGuo\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"325",
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
        "name":"Troyes",
        "title":"Troyes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"284_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/73439/troyes\" target=\"_blank\"><img src=\"images/games/284_troyes.jpg\" alt=\"Troyes\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"284",
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
        "name":"Bitwy_Westeros",
        "title":"Bitwy Westeros",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"24_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/67492/battles-westeros\" target=\"_blank\"><img src=\"images/games/24_bitwy_westeros.jpg\" alt=\"Bitwy Westeros\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"24",
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
      
   ]
},	
//page 3		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 3",
   "elements":[
   {
        "type":"panel",
        "name":"Cosa_Nostra",
        "title":"La Cosa Nostra",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"138_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/151771/la-cosa-nostra\" target=\"_blank\"><img src=\"images/games/138_cosa_nostra.jpg\" alt=\"La Cosa Nostra\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"138",
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
        "name":"Decrypto",
        "title":"Decrypto",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"60_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/225694/decrypto\" target=\"_blank\"><img src=\"images/games/60_decrypto.jpg\" alt=\"Decrypto\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"60",
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
        "name":"Siedem",
        "title":"Siedem",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"238_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172662/seven7s\" target=\"_blank\"><img src=\"images/games/238_siedem.jpg\" alt=\"Siedem\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"238",
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
        "name":"Monopoly",
        "title":"Monopoly",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"159_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1406/monopoly\" target=\"_blank\"><img src=\"images/games/159_monopoly.jpg\" alt=\"Monopoly\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"159",
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
        "name":"Pipeline",
        "title":"Pipeline",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"201_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256730/pipeline\" target=\"_blank\"><img src=\"images/games/201_pipeline.jpg\" alt=\"Pipeline\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"201",
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
        "name":"Wielka_Wystawa_Dinozaurow",
        "title":"Wielka Wystawa Dinozaurów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"305_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/179071/great-dinosaur-rush\" target=\"_blank\"><img src=\"images/games/305_wielka_wystawa_dinozaurow.jpg\" alt=\"Wielka Wystawa Dinozaurów\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"305",
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
        "name":"Western_Legends",
        "title":"Western Legends",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"300_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/232405/western-legends\" target=\"_blank\"><img src=\"images/games/300_western_legends.jpg\" alt=\"Western Legends\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"300",
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
        "name":"Stronghold",
        "title":"Stronghold",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"253_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/179460/stronghold-2nd-edition\" target=\"_blank\"><img src=\"images/games/253_stronghold.jpg\" alt=\"Stronghold\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"253",
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
        "name":"Waleczne_Piksele",
        "title":"Waleczne piksele",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"297_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/125548/pixel-tactics\" target=\"_blank\"><img src=\"images/games/297_waleczne_piksele.jpg\" alt=\"Waleczne piksele\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"297",
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
        "name":"Gejsze",
        "title":"Gejsze",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"92_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/158600/hanamikoji\" target=\"_blank\"><img src=\"images/games/92_gejsze.jpg\" alt=\"Gejsze\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"92",
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
      
   ]
},		
//page 4
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 3",
   "elements":[
   {
        "type":"panel",
        "name":"LotR_Confrontation",
        "title":"Władca Pierścieni: Konfrontacja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"310_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/3201/lord-rings-confrontation\" target=\"_blank\"><img src=\"images/games/310_lotr_confrontation.jpg\" alt=\"Władca Pierścieni: Konfrontacja\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"310",
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
        "name":"Machina",
        "title":"Machina",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"147_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/24743/machina\" target=\"_blank\"><img src=\"images/games/147_machina.jpg\" alt=\"Machina\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"147",
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
        "name":"Cashflow",
        "title":"Cashflow",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"39_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/6552/cashflow-101\" target=\"_blank\"><img src=\"images/games/39_cashflow.jpg\" alt=\"Cashflow\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"39",
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
        "name":"Innowacje",
        "title":"Innowacje",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"114_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/63888/innovation\" target=\"_blank\"><img src=\"images/games/114_innowacje.jpg\" alt=\"Innowacje\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"114",
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
        "name":"iKNOW",
        "title":"iKNOW",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"111_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/130680/iknow\" target=\"_blank\"><img src=\"images/games/111_iknow.jpg\" alt=\"iKNOW\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"111",
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
        "name":"Lords_of_War",
        "title":"Lords of War: Władcy Wojny",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"145_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/24131/series-lords-war-black-box\" target=\"_blank\"><img src=\"images/games/145_lords_of_war.jpg\" alt=\"Lords of War: Władcy Wojny\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"145",
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
        "name":"MtG",
        "title":"Magic the Gathering",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"152_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/463/magic-gathering\" target=\"_blank\"><img src=\"images/games/152_mtg.jpg\" alt=\"Magic the Gathering\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"152",
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
        "name":"Cry_Havoc",
        "title":"Cry Havoc",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"54_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/192457/cry-havoc\" target=\"_blank\"><img src=\"images/games/54_cry_havoc.jpg\" alt=\"Cry Havoc\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"54",
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
        "name":"Concordia",
        "title":"Concordia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"52_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/124361/concordia\" target=\"_blank\"><img src=\"images/games/52_concordia.jpg\" alt=\"Concordia\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"52",
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
        "name":"Gierki_Malzenskie",
        "title":"Gierki Małżeńskie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"95_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/191077/gierki-malzenskie\" target=\"_blank\"><img src=\"images/games/95_gierki_malzenskie.jpg\" alt=\"Gierki Małżeńskie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"95",
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
      
   ]
},	
//page 5	
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 3",
   "elements":[
   {
        "type":"panel",
        "name":"Taboo",
        "title":"Taboo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"265_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1111/taboo\" target=\"_blank\"><img src=\"images/games/265_taboo.jpg\" alt=\"Taboo\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"265",
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
        "name":"7th_Continent",
        "title":"The 7th Continent",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"276_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/180263/7th-continent\" target=\"_blank\"><img src=\"images/games/276_7th_continent.jpg\" alt=\"The 7th Continent\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"276",
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
        "name":"Spadajace_Malpki",
        "title":"Spadające Małpki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"245_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12826/tumblin-monkeys\" target=\"_blank\"><img src=\"images/games/245_spadajace_malpki.jpg\" alt=\"Spadające Małpki\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"245",
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
        "name":"Robinson",
        "title":"Robinson Crusoe: Przygoda na przeklętej wyspie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"219_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/121921/robinson-crusoe-adventures-cursed-island\" target=\"_blank\"><img src=\"images/games/219_robinson.jpg\" alt=\"Robinson Crusoe: Przygoda na przeklętej wyspie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"219",
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
        "name":"Dice_Brewing",
        "title":"Dice Brewing",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"64_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/157322/dice-brewing\" target=\"_blank\"><img src=\"images/games/64_dice_brewing.jpg\" alt=\"Dice Brewing\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"64",
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
        "name":"Goa",
        "title":"Goa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"99_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/9216/goa\" target=\"_blank\"><img src=\"images/games/99_goa.jpg\" alt=\"Goa\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"99",
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
        "name":"Skip-Bo",
        "title":"Skipbo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"240_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1269/skip-bo\" target=\"_blank\"><img src=\"images/games/240_skip-bo.jpg\" alt=\"Skipbo\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"240",
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
        "name":"HP_2P",
        "title":"Harry Potter: Hogwarts Battle - Obrona przed czarną magią",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"107_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/254192/harry-potter-hogwarts-battle-defence-against-dark\" target=\"_blank\"><img src=\"images/games/107_hp_2p.jpg\" alt=\"Harry Potter: Hogwarts Battle - Obrona przed czarną magią\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"107",
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
        "name":"Dixit",
        "title":"Dixit",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"65_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/39856/dixit\" target=\"_blank\"><img src=\"images/games/65_dixit.jpg\" alt=\"Dixit\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"65",
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
        "name":"Flickem_Up",
        "title":"Flick'em Up!: Dzika strzelanka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"87_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/169124/flick-em\" target=\"_blank\"><img src=\"images/games/87_flickem_up.jpg\" alt=\"Flick'em Up!: Dzika strzelanka\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"87",
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
      
   ]
},		
//page 6
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 3",
   "elements":[
   {
        "type":"panel",
        "name":"Grzybobranie",
        "title":"Grzybobranie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"103_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/32236/grzybobranie\" target=\"_blank\"><img src=\"images/games/103_grzybobranie.jpg\" alt=\"Grzybobranie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"103",
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
        "name":"Dungeon_Fortune",
        "title":"Dungeon of Fortune",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"364_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/170415/dungeon-fortune\" target=\"_blank\"><img src=\"images/games/364_dungeon_fortune.jpg\" alt=\"Dungeon of Fortune\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"364",
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
        "name":"Antarctica",
        "title":"Antarctica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"14_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/182074/antarctica\" target=\"_blank\"><img src=\"images/games/14_antarctica.jpg\" alt=\"Antarctica\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"14",
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
        "name":"Terra_M",
        "title":"Terra Mystica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"274_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/120677/terra-mystica\" target=\"_blank\"><img src=\"images/games/274_terra_m.jpg\" alt=\"Terra Mystica\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"274",
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
        "name":"New_Angeles",
        "title":"New Angeles: Miasto Korporacji",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"169_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/205716/new-angeles\" target=\"_blank\"><img src=\"images/games/169_new_angeles.jpg\" alt=\"New Angeles: Miasto Korporacji\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"169",
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
        "name":"Pax_Pamir2",
        "title":"Pax Pamir: Second Edition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"350_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256960/pax-pamir-second-edition\" target=\"_blank\"><img src=\"images/games/350_pax_pamir2.jpg\" alt=\"Pax Pamir: Second Edition\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"350",
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
        "name":"Szachy",
        "title":"Szachy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"258_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171/chess\" target=\"_blank\"><img src=\"images/games/258_szachy.jpg\" alt=\"Szachy\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"258",
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
        "name":"Shogun",
        "title":"Szogun",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"262_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/20551/shogun\" target=\"_blank\"><img src=\"images/games/262_shogun.jpg\" alt=\"Szogun\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"262",
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
        "name":"Getaway_Driver",
        "title":"Getaway Driver",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"94_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/253719/getaway-driver\" target=\"_blank\"><img src=\"images/games/94_getaway_driver.jpg\" alt=\"Getaway Driver\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"94",
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
        "name":"Ksiestwo",
        "title":"Księstwo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"137_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/90041/principato\" target=\"_blank\"><img src=\"images/games/137_ksiestwo.jpg\" alt=\"Księstwo\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"137",
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
