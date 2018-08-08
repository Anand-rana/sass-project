(function($) {
    var App = {
        /**
         * Init Function
         */
        init: function() {
            App.Preloader();
            App.homeslider();
            App.mlayout();
            App.phover();
            App.pslider();
            App.counter();
            App.reviews();
            App.eventtabs();
            App.eventmore();
            App.overlaymenu();
            App.fixheader();
            App.signtabmenu();
        },

        /**
         * Preloader
         */
        Preloader: function() {
            $(window).load(function() {
                $('.preloader').delay(1000).fadeOut('slow');
                $(window).scrollTop(0);
            });
        },

        homeslider: function() {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // tasks to do if it is a Mobile Device
                $('#home-slider').accordionSlider({
                    width: '100%',
                    height: 400,
                    visiblePanels: 6,
                    closePanelsOnMouseOut: true,
                    responsiveMode: 'custom',
                    autoplay: false,
                    openPanelDuration: 200,
                    closePanelDuration: 200,
                    shadow: false,

                    mouseWheel: false,

                    breakpoints: {
                        700: { width: '100%', height: 300, aspectRatio: 1.2 }
                    }

                });

            } else {


                $(window).on('load resize', function() {
                    var screenheight = $(window).height();
                    var screenwidth = $(window).width();
                    var menu = $('.nav-section').outerHeight();
                    var total = screenheight - menu;

                    $('#home-slider').accordionSlider({
                        width: '100%',
                        height: total,
                        visiblePanels: 6,
                        closePanelsOnMouseOut: true,
                        responsiveMode: 'custom',
                        autoplay: false,
                        openPanelDuration: 200,
                        closePanelDuration: 200,
                        shadow: false,

                        mouseWheel: false,

                        breakpoints: {
                            900: { width: '100%', height: 500, aspectRatio: 1.2 }
                        }
                    });
                });
            }


        },

        mlayout: function() {


            var $container = $('.grid').imagesLoaded(function() {

                $container.isotope({
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-sizer'
                    }
                });
            });


        },
        phover: function() {

            $(".img-hover").each(function(index, element) {
                    var tl = new TimelineMax({ paused: true });


                    tl.to($(element).find(".p-img"), 0.5, { scale: 1.1, ease: Power2.easeInOut }, 0)
                    tl.to($(element).find(".p-options"), 0.5, { height: 50, ease: Power1.easeInOut })

                    element.animation = tl;
                })
                //toggle play and reverse of each .feature element's timeline on hover 
            $(".img-hover").hover(over, out);

            function over() {
                this.animation.play();
                TweenMax.to($(this).find(".p-name"), 0.5, { x: '0%', y: '0%', top: '20px', left: '20px', ease: Power2.easeInOut });

            }

            function out() {
                this.animation.reverse();
                TweenMax.to($(this).find(".p-name"), 0.5, { x: '-50%', y: '-50%', top: '50%', left: '50%', ease: Power2.easeInOut });
            }
        },

        pslider: function() {
            var owl = $("#p-slider");
            owl.owlCarousel({
                loop: false,
                margin: 0,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    }

                }
            });
        },

        counter: function() {

            $('.count').each(function() {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 10000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                            }
                        }
                        $this.text(num);
                    }
                });
            });

        },

        reviews: function()

        {
            var owl = $("#t-slider");
            owl.owlCarousel({
                loop: false,
                margin: 0,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    }

                }
            });

        },

        eventtabs: function() {
            var tl = new TimelineLite();
            var tl2 = new TimelineLite();

            TweenMax.to('.tab-text.active-in', 1, { position: 'relative', top: '0px', ease: Power2.easeInOut });

            $('.event-tabs li').on("click", function() {



                $('.event-tabs li').removeClass('active');
                $(this).addClass('active');


                var d_activeTab = $(this).attr("data-index");
                $('.tab-text').removeClass('active-in');
                $("." + d_activeTab + '.tab-text').addClass('active-in');

                $('.tab-img').removeClass('active-in');
                $("." + d_activeTab + '.tab-img').addClass('active-in');

                $('.tab-contentxt').removeClass('active-in');
                $("." + d_activeTab + '.tab-contentxt').addClass('active-in');


                tl.to('.tab-text', 0.5, { position: 'absolute', top: '100%', opacity: 0, ease: Back.easeInOut })
                tl.to("." + d_activeTab + '.tab-text', 0.5, { position: 'relative', opacity: 1, top: '0px', ease: Back.easeInOut })

                TweenMax.to('.tab-img', 0, { scale: 0, display: 'none', ease: Power0.easeInOut });
                TweenMax.to("." + d_activeTab + '.tab-img', 0.7, { scale: 1, display: 'block', ease: Power2.easeInOut });

                tl2.to('.tab-contentxt', 0.5, { top: '-100px', opacity: 0, display: 'none', ease: Power1.easeInOut });
                tl2.to("." + d_activeTab + '.tab-contentxt', 0.7, { top: '0px', opacity: 1, display: 'block', ease: Power2.easeInOut });




            });

        },

        eventmore: function() {
            $('.event-menu-icon').click(function() {

                $(this).toggleClass('open');
                $('.event-tabs li').toggleClass('block');
            });



            $(document).on("click", "div.top-menu-icon", function() {
                $(this).addClass('open');
                $(this).removeClass('top-menu-icon').addClass('close-menu-icon');

                TweenMax.to('.nav-section nav', 0.2, { left: '0px', ease: Power0.easeInOut });

            });

            $(document).on("click", ".close-menu-icon", function() {
                $(this).removeClass('open');
                TweenMax.to('.nav-section nav', 0.2, { left: '-250px', ease: Power0.easeInOut });
                $(this).removeClass('close-menu-icon').addClass('top-menu-icon');
            });

        },

        overlaymenu: function() {
            $('.menu-btn').click(function() {
                TweenMax.to('.overlay-menu', 0.5, { y: '0%', ease: Power1.easeInOut });

            });

            $('.overlay-close').click(function() {
                TweenMax.to('.overlay-menu', 0.5, { y: '-100%', ease: Power1.easeInOut });

            });
        },

        fixheader: function() {
            $(window).scroll(function() {
                //console.log(1);
                var window_top = $(window).scrollTop();
                var div_top = $('.nav-section').offset().top;
                if (window_top > 400) {
                    $('.nav-section').addClass('stick-header');
                } else {
                    $('.nav-section').removeClass('stick-header');
                }
            });
        },

        signtabmenu: function() {


            $('.form-tabs li').on("click", function() {
                var tl = new TimelineLite();
                $('.form-tabs li').removeClass('active');
                $(this).addClass('active');
                var d_activeTab = $(this).attr("data-index");
                $('.up-form').removeClass('active-in-form');
                $(".form-" + d_activeTab).addClass('active-in-form');

                tl.to('.up-form', 0.3, { x: 20, opacity: 0, ease: Back.easeInOut })
                tl.to(".form-" + d_activeTab + '.up-form', 0.3, { x: 0, opacity: 1, ease: Back.easeInOut })

                if ($(".dealar-form-section").hasClass("active-in-form")) {
                    //console.log(1);
                    $('.step-list').removeClass('hidden');

                } else {
                    //console.log(2);
                    $('.step-list').addClass('hidden');
                }
            });


        },

    }
    $(function() {
        App.init();
    });
})(jQuery);
