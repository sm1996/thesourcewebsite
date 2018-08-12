$(window).scroll(function() {
  var triggerTop = $('.triggerAppear').offset().top;
  var currentScroll = $(window).scrollTop();
  if ($(window).width()>990){
    if (currentScroll < triggerTop) {
      $('.deskNav').css({
        opacity:'1',
        display:'block'
      });
    }
    else{
      $('.deskNav').css({
        opacity:'0',
        display:'none'
      });
    }
  }
});
