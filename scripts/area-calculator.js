function calculateTriangleArea(){
    // get triangle base Value

    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);
    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base* height;
    console.log(area);

    // show triangle area

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
function calculateRectangleArea(){
    // get rectangle Width Value
    const widthField = document.getElementById('rectangle-width');
    const WidthValueText = widthField.value;
    const width = parseFloat(WidthValueText);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // calculate area

    const area =width * length
    
    // show rectangle Area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}


// reuseable function--> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputVlaue('Parallelogram-base');
    // console.log(base);

    const height = getInputVlaue('Parallelogram-height');
    // console.log(height);

    const area = base * height;
    setElementInnerText ('Parallelogram-area', area);
}
function calculateEllipseArea(){
    const majorRadious = getInputVlaue('ellipse-major-radious');
    const minorRadious = getInputVlaue('ellipse-minor-radious');
     const area = 3.14 * majorRadious * minorRadious;
     const areaTwoDecimal = area.toFixed(2);
     setElementInnerText('ellipse-area',area);
}
// reusable get input value field in number
function getInputVlaue(fieldId){
   const inputField = document.getElementById(fieldId);
   const inputValueText = inputField.value;
   const value = parseFloat(inputValueText);
   return value;
}
// reuseable set span or p div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}