
//-----------------------------------------------fliter-------------------------//

$(window).on('load', function () {
    $(".flow_filter").isotope({
        itemSelector: '.card',
        layoutMode: 'fitRows'
    });
  });
  
  $(".fliter_head ul li a").click(function () {
    $(".fliter_head ul li a").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $(".flow_filter").isotope({
        filter: selector
    });
    return false;
  });
  
  



  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  const swiperly = new Swiper('.slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  