const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");
const slider = document.getElementById("slider-transform");

let slideNum = 0;
let maxSlides = 2;

function getMaxSlides(){
    const w = window.innerWidth;
    if (w<=500) maxSlides = 5;
    else if (w<=1000) maxSlides = 3;
    else maxSlides = 2;
}

function moveRight(){
    getMaxSlides();
    if (slideNum == maxSlides) {
        slideNum = -1; //(maxSlides==2)?-1:0;
    }
    slideNum+=1;
    slider.style.transform = `translateX(-${slideNum*100}%)`;
    console.log(slideNum);
}

function moveLeft(){
    getMaxSlides();
    if (slideNum == -1 | slideNum == 0) {
        slideNum = maxSlides+1;
    }
    slideNum-=1;
    slider.style.transform = `translateX(-${slideNum*100}%)`;
    console.log(slideNum);
}

window.addEventListener("resize", () => {
    slideNum = -1;
    moveRight();
    moveLeft();
});