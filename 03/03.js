window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const dayNights = document.querySelectorAll('.day-night');
    const dayNightsContainer = document.querySelector('.fixed-corrector-1')
    const body = document.querySelector('body')

    linkHighlight = (e) => {
        links.forEach((link) => {
            link.classList.remove('link-current')
        })
        e.target.classList.add('link-current')
    }

    links.forEach((link) => {
        link.addEventListener('click', linkHighlight);
    })

    dayNightHandler = (e) => {
        dayNights.forEach((dayNight) => {
            dayNight.classList.toggle('no-display')
        })
        links.forEach((link) => {
            link.classList.toggle('link-color')
        })

        body.classList.toggle('body-background')
    }

    dayNightsContainer.addEventListener('click', dayNightHandler)

})