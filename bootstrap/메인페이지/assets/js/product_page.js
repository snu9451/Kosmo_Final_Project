/**
 * Template Name: BizLand - v1.2.1
 * Template URL: https://bootstrapmade.com/bizland-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  ("use strict");

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    let portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }

  $(window).on("load", function () {
    aos_init();
  });

  $(document).ready(function () {
    $(".each").each(function (index) {
      console.log(index);
      // console.log($('.each').eq(index).text());
      $(".each")
        .eq(index)
        .on("mouseover", function () {
          console.log($(".each").eq(index).text());
          $(".each").eq(index).css({
            background: "gray",
            //"transition": "0.3s"
          });
          // console.log($('.badge-counter').text());
        });
      $(".each")
        .eq(index)
        .on("mouseout", function () {
          $(".each").eq(index).css({
            background: "white",
            //"transition": "0.1s"
          });
        });
    });
  });
})(jQuery);
