let auto = true;
let timeInterval = 3000

const slides = document.querySelectorAll('.slide')

let nextSlider = () => {
    let currentSlide = document.querySelector('.current-slide')
    let currentImage = document.querySelector('.current-image')
    if(currentSlide.nextElementSibling) {

        currentSlide.firstElementChild.classList.remove('current-image') 
        currentSlide.classList.remove('current-slide') 
        currentSlide.nextElementSibling.classList.add('current-slide')
        currentSlide = document.querySelector('.current-slide')
        currentSlide.firstElementChild.classList.add('current-image')
    } else {

        currentImage.classList.remove('current-image') 
        currentSlide.classList.remove('current-slide')
        slides[0].classList.add('current-slide')
        slides[0].firstElementChild.classList.add('current-image')
    }
}

setInterval(nextSlider, timeInterval)