const nameLabel = document.getElementById('name-label')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')


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

// textarea.addEventListener('focus', labelInHander)
// textarea.addEventListener('blur', labelOutHandler)

// inputs[0].addEventListener('input', errorCheck)
// inputs[1].addEventListener('input', errorCheck)


//////////////////////////////////////////////////////////////////////////

const lotusPosSVG = document.querySelector('.lotus-svg')
const mainScene = document.querySelector('.main-scene')
const canvas = document.querySelector('canvas')
const canvas2 = document.getElementById('canvas2')

// lotusPosSVG.style.transform = 'scale(1.1)'
// mainScene.style.backgroundImage = 'radial-gradient(transparent, rgba(0, 0, 0, 0.5) 100%)';

// let c = canvas.getContext('2d')
// let c2 = canvas2.getContext('2d')
// canvas.width = mainScene.clientWidth;
// canvas.height = mainScene.clientHeight;
// canvas2.width = mainScene.clientWidth;
// canvas2.height = mainScene.clientHeight;


// var grd = c2.createRadialGradient(canvas.width/2, canvas.height/2, 1, canvas.width/2, canvas.height/2, 100);
// grd.addColorStop(0, "rgba(255,255,255,0.5)");
// grd.addColorStop(1, "transparent");

// Fill with gradient
// c2.fillStyle = grd;

// canvas2.style.zIndex = '110'

// setTimeout(() => {
// c2.fillRect(0,0,canvas.width,canvas.height)
// }, 18000)

function Dot(x, y, rad, col) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.col = col;
    this.radians = 0
    this.velocity = 0.05
    let a = 20

    this.update = () => {
        let z = Math.cos(this.radians) * -1
        let w = Math.sin(this.radians) * -1
        this.radians = this.radians + this.velocity
        this.x = this.x + z * 5;
        this.y = this.y + w * 5;
        this.draw()
    }

    this.draw = () => {
        c.fillStyle = this.col;
        c.strokeStyle = this.col;
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        c.closePath();
        c.fill();
        c.stroke();
    }
}

// let dot = new Dot(canvas.width/2, canvas.height/2, 10, '#2a2a2a');

let loop = () => {
    requestAnimationFrame(loop)
    // c.clearRect(0,0,canvas.width,canvas.height);

    
    dot.update();
}

// setTimeout(()=> {loop()}, 16000)

const inhale = document.querySelector('.in')
const exhale = document.querySelector('.ex')

// inhale.classList.add('inhale')

function animation (delay, duration, elementName, classname, repeat = 0, repeatDelay = 0) {
    this.delay = delay;
    this.duration = duration;
    this.elementName = elementName;
    this.classname = classname;
    this.repeat = repeat;
    this.repeatDelay = repeatDelay;

    this.update = () => {
        setTimeout(() => {
            this.set()
            this.elementName.addEventListener('animationend', () => {
                this.elementName.classList.toggle(`${this.classname}`)
                if(this.repeat > 0) {
                    setTimeout(() => {
                        this.set()
                        this.repeat--;
                    }, this.repeatDelay)
                }
            })
        }, this.delay)
    }

    this.set = () => {
        this.elementName.classList.add(`${this.classname}`)
        this.elementName.style.animationDuration = `${this.duration}s`;
    }
}

// let inhaleAnimation = new animation(1000, 5, inhale, 'inhale')
// inhaleAnimation.update()

// let exhaleAnimation = new animation(6000, 5, exhale, 'exhale')
// exhaleAnimation.update()

let lotusScaleUpAnimation = new animation(1000, 5, lotusPosSVG, 'svg-scale-up')
// lotusScaleUpAnimation.update()

let lotusScaleDownAnimation = new animation(6000, 5, lotusPosSVG, 'svg-scale-down')
// lotusScaleDownAnimation.update()

let addFilter = new animation(12000, 5, lotusPosSVG, 'add-filter')
// addFilter.update()




const landingButton = document.querySelector('.landing-button')
const landing = document.querySelector('.landing')
const body = document.querySelector('body')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
// landingButtonHandler = () => {
//     landingButton.classList.toggle('landing-button-animation')
//     console.log(`fuck yeah`)
// }
// landingButton.addEventListener('mouseover', landingButtonHandler)
// landingButton.addEventListener('mouseout', landingButtonHandler)

landingButton.addEventListener('click', () => {
    landing.classList.add('index1')
})































