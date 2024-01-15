// Start Header Sticky Menu
$(document).ready(function(){
    $(window).on('scroll', function(){
      if ($(window).scrollTop()) {
       $("header").addClass('header-sticky');
      }else{
        $("header").removeClass('header-sticky');
      }
    });
  });
  // End Header Sticky Menu