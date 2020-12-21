const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const maxSlide = Array.from(document.querySelectorAll('.card')).length - 1;
let currentSlide = 0;

const updateSlide = (e) => {
    currentSlide += e.target.classList[0] === 'next' ? 1 : -1;
    document.querySelector('.gallery').style.transform = `translateX(-${currentSlide * 220}px)`;
    updateBtn(currentSlide);
};

const updateBtn = (currentSlide) => {
    switch (currentSlide) {
        case 0:
            disableBtn(previousBtn);
            enableBtn(nextBtn);
            break;

        case maxSlide:
            enableBtn(previousBtn);
            disableBtn(nextBtn);
            break;

        default:
            enableBtn(previousBtn);
            enableBtn(nextBtn);
    }
};

const disableBtn = (btn) => {
    btn.classList.add('btn-disable');
    btn.removeEventListener('click', updateSlide);
};

const enableBtn = (btn) => {
    btn.classList.remove('btn-disable');
    btn.addEventListener('click', updateSlide);
};

// Initial call
updateBtn(currentSlide);
