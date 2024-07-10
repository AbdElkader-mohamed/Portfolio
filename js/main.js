$(document).ready(function() {
  /*------
    handel header bg
  ------*/
  $(window).scroll(function() {
    if($(this).scrollTop() >= 200){
      $("header").addClass("dark-bg");
    }else  {
      $("header").removeClass("dark-bg");
    }
  })
  /*------
    handel open nav menu 
  ------*/
  $(".navbar-toggler").click(function() {
    $(this).toggleClass("open");
    $(`#${$(this).data("target")}`).toggleClass("open");
  })
    /*------
    wow effects
  -------*/
  new WOW().init();
  /*------
    popup
  -------*/
  // videos
  $(".popup-video").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });
  /*------
    Scroll
  -------*/
  $(window).scroll(function () {
    if (this.scrollY >= 600) {
      $(".scroll-icon").fadeIn();
    } else {
      $(".scroll-icon").fadeOut();
    }
  });
  $(".scroll-icon").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 2000);
  });
})