const slidesA = document.querySelector("#membersulimg");
const slides = Array.from(slidesA.children);
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");
const slideWidth = slides[0].getBoundingClientRect().width;
var currentIndex = 0;
// slides[0].style.left = 0;
// slides[1].style.left = slideWidth + 'px';
slides.forEach(element => {
    element.style.visibility = "hidden";
})
slides[0].style.visibility = "visible";
function changeSlide(x) {
    if ((x == 1) && (currentIndex<17)) {
        slides.forEach(element => {
            element.style.visibility = "hidden";
        })
        currentIndex+=1;
        slides[currentIndex].style.visibility = "visible";
    }else if ((x == -1) && (currentIndex>0)){
        slides.forEach(element => {
            element.style.visibility = "hidden";
        })
        currentIndex-=1;
        slides[currentIndex].style.visibility = "visible";  
    }
}