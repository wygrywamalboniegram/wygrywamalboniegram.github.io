
	Survey.StylesManager.applyTheme("defaultV2");
	//survey.firstPageIsStarted = true;


var surveyJSON =  {
  "locale": "pl",
  "title":"TOP 50 Gier Wszechczasów (2023)",
  "elements": [
    {
		"name": "osoba",
		"title": "Imię/nick:",
		"isRequired":true,
		"hideNumber": true,
		"type": "text"
    },
    {
      "name": "TOP1",
      "title": "Gwarancja awansu:",
      "type": "text",
      "hasNone": true,
    },
	{
      "name": "TOP2",
      "title": "Gwarancja awansu:",
      "type": "text",
      "hasNone": true,
	  "visibleIf": "{TOP1}notempty",
    },
	{
      "name": "TOP3",
      "title": "Gwarancja awansu:",
      "type": "text",
      "hasNone": true,
	  "visibleIf": "{TOP2}notempty",

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
