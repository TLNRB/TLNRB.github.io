const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navTwo = document.querySelector('.nav-two');
    const worldIcon = document.querySelector('.language-selector');
    const languages = document.querySelector('.lang-flag');
    const compBlur = document.querySelector('.comp');
    const kidsBlur = document.querySelector('.kids');
    const formBlur = document.querySelector('.list');
    const footerBlur = document.querySelector('.downhorn');

    //Toggle Navs
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navTwo.classList.toggle('nav-active');

        //Burger Animation
        burger.classList.toggle('burger-active');

        //Background Blur
        compBlur.classList.toggle('blur-active');
        kidsBlur.classList.toggle('blur-active');
        formBlur.classList.toggle('blur-active');
        footerBlur.classList.toggle('blur-active');
    });

    //Toggle Flags
    worldIcon.addEventListener('click', () => {
        languages.classList.toggle('lang-flag-active');
    });
}

navSlide();


