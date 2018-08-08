(function($) {
  var App = {
    /**
     * Init Function
     */
    init: function() {
      App.common();
      App.sidemenu();

    },
    /*
     common function in page
     */
    common: function() {
      //scroll function
      $(window).on("load resize", function(e) {
        var Width = $(window).width();
        if (Width >= 1200) {
          $('.sub-menu').on("mouseover", function() {
            $(this).niceScroll({
              cursorwidth: '4px',
              cursorcolor: '#fff',
              cursorborder: '0px',
              touchbehavior: true,
              emulatetouch: true
            });
            $(".sub-menu").getNiceScroll().resize();
          });

          //mega-menu-scroll

          $('._more-link').click(function() {
            $('.nav-catList').toggleClass('openMenu');
          });

          $('.nav-catList').on("mouseover", function() {
            $('._subList , ._mainList').niceScroll({
              cursorwidth: '4px',
              cursorcolor: '#fff',
              cursorborder: '0px',
              touchbehavior: true,
              emulatetouch: true
            });
            $("._subList , ._mainList").getNiceScroll().resize();
          });


          //mega-menu

          $('._mainList li').mouseover(function(event ) {

              if ($(this).children().length >=2) {
                   $('._subList').empty();
                   $(this).find( '.sub-menu' ).clone().appendTo( "._subList" );
                    $('._subList').removeClass('d-none');
              }
              else
              {
                $('._subList').addClass('d-none');
              }
          });

        }
      });

      //search-btn

      $('.search-btn').click(function() {
        $('.search-container').addClass('isOpen');

      });

      $('.close-btn').click(function() {
        $('.search-container').removeClass('isOpen');
      });


      $('.menu-icon').click(function() {

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

    sidemenu: function() {
      $(window).on("load", function(e) {
        var Width = $(window).width();
        if (Width <= 1200) {
          $('.hasChild .sub-menu').slideUp();
          $('.hasChild > .ac-ico').click(function() {
            if ($('.sub-menu').is(':visible')) {
              $(".sub-menu").slideUp(300);
              //$('.hasChild > a').removeClass('active');

            }
            if ($(this).next(".sub-menu").is(':visible')) {
              $(this).next(".sub-menu").slideUp(300);
              //$('.hasChild > a').removeClass('active');
            } else {
              $(this).next(".sub-menu").slideDown(300);
              $('.hasChild > a').removeClass('active');
              //  $(this).addClass('active');
            }
          });
        }
      });
  }

  }

  $(function() {
    App.init();
  });
})(jQuery);
