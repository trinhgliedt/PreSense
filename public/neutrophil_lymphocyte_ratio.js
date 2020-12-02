function calculateRatio(){
    var neutrophil = parseFloat($('input[name="neutrophil"]').val());
    var lymphocyte = parseFloat($('input[name="lymphocyte"]').val());
    var ratio = neutrophil/lymphocyte;
    $('input[name="nLratio"]').val(ratio);
}

function checkAndCalculateRatio(){
    if (parseFloat($('input[name="lymphocyte"]').val()) > 0 && parseFloat($('input[name="neutrophil"]').val()) >= 0 ){
        calculateRatio();
    }
    if (parseFloat($('input[name="lymphocyte"]').val()) > 0 && $('input[name="neutrophil"]').val().length === 0 ){
        $('input[name="nLratio"]').val(0);
    }
    if ($('input[name="lymphocyte"]').val().length === 0 && $('input[name="neutrophil"]').val().length === 0){
        $('input[name="nLratio"]').val("");
    }
    if ($('input[name="lymphocyte"]').val().length === 0 && parseFloat($('input[name="neutrophil"]').val()) > 0){
        $('input[name="nLratio"]').val("Need input for Lymphocyte (count)");

    }
    if (parseFloat($('input[name="lymphocyte"]').val()) <= 0 && parseFloat($('input[name="neutrophil"]').val()) > 0){
        $('input[name="nLratio"]').val("Lymphocyte (count) must be > 0");

    }
}
$('#lymphocyte').on('change', function() {
    checkAndCalculateRatio();
});

$('#neutrophil').on('change', function() {
    checkAndCalculateRatio();
});
