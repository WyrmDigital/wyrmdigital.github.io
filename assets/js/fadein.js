const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('fadein-show');
        }
    })
})

const fadeinElements = document.querySelectorAll('.fadein-appear, .fadein-move');
fadeinElements.forEach((el) => observer.observe(el) );