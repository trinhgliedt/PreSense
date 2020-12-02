// fieldname39+fieldname43+fieldname134+fieldname106+fieldname144
// fieldname39: symptoms
// fieldname43: Radiography
// fieldname134: Exposure
// fieldname106: score
// fieldname144: Prevalence Score
$(".scoreField").change(function(){
    var symptomScore = exposureScore = radiographyScore = neutLympScore = prevalenceScore=0;

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
    neutLympScore = parseFloat($('input[name="score"]').val());

    // Calculate radiographyScore:
    radiographyScore = parseFloat($('#radiography option:selected').val());

    // Calculate prevalenceScore:
    prevalenceScore = 0;

    var total_score = symptomScore + exposureScore + radiographyScore + neutLympScore + prevalenceScore;
    console.log("symptomScore: ", symptomScore);
    console.log("exposureScore: ", exposureScore);
    console.log("radiographyScore: ", radiographyScore);
    console.log("neutLympScore: ", neutLympScore);
    console.log("prevalenceScore: ", prevalenceScore);

    $('input[name="totalScore"]').val(total_score);
});