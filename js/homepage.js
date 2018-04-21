$(window).scroll(function() {
  $('.logoAppear').css({
    opacity:'0'
  });

  $('.logo').css({
    opacity:'1'
  });

  var logoTop = $('.logo').offset().top;
  if ($(window).width()>990){
      var shopNowTop = $('.shopnow').offset().top;
  }else{
      var shopNowTop = $('.shopNowMob').offset().top;
  }
  var currentScroll = $(window).scrollTop();
    if (currentScroll >= logoTop) {
      $('.logo').css({
        opacity:'0'
      });
      $('.logoAppear').css({
        opacity:'1'
      });
    }
    else{
      $('.logoAppear').css({
        opacity:'0'
      });
      $('.logo').css({
        opacity:'1'
      });
    }

    if (currentScroll >= logoTop && currentScroll<=shopNowTop) {

        $('.deskNav').css({
          opacity:'1'
        });

    } else {
        $('.deskNav').css({
          opacity:'0'
        });
        $('.logoAppear').css({
          opacity:'0'
        });
    }
});
