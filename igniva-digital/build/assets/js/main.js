(function($) {
  var App = {
    /**
     * Init Function
     */
    init: function() {
      App.common();
      App.menu();
      App.portfolio();
    },
    /*
     common function in page
     */
    common: function() {
      $(window).on("load", function(e) {
        $(window).scrollTop(0);
        new WOW().init();
        $("html,body").animate({
          scrollTop: 0
        });

      });


      // Select all links with hashes
      $('.scroll-arrow[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
          ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  return false;
                } else {
                  $target.attr('tabindex', '-1');
                  $target.focus();
                };
              });
            }
          }
        });
      //detect mobile
      var isMobile = {
        Android: function() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
          return navigator.userAgent.match(/iPhone|iPod/i);
        },
        Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };
      new TypeIt('.type-it', {
        speed: 50,
        nextStringDelay: [0, 2000],
        cursorSpeed: 1500,
        loopDelay: 0,
        breakLines: false,
        autoStart: false,
        startDelete: false,
        loop: true,
      });
      new TypeIt('.type-about', {
        speed: 10,
        cursorSpeed: 1500,
        cursor: false,
        autoStart: false,
        callback: function() {
          $('.type-about').find('.ti-cursor').addClass('h-hide');
        }
      });
      new TypeIt('.type-heading-one', {
        speed: 30,
        cursorSpeed: 1500,
        cursor: false,
        autoStart: false,
        callback: function() {
          $('.type-heading-one').find('.ti-cursor').addClass('h-hide');
        }
      });
      new TypeIt('.type-heading-two', {
        speed: 30,
        cursorSpeed: 1500,
        cursor: false,
        autoStart: false,
        callback: function() {
          $('.type-heading-two').find('.ti-cursor').addClass('h-hide');
        }
      });
      // Select all links with hashes
      if ($('#contact').offset() && $('#about').offset()) {
        if (!isMobile.any()) {
          $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            var top1 = $('#about').offset().top;
            var top2 = $('#contact').offset().top - 5;
            //console.log(scrollPos);
            //console.log(top2);
            if (scrollPos >= (top2)) {
              $('#header').removeClass("fx-1");
              $('#header').addClass("fx-2");
            } else if (scrollPos >= top1 && scrollPos <= top2) {
              $('#header').addClass("fx-1");
              $('#header').removeClass("fx-2");
            } else if (scrollPos >= top2) {
              // $('#header').addClass("fx-2");
              $('#header').removeClass("fx-1");
            } else {
              $('#header').removeClass("fx-1");
              $('#header').removeClass("fx-2");
            }
          });
        }
      }
      if ($('#app-contact').offset()) {
        if (!isMobile.any()) {
          $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            var top = $('#app-contact').offset().top - 5;
            //console.log(scrollPos);
            // console.log(top);
            if (scrollPos >= Math.round(top)) {
              $('#header').removeClass("fx-3");
              $('#header').addClass("fx-2");
            } else {
              $('#header').removeClass("fx-2");
              $('#header').addClass("fx-3");
            }
          });
        }
      }
      // var sections = $('section'),
      //     nav = $('header'),
      //     nav_height = nav.outerHeight();
      // $(window).on('scroll', function() {
      //     var cur_pos = $(this).scrollTop();
      //     sections.each(function() {
      //         var top = $(this).offset().top - nav_height,
      //             bottom = top + $(this).outerHeight();
      //         if (cur_pos >= top && cur_pos <= bottom) {
      //             nav.find('.nav-section a').removeClass('active');
      //             sections.removeClass('active');
      //             $(this).addClass('active');
      //             nav.find('.nav-section a[href="#' + $(this).attr('id') + '"]').addClass('active');
      //         }
      //     });
      // });


      $('.nav-section a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            $('.nav-section a').each(function() {
              $(this).removeClass('active');
            });
            $(this).addClass('active');
            $('body').removeClass('scroll-hide');
            $('.nav-section').removeClass('open');
            $('.layer-backdrop').removeClass('open');
            $('.nav-icon').removeClass('is-active');
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
            }
          }
        });
    },
    menu: function() {
      $('.nav-icon').click(function() {
        $(this).toggleClass('is-active');
        $('.nav-section').toggleClass('open');
        $('body').toggleClass('scroll-hide');
        $('.layer-backdrop').toggleClass('open');
      });
    },
    portfolio: function() {
      var isMobile = {
        Android: function() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
          return navigator.userAgent.match(/iPhone|iPod/i);
        },
        Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };
      if ($('.portfolio-section').offset()) {
        if (!isMobile.any()) {
          var h = $('.p-data-row').outerHeight();
          var top = $('.portfolio-section').offset().top;
          var contentHeight = $('.portfolio-section').height();
          var bottom = top + contentHeight;
          var noOfElements = $('.portfolio-section').find(".p-data-row").length;
          var totalHeight = h * (noOfElements * 2);
          $('.portfolio-section').css({
            height: totalHeight + "px"
          });
          var sectionForEachElement = totalHeight / noOfElements;
          $('.indicators li').click(function() {
            var id = $(this).attr('data-id');
            //console.log(id);
            $('.p-data-row').removeClass('active');
            $('.indicators li').removeClass('active');
            $('.app-walkthrough-list').removeClass('active prev');
            //$('#post-img-' + (i + 1)).addClass("active");
            $('#post-img-' + id).addClass("active").prev('.app-walkthrough-list').addClass('prev');
            $('#post-' + id).addClass("active");
            $(this).addClass('active');
          });
          $(window).scroll(function() {
            var iCurScrollPos = $(this).scrollTop();
            //console.log(iCurScrollPos);

            if (iCurScrollPos >= top) {
              $('.portfolio-section-block').addClass("c-fix");
              for (var i = 0; i < noOfElements; i++) {
                var itemValue = i + 1;
                var value = sectionForEachElement * itemValue;
              //  console.log("first object value" + i, value);
                if (iCurScrollPos > (top + value)) {
                  $('.p-data-row').removeClass('active');
                  $('.app-walkthrough-list').removeClass('active prev');
                  $('.indicators li').removeClass('active');
                  $('#slide-' + (i + 1)).addClass("active");
                  $('#post-' + (i + 1)).addClass("active");

                  $('#post-' + (i + 1)).removeClass('prev-slide')
                  $('#post-' + i).addClass("prev-slide");

                  //$('#post-' + (i + 1)).css({"position":"relative"});
                  //$('#post-' + (i)).css({"position":"absolute"});

                  $('#post-img-' + (i + 1)).addClass("active");
                  $('#post-img-' + (i)).addClass("prev");


                }
                if (i == 0 && iCurScrollPos < top + sectionForEachElement) {
                  $('.p-data-row').removeClass('active');
                  $('.app-walkthrough-list').removeClass('active prev');
                  $('.indicators li').removeClass('active');
                  $('#slide-' + i).addClass("active");
                  $('#post-' + i).addClass("active");
                  $('#post-img-' + i).addClass("active");
                  $('#post-' + i).removeClass('prev-slide')
                }
              }
            } else {
              $('.portfolio-section-block').removeClass("c-fix");
            }
            if (iCurScrollPos >= totalHeight + top) {
              $('.portfolio-section-block').removeClass("c-fix");
            }
          });

          $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();


            return elementBottom > viewportTop && elementTop < viewportBottom;
          };

          $(window).on('resize scroll', function() {
            if ($('.service-section').isInViewport() && $('.portfolio-section-block').hasClass("c-fix")) {

              var $el = $('.service-section'),
                scrollTop = $(this).scrollTop(),
                scrollBot = scrollTop + $(this).height(),
                elTop = $el.offset().top,
                elBottom = elTop + $el.outerHeight(),
                visibleTop = elTop < scrollTop ? scrollTop : elTop,
                visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
              $('.portfolio-section-block').css({
                "top": -(visibleBottom - visibleTop) + 'px'
              });
            } else {
              $('.portfolio-section-block').css({
                "top": "0"
              });
            }

          });
        }
      }
    }
  }
  $(function() {
    App.init();
  });
})(jQuery);
