var logoTop = $('.logo').offset().top;
var shopNowTop = $('.shopnow').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= logoTop) {
      $('.logoAppear').css({
        opacity:'1'
      });
      $('.logo').css({
        opacity:'0'
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
