//Animation of texts in home section
const feet = document.querySelector('.feet');
const apart = document.querySelector('.apart');

window.addEventListener('load', (e) => {
    apart.classList.add('apart1');
    feet.classList.add('feet1');
})

//Guidelines Animation
const guidelinesHeading = document.getElementById('guidelines-h3')
const cards = document.querySelectorAll('.cards');
const backs = document.querySelectorAll('.back');
const fronts = document.querySelectorAll('.front');


//Function to trigger actions when at some specific height
const guidelinesSection = document.getElementById('guidelines')
getHeight = () => {

    let top = guidelinesSection.getBoundingClientRect().top
    let height = guidelinesSection.getBoundingClientRect().height

    // console.log(`top: ${top}`)
    // console.log(bottom)

    if( top <= 0 && top > height * -1) {
        let time = 4.5
        guidelinesHeading.classList.add('opacity-zero');
        cards.forEach((card) => {
            card.classList.add('opacity-one')
        })
        backs.forEach((back) => {
            back.classList.add('opacity-one')
            back.style.transform = 'rotateY(360deg)'
            back.style.transition = `opacity 1s linear 3.5s, transform 1s ease ${time}s`
            time = time + 0.8
        })

        time = 4.5 
        fronts.forEach((front) => {
            front.style.transform = 'rotateY(180deg)'
            front.style.transition = `transform 1s ease ${time}s`
            time = time + 0.8
        })
    } else {
        guidelinesHeading.classList.remove('opacity-zero');
        cards.forEach((card) => {
            card.classList.remove('opacity-one')
        })
        backs.forEach((back) => {
            back.style.transform = 'rotateY(180deg)'
            back.style.transition = `none`
        })
        fronts.forEach((front) => {
            front.style.transform = 'rotateY(0)'
            front.style.transition = `none`
        })
    }

}

window.addEventListener('scroll', getHeight)