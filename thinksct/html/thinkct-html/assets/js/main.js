(function ($) {
  var App = {
    /**
     * Init Function
     */
    init: function () {
      App.common();
      App.sidemenu();

    },
    /*
     common function in page
     */
    common: function () {
      //scroll function
      $(window).on("load resize", function (e) {
        var Width = $(window).width();
        if (Width >= 1200) {
          $('.sub-menu').on("mouseover", function () {
            $(this).niceScroll({
              cursorwidth: '4px',
              cursorcolor: '#fff',
              cursorborder: '0px',
              touchbehavior: true,
              emulatetouch: true
            });
            $(".sub-menu").getNiceScroll().resize();
          });
        }
      });

      //search-btn

      $('.search-btn').click(function () {
        $('.search-container').addClass('isOpen');

      });

      $('.close-btn').click(function () {
        $('.search-container').removeClass('isOpen');
      });


      $('.menu-icon').click(function () {

        $('.nav-section').toggleClass('isOpen');
        $(this).toggleClass('is-active');
        $('.back-overlay').toggleClass('openBg');
        $('body').toggleClass('scrollHide');
      });

      $('.slider-pro').sliderPro({
        width: '100%',

        height: 500,
        orientation: 'vertical',
        loop: false,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'right',
        thumbnailPointer: true,
        thumbnailWidth: 170,
        thumbnailHeight: 100,
        breakpoints: {
          800: {
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 170,
            thumbnailHeight: 100
          },
          500: {
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 120,
            thumbnailHeight: 100,
            height: 300,
          }
        }
      });
    },

    sidemenu: function () {
      $(window).on("load", function (e) {
        var Width = $(window).width();
        if (Width <= 1200) {
          $('.hasChild .sub-menu').slideUp();
          $('.hasChild > a').click(function () {
            if ($('.sub-menu').is(':visible')) {
              $(".sub-menu").slideUp(300);
              $('.hasChild > a').removeClass('active');

            }
            if ($(this).next(".sub-menu").is(':visible')) {
              $(this).next(".sub-menu").slideUp(300);
              $('.hasChild > a').removeClass('active');
            }
            else {
              $(this).next(".sub-menu").slideDown(300);
              $('.hasChild > a').removeClass('active');
              $(this).addClass('active');
            }
          });
        }
      });


    }



  }

  $(function () {
    App.init();
  });
})(jQuery);
