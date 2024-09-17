export function initReviewsSlider() {
  const reviewSwiper = new Swiper('.reviews-swiper', {
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
          document.querySelector('.swiper-button-prev').style.display = 'none';
        } else {
          document.querySelector('.swiper-button-prev').style.display = 'block';
        }

        if (this.isEnd) {
          document.querySelector('.swiper-button-next').style.display = 'none';
        } else {
          document.querySelector('.swiper-button-next').style.display = 'block';
        }
      },
    },
    breakpoints: {
      1440: {
        slidesPerView: 3.7,
        spaceBetween: 24,
        slidesOffsetBefore: 72,
        slidesOffsetAfter: 300,
      },
      320: {
        slidesPerView: 1.4,
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 250,
      },
    },
  });

  if (reviewSwiper.isBeginning) {
    document.querySelector('.swiper-button-prev').style.display = 'none';
  }
}
