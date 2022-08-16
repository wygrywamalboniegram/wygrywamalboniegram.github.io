
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
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 4",
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
        "name":"Tajemnicze_Domostwo",
        "title":"Tajemnicze Domostwo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"266_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/113997/tajemnicze-domostwo\" target=\"_blank\"><img src=\"images/games/266_tajemnicze_domostwo.jpg\" alt=\"Tajemnicze Domostwo\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"266",
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
        "name":"Imago",
        "title":"Imago",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"112_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/191894/imagine\" target=\"_blank\"><img src=\"images/games/112_imago.jpg\" alt=\"Imago\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"112",
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
        "name":"Clank",
        "title":"Clank! (Brzdęk)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"45_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/201808/clank-deck-building-adventure\" target=\"_blank\"><img src=\"images/games/45_clank.jpg\" alt=\"Clank! (Brzdęk)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"45",
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
        "name":"Maracaibo",
        "title":"Maracaibo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"153_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/276025/maracaibo\" target=\"_blank\"><img src=\"images/games/153_maracaibo.jpg\" alt=\"Maracaibo\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"153",
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
        "name":"Charterstone",
        "title":"Charterstone",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"40_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/197376/charterstone\" target=\"_blank\"><img src=\"images/games/40_charterstone.jpg\" alt=\"Charterstone\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"40",
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
        "name":"Boonlake",
        "title":"Boonlake",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"357_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/343905/boonlake\" target=\"_blank\"><img src=\"images/games/357_boonlake.jpg\" alt=\"Boonlake\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"357",
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
        "name":"Kartografowie",
        "title":"Kartografowie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"124_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/263918/cartographers\" target=\"_blank\"><img src=\"images/games/124_kartografowie.jpg\" alt=\"Kartografowie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"124",
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
        "name":"Klany_Kaledonii",
        "title":"Klany Kaledonii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"131_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/216132/clans-caledonia\" target=\"_blank\"><img src=\"images/games/131_klany_kaledonii.jpg\" alt=\"Klany Kaledonii\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"131",
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
        "name":"Gildie_Londynu",
        "title":"Gildie Londynu",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"96_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/134157/guilds-london\" target=\"_blank\"><img src=\"images/games/96_gildie_londynu.jpg\" alt=\"Gildie Londynu\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"96",
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
        "name":"Galaxy_Trucker",
        "title":"Ciężarówką przez Galaktykę",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"43_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/31481/galaxy-trucker\" target=\"_blank\"><img src=\"images/games/43_galaxy_trucker.jpg\" alt=\"Ciężarówką przez Galaktykę\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"43",
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
      
   ]
},
//page 2		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 4",
   "elements":[
   {
        "type":"panel",
        "name":"Magic_Maze",
        "title":"Magic Maze: Weź i czmychaj",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"151_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/209778/magic-maze\" target=\"_blank\"><img src=\"images/games/151_magic_maze.jpg\" alt=\"Magic Maze: Weź i czmychaj\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"151",
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
        "name":"Boss_Monster",
        "title":"Boss Monster",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"343_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/131835/boss-monster-dungeon-building-card-game\" target=\"_blank\"><img src=\"images/games/343_boss_monster.jpg\" alt=\"Boss Monster\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"343",
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
        "name":"Cryptid",
        "title":"Cryptid",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"349_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/246784/cryptid\" target=\"_blank\"><img src=\"images/games/349_cryptid.jpg\" alt=\"Cryptid\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"349",
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
        "name":"Orlean",
        "title":"Orlean",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"185_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/164928/orleans\" target=\"_blank\"><img src=\"images/games/185_orlean.jpg\" alt=\"Orlean\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"185",
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
        "name":"Love_Letter",
        "title":"List Miłosny",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"144_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/129622/love-letter\" target=\"_blank\"><img src=\"images/games/144_love_letter.jpg\" alt=\"List Miłosny\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"144",
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
        "name":"Chinczyk",
        "title":"Chińczyk",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"41_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2136/pachisi\" target=\"_blank\"><img src=\"images/games/41_chinczyk.jpg\" alt=\"Chińczyk\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"41",
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
        "name":"Onirim",
        "title":"Onirim",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"183_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/71836/onirim\" target=\"_blank\"><img src=\"images/games/183_onirim.jpg\" alt=\"Onirim\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"183",
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
        "name":"Scrabble",
        "title":"Scrabble",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"233_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/320/scrabble\" target=\"_blank\"><img src=\"images/games/233_scrabble.jpg\" alt=\"Scrabble\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"233",
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
        "name":"Feierabend",
        "title":"Feierabend",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"86_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/310442/feierabend\" target=\"_blank\"><img src=\"images/games/86_feierabend.jpg\" alt=\"Feierabend\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"86",
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
        "name":"Irish_Gauge",
        "title":"Irish Gauge",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"116_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/161882/irish-gauge\" target=\"_blank\"><img src=\"images/games/116_irish_gauge.jpg\" alt=\"Irish Gauge\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"116",
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
      
   ]
},	
//page 3		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 4",
   "elements":[
   {
        "type":"panel",
        "name":"Coloma",
        "title":"Coloma: Deluxe Edition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"50_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/277448/coloma-deluxe-edition\" target=\"_blank\"><img src=\"images/games/50_coloma.jpg\" alt=\"Coloma: Deluxe Edition\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"50",
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
        "name":"Panic_Lab",
        "title":"Panic Lab",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"192_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/121073/panic-lab\" target=\"_blank\"><img src=\"images/games/192_panic_lab.jpg\" alt=\"Panic Lab\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"192",
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
        "name":"Perigon",
        "title":"Perigon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"198_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/93493/perigon\" target=\"_blank\"><img src=\"images/games/198_perigon.jpg\" alt=\"Perigon\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"198",
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
        "name":"Point_Salad",
        "title":"Point Salad",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"360_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/274960/point-salad\" target=\"_blank\"><img src=\"images/games/360_point_salad.jpg\" alt=\"Point Salad\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"360",
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
        "name":"Valeria",
        "title":"Valeria: Wioski",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"294_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/180040/villages-valeria\" target=\"_blank\"><img src=\"images/games/294_valeria.jpg\" alt=\"Valeria: Wioski\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"294",
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
        "name":"Elizjum",
        "title":"Elysium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"77_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/163968/elysium\" target=\"_blank\"><img src=\"images/games/77_elizjum.jpg\" alt=\"Elysium\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"77",
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
        "name":"Saboteur",
        "title":"Sabotażysta",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"227_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/9220/saboteur\" target=\"_blank\"><img src=\"images/games/227_saboteur.jpg\" alt=\"Sabotażysta\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"227",
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
        "name":"Everdell",
        "title":"Everdell",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"80_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199792/everdell\" target=\"_blank\"><img src=\"images/games/80_everdell.jpg\" alt=\"Everdell\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"80",
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
        "name":"Pax_Em",
        "title":"Pax Emancipation",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"196_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/245928/pax-emancipation\" target=\"_blank\"><img src=\"images/games/196_pax_em.jpg\" alt=\"Pax Emancipation\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"196",
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
        "name":"HP",
        "title":"Harry Potter: Hogwarts Battle",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"106_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199042/harry-potter-hogwarts-battle\" target=\"_blank\"><img src=\"images/games/106_hp.jpg\" alt=\"Harry Potter: Hogwarts Battle\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"106",
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
      
   ]
},		
//page 4
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 4",
   "elements":[
   {
        "type":"panel",
        "name":"Paryz_Miasto_Swiatel",
        "title":"Paryż: Miasto Świateł",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"195_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/276498/paris-la-cite-de-la-lumiere\" target=\"_blank\"><img src=\"images/games/195_paryz_miasto_swiatel.jpg\" alt=\"Paryż: Miasto Świateł\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"195",
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
        "name":"Zimna_W",
        "title":"Zimna Wojna 1945 - 1989",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"327_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12333/twilight-struggle\" target=\"_blank\"><img src=\"images/games/327_zimna_w.jpg\" alt=\"Zimna Wojna 1945 - 1989\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"327",
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
        "name":"AoS",
        "title":"Age of Steam",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"9_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/4098/age-steam\" target=\"_blank\"><img src=\"images/games/9_aos.jpg\" alt=\"Age of Steam\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"9",
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
        "name":"Kingdomino",
        "title":"Kingdomino",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"130_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/204583/kingdomino\" target=\"_blank\"><img src=\"images/games/130_kingdomino.jpg\" alt=\"Kingdomino\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"130",
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
        "name":"Root",
        "title":"Root",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"221_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/237182/root\" target=\"_blank\"><img src=\"images/games/221_root.jpg\" alt=\"Root\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"221",
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
        "name":"Brass_B",
        "title":"Brass: Birmingham",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"30_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/224517/brass-birmingham\" target=\"_blank\"><img src=\"images/games/30_brass_b.jpg\" alt=\"Brass: Birmingham\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"30",
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
        "name":"Kalambury",
        "title":"Kalambury",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"121_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/5122/charades\" target=\"_blank\"><img src=\"images/games/121_kalambury.jpg\" alt=\"Kalambury\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"121",
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
        "name":"Jungle_Speed",
        "title":"Jungle Speed",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"118_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/8098/jungle-speed\" target=\"_blank\"><img src=\"images/games/118_jungle_speed.jpg\" alt=\"Jungle Speed\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"118",
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
        "name":"Famiglia",
        "title":"Famiglia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"83_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/81453/famiglia\" target=\"_blank\"><img src=\"images/games/83_famiglia.jpg\" alt=\"Famiglia\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"83",
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
        "name":"Było_sobie_zycie",
        "title":"Było sobie życie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"35_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/144374/once-upon-time-life\" target=\"_blank\"><img src=\"images/games/35_bylo_sobie_zycie.jpg\" alt=\"Było sobie życie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"35",
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
      
   ]
},	
//page 5	
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 4",
   "elements":[
   {
        "type":"panel",
        "name":"Rycerze_Zamki",
        "title":"Rycerze i Zamki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"225_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/159774/rycerze-i-zamki\" target=\"_blank\"><img src=\"images/games/225_rycerze_zamki.jpg\" alt=\"Rycerze i Zamki\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"225",
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
        "name":"Szeryf_Nottingham",
        "title":"Szeryf z Nottingham",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"261_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/157969/sheriff-nottingham\" target=\"_blank\"><img src=\"images/games/261_szeryf_nottingham.jpg\" alt=\"Szeryf z Nottingham\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"261",
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
        "name":"Zalozyciele_Imperium",
        "title":"Założyciele Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"322_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/148639/founders-empire\" target=\"_blank\"><img src=\"images/games/322_zalozyciele_imperium.jpg\" alt=\"Założyciele Imperium\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"322",
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
        "name":"Projekt_Gaja",
        "title":"Projekt Gaja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"212_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/220308/gaia-project\" target=\"_blank\"><img src=\"images/games/212_projekt_gaja.jpg\" alt=\"Projekt Gaja\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"212",
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
        "name":"Crew",
        "title":"Załoga: W poszukiwaniu dziewiątej planety",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"321_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine\" target=\"_blank\"><img src=\"images/games/321_crew.jpg\" alt=\"Załoga: W poszukiwaniu dziewiątej planety\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"321",
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
        "name":"GoT",
        "title":"Gra o Tron",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"100_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/103343/game-thrones-board-game-second-edition\" target=\"_blank\"><img src=\"images/games/100_got.jpg\" alt=\"Gra o Tron\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"100",
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
        "name":"Hardback",
        "title":"Hardback",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"105_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/223750/hardback\" target=\"_blank\"><img src=\"images/games/105_hardback.jpg\" alt=\"Hardback\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"105",
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
        "name":"Uno",
        "title":"UNO",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"292_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2223/uno\" target=\"_blank\"><img src=\"images/games/292_uno.jpg\" alt=\"UNO\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"292",
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
        "name":"Wingspan",
        "title":"Na skrzydłach",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"164_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/266192/wingspan\" target=\"_blank\"><img src=\"images/games/164_wingspan.jpg\" alt=\"Na skrzydłach\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"164",
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
        "name":"K2",
        "title":"K2",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"120_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/73761/k2\" target=\"_blank\"><img src=\"images/games/120_k2.jpg\" alt=\"K2\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"120",
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
      
   ]
},	
//page 6
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 4",
   "elements":[
   {
        "type":"panel",
        "name":"Ganges",
        "title":"Ganges",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"89_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/220877/rajas-ganges\" target=\"_blank\"><img src=\"images/games/89_ganges.jpg\" alt=\"Ganges\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"89",
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
        "name":"Colt_Express",
        "title":"Colt Express",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"356_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/158899/colt-express\" target=\"_blank\"><img src=\"images/games/356_colt_express.jpg\" alt=\"Colt Express\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"356",
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
        "name":"TWoM",
        "title":"This War of Mine: Gra planszowa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"280_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/188920/war-mine-board-game\" target=\"_blank\"><img src=\"images/games/280_twom.jpg\" alt=\"This War of Mine: Gra planszowa\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"280",
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
        "name":"Jenga",
        "title":"Jenga",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"117_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2452/jenga\" target=\"_blank\"><img src=\"images/games/117_jenga.jpg\" alt=\"Jenga\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"117",
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
        "name":"CO2",
        "title":"CO2: Second Chance",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"336_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/214887/co-second-chance\" target=\"_blank\"><img src=\"images/games/336_co2.jpg\" alt=\"CO2: Second Chance\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"336",
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
        "name":"Klask",
        "title":"KLASK",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"132_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/165722/klask\" target=\"_blank\"><img src=\"images/games/132_klask.jpg\" alt=\"KLASK\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"132",
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
        "name":"Quadropolis",
        "title":"Quadropolis",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"216_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/176396/quadropolis\" target=\"_blank\"><img src=\"images/games/216_quadropolis.jpg\" alt=\"Quadropolis\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"216",
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
        "name":"Wielka_Ksiega",
        "title":"Wielka Księga Szaleństwa",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"303_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171233/big-book-madness\" target=\"_blank\"><img src=\"images/games/303_wielka_ksiega.jpg\" alt=\"Wielka Księga Szaleństwa\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"303",
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
        "name":"Trzy_Zyczenia",
        "title":"Trzy życzenia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"285_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/198836/3-wishes\" target=\"_blank\"><img src=\"images/games/285_trzy_zyczenia.jpg\" alt=\"Trzy życzenia\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"285",
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
        "name":"Legendy_BM",
        "title":"Legendy Blue Moon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"142_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/147154/blue-moon-legends\" target=\"_blank\"><img src=\"images/games/142_legendy_bm.jpg\" alt=\"Legendy Blue Moon\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"142",
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
