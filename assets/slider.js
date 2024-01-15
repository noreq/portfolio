var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    direction: 'horizontal',
    loop: true,
    speed: 760,
    centerSlide: true,
    grabCursor: true,
    effect:'slider',
    autoplay: {
        delay:4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        dynamicBullets:false,
    }
    });


    const swiperContainer = document.querySelector('.slide-content');


    swiperContainer.addEventListener('mouseenter', function() {
    swiper.autoplay.stop();
    });


    swiperContainer.addEventListener('mouseleave', function() {
    swiper.autoplay.start();
    });