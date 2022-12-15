const navSlide = () => {
    const worldIcon = document.querySelector('.language-selector');
    const languages = document.querySelector('.lang-flag');



    //Toggle Flags
    worldIcon.addEventListener('click', () => {
        languages.classList.toggle('lang-flag-active');
    });
}

navSlide();