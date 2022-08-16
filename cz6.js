
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
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 6",
   "elements":[
   {
        "type":"panel",
        "name":"Exploding_Kittens",
        "title":"Eksplodujące kotki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"75_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172225/exploding-kittens\" target=\"_blank\"><img src=\"images/games/75_exploding_kittens.jpg\" alt=\"Eksplodujące kotki\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"75",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Slup_Ognia",
        "title":"Słup Ognia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"242_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/217949/column-fire\" target=\"_blank\"><img src=\"images/games/242_slup_ognia.jpg\" alt=\"Słup Ognia\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"242",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Splendor",
        "title":"Splendor",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"247_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/148228/splendor\" target=\"_blank\"><img src=\"images/games/247_splendor.jpg\" alt=\"Splendor\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"247",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"W_Roku_Smoka",
        "title":"W roku smoka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"296_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/31594/year-dragon\" target=\"_blank\"><img src=\"images/games/296_w_roku_smoka.jpg\" alt=\"W roku smoka\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"296",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Podwodne_Miasta",
        "title":"Podwodne Miasta",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"204_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/247763/underwater-cities\" target=\"_blank\"><img src=\"images/games/204_podwodne_miasta.jpg\" alt=\"Podwodne Miasta\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"204",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Statki_Lupy",
        "title":"Statki, łupy, kościotrupy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"251_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/176606/rattle-battle-grab-loot\" target=\"_blank\"><img src=\"images/games/251_statki_lupy.jpg\" alt=\"Statki, łupy, kościotrupy\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"251",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Santorini",
        "title":"Santorini",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"231_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/194655/santorini\" target=\"_blank\"><img src=\"images/games/231_santorini.jpg\" alt=\"Santorini\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"231",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Obecnosc",
        "title":"Obecność",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"176_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/194879/not-alone\" target=\"_blank\"><img src=\"images/games/176_obecnosc.jpg\" alt=\"Obecność\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"176",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Szalona_Misja",
        "title":"Szalona misja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"259_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/136991/loony-quest\" target=\"_blank\"><img src=\"images/games/259_szalona_misja.jpg\" alt=\"Szalona misja\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"259",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Compounded",
        "title":"Compounded",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"51_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/118174/compounded\" target=\"_blank\"><img src=\"images/games/51_compounded.jpg\" alt=\"Compounded\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"51",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},
//page 2		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 6",
   "elements":[
   {
        "type":"panel",
        "name":"Odbudowa_Warszawy",
        "title":"Odbudowa Warszawy 1945-1980",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"178_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/167404/warsaw-rising-1945-1980\" target=\"_blank\"><img src=\"images/games/178_odbudowa_warszawy.jpg\" alt=\"Odbudowa Warszawy 1945-1980\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"178",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Forum_Trajanum",
        "title":"Forum Trajanum",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"88_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/244049/forum-trajanum\" target=\"_blank\"><img src=\"images/games/88_forum_trajanum.jpg\" alt=\"Forum Trajanum\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"88",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Kolko_Krzyzyk",
        "title":"Kółko i Krzyżyk",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"136_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/11901/tic-tac-toe\" target=\"_blank\"><img src=\"images/games/136_kolko_krzyzyk.jpg\" alt=\"Kółko i Krzyżyk\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"136",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Codex",
        "title":"Codex: Starter Set",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"48_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/215436/codex-card-time-strategy-starter-set\" target=\"_blank\"><img src=\"images/games/48_codex.jpg\" alt=\"Codex: Starter Set\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"48",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Alchemicy",
        "title":"Alchemicy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"11_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/161970/alchemists\" target=\"_blank\"><img src=\"images/games/11_alchemicy.jpg\" alt=\"Alchemicy\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"11",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Wyspa_Skye",
        "title":"Wyspa Skye",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"318_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/176494/isle-skye-chieftain-king\" target=\"_blank\"><img src=\"images/games/318_wyspa_skye.jpg\" alt=\"Wyspa Skye\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"318",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Boarding",
        "title":"Boarding",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"361_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/230200/overbooked\" target=\"_blank\"><img src=\"images/games/361_boarding.jpg\" alt=\"Boarding\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"361",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Smoczy_Wyscig",
        "title":"Smoczy Wyścig",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"363_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/168582/dragon-racer\" target=\"_blank\"><img src=\"images/games/363_smoczy_wyscig.jpg\" alt=\"Smoczy Wyścig\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"363",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Acquire",
        "title":"Acquire",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"6_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/5/acquire\" target=\"_blank\"><img src=\"images/games/6_acquire.jpg\" alt=\"Acquire\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"6",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Crazy_Carts",
        "title":"Szalone wózki",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"260_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/195518/crazy-karts\" target=\"_blank\"><img src=\"images/games/260_crazy_carts.jpg\" alt=\"Szalone wózki\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"260",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},	
//page 3		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 6",
   "elements":[
   {
        "type":"panel",
        "name":"Roll",
        "title":"Roll for the Galaxy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"220_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/132531/roll-galaxy\" target=\"_blank\"><img src=\"images/games/220_roll.jpg\" alt=\"Roll for the Galaxy\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"220",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Kosmiczna_Misja",
        "title":"Kosmiczna Misja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"135_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/154728/kosmiczna-misja\" target=\"_blank\"><img src=\"images/games/135_kosmiczna_misja.jpg\" alt=\"Kosmiczna Misja\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"135",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"FCM",
        "title":"Food Chain Magnate",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"344_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/175914/food-chain-magnate\" target=\"_blank\"><img src=\"images/games/344_fcm.jpg\" alt=\"Food Chain Magnate\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"344",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Pandemic_Lekarstwo",
        "title":"Pandemic: Lekarstwo",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"191_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/150658/pandemic-cure\" target=\"_blank\"><img src=\"images/games/191_pandemic_lekarstwo.jpg\" alt=\"Pandemic: Lekarstwo\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"191",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Cooper_Island",
        "title":"Cooper Island",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"331_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/269511/cooper-island\" target=\"_blank\"><img src=\"images/games/331_cooper_island.jpg\" alt=\"Cooper Island\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"331",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Alea_Evangelii",
        "title":"Alea Evangelii",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"12_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/33693/alea-evangelii\" target=\"_blank\"><img src=\"images/games/12_alea_evangelii.jpg\" alt=\"Alea Evangelii\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"12",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Unsettled",
        "title":"Unsettled",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"334_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/290484/unsettled\" target=\"_blank\"><img src=\"images/games/334_unsettled.jpg\" alt=\"Unsettled\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"334",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Wyrocznia_Delficka",
        "title":"Wyrocznia Delficka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"315_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/193558/oracle-delphi\" target=\"_blank\"><img src=\"images/games/315_wyrocznia_delficka.jpg\" alt=\"Wyrocznia Delficka\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"315",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Rattus",
        "title":"Rattus",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"218_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/42452/rattus\" target=\"_blank\"><img src=\"images/games/218_rattus.jpg\" alt=\"Rattus\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"218",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Cloudage",
        "title":"CloudAge",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"46_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/316858/cloudage\" target=\"_blank\"><img src=\"images/games/46_cloudage.jpg\" alt=\"CloudAge\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"46",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},		
//page 4
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 6",
   "elements":[
   {
        "type":"panel",
        "name":"Sludzy_Ciemnosci",
        "title":"Słudzy ciemności",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"241_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/181153/butts-away-heroes\" target=\"_blank\"><img src=\"images/games/241_sludzy_ciemnosci.jpg\" alt=\"Słudzy ciemności\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"241",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Metropolia",
        "title":"Metropolia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"365_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/185817/metropolia\" target=\"_blank\"><img src=\"images/games/365_metropolia.jpg\" alt=\"Metropolia\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"365",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"BANG_Dice",
        "title":"BANG! Gra Kościana",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"20_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/143741/bang-dice-game\" target=\"_blank\"><img src=\"images/games/20_bang_dice.jpg\" alt=\"BANG! Gra Kościana\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"20",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Takie_Zycie",
        "title":"Takie życie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"270_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgameexpansion/131221/mindmaze\" target=\"_blank\"><img src=\"images/games/270_takie_zycie.jpg\" alt=\"Takie życie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"270",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Story_Cubes",
        "title":"Story Cubes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"252_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/20545/rorys-story-cubes\" target=\"_blank\"><img src=\"images/games/252_story_cubes.jpg\" alt=\"Story Cubes\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"252",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Winnica",
        "title":"Winnica",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"307_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/205045/avenue\" target=\"_blank\"><img src=\"images/games/307_winnica.jpg\" alt=\"Winnica\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"307",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Coimbra",
        "title":"Coimbra",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"49_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/245638/coimbra\" target=\"_blank\"><img src=\"images/games/49_coimbra.jpg\" alt=\"Coimbra\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"49",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Le_Havre",
        "title":"Le Havre",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"139_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/35677/le-havre\" target=\"_blank\"><img src=\"images/games/139_le_havre.jpg\" alt=\"Le Havre\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"139",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Saloon",
        "title":"Saloon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"229_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2496/saloon\" target=\"_blank\"><img src=\"images/games/229_saloon.jpg\" alt=\"Saloon\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"229",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Fauna",
        "title":"Fauna",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"85_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/35497/fauna\" target=\"_blank\"><img src=\"images/games/85_fauna.jpg\" alt=\"Fauna\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"85",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},
//page 5	
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 6",
   "elements":[
   {
        "type":"panel",
        "name":"Ark_Nova",
        "title":"Ark Nova",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"269_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/342942/ark-nova\" target=\"_blank\"><img src=\"images/games/269_ark_nova.jpg\" alt=\"Ark Nova\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"269",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Barrage",
        "title":"Barrage",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"22_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/251247/barrage\" target=\"_blank\"><img src=\"images/games/22_barrage.jpg\" alt=\"Barrage\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"22",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"CotBS",
        "title":"City of the Big Shoulders",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"44_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/214880/city-big-shoulders\" target=\"_blank\"><img src=\"images/games/44_cotbs.jpg\" alt=\"City of the Big Shoulders\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"44",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Cafe",
        "title":"Café",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"36_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/284936/cafe\" target=\"_blank\"><img src=\"images/games/36_cafe.jpg\" alt=\"Café\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"36",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Marvel_United",
        "title":"Marvel United (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"332_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/298047/marvel-united\" target=\"_blank\"><img src=\"images/games/332_marvel_united.jpg\" alt=\"Marvel United (seria)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"332",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Council_of4",
        "title":"Council of 4",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"53_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173101/council-4\" target=\"_blank\"><img src=\"images/games/53_council_of4.jpg\" alt=\"Council of 4\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"53",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Dyplomacja",
        "title":"Dyplomacja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"73_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/483/diplomacy\" target=\"_blank\"><img src=\"images/games/73_dyplomacja.jpg\" alt=\"Dyplomacja\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"73",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"TtR",
        "title":"Wsiąść do Pociągu (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"312_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/17/game-ticket-ride-official\" target=\"_blank\"><img src=\"images/games/312_ttr.jpg\" alt=\"Wsiąść do Pociągu (seria)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"312",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Basniowa_Ucieczka",
        "title":"Unpublished prototype (Baśniowa ucieczka)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"293_image",
         "html":"<a href=\"BRAK NA BGG\" target=\"_blank\"><img src=\"images/games/293_basniowa_ucieczka.jpg\" alt=\"Unpublished prototype (Baśniowa ucieczka)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"293",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"SI",
        "title":"Spirit Island",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"246_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/162886/spirit-island\" target=\"_blank\"><img src=\"images/games/246_si.jpg\" alt=\"Spirit Island\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"246",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},	
//page 6
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 6",
   "elements":[
   {
        "type":"panel",
        "name":"Wielka_Petla",
        "title":"Wielka Pętla",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"304_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199478/flamme-rouge\" target=\"_blank\"><img src=\"images/games/304_wielka_petla.jpg\" alt=\"Wielka Pętla\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"304",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Zombie_Kidz",
        "title":"Zombie Kidz: Ewolucja",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"329_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/256952/zombie-kidz-evolution\" target=\"_blank\"><img src=\"images/games/329_zombie_kidz.jpg\" alt=\"Zombie Kidz: Ewolucja\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"329",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Yunnan",
        "title":"Yunnan",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"320_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/143401/yunnan\" target=\"_blank\"><img src=\"images/games/320_yunnan.jpg\" alt=\"Yunnan\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"320",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Santa_Maria",
        "title":"Santa Maria",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"230_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/229220/santa-maria\" target=\"_blank\"><img src=\"images/games/230_santa_maria.jpg\" alt=\"Santa Maria\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"230",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Blood_Rage",
        "title":"Blood Rage",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"28_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/170216/blood-rage\" target=\"_blank\"><img src=\"images/games/28_blood_rage.jpg\" alt=\"Blood Rage\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"28",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"JL_Hero_Dice",
        "title":"Justice League: Hero Dice (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"119_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/46104/game-justice-league-hero-dice\" target=\"_blank\"><img src=\"images/games/119_jl_hero_dice.jpg\" alt=\"Justice League: Hero Dice (seria)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"119",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Timeline_Polska",
        "title":"Timeline: Polska",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"281_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/203655/timeline-polska\" target=\"_blank\"><img src=\"images/games/281_timeline_polska.jpg\" alt=\"Timeline: Polska\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"281",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Dominant Species",
        "title":"Dominant Species",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"69_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/62219/dominant-species\" target=\"_blank\"><img src=\"images/games/69_dominant_species.jpg\" alt=\"Dominant Species\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"69",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Arnak",
        "title":"Zaginiona Wyspa Arnak",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"355_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/312484/lost-ruins-arnak\" target=\"_blank\"><img src=\"images/games/355_arnak.jpg\" alt=\"Zaginiona Wyspa Arnak\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"355",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Tzolkin",
        "title":"Tzol'kin: Kalendarz Majów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"289_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/126163/tzolk-mayan-calendar\" target=\"_blank\"><img src=\"images/games/289_tzolkin.jpg\" alt=\"Tzol'kin: Kalendarz Majów\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"289",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},
//page 7
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 6",
   "elements":[
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/125678/dc-comics-deck-building-game\" target=\"_blank\"><img src=\"images/games/205_dc_pojedynek.jpg\" alt=\"Pojedynek Superbohaterów DC\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/28720/brass-lancashire\" target=\"_blank\"><img src=\"images/games/31_brass_l.jpg\" alt=\"Brass: Lancashire\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/29223/marrakech\" target=\"_blank\"><img src=\"images/games/155_marrakech.jpg\" alt=\"Marrakech\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/220520/caverna-cave-vs-cave\" target=\"_blank\"><img src=\"images/games/125_kawerna_2p.jpg\" alt=\"Kawerna: Jaskinia Kontra Jaskinia\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/281194/flick-faith\" target=\"_blank\"><img src=\"images/games/188_palec_bozy.jpg\" alt=\"Palec Boży\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/149869/sherlock-13\" target=\"_blank\"><img src=\"images/games/236_sherlock.jpg\" alt=\"Sherlock\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/330038/llamaland\" target=\"_blank\"><img src=\"images/games/367_lamaland.jpg\" alt=\"Lamaland\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12692/gloom\" target=\"_blank\"><img src=\"images/games/368_gloom.jpg\" alt=\"Gloom: Gra Niefortunnych Zdarzeń\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
         "html":"<a href=\"https://boardgamegeek.com/boardgame/131526/mathable-quattro\" target=\"_blank\"><img src=\"images/games/369_mathable_q.jpg\" alt=\"Mathable Quattro\" style=\"width:500px;\"> </a>"
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
          "indent": "15",
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
