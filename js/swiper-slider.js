let verticalSliderHeight = document.querySelector('.vertical-imgs-slider');
let parentHeight = document.querySelector('.welcome');

let mobileSliderAllSlide = document.querySelector('.mobile-slider-imgs__total');
let mobileSliderCurrentSlide = document.querySelector('.mobile-slider-imgs__current');

let sliderHeight;
sliderHeight = parentHeight.clientHeight;
verticalSliderHeight.style.height = sliderHeight + 'px';

let verticalSlider = new Swiper('.vertical-imgs-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  direction: 'vertical',
  preloadImages: false,
  lazy: {
    loadOntransitionStart: true,
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  on: {
    resize: function () {
      sliderHeight = parentHeight.clientHeight;
      verticalSliderHeight.style.height = sliderHeight + 'px';
    },
  },
  autoplay: {
    delay: 2500,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
});

let mobileSlider = new Swiper('.mobile-slider-imgs', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  preloadImages: true,
  lazy: {
    loadOntransitionStart: true,
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  spaceBetween: 20,
  observeParents: true,
  observer: true,
  observeSliderChildren: true,
  on: {
    slideChange: function () {
      let currentslide = ++mobileSlider.realIndex;
      mobileSliderCurrentSlide.textContent = currentslide;
    },
  },
});

mobileSliderAllSlide.textContent = mobileSlider.slides.length;

let faceSlider = new Swiper('.face-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,

  freeMode: true,

  watchOverflow: true,

  breakpoints: {
    570: {
      slidesPerView: 2,
    },
    870: {
      slidesPerView: 3,
    },
  },
});
