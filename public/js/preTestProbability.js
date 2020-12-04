// fieldname42: total score

$(".scoreField").change(function(){
    var score = $('input[name="totalScore"]').val();
    var preTestProbability;
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
});