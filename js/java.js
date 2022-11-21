const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const classes = document.querySelector('.classes');
  const classLinks = document.querySelector('.class-links');
  const mainHover = document.querySelector('.main-hover');
  
  burger.addEventListener('click', () =>{
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Burger Animation
    burger.classList.toggle('line-active');
  });

  classes.addEventListener('click', () =>{
    //Toggle Classes
    classLinks.classList.toggle('class-links-active');
    classes.classList.toggle('classes-active');
    mainHover.classList.toggle('main-hover-active');
  });
}

navSlide();