export function initSlider() {
  const sliders = document.querySelectorAll('.swiper');

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
      breakpoints: {
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
          slidesOffsetBefore: 72,
          slidesOffsetAfter: 72,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 16,
          slidesOffsetBefore: 16,
          slidesOffsetAfter: 16,
        },
      },
    });

    if (swiper.isBeginning) {
      swiper.navigation.prevEl.style.display = 'none';
    }
  });
}
