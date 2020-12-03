// fieldname42: total score
var num, dem, sens, spec, PPV;
var sens_neg, spec_neg, NPV;
function pcr_pos(score, week) {
    if (week == 1) {
        sens = 0.67;
        spec = 0.99;
    }
    if (week == 2) {
        sens = 0.54;
        spec = 0.99;
    }
    if (week == 3) {
        sens = 0.46;
        spec = 0.99;
    }
    if (week > 3) {
        sens = 0.20;
        spec = 0.99;
    }
    console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    num = sens * score;
    dem = num + ((1 - spec) * (1 - score));
    PPV = num / dem;
    ppvRound = (PPV*100).toFixed(2) + "%"
    console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "ppvRound:", ppvRound);
    return ppvRound;
}

function igG_elisa_pos(score, week) {
    if (week == 1) {
        sens = 0.21;
        spec = 0.96;
    }
    if (week == 2) {
        sens = 0.50;
        spec = 0.96;
    }
    if (week == 3) {
        sens = 0.81;
        spec = 0.96;
    }
    if (week > 3) {
        sens = 0.57;
        spec = 0.96;
    }
    console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    num = sens * score;
    dem = num + ((1 - spec) * (1 - score));
    PPV = num / dem;
    ppvRound = (PPV*100).toFixed(2) + "%"
    console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "ppvRound:", ppvRound);
    return ppvRound;
}

function igM_elisa_pos(score, week) {
    if (week == 1) {
        sens = 0.40;
        spec = 0.90;
    }
    if (week == 2) {
        sens = 0.70;
        spec = 0.90;
    }
    if (week == 3) {
        sens = 0.67;
        spec = 0.90;
    }
    if (week > 3) {
        sens = 0.57;
        spec = 0.90;
    }
    console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    num = sens * score;
    dem = num + ((1 - spec) * (1 - score));
    PPV = num / dem;
    ppvRound = (PPV*100).toFixed(2) + "%"
    console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "ppvRound:", ppvRound);
    return ppvRound;
}

function pcr_neg(score_neg, week) {
    if (week == 1) {
        sens_neg = 0.67;
        spec_neg = 0.99;
    }
    if (week == 2) {
        sens_neg = 0.54;
        spec_neg = 0.99;
    }
    if (week == 3) {
        sens_neg = 0.46;
        spec_neg = 0.99;
    }
    if (week > 3) {
        sens_neg = 0.2;
        spec_neg = 0.99;
    }
    console.log("PRE-PCR123NEG spec_neg", spec_neg, "sens_neg", sens_neg, "score_neg", score_neg);
    NPV = (spec_neg * (1 - score_neg)) / (((1 - sens_neg) * score_neg) + (spec_neg * (1 - score_neg)));
    npvRound = (NPV*100).toFixed(2) + "%";
    console.log("POST-PCR123NEG:", npvRound);
    return npvRound;
}

function igg_neg(score_neg, week) {
    if (week == 1) {
        sens_neg = 0.21;
        spec_neg = 0.96;
    }
    if (week == 2) {
        sens_neg = 0.5;
        spec_neg = 0.96;
    }
    if (week == 3) {
        sens_neg = 0.81;
        spec_neg = 0.96;
    }
    if (week > 3) {
        sens_neg = 0.57;
        spec_neg = 0.96;
    }
    console.log("PRE-iggNEG spec_neg", spec_neg, "sens_neg", sens_neg, "score_neg", score_neg);
    NPV = (spec_neg * (1 - score_neg)) / (((1 - sens_neg) * score_neg) + (spec_neg * (1 - score_neg)));
    npvRound = (NPV*100).toFixed(2) + "%";
    console.log("POST-iggNEG:", NPV);
    return npvRound;
}

function igm_neg(score_neg, week) {
    if (week == 1) {
        sens_neg = 0.4;
        spec_neg = 0.90;
    }
    if (week == 2) {
        sens_neg = 0.7;
        spec_neg = 0.90;
    }
    if (week == 3) {
        sens_neg = 0.67;
        spec_neg = 0.90;
    }
    if (week > 3) {
        sens_neg = 0.57;
        spec_neg = 0.90;
    }
    console.log("PRE-igmNEG spec_neg", spec_neg, "sens_neg", sens_neg, "score_neg", score_neg);
    NPV = (spec_neg * (1 - score_neg)) / (((1 - sens_neg) * score_neg) + (spec_neg * (1 - score_neg)));
    // npvRound = (NPV*100).toFixed(2) + "%";
    npvRound = (NPV*100).toFixed(2) + "%";
    console.log("POST-igmNEG:", NPV);
    return npvRound;
}

function control(score) {
            if (score == 0) {
                return 0.05;
            }
            if (score > 0 && score <= 15) {
                return 0.10;
            }
            if (score > 15 && score <= 30) {
                return 0.20;
            }
            if (score > 30 && score <= 40) {
                return 0.30;
            }
            if (score > 40 && score <= 50) {
                return 0.60;
            }
            if (score > 50 && score <= 65) {
                return 0.80;
            }
            if (score > 65 && score <= 75) {
                return 0.99;
            }
            if (score > 75 && score <= 1000) {
                return 0.90;
            }
        }

$("#dateOfSymptoms").change(function(){ 
    console.log("dateOfSymptoms: ", $('input[name="dateOfSymptoms"]').val());
    var dateOfSymptom = new Date($('input[name="dateOfSymptoms"]').val());
    var today = new Date();
    var symptomAgeInDay  = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(dateOfSymptom.getFullYear(), dateOfSymptom.getMonth(), dateOfSymptom.getDate()) ) /(1000 * 60 * 60 * 24));
    var symptomAgeInWeek = Math.floor(symptomAgeInDay/7) +1;
    // console.log("dateOfSymptom: ", dateOfSymptom);
    // console.log("today: ", today);
    console.log("symptomAgeInDay: ", symptomAgeInDay);
    console.log("symptomAgeInWeek: ", symptomAgeInWeek);
    $('input[name="symptomAgeInWeek"]').val(symptomAgeInWeek);
});
var testTypeText, resultType, predictiveValue = null;
$("#testType").change(function () {
    resultType = null;
    predictiveValue = null;
    var status = this.value;
    if (status === "pcr"){
        testTypeText = "PCR Test";
    }
    if (status === "igg"){
        testTypeText = "IgG ELISA Test";
    }
    if (status === "igm"){
        testTypeText = "IgM ELISA Test";
    }
});
$(".scoreField").change(function(){
    var week = $('input[name="symptomAgeInWeek"]').val();
    var score = control(parseFloat($('input[name="totalScore"]').val()));
    var pcr_result = igg_result = igm_result = null;
    
    

    if ($('#posPCR').prop("checked")) {
        pcr_result = "pos";
        igg_result = igm_result = null;
        $("#ppvResult").show();
        $("#npvResult").hide();
        // testTypeText = "PCR Test";
        resultType = "Positive Predictive Value";
    }
    else if ($('#negPCR').prop("checked")) {
        pcr_result = "neg";
        igg_result = igm_result = null;
        $("#npvResult").show();
        $("#ppvResult").hide();
        // testTypeText = "PCR Test";
        resultType = "Negative Predictive Value";
    }
    
    if ($('#posIgg').prop("checked")) {
        igg_result = "pos";
        pcr_result = igm_result = null;
        $("#ppvResult").show();
        $("#npvResult").hide();
        // testTypeText = "IgG ELISA Test";
        resultType = "Positive Predictive Value";
    }
    else if ($('#negIgg').prop("checked")) {
        igg_result = "neg";
        pcr_result = igm_result = null;
        $("#npvResult").show();
        $("#ppvResult").hide();
        // testTypeText = "IgG ELISA Test";
        resultType = "Negative Predictive Value";
    }
    
    if ($('#posIgm').prop("checked")) {
        igm_result = "pos";
        igg_result = pcr_result = null;
        $("#ppvResult").show();
        $("#npvResult").hide();
        // testTypeText = "IgM ELISA Test";
        resultType = "Positive Predictive Value";
    }
    else if ($('#negIgm').prop("checked")) {
        igm_result = "neg";
        igg_result = pcr_result = null;
        $("#npvResult").show();
        $("#ppvResult").hide();
        // testTypeText = "IgM ELISA Test";
        resultType = "Negative Predictive Value";
    }
    console.log('pcr_res:', pcr_result);
    console.log('igm_res:', igm_result);
    console.log('igg_res:', igg_result);
    var ppv, npv;
    if (pcr_result === "pos") {
        console.log('TYPE_PCR+');
        ppv = pcr_pos(score, week);
    }

    else if (pcr_result === "neg") {
        console.log('TYPE_PCR-');
        npv = pcr_neg(score, week);
    }

    if (igg_result === "pos") {
        console.log('TYPE_IGG+');
        ppv = igG_elisa_pos(score, week);
    }

    else if (igg_result === "neg") {
        console.log('TYPE_IGG-');
        npv = igg_neg(score, week);
    }

    if (igm_result === "pos") {
        console.log('TYPE_IGM+');
        ppv = igM_elisa_pos(score, week);
    }

    else if (igm_result === "neg") {
        console.log('TYPE_IGM-');
        npv = igm_neg(score, week);
    }

    $('input[name="ppv"]').val(ppv);
    $('input[name="npv"]').val(npv);
    if (ppv === undefined){
        predictiveValue = npv;
    }
    else if (npv === undefined){
        predictiveValue = ppv;
    }
    // var testTypeText, resultType, predictiveValue;
    // testTypeText = $('input[name="testTypeHidden"]').val();
    // resultType = $('input[name="resultTypeHidden"]').val();
    // predictiveValue = $('input[name="ppv"]').val() + $('input[name="npv"]').val();
    var testResult = testTypeText + " - " + resultType+ " - " + predictiveValue;
    $('input[name="testResult"]').val(testResult);

});

