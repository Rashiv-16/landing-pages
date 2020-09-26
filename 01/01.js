const nameLabel = document.getElementById('name-label')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const form = document.querySelector('form')

form.addEventListener('click', (e) => {
    e.preventDefault()
})

labelInHander = (e) => {
    e.target.previousElementSibling.style.transform = 'translateY(0)'
}

labelOutHandler = (e) => {
    if(e.target.value.trim().length <= 0) e.target.previousElementSibling.style.transform = 'translateY(28px)';
}

errorCheck = (e) => {
    if(e.target.checkValidity() === false || e.target.value === '' ) {
        e.target.style.borderBottom = '2px solid red'
    } else e.target.style.borderBottom = '2px solid rgb(0, 173, 0)'

}

inputs.forEach(input => {
    input.addEventListener('focus', labelInHander)
    input.addEventListener('blur', labelOutHandler)
})

textarea.addEventListener('focus', labelInHander)
textarea.addEventListener('blur', labelOutHandler)

//////////////////////////////////////////////////////////////////////////

setTimeout(() => {
    document.querySelector('.main-text').style.transform = "translateX(0)"
}, 500)

inputs[0].addEventListener('input', errorCheck)
inputs[1].addEventListener('input', errorCheck)


//////////////////////////////////////////////////////////////////////////

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let photoGallery = document.querySelector('.photo-gallery');
let indicatorBox = document.querySelectorAll('.indicator-box > div');
let slides = document.querySelectorAll('.slide');
let picCounter = 1
let boxCounter = 1

let nextBtnHandler = () => {
    console.log(boxCounter)
    console.log(slides)
    if (boxCounter > 6) {
        boxCounter = 0
    }
    
    slides.forEach((slide) => {
        slide.classList.remove('current')
    })
    slides[boxCounter].classList.add('current')
    
    indicatorBox.forEach((box) => {
        box.classList.remove('photo-active')
    })
    indicatorBox[boxCounter].classList.add('photo-active')
    boxCounter++
}
nextBtn.addEventListener('click', nextBtnHandler)
prevBtn.addEventListener('click', (e) => {
    boxCounter--
    if (boxCounter < 0) {
        boxCounter = 6
    }

    slides.forEach((slide) => {
        slide.classList.remove('current')
    })
    slides[boxCounter].classList.add('current')

    indicatorBox.forEach((box) => {
        box.classList.remove('photo-active')
    })
    indicatorBox[boxCounter].classList.add('photo-active')
})

let playContainer = document.querySelector('.play')
let playIcon = document.querySelector('.play-icon')

playIcon.addEventListener('click', () => {
    playContainer.style.opacity = '0';
    setTimeout(()=>{
        playContainer.style.display = 'none';
    }, 1000)
    setInterval(() => {
        nextBtnHandler()
    }, 3000);

})

const dp = document.querySelectorAll('.dp')
let dpSourceArray = []
let flag = 0

dpGenerator = async () => {
    let res = await fetch('https://randomuser.me/api/?results=6');
    let data = await res.json();
    data.results.forEach((result) => {
        dp[flag].style.backgroundImage = `url(${result.picture.large})`;
        dp[flag].setAttribute('title', `${result.name.first} ${result.name.last}`)
        flag++
    })
}

dpGenerator();


























