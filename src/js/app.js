import Swiper, { Autoplay, EffectFade, EffectFlip, Navigation, Pagination, Scrollbar } from 'swiper';
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


window.addEventListener('load', ()=>{
  preloader.classList.add('hide')
  if(preloader.classList.contains('hide')){
    document.body.style.overflow = 'auto';
  }
})

const headerWrapper = document.querySelector('.burger__wrapper');
const headerBurger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

headerWrapper.addEventListener('click',()=>{
    headerWrapper.classList.toggle('active')
    headerBurger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('lock')
    console.log(1);
})

const link = document.querySelectorAll('.nav-list');

link.forEach(menulink =>{
    menulink.addEventListener('click',(e)=>{
        headerWrapper.classList.remove('active')
        headerBurger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('lock')
    })
})




// init Swiper:
// Swiper.use([Navigation, Pagination,Scrollbar,Autoplay,EffectFlip]);

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     speed:900,
//     effect: "flip",
//         grabCursor: true,
//     simulateTouch:true,
//       touchRatio:1,
//       touchAngle:45,
//       grabCursor:true,
//       slideToClickedSlide:true,
//       autoHeight:true,
//       centeredSlides:true,

//       keyboard:{
//         enabled:true,
//         onlyInViewport:true,
//         pageUpDown:true,
//       },
   
//     autoplay: {
//       delay: 3500,
//       stopOnLastSlide:true,
//       disableOnInteraction: false
//     },

//      navigation: {
//                         nextEl: '.custom-next',
//                         prevEl: '.custom-prev',
//                 },
//                 scrollbar: {
//                     el: '.swiper-scrollbar',
//                     draggable: true,
//                   },
//   });
