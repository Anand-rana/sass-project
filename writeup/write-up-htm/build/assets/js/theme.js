/*jslint browser: true, vars: true, plusplus: true*/
/*global $, jQuery*/
(function($) {
	"use strict";
	var App = {
		/*-- Init Function --*/
		init: function() {
			App.banner();
			App.event();
			App.header();
			App.other();
		},

		banner: function() {
			jQuery(document).ready(function() {
				jQuery('.tp-banner').show().revolution(
					{
						delay:5000,
						startwidth:1170,
						startheight:500,
						navigationType:"bullet",
						navigationArrows:"solo",
						navigationStyle:"preview4",
						fullWidth:"off",
						fullScreen:"off",
						spinner:"off"
							
					});
				});
		},

		event:function()
		{
			var owl = $(".event-slider");	
			var rev = $(".rev-slider");

			owl.owlCarousel({
			    loop:true,
			    margin:30,
			    nav:false,
			    mouseDrag:false,
			    dots:false,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:3
			        }
			    }
			});

			rev.owlCarousel({
			    loop:true,
			    margin:0,
			    nav:false,
			    dots:false,
			    autoplay:true,
   				autoplayTimeout:4000,
    			autoplayHoverPause:true,
			    items:1
			});

		
		$('.next').click(function(){
		owl.trigger('next.owl.carousel');
		});

		$('.prev').click(function(){
		owl.trigger('prev.owl.carousel');
		});	



		},
		header: function()
		{

			$(window).scroll(function(){
 			 var sticky = $('header'),
    	 	 scroll = $(window).scrollTop();

  			if (scroll >= 100) sticky.addClass('fixed');
			  else sticky.removeClass('fixed');
			});

		},
		other: function() {
          	var height = $(document).height(); // returns height of HTML document
            var scroll = (height / 100) * 80;


            // fade in #back-top
            $(function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > scroll) {
                        //$('.top-arrow-nav').fadeIn();
                        $('.top-arrow').removeClass('hidden');
                    } else {
                        //$('.top-arrow-nav').fadeOut();
                        $('.top-arrow').addClass('hidden');
                    }
                });

                // scroll body to 0px on click
                $('.top-arrow').click(function() {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
            });

        },

	

	};
	$(function() {
		App.init();
	});
}(jQuery));