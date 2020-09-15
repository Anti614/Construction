$(document).ready(function(){
      let nav = $("#collapsibleNavbar");
      
      $(".navbar a").click(function() {
          
            $("body,html").animate({
             scrollTop:$("#" + $(this).data('value')).offset().top - $("#header").height()
            }, 700);

            nav.removeClass("show");
     });

      $('#carouselBanner').carousel({
            interval: false
      });
      
});