import Swiper, {
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectCreative,
  EffectFade,
  EffectFlip,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

window.addEventListener("load", () => {
  preloader.classList.add("hide");
  if (preloader.classList.contains("hide")) {
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  const headerWrapper = document.querySelector(".burger__wrapper");
  const headerBurger = document.querySelector(".header__burger");
  const nav = document.querySelector(".nav");
  const body = document.querySelector("body");

  headerWrapper.addEventListener("click", () => {
    headerWrapper.classList.toggle("active");
    headerBurger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
    console.log(1);
  });

  const link = document.querySelectorAll(".nav-list");

  link.forEach((menulink) => {
    menulink.addEventListener("click", (e) => {
      headerWrapper.classList.remove("active");
      headerBurger.classList.remove("active");
      nav.classList.remove("active");
      body.classList.remove("lock");
    });
  });

  // init Swiper:
  Swiper.use([
    Navigation,
    Pagination,
    Scrollbar,
    Autoplay,
    EffectFlip,
    Controller,
    EffectCoverflow,
    EffectCreative,
  ]);
  // let swiper = new Swiper(".swiper-left", {
  //   grabCursor: true,
  //   effect: "creative",
  //   creativeEffect: {
  //     prev: {
  //       shadow: true,
  //       translate: [0, 0, -400],
  //     },
  //     next: {
  //       translate: ["100%", 0, 0],
  //     },
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "progressbar",
  //   },
  //   navigation: {
  //     nextEl: ".custom-next",
  //     prevEl: ".custom-prev",
  //   },
  // });

  let swiper_img = new Swiper(".swiper-right", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  });

  // swiper.controller.control = swiper_img;
  // swiper_img.controller.control = swiper;
});
