import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

const splider = new Splide('.splide', {
  arrows: false,
  pagination: false,
  i18n: {
    prev: 'Перейти к предыдущему слайду',
    next: 'Перейти к следующему слайду',
    slideLabel: '%s из %s',
    carousel: 'слайдер',
    slide: 'слайд',
  },
  classes: {
    pagination: 'splide__pagination feedback-slider__pagination',
    page: 'splide__pagination__page feedback-slider__pagination-button',
  },
});

splider.mount();



