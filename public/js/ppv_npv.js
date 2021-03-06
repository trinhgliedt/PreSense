// fieldname42: total score
var num, dem, sens, spec;
var sens_neg, spec_neg;
var PPV = NPV = null;

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
    
    

    if ($('#posPCR').prop("checked") && $( "#testType option:selected" ).val() === "pcr") {
        pcr_result = "pos";
        igg_result = igm_result = null;
        $("#ppvResult").show();
        $("#npvResult").hide();
        // testTypeText = "PCR Test";
        resultType = "Positive Predictive Value";
    }
    else if ($('#negPCR').prop("checked") && $( "#testType option:selected" ).val() === "pcr") {
        pcr_result = "neg";
        igg_result = igm_result = null;
        $("#npvResult").show();
        $("#ppvResult").hide();
        // testTypeText = "PCR Test";
        resultType = "Negative Predictive Value";
    }
    
    if ($('#posIgg').prop("checked") && $( "#testType option:selected" ).val() === "igg") {
        igg_result = "pos";
        pcr_result = igm_result = null;
        $("#ppvResult").show();
        $("#npvResult").hide();
        // testTypeText = "IgG ELISA Test";
        resultType = "Positive Predictive Value";
    }
    else if ($('#negIgg').prop("checked") && $( "#testType option:selected" ).val() === "igg") {
        igg_result = "neg";
        pcr_result = igm_result = null;
        $("#npvResult").show();
        $("#ppvResult").hide();
        // testTypeText = "IgG ELISA Test";
        resultType = "Negative Predictive Value";
    }
    
    if ($('#posIgm').prop("checked") && $( "#testType option:selected" ).val() === "igm") {
        igm_result = "pos";
        igg_result = pcr_result = null;
        $("#ppvResult").show();
        $("#npvResult").hide();
        // testTypeText = "IgM ELISA Test";
        resultType = "Positive Predictive Value";
    }
    else if ($('#negIgm').prop("checked") && $( "#testType option:selected" ).val() === "igm") {
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
    var ppvVal, npvVal;
    var consideration = null;
    if (pcr_result === "pos") {
        console.log('TYPE_PCR+');
        ppv = pcr_pos(score, week);
        ppvVal = parseFloat(ppv.slice(0,6));
        if (ppvVal >= 66) {
            console.log('PCR Pos - PPV High');
            consideration = 'This positive test is likely to reflect actual infection with SARS CoV2.';
        } else if (ppvVal < 66) {
            console.log('invalid test result');
            consideration ='';
        }   
    }
    else if (pcr_result === "neg") {
        console.log('TYPE_PCR-');
        npv = pcr_neg(score, week);
        npvVal = parseFloat(npv.slice(0,6));
        if (npvVal <= 66) {
            console.log('PCR Neg - NPV Low');
            consideration = 'The NPV of this test is low.  If you still suspect COVID-19, consider retesting for virus and/or antibody (if the patient has been symptomatic for more than 1 week).';
        } else if (npvVal <= 90) {
            console.log('PCR Neg - NPV Intermediate');
            consideration ='The NPV of the test is intermediate. If you still suspect COVID-19, consider retesting for virus and/or antibody (if the patient has been symptomatic for more than 1 week).';
        } else if (npvVal > 90){
            console.log('PCR Neg - NPV High');
            consideration ='The NPV of the test is relatively high. This negative result is likely to reflect the true absence of virus. If you still suspect COVID-19, consider retesting for virus and/or antibody (if the patient has been symptomatic for more than 1 week).';
        }

    }

    if (igg_result === "pos") {
        console.log('TYPE_IGG+');
        ppv = igG_elisa_pos(score, week);
        ppvVal = parseFloat(ppv.slice(0,6));
        if (ppvVal <= 66) {
            console.log('IgG Pos - PPV Low');
            consideration = 'The positive antibody test may not reflect current or prior COVID-19. Reconsider diagnosis and retesting. False positive antibodies can be the result of prior Coronavirus infections. Some people have also had unrecognized COVID-19.';
        }
        else if (ppvVal > 66) {
            console.log('IgG Pos - PPV High');
            consideration ='The positive antibody likely reflects prior or current COVID-19.';
        }   
    }

    else if (igg_result === "neg") {
        console.log('TYPE_IGG-');
        npv = igg_neg(score, week);
        npvVal = parseFloat(npv.slice(0,6));
        if (npvVal <= 90) {
            console.log('Igg Neg - NPV Low');
            consideration = 'The NPV of the antibody test is relatively low. This may not be a reliable indicator that the patient does not have COVID-19, either because of timing relative to symptoms or other reasons.';
        } else if (npvVal > 90){
            console.log('Igg Neg - NPV High');
            consideration = 'The NPV of the antibody test is high. The absence of antibodies may reflect no current or prior COVID – 19, or antibody levels that have decreased since infection. If you still suspect COVID-19, consider ID consultation.';
        }
    }

    if (igm_result === "pos") {
        console.log('TYPE_IGM+');
        ppv = igM_elisa_pos(score, week);
        ppvVal = parseFloat(ppv.slice(0,6));
        if (ppvVal <= 66) {
            console.log('IgM Pos - PPV Low');
            consideration = 'The positive antibody test may not reflect current or prior COVID-19. Reconsider diagnosis and retesting. False positive antibodies can be the result of prior Coronavirus infections. Some people have also had unrecognized COVID-19.';
        }
        else if (ppvVal > 66){
            console.log('IgM Pos - PPV High');
            consideration ='The positive antibody likely reflects prior or current COVID-19.';
        }   
    }

    else if (igm_result === "neg") {
        console.log('TYPE_IGM-');
        npv = igm_neg(score, week);
        npvVal = parseFloat(npv.slice(0,6));
        if (npvVal <= 90) {
            console.log('IgM Neg - NPV Low');
            consideration = 'The NPV of the antibody test is relatively low. This may not be a reliable indicator that the patient does not have COVID-19, either because of timing relative to symptoms or other reasons.';
        } else if (npvVal > 90){
            console.log('IgM Neg - NPV High');
            consideration = 'The NPV of the antibody test is high. The absence of antibodies may reflect no current or prior COVID – 19, or antibody levels that have decreased since infection. If you still suspect COVID-19, consider ID consultation.';
        }
    }
    $('input[name="testResult"]').val(testResult);
    console.log("npvVal:", npvVal, "ppvVal:", ppvVal, "consideration:", consideration);
    document.getElementById("consideration").innerHTML = consideration;


    if (ppv === "NaN%") {ppv = 0;}
    if (npv === "NaN%") {npv = 0;}
    $('input[name="ppv"]').val(ppv);
    $('input[name="npv"]').val(npv);
    if (ppv === undefined){
        predictiveValue = npv;
    }
    else if (npv === undefined){
        predictiveValue = ppv;
    }
    if (resultType === null){resultType = "";}
    if (predictiveValue === undefined){predictiveValue = "";}
    console.log("resultType: ", resultType, "predictiveValue: ", predictiveValue, "testResult: ", testResult);
    var testResult = testTypeText + " - " + resultType+ " - " + predictiveValue;
        $('input[name="testResult"]').val(testResult);
        document.getElementById("testResultDisplay").innerHTML = testResult;
});

