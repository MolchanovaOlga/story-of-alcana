import { initFaq } from './js/faq.js';
import { initSlider } from './js/slider.js';
import { initAboutTheGame } from './js/about-the-game.js';
import { initSectionTitleAnimation } from './js/animate-section-title.js';
import { initCounterAnimation } from './js/counter-animation.js';

import './js/mobile-menu.js';
import './js/scroll-reload.js';
import './js/play-video.js';

document.addEventListener('DOMContentLoaded', () => {
  initFaq();
  initSlider();
  initAboutTheGame();
  initSectionTitleAnimation();
  initCounterAnimation();
});
