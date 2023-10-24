
const rangeValue=document.querySelector('#range-value');
const range=document.querySelector('input[type="range"]');
const fillArea=document.querySelector('.fill-area');

function handleMouseMove(value){
    const hueRotate="hue-rotate("+value+"deg)";
    rangeValue.textContent=value;
    rangeValue.style.filter=hueRotate;
    range.style.filter=hueRotate;
    fillArea.style.left=value+'vw';
    fillArea.style.width=100-value+'vw';
    fillArea.style.filter=hueRotate;
}