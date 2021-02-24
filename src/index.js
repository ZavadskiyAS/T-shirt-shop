import './styles.css';

const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    console.log('width :>> ', width);
}
init();