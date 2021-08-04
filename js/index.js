let close = $(".overNav").outerWidth(true);
$(".close").click(function(){
    if( $(".overNav").css("left") == "0px"){
        $(".overNav").animate({"left":-close},1000);
        $(".overNav").fadeOut();
        $('body').css({overflow: 'auto'});
    }else{
        $(".overNav").animate({"left":"0px"},1000)
    }

});
$(".togle").click(function(){
    $(".overNav").fadeIn();
    $(".overNav").animate({"left":"0px"},500);
    $('body').css({overflow: 'hidden'});
});

//////////////////////////////////////// slider resize /////////////////////////////////////// 

////////////////// عشان لو العميل عمل تحجيم بايده//////////////////////
  window.addEventListener("resize", myScript);
 function myScript(){
  if(window.innerWidth < 767) {
    document.getElementById("remove1").classList.remove("class","w-100");
    document.getElementById("remove2").classList.remove("class","w-100");

   }else{
     document.getElementById("remove1").classList.add("w-100");
     document.getElementById("remove2").classList.add("w-100");

   }
  }

////////////////// عشان لو فتح من شاشه صغيره علي طول//////////////////////
 
   if(window.innerWidth < 767) {
     document.getElementById("remove1").classList.remove("class","w-100");
     document.getElementById("remove2").classList.remove("class","w-100");
 
    }else{
      document.getElementById("remove1").classList.add("w-100");
      document.getElementById("remove2").classList.add("w-100");
 
    }
   
  //////////////////////////////////////////////////////////////////

  /////////////////////////////////  عشان لما اهمل هوفر علي السوشيال الي في البار الي بيطلع من الجنب 




    // const swiper = new Swiper('.swiper-container', {
    //     // Optional parameters
    //     direction: 'vertical',
    //     loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   });
////////////////////////////////////////////////////////////////////////////////////
$(".product .list-food li").click(function(){
 
  $(this).addClass("active-li").siblings().removeClass("active-li")
})

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:6000,
  animateIn:true,
  nav:true,
  // dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});

$(".lds-ring div").fadeOut(3000,
  function () {
      $(this).parent().fadeOut(3000,
          function () {
              $(this).remove();
          });
  });

          ////////////////// عشان الاسكرول يختفي اثناء الاسبينر مايخلص
  $('body').css({
    overflow: 'hidden'
  });
  setTimeout(function(){
    $('.lds-ring div').fadeOut('slow', function(){
      $('body').css({
        overflow: 'auto'
      });
    });
  }, 3000);

  $(window).scroll(function () {
    var win = $(this).scrollTop();
    if (win > 700) {
        $(".up").fadeIn(1000);

    } else {
        $(".up").fadeOut(1000);
    }
});
$(".up").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000)
});


$( "#show-option" ).tooltip({
  show: {
    effect: "slideDown",
    delay: 100
  }
});
$( "#hide-option" ).tooltip({
  hide: {
    effect: "explode",
    delay: 100
  }
});
$( "#open-event" ).tooltip({
  show: null,
  position: {
    my: "left top",
    at: "left bottom"
  },
  open: function( event, ui ) {
    ui.tooltip.animate({ top: ui.tooltip.position().top + 50 }, "fast" );
  }
});
