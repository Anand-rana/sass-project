(function($) {
    var owl = $('.p-item-slider');
    var owl2 = $('.top-item-slider');
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
            App.buyeraside();
            App.buyersearch();
            App.pricerange();
            App.filterbtn();
            App.proslider();
            App.other();
            App.product();
            App.topproduct();
            App.smoothscroll();
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
                        columnWidth: '.grid-sizer',

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
            owl.on('resized.owl.carousel', function(event) {
                //console.log("hello");
                 $('.grid').isotope('reloadItems')
                  $('.grid').isotope('layout');

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
            var owl = $(".t-slider");
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
                $('body').addClass('scroll-hide');
                $('.backdrop-bg').removeClass('hidden');

                TweenMax.to('.nav-section nav', 0.2, { left: '0px', ease: Power0.easeInOut });

            });

            $(document).on("click", ".close-menu-icon", function() {
                $(this).removeClass('open');
                TweenMax.to('.nav-section nav', 0.2, { left: '-250px', ease: Power0.easeInOut });
                $(this).removeClass('close-menu-icon').addClass('top-menu-icon');
                $('body').removeClass('scroll-hide');
                $('.backdrop-bg').addClass('hidden');
            });

        },

        overlaymenu: function() {
            $('.menu-btn').click(function() {
                TweenMax.to('.overlay-menu', 0.5, { y: '0%', ease: Power1.easeInOut });

            });

            $('.search-btn').click(function() {
                TweenMax.to('.search-overlay', 0.5, { y: '0%', ease: Power1.easeInOut });
                $('#search-field-control').focus();
            });

            $('.overlay-close').click(function() {
                TweenMax.to('.overlay-menu', 0.5, { y: '-100%', ease: Power1.easeInOut });

            });

            $('.search-overlay-close').click(function() {
                TweenMax.to('.search-overlay', 0.5, { y: '-100%', ease: Power1.easeInOut });

            });
        },

        fixheader: function() {
            $(window).scroll(function() {
                //console.log(1);
                var window_top = $(window).scrollTop();
                //var div_top = $('.nav-section').offset().top;
                if (window_top > 500) {
                    $('.nav-section').addClass('stick-header');
                    //$('.nav-section').css('position', 'fixed').css('top', '0' , 'left' , '0' , 'rght' , '0' ,'z-index' , '999');
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

                if ($(".dealer-form-section").hasClass("active-in-form")) {
                    //console.log(1);
                    $('.step-list').removeClass('hidden');

                } else {
                    //console.log(2);
                    $('.step-list').addClass('hidden');
                }
            });


        },

        buyeraside: function() {
            $('.sizetoogle').click(function() {

                $('.b-dashboard-section').toggleClass('sidemini');
                //$owl.trigger('refresh.owl.carousel');
                owl.trigger('refresh.owl.carousel');
            });


        },

        buyersearch: function() {
            $('.search-icon').click(function() {
                TweenMax.to('.search-div', 0.5, { width: '250px', border: '1px solid #000', ease: Power0.easeInOut });
                TweenMax.to('.search-div input', 0.5, { opacity: 1, width: '200px', ease: Power0.easeInOut });
            });
        },
        pricerange: function() {
            $("#price-range").ionRangeSlider({
                type: "double",
                min: 1000,
                max: 5000,
                from: 2000,
                to: 4000,
                step: 100,

            });
            $('.range-slider').ionRangeSlider();
        },

        filterbtn: function() {
            $('.filter-menu').click(function() {
                $(this).toggleClass('f-open');
                if ($(this).hasClass("f-open")) {
                    TweenMax.fromTo(['.filter-options'], 0.5, { y: 40, display: 'none' }, { y: 0, opacity: 1, display: 'block', ease: Power0.easeInOut });
                    $(this).find(".fa").removeClass('fa-caret-down').addClass('fa-close');
                } else {
                    TweenMax.fromTo(['.filter-options'], 0.5, { y: 0 }, { y: '-10', opacity: '0', display: 'none', ease: Power0.easeInOut });
                    $(this).find(".fa").removeClass('fa-close').addClass('fa-caret-down');
                }
            });

            $('.grid-icon').click(function() {
                $('.grid-view').removeClass('hidden');
                $('.list-view').addClass('hidden');
            });
            $('.list-icon').click(function() {
                $('.list-view').removeClass('hidden');
                $('.grid-view').addClass('hidden');
            });
        },

        proslider: function() {


            var carouselCount = 0;
            owl.each(function() {
                $(this).attr("id", "owl_" + carouselCount);
                $('#owl_' + carouselCount).owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false,
                    items: 1,
                    thumbs: true,
                    thumbsPrerendered: true,
                    navContainer: '.owlNav' + carouselCount,
                    dotsContainer: '.owlDots' + carouselCount,
                    navText: [' <span class="p-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>', ' <span class="p-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],
                    navElement: ['a href="javascript:void(0);"']
                });
                carouselCount++;
            });
        },

        product: function() {

            $(document).ready(function() {

                var sync1 = $("#sync1");
                var sync2 = $("#sync2");
                var slidesPerPage = 2; //globaly define number of elements per page
                var syncedSecondary = true;

                sync1.owlCarousel({
                    items: 1,
                    slideSpeed: 2000,
                    nav: false,
                    autoplay: false,
                    dots: false,
                    mouseDrag: false,
                    touchDrag: false,
                    loop: false,
                    responsiveRefreshRate: 200,
                }).on('changed.owl.carousel', syncPosition);

                sync2
                    .on('initialized.owl.carousel', function() {
                        sync2.find(".owl-item").eq(0).addClass("current");
                    })
                    .owlCarousel({
                        items: slidesPerPage,
                        dots: false,
                        nav: false,
                        mouseDrag: false,
                        touchDrag: false,
                        smartSpeed: 200,
                        slideSpeed: 500,
                        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                        responsiveRefreshRate: 100
                    }).on('changed.owl.carousel', syncPosition2);

                function syncPosition(el) {
                    //if you set loop to false, you have to restore this next line
                    var current = el.item.index;


                    sync2
                        .find(".owl-item")
                        .removeClass("current")
                        .eq(current)
                        .addClass("current");
                    var onscreen = sync2.find('.owl-item.active').length - 1;
                    var start = sync2.find('.owl-item.active').first().index();
                    var end = sync2.find('.owl-item.active').last().index();

                    if (current > end) {
                        sync2.data('owl.carousel').to(current, 100, true);
                    }
                    if (current < start) {
                        sync2.data('owl.carousel').to(current - onscreen, 100, true);
                    }
                }

                function syncPosition2(el) {
                    if (syncedSecondary) {
                        var number = el.item.index;
                        sync1.data('owl.carousel').to(number, 100, true);
                    }
                }

                sync2.on("click", ".owl-item", function(e) {
                    e.preventDefault();
                    var number = $(this).index();
                    sync1.data('owl.carousel').to(number, 300, true);
                });
            });

        },

        topproduct: function() {
            var carouselCount = 0;
            owl2.each(function() {
                $(this).attr("id", "owl_" + carouselCount);
                $('#owl_' + carouselCount).owlCarousel({
                    loop: true,
                    margin: 20,
                    nav: true,
                    dots: false,
                    items: 3,
                    thumbs: false,
                    thumbsPrerendered: false,
                    // navContainer: '.owlNav' + carouselCount,
                    //dotsContainer: '.owlDots' + carouselCount,
                    navText: [' <span class="p-prev"><i class="icon-arrow-left" aria-hidden="true"></i></span>', ' <span class="p-next"><i class="icon-arrow-right" aria-hidden="true"></i></span>'],
                    navElement: ['a href="javascript:void(0);"'],
                    responsive: {
                        1000: {
                            items: 3,
                        },
                        768: {
                            items: 2,
                        },
                        500: {
                            items: 1,
                        },
                        0: {
                            items: 1,

                        },
                    }
                });
                carouselCount++;
            });
        },

        smoothscroll: function() {

            $('a.i-links[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top - 100
                        }, 1000);
                        return false;
                    }
                }
            });


        },

        other: function() {
            autosize($('.chat-field'));
            $(".msgarea").niceScroll({ cursorcolor: "#f94f42", cursorwidth: 10 });

            $('.side-menu-icon').click(function() {
                $(this).toggleClass('open');
                $('.b-dashboard-section').toggleClass('sidebar-display');
            });

            $('.msgarea').mouseover(function() {
                //alert("1");
                $(this).getNiceScroll().resize();

            });

            function toggleIcon(e) {
                $(e.target)
                    .prev('.panel-heading , .payment-plan-heading')
                    .find(".more-less")
                    .toggleClass('icon-plus icon-minus');
            }
            $('.panel-group').on('hidden.bs.collapse', toggleIcon);
            $('.panel-group').on('shown.bs.collapse', toggleIcon);

            $('li.dropdown').hover(function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
            }, function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
            });


            function togglearrow(e) {
                $(e.target)
                    .prev('.panel-heading')
                    .find(".faq-arrow-ico .fa")
                    .toggleClass('fa-angle-down fa-angle-up');
            }
            $('.panel-group').on('hidden.bs.collapse', togglearrow);
            $('.panel-group').on('shown.bs.collapse', togglearrow);



            $(".tabs-pannel").each(function() {

                var $myTabs = $(this);

                $myTabs.find(".tab-pane-cotent").hide().first().show();
                $myTabs.find("ul.tabs li:first").addClass("active").show();

                $myTabs.find("ul.tabs li").click(function() {
                    var $this = $(this);

                    $this.addClass("active").siblings().removeClass("active");
                    $myTabs.find(".tab-pane-cotent").hide();

                    var activeTab = $this.find("a").attr("href");
                    $(activeTab).fadeIn();

                    return false;
                });
            });

            $(window).on('load', function() {
                $('#w-modal').modal('show');
            });


            $('.c-facet-name').click(function(e) {
                var id = $(this).attr('data-href');
                var limit = $(this).attr('data-limit');
                $(id).stop().slideToggle();
                $(this).toggleClass('is-expand');
            });

            $('.list-view-button-link').click(function() {
                $(".cat-all-listing").addClass('listing-row');
                $(".cat-all-listing").find(".item-section").find('.col-md-4').addClass("col-md-12").removeClass("col-md-4");
            });

            $('.grid-view-button-link').click(function() {
                $(".cat-all-listing").removeClass('listing-row');
                $(".cat-all-listing").find(".item-section").find('.col-md-12').addClass("col-md-4").removeClass("col-md-12");
            });


        },

    }
    $(function() {
        App.init();
    });
})(jQuery);