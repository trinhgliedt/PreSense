
var prevalenceScore = 0;
$('.prevalenceField').on('change', function() { 
    var dateStr, symptomDate = geocode = prevalence =  null;
    dateStr = $('input[name="dateOfSymptoms"]').val();
    // dateStr: 2020-11-03
    symptomDate = dateStr.slice(0,4)+dateStr.slice(5,7)+dateStr.slice(8);
    // symptomDate: 20201103
    geocode = $('input[name="fips"]').val();
    console.log('symptomDate: ', symptomDate);
    console.log('geocode: ', geocode);
    if (symptomDate.length === 8 && geocode.length === 5) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				console.log('api call success', this.status, this.readyState);
				var res = JSON.parse(this.responseText);
				console.log('value: ', res);
				if (res['result'] === 1) {
					prevalence = res['epidata'][0]['value'];
					$('input[name="prevalence"]').val(prevalence);
					prevalenceScore = Math.round(prevalence*10).toFixed(0);
                    $('input[name="prevalenceScore"]').val(prevalenceScore);
					updateScore();
				} else {
                    console.log('no result');
					$('input[name="prevalence"]').val(prevalence);
					$('input[name="prevalenceScore"]').val(prevalenceScore);
					updateScore();
					
				}
				
			} else {
				console.log('api call error or in progress', this.status, this.readyState);
			}
		}
		
		xhttp.open('GET', 'https://api.covidcast.cmu.edu/epidata/api.php?source=covidcast&data_source=indicator-combination&signal=nmf_day_doc_fbc_fbs_ght&time_type=day&geo_type=county&time_values=' + symptomDate + '&geo_value=' + geocode, true);
		xhttp.send();
	} else {
        console.log('date or geocode not available');
        $('input[name="prevalence"]').val(null);
	}
	console.log('prevalence: ', prevalence, "prevalenceScore: ", prevalenceScore);

});

function updateScore(){
	var symptomScore = exposureScore = radiographyScore = neutLympScore = 0;

    // Calculate symptomScore:
    if ($("#symptomCough").prop("checked")){
        symptomScore += 10;
    }

    if ($("#symptomFever").prop("checked")){
        symptomScore += 5;
    }
    if ($("#symptomGI").prop("checked")){
        symptomScore += 10;
    }
    if ($("#symptomFatigue").prop("checked")){
        symptomScore += 5;
    }
    if ($("#symptomTaste").prop("checked")){
        symptomScore += 25;
    }

    // Calculate exposureScore:
    if($('#exposureProlonged').prop("checked")){
        exposureScore += 20;
    }
    if($('#exposureBrief').prop("checked")){
        exposureScore += 10;
    }
    if($('#exposurePossible').prop("checked")){
        exposureScore += 10;
    }

    // Calculate neutLympScore:
    if ($('input[name="score"]').val().length ==! 0){
        neutLympScore = parseFloat($('input[name="score"]').val());
    }

    // Calculate radiographyScore:
    radiographyScore = parseFloat($('#radiography option:selected').val());
    
    // Calculate prevalenceScore:
    prevalenceScore = parseInt(prevalenceScore);

    var total_score = symptomScore + exposureScore + radiographyScore + neutLympScore + prevalenceScore;
    console.log("symptomScore: ", symptomScore, "exposureScore: ", exposureScore, "radiographyScore: ", radiographyScore, "neutLympScore: ", neutLympScore, "prevalenceScore: ", prevalenceScore, "total_score:", total_score);

    $('input[name="totalScore"]').val(total_score);
}