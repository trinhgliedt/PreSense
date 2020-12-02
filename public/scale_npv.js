(function(){
    var numb = fieldname111;
    class Slider2 {
    constructor(elementId) {
    this.el = document.getElementById(elementId);
    }
    render(value) {
    const html = `
    <div class="slidecontainer2">
        <input type="range" min="0" max="100" value="${ value }" class="slider2">
    </div>
    <p id="demo">Negative Predictive Value: ${Math.trunc(value)}%</p>
    `;
    this.el.innerHTML = html;
    }
    }
    const mySlider2 = new Slider2('my-slider2');
    mySlider2.render(numb);
    })();
    