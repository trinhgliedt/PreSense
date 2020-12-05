// ------------ Lookup fips
const db = firebase.database();
var fips = userZip = null;
$('#zipcode').on('change', function() { 
    db.ref("zipToFips").on("value", function(snapshot){
        userZip = $('input[name="zipcode"]').val();
        fips = snapshot.val()[userZip];
        $('input[name="fips"]').val(fips);
        console.log("fips: ", fips);
        updatePrevalence();
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
});

// -------------- Update prevalence
var prevalenceScore = 0;
$('.prevalenceField').on('change', function() { 
    updatePrevalence();
});


function updatePrevalence(){
    var dateStr, symptomDate = geocode = prevalence =  null;
    dateStr = $('input[name="dateOfSymptoms"]').val();
    // dateStr: 2020-11-03
    symptomDate = dateStr.slice(0,4)+dateStr.slice(5,7)+dateStr.slice(8);
    // symptomDate: 20201103
    geocode = $('input[name="fips"]').val();
    console.log('symptomDate: ', symptomDate);
    console.log('geocode: ', geocode);
    var covidCastData;
    if (symptomDate.length === 8 && geocode.length === 5) {
		
		const fetchPrevalence = () => {
            console.log('in Axios call', covidCastData);

            axios.get('https://api.covidcast.cmu.edu/epidata/api.php?source=covidcast&data_source=indicator-combination&signal=nmf_day_doc_fbc_fbs_ght&time_type=day&geo_type=county&time_values=' + symptomDate + '&geo_value=' + geocode)
                .then(res => {
                    covidCastData = res.data;
                    console.log('api call success', res.data);
                    prevalence = covidCastData['epidata'][0]['value'].toFixed(4);
                    $('input[name="prevalence"]').val(prevalence);
                    prevalenceScore = Math.round(prevalence*10).toFixed(0);
                    $('input[name="prevalenceScore"]').val(prevalenceScore);
                    updateScore();
                })
                .catch(error => console.error(error));
        };
        fetchPrevalence();
        

	} else {
        console.log('date or geocode not available');
        $('input[name="prevalence"]').val(null);
        prevalenceScore = 0;
	}
	console.log('prevalence: ', prevalence, "prevalenceScore: ", prevalenceScore);
};
$('.prevalenceField').on('change', function() { 
    updatePrevalence();

});

$(".scoreField").change(function(){ 
    updateScore();
})


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