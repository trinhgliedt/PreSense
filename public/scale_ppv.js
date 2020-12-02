(function(){
    var numb = fieldname52;
    class Slider {
    constructor(elementId) {
    this.el = document.getElementById(elementId);
    }
    render(value) {
    const html = `
    <div class="slidecontainer">
        <input type="range" min="0" max="100" value="${ value }" class="slider1">
    </div>
    <p id="demo">Positive Predictive Value: ${Math.trunc(value)}%</p>
    `;
    this.el.innerHTML = html;
    }
    }
    const mySlider = new Slider('my-slider');
    mySlider.render(numb);
    })();
    