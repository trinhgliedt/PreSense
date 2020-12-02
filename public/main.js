$('#aboutLink').click(function(){
    $(this).parent().find('.narbarLink').css('border', '1px solid gray');
    $(this).parent().find('.narbarLink').css('background-image', 'linear-gradient(to bottom right, rgb(170, 170, 170), rgba(236, 236, 232, 0.781))');
    $(this).css('background-image', 'linear-gradient(to bottom right, rgb(245, 245, 245), rgba(255, 255, 255, 0.993))');
    $(this).css('border-bottom', '1px solid  rgb(255, 255, 255)');
    $('#about').show();
    $('#tool').hide();
    $('#tutorial').hide();
  });
$('#toolLink').click(function(){
  $(this).parent().find('.narbarLink').css('border', '1px solid gray');
  $(this).parent().find('.narbarLink').css('background-image', 'linear-gradient(to bottom right, rgb(170, 170, 170), rgba(236, 236, 232, 0.781))');
  $(this).css('background-image', 'linear-gradient(to bottom right, rgb(245, 245, 245), rgba(255, 255, 255, 0.993))');
  $(this).css('border-bottom', '1px solid  rgb(255, 255, 255)');
  $('#about').hide();
  $('#tool').show();
  $('#tutorial').hide();
});
$('#tutorialLink').click(function(){
  $(this).parent().find('.narbarLink').css('border', '1px solid gray');
  $(this).parent().find('.narbarLink').css('background-image', 'linear-gradient(to bottom right, rgb(170, 170, 170), rgba(236, 236, 232, 0.781))');
  $(this).css('background-image', 'linear-gradient(to bottom right, rgb(245, 245, 245), rgba(255, 255, 255, 0.993))');
  $(this).css('border-bottom', '1px solid  rgb(255, 255, 255)');
  $('#about').hide();
  $('#tool').hide();
  $('#tutorial').show();
});

$('#testType').on('change', function() {
    if ( this.value === 'pcr')
    {
        console.log("in pcr");
      $(".goalPCR").show();
      $(".goalIgg").hide();
      $(".goalIgm").hide();
    }
    
    else if ( this.value === 'igg')
    {
        console.log("in igg")

      $(".goalPCR").hide();
      $(".goalIgg").show();
      $(".goalIgm").hide();
    }
    else if ( this.value === 'igm')
    {
        console.log("in igM");
      $(".goalPCR").hide();
      $(".goalIgg").hide();
      $(".goalIgm").show();
    }
  });
  $('#preTest').click(function(){
    $(".goalTestType").hide();
    $(".goalPCR").hide();
    $(".goalIgg").hide();
    $(".goalIgm").hide();
    $('#testType option:eq(0)').prop('selected', true)
  });
  $('#postTest').click(function(){
    $(".goalTestType").show();

  });

  $('#symptomNone').click(function(){
    $(".hasSymptom").prop( "checked", false );

  });
  $('.hasSymptom').click(function(){
    $("#symptomNone").prop( "checked", false );

  });