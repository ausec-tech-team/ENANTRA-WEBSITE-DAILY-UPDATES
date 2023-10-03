// Steps to add a new Slider Carousel:
// 1. copy paste the whole carousel HTML part in the place where you want the slider to be.
// 2. Rename the id of the copy pasted part as slider-transform-n (n - new number).
// 3. create a new instance of the slider class and pass in the id of the new Slider.
// 4. Add the constant to the 'sliderList' array.
// 5. Update the 'onclick' instances to the new instance constant.

class Slider{
    constructor(id) {
        this.id = id;
        this.slideNum = 0;
        this.maxSlides = 2;
        this.slider = document.getElementById(this.id);
    }
    getMaxSlides(){
        const w = window.innerWidth;
        if (w<=500) this.maxSlides = 5;
        else if (w<=1000) this.maxSlides = 3;
        else this.maxSlides = 2;
    }
    moveRight(){
        this.getMaxSlides();
        if (this.slideNum == this.maxSlides) {
            this.slideNum = -1;
        }
        this.slideNum+=1;
        this.slider.style.transform = `translateX(-${this.slideNum*100}%)`;
    }
    
    moveLeft(){
        this.getMaxSlides();
        if (this.slideNum == -1 | this.slideNum == 0) {
            this.slideNum = this.maxSlides+1;
        }
        this.slideNum-=1;
        this.slider.style.transform = `translateX(-${this.slideNum*100}%)`;
    }

}

const s1 = new Slider("slider-transform-1");
const s2 = new Slider("slider-transform-2");
const s3 = new Slider("slider-transform-3");

const sliderList = [s1,s2,s3];
window.addEventListener("resize", () => {
    sliderList.forEach(obj => {
        obj.slideNum = -1;
        obj.moveRight();
        obj.moveLeft();
    });
});