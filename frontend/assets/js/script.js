document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.getElementById('prev-button');
    const btnProx = document.getElementById('prox-button');

    let currentSlide = 0;

    function hideSlider() {
        slider.forEach(item => item.classList.remove('on'));
    }

    function showSlider() {
        slider[currentSlide].classList.add('on');
    }

    function proxSlider() {
        hideSlider();
        currentSlide = (currentSlide + 1) % slider.length;
        showSlider();
    }

    function prevSlider() {
        hideSlider();
        currentSlide = (currentSlide - 1 + slider.length) % slider.length;
        showSlider();
    }

    btnProx.addEventListener('click', proxSlider);
    btnPrev.addEventListener('click', prevSlider);

});
