// fieldname42: total score
var num, dem, sens, spec, PPV;
function pcr(score, week) {
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
    console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    return PPV.toPrecision(4)*100 + "%";
}

function igG_elisa(score, week) {
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
    // console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    num = sens * score;
    dem = num + ((1 - spec) * (1 - score));
    PPV = num / dem;
    // console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    return PPV.toPrecision(4)*100 + "%";
}

function igM_elisa(score, week) {
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
    // console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    num = sens * score;
    dem = num + ((1 - spec) * (1 - score));
    PPV = num / dem;
    // console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
    return PPV.toPrecision(4)*100 + "%";
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
$(".scoreField").change(function(){
    var week = $('input[name="symptomAgeInWeek"]').val();
    var score = control(parseFloat($('input[name="totalScore"]').val()));
    var pcr_result, igg_result, igm_result;
    if ($('#posPCR').prop("checked")) {
        pcr_result = "pos";
    }
    else if ($('#negPCR').prop("checked")) {
        pcr_result = "neg";
    }
    
    if ($('#posIgg').prop("checked")) {
        igg_result = "pos";
    }
    else if ($('#negIgg').prop("checked")) {
        igg_result = "neg";
    }
    
    if ($('#posIgm').prop("checked")) {
        igm_result = "pos";
    }
    else if ($('#negIgm').prop("checked")) {
        igm_result = "neg";
    }
    console.log('pcr_res:', pcr_result);
    console.log('igm_res:', igm_result);
    console.log('igg_res:', igg_result);
    var ppv;
    if (pcr_result === "pos") {
        console.log('TYPE_PCR+');
        ppv = pcr(score, week);
    }

    if (igg_result === "pos") {
        console.log('TYPE_IGG+');
        ppv = igG_elisa(score, week);
    }

    if (igm_result === "pos") {
        console.log('TYPE_IGM+');
        ppv = igM_elisa(score, week);
    }
    $('input[name="ppv"]').val(ppv);

});




// DATEDIFF(NOW(), fieldname3,'yyyy-mm-dd','d')
// ['days']+1
// (function () {
//     var score = control(fieldname42);
//     var week = fieldname5;
//     var pcr_result = fieldname130;
//     var igm_result = fieldname132;
//     var igg_result = fieldname133;
//     var num, dem, sens, spec, PPV;
//     var f = fieldname52;
//     // fieldname52: Positive Predictive Value
//     console.log('score:', score);
//     console.log('pcr_res:', pcr_result);
//     console.log('igm_res:', igm_result);
//     console.log('igg_res:', igg_result);
//     // Positive: 2, Negative: 1
//     if (pcr_result == 2) {
//         console.log('TYPE_PCR+');
//         f = pcr(score, week);
//         return f * 100;
//     }
//     if (igm_result == 2) {
//         console.log('TYPE_IGM+');
//         f = igM_elisa(score, week);
//         return f * 100;
//     }
//     if (igg_result == 2) {
//         console.log('TYPE_IGG+');
//         f = igG_elisa(score, week);
//         return f * 100;
//     }

//     function control(score) {
//         if (score == 0) {
//             return 0.05;
//         }
//         if (score > 0 && score <= 15) {
//             return 0.10;
//         }
//         if (score > 15 && score <= 30) {
//             return 0.20;
//         }
//         if (score > 30 && score <= 40) {
//             return 0.30;
//         }
//         if (score > 40 && score <= 50) {
//             return 0.60;
//         }
//         if (score > 50 && score <= 65) {
//             return 0.80;
//         }
//         if (score > 65 && score <= 75) {
//             return 0.99;
//         }
//         if (score > 75 && score <= 1000) {
//             return 0.90;
//         }
//     }

//     function pcr(score, week) {
//         if (week == 1) {
//             sens = 0.67;
//             spec = 0.99;
//         }
//         if (week == 2) {
//             sens = 0.54;
//             spec = 0.99;
//         }
//         if (week == 3) {
//             sens = 0.46;
//             spec = 0.99;
//         }
//         if (week > 3) {
//             sens = 0.20;
//             spec = 0.99;
//         }
//         console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
//         num = sens * score;
//         dem = num + ((1 - spec) * (1 - score));
//         PPV = num / dem;
//         console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
//         return prec(PPV, 4);
//     }
//     function igM_elisa(score, week) {
//         if (week == 1) {
//             sens = 0.40;
//             spec = 0.90;
//         }
//         if (week == 2) {
//             sens = 0.70;
//             spec = 0.90;
//         }
//         if (week == 3) {
//             sens = 0.67;
//             spec = 0.90;
//         }
//         if (week > 3) {
//             sens = 0.57;
//             spec = 0.90;
//         }
//         console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
//         num = sens * score;
//         dem = num + ((1 - spec) * (1 - score));
//         PPV = num / dem;
//         console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
//         return prec(PPV, 4);
//     }
//     function igG_elisa(score, week) {
//         if (week == 1) {
//             sens = 0.21;
//             spec = 0.96;
//         }
//         if (week == 2) {
//             sens = 0.50;
//             spec = 0.96;
//         }
//         if (week == 3) {
//             sens = 0.81;
//             spec = 0.96;
//         }
//         if (week > 3) {
//             sens = 0.57;
//             spec = 0.96;
//         }
//         console.log("PRE-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
//         num = sens * score;
//         dem = num + ((1 - spec) * (1 - score));
//         PPV = num / dem;
//         console.log("POST-PCR123POS:", "week:", week, "spec:", spec, "sens:", sens, "score:", score, "num:", num, "dem:", dem, "PPV:", PPV);
//         return prec(PPV, 4);
//     }
// })();