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
                $("html,body").animate({ scrollTop: 0 });
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
                speed: 30,
                nextStringDelay: 3000,
                cursorSpeed: 1500,
                loopDelay: 3000,
                breakLines: false,
                autoStart: false,
                startDelete: false,
                loop: true,
            });


            new TypeIt('.type-about', {
                speed: 20,
                cursorSpeed: 1500,
                autoStart: false,
                callback: function() {
                    $('.type-about').find('.ti-cursor').addClass('h-hide');

                }
            });

            new TypeIt('.type-heading-one', {
                speed: 30,
                cursorSpeed: 1500,
                autoStart: false,
                callback: function() {
                    $('.type-heading-one').find('.ti-cursor').addClass('h-hide');

                }
            });

            new TypeIt('.type-heading-two', {
                speed: 30,
                cursorSpeed: 1500,
                autoStart: false,
                callback: function() {
                    $('.type-heading-two').find('.ti-cursor').addClass('h-hide');

                }
            });

            new TypeIt('.type-heading-three', {
                speed: 30,
                cursorSpeed: 1500,
                autoStart: false,
                callback: function() {
                    $('.type-heading-three').find('.ti-cursor').addClass('h-hide');
                    //  $('.type-heading-three').addClass('fix');

                }
            });

            $('.app-content-slider').slick({
                dots: true,
                pauseOnHover: false,
                appendDots: '.indicators',
                arrows: false,
                asNavFor: '.app-img-slider',
                infinite: false,
                speed: 500,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000,
                cssEase: 'linear'
            });


            $('.app-img-slider').slick({
                dots: false,
                pauseOnHover: false,
                arrows: false,
                asNavFor: '.app-content-slider',
                infinite: false,
                vertical: true,
                verticalSwiping: true
            });



            // // init
            // var ctrl = new ScrollMagic.Controller({
            //     globalSceneOptions: {
            //         triggerHook: 0.8,
            //         duration: '80%',
            //         offset: '-100px'
            //     }
            // });

            // // Create scene
            // $(".p-content-list").each(function() {

            //     var name = $(this).attr('id');

            //     var tween = TweenMax.from($(this), 0.1, { autoAlpha: 0, ease: Linear.easeNone });
            //     new ScrollMagic.Scene({
            //             triggerElement: this,
            //             reverse: true
            //         })
            //         .setClassToggle('#' + name + '-dot', 'active')
            //         //.setClassToggle(this, 'actives')
            //         //.setPin(this)
            //         //.addIndicators()
            //         .setTween(tween)
            //         //.loglevel(3)
            //         .addTo(ctrl);

            // });

            // var controller1 = new ScrollMagic.Controller({
            //     globalSceneOptions: {
            //         triggerHook: 0.2,
            //     }
            // });


            // $(".app-walkthrough-list").each(function() {
            //     var tween = TweenMax.from($(this), 0.5, { autoAlpha: 0, y: '+30%', ease: Linear.easeNone });
            //     var name = $(this).attr('id');

            //     new ScrollMagic.Scene({
            //             triggerElement: this
            //         })
            //         .setPin(this)
            //         //.addIndicators()
            //         //.setTween(tween)
            //         //.loglevel(3)
            //         .addTo(controller1);

            // });

            // var controller2 = new ScrollMagic.Controller({
            //     globalSceneOptions: {
            //         triggerHook: 0.2,
            //     }
            // });

            // new ScrollMagic.Scene({
            //         triggerElement: '.phone-bg'
            //     })
            //     .setPin('.phone-bg', { pushFollowers: false })
            //     .addTo(controller2);



            // Select all links with hashes

            if ($('#contact').offset() && $('#about').offset()) {
                var top1 = $('#about').offset().top;
                var top2 = $('#contact').offset().top;

                if (!isMobile.any()) {

                    $(window).scroll(function() {
                        var scrollPos = $(window).scrollTop();



                        if (scrollPos >= (parseInt(top2.toString().split('.')[0]) - 5)) {
                            $('#header').removeClass("fx-1");
                            $('#header').addClass("fx-2");


                        } else if (scrollPos >= top1 && scrollPos < top2) {

                            $('#header').addClass("fx-1");
                            $('#header').removeClass("fx-2");


                        } else if (scrollPos > 50 && scrollPos < top1) {
                            $('#header').addClass("fx-2");
                            $('#header').removeClass("fx-1");
                        } else {
                            $('#header').removeClass("fx-1");
                            $('#header').removeClass("fx-2");


                        }
                    });

                }
            }

            var sections = $('section'),
                nav = $('header'),
                nav_height = nav.outerHeight();

            $(window).on('scroll', function() {
                var cur_pos = $(this).scrollTop();
                sections.each(function() {
                    var top = $(this).offset().top - nav_height,
                        bottom = top + $(this).outerHeight();

                    if (cur_pos >= top && cur_pos <= bottom) {
                        nav.find('.nav-section a').removeClass('active');
                        sections.removeClass('active');

                        $(this).addClass('active');
                        nav.find('.nav-section a[href="#' + $(this).attr('id') + '"]').addClass('active');
                    }
                });

            });


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
            var h = $('.p-data-row').innerHeight();

            var top = $('.portfolio-section').offset().top;


            var contentHeight = $('.portfolio-section').height();

            var bottom = top + contentHeight;


            var noOfElements = $('.portfolio-section').find(".p-data-row").length;

            var sectionForEachElement = h / noOfElements;




            $(window).scroll(function() {


                var iCurScrollPos = $(this).scrollTop();

                if (iCurScrollPos >= top) {

                    $('.portfolio-section-block').addClass("c-fix");


                    for (var i = 0; i < noOfElements; i++) {
                        var itemValue = i + 1;
                        var value = sectionForEachElement * itemValue;

                        console.log(iCurScrollPos , top + value);

                        if (iCurScrollPos > top + value) {

                            if (i == 0) {
                                //console.log("In first row no action needed");
                            } 

                            else {

                                var previousNode = "#" + (parseInt(i) - 1);
                                var currentNode = "#" + i;

                                //console.log("previous node:"+ previousNode, "current node:" + currentNode);

                                $(previousNode).removeClass("active");
                                $(currentNode).addClass("active");


                            }

                        }

                    }




                }


            });







            //console.log(sectionForEachElement);

            //console.log(top, contentHeight);


            //var iScrollPos = 0;

            // $(window).scroll(function () {
            //     var iCurScrollPos = $(this).scrollTop();

            //     if (iCurScrollPos > iScrollPos) {
            //         //console.log("Scroll down");


            //         if(iCurScrollPos >= top) {

            //             $('.portfolio-section-block').addClass("c-fix");

            //             for(var i = 0;  i< noOfElements; i++) {
            //                 var itemValue = i + 1; 
            //                 var value = sectionForEachElement * itemValue; 

            //                 if(iCurScrollPos > top + value ) {

            //                     if(i == 0) {
            //                         //console.log("In first row no action needed");
            //                     } else {

            //                     var previousNode = "#" + (parseInt(i) - 1);
            //                     var currentNode = "#"+i;

            //                     //console.log("previous node:"+ previousNode, "current node:" + currentNode);

            //                     $(previousNode).removeClass("active");
            //                     $(currentNode).addClass("active");


            //                     }

            //                 }

            //             }
            //         }


            //     } else {
            //        console.log("Scroll up");


            //         if(iCurScrollPos <= bottom) {

            //             console.log("going reverse");

            //             for(var i = noOfElements;  i>0; i--) {
            //                 var itemValue = i ; 
            //                 var value = sectionForEachElement * itemValue; 
            //                 var downValue =  sectionForEachElement * (itemValue - 1);

            //                 console.log(iCurScrollPos +"<"+ bottom +"-"+ value)

            //                 if(iCurScrollPos <= (bottom - value) && iCurScrollPos >= (top + downValue) ) {

            //                     if(i == 4) {
            //                         console.log("In last row no action needed");

            //                     } else {

            //                     var previousNode = "#" + (parseInt(i) + 1);
            //                     var currentNode = "#"+ i;

            //                     console.log("previous node:"+ previousNode, "current node:" + currentNode);

            //                     $(previousNode).removeClass("active");
            //                     $(currentNode).addClass("active");


            //                     }

            //                 }

            //             }

            //         }

            //     }

            //     iScrollPos = iCurScrollPos;
            // });

        }

    }

    $(function() {
        App.init();
    });
})(jQuery);