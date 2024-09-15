import { initFaq } from './js/faq.js';
import { initSlider } from './js/slider.js';
import { initReviewsSlider } from './js/reviews.js';

import './js/mobile-menu.js';
import './js/scroll-reload.js';
import './js/play-video.js';

document.addEventListener('DOMContentLoaded', () => {
  initFaq();
  initSlider();
  initReviewsSlider();
});
