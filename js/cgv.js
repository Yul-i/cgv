$(function(){

    // 슬라이드 
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
          },
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        loof:true,
        effect:'fade'
      });
});