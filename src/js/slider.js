export function initSlider() {
  const sliders = document.querySelectorAll('.swiper');

  sliders.forEach(slider => {
    const isHowToPlaySlider = slider.classList.contains('how-to-play-slider');
    const isReviewsSlider = slider.classList.contains('reviews-slider');

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 24,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: false,
      initialSlide: 0,
      on: {
        slideChange: function () {
          if (this.isBeginning) {
            this.navigation.prevEl.style.display = 'none';
          } else {
            this.navigation.prevEl.style.display = 'block';
          }

          if (this.isEnd) {
            this.navigation.nextEl.style.display = 'none';
          } else {
            this.navigation.nextEl.style.display = 'block';
          }
        },
      },
      breakpoints: isHowToPlaySlider
        ? {
            320: {
              slidesPerView: 1.1,
              spaceBetween: 16,
              centeredSlides: true,
            },
          }
        : isReviewsSlider
        ? {
            320: {
              slidesPerView: 1.23,
              spaceBetween: 16,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 4,
              slidesOffsetBefore: 72,
              slidesOffsetAfter: 900,
            },
          }
        : {
            320: {
              slidesPerView: 1.23,
              spaceBetween: 16,
              centeredSlides: true,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
            },
            1440: {
              slidesPerView: 3,
              slidesOffsetBefore: 72,
              slidesOffsetAfter: 500,
            },
          },
    });

    if (swiper.isBeginning) {
      swiper.navigation.prevEl.style.display = 'none';
    }
  });
}
