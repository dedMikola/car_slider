const slides = document.querySelectorAll('.slide')

slides.forEach(item => {
    item.addEventListener('click', () => {
        slides.forEach(slide => slide.classList.remove('active'))
        item.classList.add('active')
    })
})