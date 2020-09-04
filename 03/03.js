window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a')

    linkHighlight = (e) => {
        links.forEach((link) => {
            link.classList.remove('link-current')
        })
        e.target.classList.add('link-current')
    }

    links.forEach((link) => {
        link.addEventListener('click', linkHighlight);
    })

    const dayNight = document.querySelectorAll('day-night');
})