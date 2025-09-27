import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const mySwiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev',
    },
  });
});
