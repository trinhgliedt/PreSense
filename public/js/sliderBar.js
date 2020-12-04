
    
// Slider bar for PPV and NPV
{/* <div id='my-slider'></div> */}
$(".scoreField").change(function (){
    var numb = null;
    if ($('input[name="ppv"]').val().slice(5,6) === "%") {
        numb = parseFloat($('input[name="ppv"]').val().slice(0,5));
    }
    else if ($('input[name="npv"]').val().slice(5,6) === "%") {
        numb = parseFloat($('input[name="npv"]').val().slice(0,5));
    }

    console.log("--------------numb: ", numb);
    class Slider {
    constructor(elementId) {
    this.el = document.getElementById(elementId);
    }
    render(value) {
    const html = `
    <div class="slidecontainer">
        <input type="range" min="0" max="100" value="${ value }" class="slider1">
    </div>
    
    `;
    this.el.innerHTML = html;
    }
    }
    const mySlider = new Slider('my-slider');
    mySlider.render(numb);
     
    })