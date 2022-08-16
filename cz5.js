
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
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 5",
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
        "name":"Odkrycia_LC",
        "title":"Odkrycia: Dzienniki Lewisa i Clarka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"179_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/171669/discoveries-journals-lewis-clark\" target=\"_blank\"><img src=\"images/games/179_odkrycia_lc.jpg\" alt=\"Odkrycia: Dzienniki Lewisa i Clarka\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"179",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Broom_Service",
        "title":"Broom Service",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"32_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172308/broom-service\" target=\"_blank\"><img src=\"images/games/32_broom_service.jpg\" alt=\"Broom Service\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"32",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Puerto_Rico",
        "title":"Puerto Rico",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"214_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/3076/puerto-rico\" target=\"_blank\"><img src=\"images/games/214_puerto_rico.jpg\" alt=\"Puerto Rico\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"214",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Nowe_Pokolenia",
        "title":"Nowe Pokolenia",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"173_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172381/my-village\" target=\"_blank\"><img src=\"images/games/173_nowe_pokolenia.jpg\" alt=\"Nowe Pokolenia\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"173",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"7W",
        "title":"7 Cudów Świata",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"4_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/68448/7-wonders\" target=\"_blank\"><img src=\"images/games/4_7w.jpg\" alt=\"7 Cudów Świata\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"4",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Lorenzo",
        "title":"Lorenzo il Magnifico",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"146_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/203993/lorenzo-il-magnifico\" target=\"_blank\"><img src=\"images/games/146_lorenzo.jpg\" alt=\"Lorenzo il Magnifico\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"146",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Sagrada",
        "title":"Sagrada",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"228_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/199561/sagrada\" target=\"_blank\"><img src=\"images/games/228_sagrada.jpg\" alt=\"Sagrada\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"228",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Neuroshima_Hex",
        "title":"Neuroshima Hex!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"168_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/21241/neuroshima-hex-30\" target=\"_blank\"><img src=\"images/games/168_neuroshima_hex.jpg\" alt=\"Neuroshima Hex!\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"168",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"LE",
        "title":"Leaving Earth",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"140_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/173064/leaving-earth\" target=\"_blank\"><img src=\"images/games/140_le.jpg\" alt=\"Leaving Earth\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"140",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Rydzyk_Fidzyk",
        "title":"Ryzyk Fizyk",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"226_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/20100/wits-wagers\" target=\"_blank\"><img src=\"images/games/226_rydzyk_fidzyk.jpg\" alt=\"Ryzyk Fizyk\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"226",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},
//page 2		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 5",
   "elements":[
   {
        "type":"panel",
        "name":"Wyprawa_do_Dzungli",
        "title":"Wyprawa do dżungli",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"313_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/148600/wyprawa-do-dzungli\" target=\"_blank\"><img src=\"images/games/313_wyprawa_do_dzungli.jpg\" alt=\"Wyprawa do dżungli\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"313",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Ubongo_3D",
        "title":"Ubongo 3D",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"290_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/46396/ubongo-3-d\" target=\"_blank\"><img src=\"images/games/290_ubongo_3d.jpg\" alt=\"Ubongo 3D\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"290",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Wysokie_N",
        "title":"Wysokie Napięcie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"316_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/2651/power-grid\" target=\"_blank\"><img src=\"images/games/316_wysokie_n.jpg\" alt=\"Wysokie Napięcie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"316",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Sushi_Go",
        "title":"Sushi Go!",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"257_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/133473/sushi-go\" target=\"_blank\"><img src=\"images/games/257_sushi_go.jpg\" alt=\"Sushi Go!\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"257",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Trajan",
        "title":"Trajan",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"282_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/102680/trajan\" target=\"_blank\"><img src=\"images/games/282_trajan.jpg\" alt=\"Trajan\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"282",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Atlantyda",
        "title":"Atlantyda",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"16_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/27532/vineta\" target=\"_blank\"><img src=\"images/games/16_atlantyda.jpg\" alt=\"Atlantyda\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"16",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Zloto_Bohaterow",
        "title":"Złoto Bohaterów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"328_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/180785/mighty-monsters\" target=\"_blank\"><img src=\"images/games/328_zloto_bohaterow.jpg\" alt=\"Złoto Bohaterów\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"328",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Ludzie_Kamienie",
        "title":"Ludzie kontra Kamienie",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"366_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/202737/are-you-dumber-box-rocks\" target=\"_blank\"><img src=\"images/games/366_ludzie_kamienie.jpg\" alt=\"Ludzie kontra Kamienie\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"366",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Catan",
        "title":"Osadnicy z Catanu",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"186_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/13/catan\" target=\"_blank\"><img src=\"images/games/186_catan.jpg\" alt=\"Osadnicy z Catanu\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"186",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"RR",
        "title":"Rosyjskie Koleje",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"222_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/144733/russian-railroads\" target=\"_blank\"><img src=\"images/games/222_rr.jpg\" alt=\"Rosyjskie Koleje\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"222",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},	
//page 3		
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 5",
   "elements":[
   {
        "type":"panel",
        "name":"Herbaceous",
        "title":"Niezłe ziółka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"171_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/195314/herbaceous\" target=\"_blank\"><img src=\"images/games/171_herbaceous.jpg\" alt=\"Niezłe ziółka\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"171",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Carcasonne",
        "title":"Carcassonne",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"37_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/822/carcassonne\" target=\"_blank\"><img src=\"images/games/37_carcasonne.jpg\" alt=\"Carcassonne\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"37",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Kingdom_Rush",
        "title":"Kingdom Rush: Rift in Time",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"129_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/272533/kingdom-rush-rift-time\" target=\"_blank\"><img src=\"images/games/129_kingdom_rush.jpg\" alt=\"Kingdom Rush: Rift in Time\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"129",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Prehistory",
        "title":"Prehistory",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"211_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/234948/prehistory\" target=\"_blank\"><img src=\"images/games/211_prehistory.jpg\" alt=\"Prehistory\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"211",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"T&E",
        "title":"Tygrys i Eufrat",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"287_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/42/tigris-euphrates\" target=\"_blank\"><img src=\"images/games/287_t&e.jpg\" alt=\"Tygrys i Eufrat\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"287",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Avalon",
        "title":"Avalon",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"17_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/128882/resistance-avalon\" target=\"_blank\"><img src=\"images/games/17_avalon.jpg\" alt=\"Avalon\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"17",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Kolejka",
        "title":"Kolejka",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"133_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/85325/kolejka\" target=\"_blank\"><img src=\"images/games/133_kolejka.jpg\" alt=\"Kolejka\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"133",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"RftG",
        "title":"Race for the Galaxy: Narodziny Imperiów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"217_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/28143/race-galaxy\" target=\"_blank\"><img src=\"images/games/217_rftg.jpg\" alt=\"Race for the Galaxy: Narodziny Imperiów\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"217",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Hanabi",
        "title":"Hanabi",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"104_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/98778/hanabi\" target=\"_blank\"><img src=\"images/games/104_hanabi.jpg\" alt=\"Hanabi\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"104",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Zelazna_Kurtyna",
        "title":"Żelazna kurtyna",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"330_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/228411/iron-curtain\" target=\"_blank\"><img src=\"images/games/330_zelazna_kurtyna.jpg\" alt=\"Żelazna kurtyna\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"330",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},		
//page 4
{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 5",
   "elements":[
   {
        "type":"panel",
        "name":"Gra_Pomylek",
        "title":"Gra pomyłek",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"101_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/130004/think-again\" target=\"_blank\"><img src=\"images/games/101_gra_pomylek.jpg\" alt=\"Gra pomyłek\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"101",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Gutenberg",
        "title":"Gutenberg",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"341_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/339958/gutenberg\" target=\"_blank\"><img src=\"images/games/341_gutenberg.jpg\" alt=\"Gutenberg\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"341",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Super_Farmer",
        "title":"Super Farmer",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"255_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/17557/super-farmer\" target=\"_blank\"><img src=\"images/games/255_super_farmer.jpg\" alt=\"Super Farmer\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"255",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"MS_Batory",
        "title":"MS Batory",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"162_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/233094/ms-batory\" target=\"_blank\"><img src=\"images/games/162_ms_batory.jpg\" alt=\"MS Batory\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"162",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Brainbenders",
        "title":"Brainbenders",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"29_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/21976/mindbenders\" target=\"_blank\"><img src=\"images/games/29_brainbenders.jpg\" alt=\"Brainbenders\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"29",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Ucho_Krola",
        "title":"Ucho króla",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"291_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/156062/ucho-krola\" target=\"_blank\"><img src=\"images/games/291_ucho_krola.jpg\" alt=\"Ucho króla\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"291",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Poker",
        "title":"Poker",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"206_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/1115/poker\" target=\"_blank\"><img src=\"images/games/206_poker.jpg\" alt=\"Poker\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"206",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Onitama",
        "title":"Onitama",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"184_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/160477/onitama\" target=\"_blank\"><img src=\"images/games/184_onitama.jpg\" alt=\"Onitama\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"184",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Wierla_Skaly",
        "title":"Wiertła, Skały, Minerały",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"306_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/162286/super-motherload\" target=\"_blank\"><img src=\"images/games/306_wierla_skaly.jpg\" alt=\"Wiertła, Skały, Minerały\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"306",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Egizia",
        "title":"Dolina Królów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"68_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/58421/egizia\" target=\"_blank\"><img src=\"images/games/68_egizia.jpg\" alt=\"Dolina Królów\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"68",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},		
//page 5	
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 5",
   "elements":[
   {
        "type":"panel",
        "name":"Ksiega_Smokow",
        "title":"Księga Smoków",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"362_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/358796/ksiega-smokow\" target=\"_blank\"><img src=\"images/games/362_ksiega_smokow.jpg\" alt=\"Księga Smoków\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"362",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Pluszowe",
        "title":"Pluszowe opowieści",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"203_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/233312/stuffed-fables\" target=\"_blank\"><img src=\"images/games/203_pluszowe.jpg\" alt=\"Pluszowe opowieści\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"203",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Spacer_Burano",
        "title":"Spacer po Burano",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"354_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/257769/walking-burano\" target=\"_blank\"><img src=\"images/games/354_spacer_burano.jpg\" alt=\"Spacer po Burano\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"354",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Eurobiznes",
        "title":"Eurobiznes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"79_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/42050/eurobusiness\" target=\"_blank\"><img src=\"images/games/79_eurobiznes.jpg\" alt=\"Eurobiznes\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"79",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Star_Realms",
        "title":"Star Realms",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"249_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/147020/star-realms\" target=\"_blank\"><img src=\"images/games/249_star_realms.jpg\" alt=\"Star Realms\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"249",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Tekhenu",
        "title":"Tekhenu: Obelisk Słońca",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"271_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/297030/tekhenu-obelisk-sun\" target=\"_blank\"><img src=\"images/games/271_tekhenu.jpg\" alt=\"Tekhenu: Obelisk Słońca\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"271",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Aeons_End",
        "title":"Aeon's End (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"8_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/50251/game-aeons-end\" target=\"_blank\"><img src=\"images/games/8_aeons_end.jpg\" alt=\"Aeon's End (seria)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"8",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Kawerna",
        "title":"Kawerna: Rolnicy z Jaskiń",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"126_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/102794/caverna-cave-farmers\" target=\"_blank\"><img src=\"images/games/126_kawerna.jpg\" alt=\"Kawerna: Rolnicy z Jaskiń\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"126",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Wielblady",
        "title":"Przebiegłe Wielbłądy",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"213_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/153938/camel\" target=\"_blank\"><img src=\"images/games/213_wielblady.jpg\" alt=\"Przebiegłe Wielbłądy\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"213",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"SHASN",
        "title":"SHASN",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"235_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/257305/shasn\" target=\"_blank\"><img src=\"images/games/235_shasn.jpg\" alt=\"SHASN\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"235",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
      
   ]
},	
//page 6
	{
   "name":"TOP50 Ankieta",
   "title":"TOP 50 Gier Wszechczasów (2022) - CZĘŚĆ 5",
   "elements":[
   {
        "type":"panel",
        "name":"Nations",
        "title":"Wojna Narodów",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"311_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/126042/nations\" target=\"_blank\"><img src=\"images/games/311_nations.jpg\" alt=\"Wojna Narodów\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"311",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Burgle_Bros",
        "title":"Burgle Bros.",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"34_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/172081/burgle-bros\" target=\"_blank\"><img src=\"images/games/34_burgle_bros.jpg\" alt=\"Burgle Bros.\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"34",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Gangi_NY",
        "title":"Gangi Nowego Jorku",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"90_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/170431/kings-kilt\" target=\"_blank\"><img src=\"images/games/90_gangi_ny.jpg\" alt=\"Gangi Nowego Jorku\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"90",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Skull",
        "title":"Skull",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"346_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/92415/skull\" target=\"_blank\"><img src=\"images/games/346_skull.jpg\" alt=\"Skull\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"346",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Gentes",
        "title":"Gentes",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"93_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/217780/gentes\" target=\"_blank\"><img src=\"images/games/93_gentes.jpg\" alt=\"Gentes\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"93",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"TI",
        "title":"Twilight Imperium",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"286_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/12493/twilight-imperium-third-edition\" target=\"_blank\"><img src=\"images/games/286_ti.jpg\" alt=\"Twilight Imperium\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"286",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Mechs_Minions",
        "title":"Mechs vs. Minions",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"157_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/209010/mechs-vs-minions\" target=\"_blank\"><img src=\"images/games/157_mechs_minions.jpg\" alt=\"Mechs vs. Minions\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"157",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Draftozaur",
        "title":"Draftozaur",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"71_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/264055/draftosaurus\" target=\"_blank\"><img src=\"images/games/71_draftozaur.jpg\" alt=\"Draftozaur\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"71",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Viticulture",
        "title":"Viticulture Essential Edition",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"295_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgame/183394/viticulture-essential-edition\" target=\"_blank\"><img src=\"images/games/295_viticulture.jpg\" alt=\"Viticulture Essential Edition\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"295",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
        "name":"Kolejowy_Szlak",
        "title":"Kolejowy Szlak (seria)",
        "isRequired":true,
        "questionsOrder": "initial",
        "showNumber":true,
        "elements":[
        {
         "type":"html",
         "name":"353_image",
         "html":"<a href=\"https://boardgamegeek.com/boardgamefamily/57676/game-railroad-ink\" target=\"_blank\"><img src=\"images/games/353_kolejowy_szlak.jpg\" alt=\"Kolejowy Szlak (seria)\" style=\"width:500px;\"> </a>"
        },
        {
         "type":"imagepicker",
         "name":"353",
         "titleLocation":"hidden",
         "defaultValue":"x",
         "isRequired":true,
         "choices":[
          {"value":"t1","imageLink":"images/icons/1_mini.png"},
          {"value":"t2","imageLink":"images/icons/2_mini.png"},
          {"value":"t3","imageLink":"images/icons/3_mini.png"},
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
