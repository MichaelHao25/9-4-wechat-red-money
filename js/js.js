'use strict';
var mySwiper = new Swiper('.header .swiper-container', {
    autoplay: 3000,
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
})
$('.dailixiaji-page .main .list .child .title').on('click',function() {
    $(this).toggleClass('active').siblings().slideToggle();
})