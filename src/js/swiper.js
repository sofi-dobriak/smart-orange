import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const mySwiper = new Swiper('.hero-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev',
    },
  });

  const footerSwiper = new Swiper('.footer-swiper', {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },
  });
});
