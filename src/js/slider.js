export function initSlider() {
  const swiper = new Swiper('.swiper', {
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
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesOffsetBefore: 72,
        slidesOffsetAfter: 72,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
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
    document.querySelector('.swiper-button-prev').style.display = 'none';
  }
}
