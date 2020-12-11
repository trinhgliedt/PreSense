// fieldname39+fieldname43+fieldname134+fieldname106+fieldname144
// fieldname39: symptoms
// fieldname43: Radiography
// fieldname134: Exposure
// fieldname106: score
// fieldname144: Prevalence Score
var total_score = 0;
var preTestProbability;
$(".scoreField").change(function(){
    calculateTotalScore();
    // calculatePretestProb();
});


function calculateTotalScore(){
    var symptomScore = exposureScore = radiographyScore = neutLympScore = prevalenceScore = 0;

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
    prevalenceScore = parseInt($('input[name="prevalenceScore"]').val());

    total_score = symptomScore + exposureScore + radiographyScore + neutLympScore + prevalenceScore;
    console.log("symptomScore: ", symptomScore, "exposureScore: ", exposureScore, "radiographyScore: ", radiographyScore, "neutLympScore: ", neutLympScore, "prevalenceScore: ", prevalenceScore, "total_score:", total_score);

    $('input[name="totalScore"]').val(total_score);
    calculatePretestProb();
}

function calculatePretestProb(){
    console.log("start calculating PretestProb");
    var score = total_score;
    
    if (score == 0) {
        preTestProbability = 0.05;
    }
    else if (score > 0 && score <= 15) {
        preTestProbability = 0.10;
    }
    else if (score > 15 && score <= 30) {
        preTestProbability = 0.20;
    }
    else if (score > 30 && score <= 40) {
        preTestProbability = 0.30;
    }
    else if (score > 40 && score <= 50) {
        preTestProbability = 0.60;
    }
    else if (score > 50 && score <= 65) {
        preTestProbability = 0.80;
    }
    else if (score > 65 && score <= 75) {
        preTestProbability = 0.99;
    }
    else if (score > 75 && score <= 1000) {
        preTestProbability = 0.90;
    }
    $('input[name="preTestProbability"]').val(preTestProbability);
}