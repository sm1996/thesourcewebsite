
$(window).scroll(function() {
  $('.logoAppear').css({
    opacity:'0',
    pointer-events:'none'
  });

  $('.logo').css({
    opacity:'1'
  });

  var logoTop = $('.logo').offset().top;
  if ($(window).width()>990){
      var triggerTop = $('.prodAppear').offset().top;
  }else{
      var triggerTop = $('.prodAppearMob').offset().top;
  }
  var currentScroll = $(window).scrollTop();
    if (currentScroll >= logoTop) {
      $('.logo').css({
        opacity:'0',
        pointer-events:'none'
      });
      $('.logoAppear').css({
        opacity:'1'
      });
    }
    else{
      $('.logoAppear').css({
        opacity:'0',
        pointer-events:'none'
      });
      $('.logo').css({
        opacity:'1'
      });
    }

    if (currentScroll >= logoTop && currentScroll<=triggerTop) {

        $('.deskNav').css({
          opacity:'1'
        });

    } else {
        $('.deskNav').css({
          opacity:'0',
          pointer-events:'none'
        });
        $('.logoAppear').css({
          opacity:'0',
          pointer-events:'none'
        });
    }
});
