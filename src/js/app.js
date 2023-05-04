import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp();

import Swiper, { Navigation, Scrollbar } from 'swiper';


const swiper = new Swiper('.trainers_content', {
    modules: [Navigation, Scrollbar],
    // Optional parameters
    slidesPerView: 'auto',
    slidesPerView: 4,
    spaceBetween: 60,
    direction: 'horizontal',

    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.trainers_slider-btn--next',
      prevEl: '.trainers_slider-btn--prev',
      clickable: true,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.trainers_scroll',
      dragSize: 260,
      draggable: true,
    },
  });

const iconMenu = document.querySelector('.menu_icon');    // добавление класса для бургер
if (iconMenu){
    const menuBody = document.querySelector('ul.menu_list');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
        })};

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
        
openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})
        