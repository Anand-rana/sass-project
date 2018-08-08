/*jslint browser: true*/
/*global $, jQuery*/
/*jslint plusplus: true */

(function ($) {
    "use strict";
    var owlCarousels = {
        /*========== Init function ==========*/
        init: function () {
            owlCarousels.owlSyncing();
            owlCarousels.owlThumbListing();
            owlCarousels.owlOneSlide();
            owlCarousels.owlFadeSlide();
            owlCarousels.teamSlider();
            owlCarousels.owlThumbsSlides();
        },

        owlSyncing: function () {
            var owl = $('.owlSyncFor'), owl2 = $('.owlSyncBy');
            owl.owlCarousel({
                nav: false,
                dots: false,
                items: 1,
                loop: false,
                autoplay: false,
                animateOut: 'zoomOut',
                animateIn: 'flipInX',
                //animateOut: 'fadeOut',
                //animateIn: 'zoomIn',
                touchDrag: false,
                mouseDrag: false
            });//.on('changed.owl.carousel', function (event) {
            //owl2.trigger('to.owl.carousel', [event.item.index, 300, true]);
            // (Optional) Remove .current class from all items
            //owl2.find('.current').removeClass('current');
            // (Optional) Add .current class to current active item
            //owl2.find('.owl-item .item').eq(event.item.index).addClass('current');
            //});
            owl2.owlCarousel({
                nav: true,
                dots: true,
                margin: 10,
                loop: false,
                items: 1,
                autoHeight: true,
                navContainer: '.syncNav',
                dotsContainer: '.syncDots',
                navText: ['<i class="icon-long-arrow-left ico-t2"></i> Prev', 'Next <i class="icon-long-arrow-right ico-t2"></i>'],
                navElement: ['a href="javascript:void(0);"']
            }).on('changed.owl.carousel', function (event) {
                owl.trigger('to.owl.carousel', [event.item.index, 300, true]);
                // (Optional) Remove .current class from all items
                owl.find('.current').removeClass('current');
                // (Optional) Add .current class to current active item
                owl.find('.owl-item .item').eq(event.item.index).addClass('current');
                if (event.item.index === 0) {
                    $('.syncNav .owl-prev').removeClass('active');
                } else if (event.item.index === event.item.count - 1) {
                    $('.syncNav .owl-prev').addClass('active');
                    $('.syncNav .owl-prev').click(function () {
                        owl2.trigger('prev.owl.carousel', [0]);
                    });
                } else {
                    $('.syncNav .owl-prev').removeClass('active');
                    //$('.syncNav .owl-next').removeClass('inactive');
                }
            }).on('click', '.owl-item, .owl-dot, .owl-prev, .owl-next', function (event) {
                owl.trigger('to.owl.carousel', [$(event.target).parents('.owl-item').index(), 0, true]);
            });
        },

        owlThumbListing: function () {
            var owlThumblisting1  = $('.owlListing'), owlThumblisting2 = $('.owlListingDetail');
            owlThumblisting2.owlCarousel({
                nav: true,
                dots: true,
                margin: 10,
                loop: true,
                items: 1,
                autoHeight: true,
                thumbs: true,
                thumbsPrerendered: true,
                navContainer: '.owlListNav',
                dotsContainer: '.owlListDots',
                navText: ['<i class="icon-long-arrow-left ico-t2"></i> Prev', 'Next <i class="icon-long-arrow-right ico-t2"></i>'],
                navElement: ['a href="javascript:void(0);"']
            });
        },

        owlOneSlide: function () {
            var carouselCount = 0;
            $(".owlCarouselCounter").each(function () {
                $(this).attr("id", "owl_" + carouselCount);
                $('#owl_' + carouselCount).owlCarousel({
                    nav: true,
                    dots: true,
                    items: 1,
                    loop: true,
                    margin: 30,
                    autoHeight: true,
                    //autoplay: true,
                    navContainer: '.owlNav' + carouselCount,
                    dotsContainer: '.owlDots' + carouselCount,
                    navText: ['<i class="icon-long-arrow-left ico-t2"></i> Prev', 'Next <i class="icon-long-arrow-right ico-t2"></i>'],
                    navElement: ['a href="javascript:void(0);"']
                });
                carouselCount++;
            });
        },

        owlFadeSlide: function () {
            var carouselCount = 0;
            setInterval(function () {
                $(".owlFadeCounter").each(function () {
                    $(this).attr("id", "owlFade_" + carouselCount);
                    $('#owlFade_' + carouselCount).owlCarousel({
                        nav: true,
                        dots: true,
                        items: 1,
                        loop: true,
                        margin: 0,
                        autoHeight: true,
                        animateOut: 'fadeOut',
                        animateIn: 'fadeInUp',
                        touchDrag: false,
                        mouseDrag: false,
                        navContainer: '.owlFadeNav' + carouselCount,
                        dotsContainer: '.owlFadeDots' + carouselCount,
                        navText: ['<i class="icon-long-arrow-left ico-t2"></i> Prev', 'Next <i class="icon-long-arrow-right ico-t2"></i>'],
                        navElement: ['a href="javascript:void(0);"']
                    });
                    carouselCount++;
                });
            }, 500);
        },

        teamSlider: function () {
            var owlThumbsCount = 0;
            $(".owlTeamSlider").each(function () {
                $(this).attr("id", "owlTeamSlider_" + owlThumbsCount);
                $('#owlTeamSlider_' + owlThumbsCount).owlCarousel({
                    nav: true,
                    dots: true,
                    items: 1,
                    loop: true,
                    margin: 30,
                    autoHeight: true,
                    navContainer: '.teamSliderNav' + owlThumbsCount,
                    dotsContainer: '.teamSliderDots' + owlThumbsCount,
                    navText: ['<i class="icon-long-arrow-left ico-t2"></i> Prev', 'Next <i class="icon-long-arrow-right ico-t2"></i>'],
                    navElement: ['a href="javascript:void(0);"'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        800: {
                            items: 2
                        },
                        1200: {
                            margin: 130,
                            items: 2
                        }
                    }
                });
                owlThumbsCount++;
            });
        },

        owlThumbsSlides: function () {
            var owlThumbsCount = 0;
            $(".owlThumbSlider").each(function () {
                $(this).attr("id", "owlThumb_" + owlThumbsCount);
                $('#owlThumb_' + owlThumbsCount).owlCarousel({
                    nav: true,
                    dots: false,
                    items: 1,
                    loop: true,
                    margin: 20,
                    autoHeight: true,
                    navContainer: '.thumbNav' + owlThumbsCount,
                    //dotsContainer: '.thumbDots' + owlThumbsCount,
                    navText: ['<i class="icon-arrow-double-left"></i>', '<i class="icon-arrow-double-right"></i>'],
                    navElement: ['a href="javascript:void(0);"'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        800: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
                owlThumbsCount++;
            });
        }

    };

    $(function () {
        owlCarousels.init();
    });
}(jQuery));