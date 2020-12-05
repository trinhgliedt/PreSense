
$("form").submit(function(e){
    console.log('Submit button is clicked');
    e.preventDefault();
    dbFireStore.collection("formData").add({
        _1_provider_fname : $('input[name="fname"]').val(),
        _1_provider_lname : $('input[name="lname"]').val(),
        _1_provider_email : $('input[name="email"]').val(),
        _1_provider_phone : $('input[name="phone"]').val(),
        _1_provider_organization : $('input[name="organization"]').val(),

        _2_goal_testGoal : $('input[name="testGoal"]:checked').val(),
        _2_goal_testType : $("#testType option:selected").val(),
        _2_goal_pcrResult : $('input[name="pcrResult"]').val(),
        _2_goal_iggResult : $('input[name="iggResult"]').val(),
        _2_goal_igmResult : $('input[name="igmResult"]').val(),

        _3_clinical_dateOfSymptoms : $('input[name="dateOfSymptoms"]').val(),
        _3_clinical_symptomAgeInWeek : $('input[name="symptomAgeInWeek"]').val(),
        _3_clinical_patientAge : $('input[name="patientAge"]').val(),
        _3_clinical_patientZipcode : $('input[name="zipcode"]').val(),
        _3_clinical_patientFips : $('input[name="fips"]').val(),
        _3_clinical_symptomCough : $("#symptomCough").prop("checked"),
        _3_clinical_symptomFever : $("#symptomFever").prop("checked"),
        _3_clinical_symptomGI : $("#symptomGI").prop("checked"),
        _3_clinical_symptomFatigue : $("#symptomFatigue").prop("checked"),
        _3_clinical_symptomTaste : $("#symptomTaste").prop("checked"),
        _3_clinical_symptomNone : $("#symptomNone").prop("checked"),

        _3_goal_exposureProlonged : $('#exposureProlonged').prop("checked"),
        _3_goal_exposureBrief : $('#exposureBrief').prop("checked"),
        _3_goal_exposurePossible : $('#exposurePossible').prop("checked"),

        _4_neu_lym_neutrophil : $('input[name="neutrophil"]').val(),
        _4_neu_lym_lymphocyte : $('input[name="lymphocyte"]').val(),
        _4_neu_lym_nLratio : $('input[name="nLratio"]').val(),
        _4_neu_lym_score : $('input[name="score"]').val(),

        _5_radiography : $("#radiography option:selected").val(),

        _6_result_prevalence : $('input[name="prevalence"]').val(),
        _6_result_prevalenceScore : $('input[name="prevalenceScore"]').val(),
        _6_result_totalScore : $('input[name="totalScore"]').val(),
        _6_result_preTestProbability : $('input[name="preTestProbability"]').val(),
        _6_result_ppv : $('input[name="ppv"]').val(),
        _6_result_npv : $('input[name="npv"]').val(),
        _6_result_testResult : $('input[name="testResult"]').val(),
        _6_result_consideration: document.getElementById("consideration").innerHTML
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Information submitted successfully");
        $('#toolForm').trigger("reset");
        $(".goalTestType").hide();
        $(".goalPCR").hide();
        $(".goalIgg").hide();
        $(".goalIgm").hide();
        $(".hiddenField").hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});