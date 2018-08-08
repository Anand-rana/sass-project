 var writeup = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'ui.router.state.events', 'ngAnimate', 'angular-owl-carousel-2', 'rev.slider', 'angular-nicescroll', 'ngTagsInput']);

 //routing
 writeup.config(function($stateProvider, $urlRouterProvider) {
     //
     // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise('/state1');
     //
     // Now set up the states
     $stateProvider.state('home', {
         url: "/home",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },
             'banner': {
                 templateUrl: 'template/banner.html'
             },
             'content': {
                 templateUrl: "views/index.html"
             }
         }

     }).state('comming-soon', {
         url: "/comming-soon",
         views: {
             'header': {
                 templateUrl: 'template/header-comming.html'
             },
             'banner': {
                 templateUrl: 'template/banner.html'
             },
             'content': {
                 templateUrl: "views/comming-soon.html"
             }
         }

     }).state('search', {
         url: "/search",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'content': {
                 templateUrl: "views/search.html"
             }
         }

     }).state('signup', {
         url: "/signup",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'content': {
                 templateUrl: "views/signup.html"
             }
         }

     }).state('signup-msg', {
         url: "/signup-msg",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'content': {
                 templateUrl: "views/signup-msg.html"
             }
         }

     }).state('signupcompany', {
         url: "/signupcompany",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'content': {
                 templateUrl: "views/signupcompany.html"
             }
         }

     }).state('login', {
         url: "/login",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'content': {
                 templateUrl: "views/login.html"
             }
         }

     }).state('forgot', {
         abstarct: true,
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'content': {
                 templateUrl: "views/forgot-view.html"
             }
         }

     }).state('forgot.section', {
         abstarct: true,
         url: "/:type",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'section': {
                 templateUrl: function(stateParams) {
                     return 'views/view-' + stateParams.type + '.html'
                 },
             }
         }

     }).state('reset', {
         url: "/reset",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header.html'
             },

             'content': {
                 templateUrl: "views/reset.html"
             }
         }

     }).state('notification', {
         url: "/notification",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/notification.html"
             }
         }

     }).state('profile', {
         url: "/profile",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/profile.html"
             }
         }

     }).state('editprofile', {
         url: "/editprofile",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/editprofile.html"
             }
         }

     }).state('company-employe', {
         url: "/company-employe",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/company-employe.html"
             }
         }

     }).state('other-user', {
         url: "/other-user",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/other-user.html"
             }
         }

     }).state('competitions', {
         url: "/competitions",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/competitions.html"
             }
         }

     }).state('leaderboard', {
         url: "/leaderboard",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/leaderboard.html"
             }
         }

     }).state('competitions-dtl', {
         url: "/competitions-dtl",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/competitions-dtl.html"
             }
         }

     }).state('token-no', {
         url: "/token-no",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/token-no.html"
             }
         }

     }).state('card', {
         url: "/card",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/card.html"
             }
         }

     }).state('review', {
         url: "/review",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/review.html"
             }
         }

     }).state('subcription', {
         url: "/subcription",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/subcription.html"
             }
         }

     }).state('company-profile', {
         url: "/company-profile",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/company-profile.html"
             }
         }

     }).state('company-edit-profile', {
         url: "/company-edit-profile",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/company-edit-profile.html"
             }
         }

     }).state('company-profile-other', {
         url: "/company-profile-other",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/company-profile-other.html"
             }
         }

     }).state('competitions-create', {
         url: "/competitions-create",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/competitions-create.html"
             }
         }

     }).state('competitions-history', {
         url: "/competitions-history",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/competitions-history.html"
             }
         }

     }).state('competitions-all', {
         url: "/competitions-all",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/competitions-all.html"
             }
         }
     }).state('competitions-history-all', {
         url: "/competitions-history-all",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/competitions-history-all.html"
             }
         }
     }).state('read-review', {
         url: "/read-review",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/read-review.html"
             }
         }
     }).state('my-submission', {
         url: "/my-submission",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/my-submission.html"
             }
         }
     }).state('about', {
         url: "/about",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/about.html"
             }
         }
     }).state('contact', {
         url: "/contact",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/contact.html"
             }
         }
     }).state('terms', {
         url: "/terms",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/terms.html"
             }
         }
     }).state('privacy', {
         url: "/privacy",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/privacy.html"
             }
         }
     }).state('faq', {
         url: "/faq",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/faq.html"
             }
         }
     }).state('write-review', {
         url: "/write-review",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/write-review.html"
             }
         }
     }).state('write-review-company', {
         url: "/write-review-company",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/write-review-company.html"
             }
         }
     }).state('write-review-employee', {
         url: "/write-review-employee",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/write-review-employee.html"
             }
         }
     }).state('single-post', {
         url: "/single-post",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/single-post.html"
             }
         }
     }).state('error', {
         url: "/error",
         headerClass: "headershadow",
         bodyClass: "bg-grey",
         views: {
             'header': {
                 templateUrl: 'template/header-login.html'
             },

             'content': {
                 templateUrl: "views/error.html"
             }
         }
     });

     $urlRouterProvider.otherwise('/home');
 });

 // Header Class
 writeup.run(function($state, $rootScope, $stateParams) {
     $rootScope.$state = $state;
     $rootScope.$stateParams = $stateParams;
     $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
         $rootScope.headerClass = toState.headerClass;
         $rootScope.bodyClass = toState.bodyClass;
         angular.element(document.querySelector('body')).removeClass('scroll-hide');
         angular.element(document.querySelector('.side-back-drop')).addClass('hidden');
         angular.element(document.querySelector('.preloader')).addClass('hidden');

         document.body.scrollTop = document.documentElement.scrollTop = 0;
     });

 });


 //search-controller

 writeup.controller('SearchCtrl', function($scope, $timeout) {
     var myEl = angular.element(document.querySelector('.search-box-container'));
     var myE2 = angular.element(document.querySelector('.search-field-control'));
     $scope.field = function() {
         myEl.addClass('open');


         $timeout(function() {
             myE2.focus();
         }, 500);
     }

 });

 //menuctrl
 writeup.controller('MenuCtrl', function($scope) {
     var myEl = angular.element(document.querySelector('header'));
     var myE2 = angular.element(document.querySelector('.nav-icon'));
     var myE3 = angular.element(document.querySelector('.side-back-drop'));
     var myE4 = angular.element(document.querySelector('body'));
     document.querySelector('.nav-icon').addEventListener('click', function() {
         myEl.toggleClass('sideopen');
         myE2.toggleClass('open');
         myE3.toggleClass('hidden');
         myE4.toggleClass('scroll-hide');
     });
     //document.querySelector('.side-back-drop').addEventListener('click', function() {
     // myEl.removeClass('sideopen');
     //  myE2.removeClass('open');
     // myE3.addClass('hidden');
     //  myE4.removeClass('scroll-hide');
     // });
 });

 //revloution-ctrl
 // angular module
 writeup.controller("revCtrl", ["$scope", function($scope) {
     // slider settings object set to scope.
     $scope.slider = {

         sliderType: "standard",
         sliderLayout: "auto",
         gridwidth: 1170,
         gridheight: 720,
         autoHeight: "off",
         minHeight: "",
         fullScreenOffsetContainer: "",
         fullScreenOffset: "",
         delay: 9000,
         shadow: 0,
         navigation: {
             keyboardNavigation: "on",
             keyboard_direction: "horizontal",
             mouseScrollNavigation: "off",
             onHoverStop: "off",
             touch: {
                 touchenabled: "on",
                 swipe_threshold: 75,
                 swipe_min_touches: 1,
                 swipe_direction: "horizontal",
                 drag_block_vertical: false
             },
             arrows: {
                 enable: false

             },

             bullets: {

                 enable: true,
                 style: 'persephone',
                 tmp: '',
                 direction: 'horizontal',
                 rtl: false,

                 container: 'layergrid',
                 h_align: 'left',
                 v_align: 'bottom',
                 h_offset: 15,
                 v_offset: 80,
                 space: 5,
                 hide_onleave: false,
                 hide_onmobile: false,
                 hide_under: 0,
                 hide_over: 9999,
                 hide_delay: 200,
                 hide_delay_mobile: 1200

             },

         },
     };
 }]);

 //owl-controller
 writeup.controller('rvCtrl', function($scope, $timeout) {
     var owlAPi;
     var sync1 = angular.element(document.querySelector('.user-slider .owl-carousel'));
     var sync2 = angular.element(document.querySelector('.user-txt-slider .owl-carousel'));
     $scope.items = [1, 2, 3];
     $scope.number = [1, 2, 3];
     $scope.properties = {
         loop: true,
         margin: 30,
         nav: true,
         navContainer: '#customNav',
         navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
         center: true,
         dots: false,
         mouseDrag: false,
         responsiveRefreshRate: 200,
         slideSpeed: 2000,
         autoplay: true,
         responsive: {
             0: {
                 items: 1,
             },
             600: {
                 items: 1,
             },
             1000: {
                 items: 3
             }
         },
         onChanged: syncPosition2
     };

     $scope.propertiestxt = {
         nav: false,
         dots: true,
         loop: false,
         items: 1,
         animateOut: 'fadeOut',
         animateIn: 'fadeInUp',
         mouseDrag: false,
         responsiveRefreshRate: 100,
         onChanged: syncPosition1

     };


     //next-slide
     $scope.next = function($api) {
         owlAPi.trigger('next.owl.carousel');
     }

     //prev-slide

     $scope.prev = function($api) {
         owlAPi.trigger('prev.owl.carousel');
     }

     $scope.ready = function($api) {
         owlAPi = $api;

     };

     $scope.ready2 = function($api) {
         owlAPi = $api;

     };


     function syncPosition1(el) {

         var number = el.item.index;
         sync1.trigger('to.owl.carousel', [number, 300, true]);
     }

     function syncPosition2(el) {

         var count = el.item.count - 1;
         var current = Math.round(el.item.index - (el.item.count / 2) - .5);

         if (current < 0) {
             current = count;
         }
         if (current > count) {
             current = 0;
         }

         //end block

         sync2
             .find(".owl-item")
             .removeClass("current")
             .eq(current)
             .addClass("current");
         var onscreen = sync2.find('.owl-item.active').length - 1;
         var start = sync2.find('.owl-item.active').first().index();
         var end = sync2.find('.owl-item.active').last().index();

         if (current > end) {
             // sync2.data('owl.carousel').to(current, 100, true);

             sync2.trigger('to.owl.carousel', [current, 300, true]);

         }
         if (current < start) {


             sync2.trigger('to.owl.carousel', [current - onscreen, 300, true]);
         }

     }

 });

 //news-controller
 writeup.controller('newsCtrl', function($scope, $timeout) {
     var owlAPi;
     $scope.items = [1, 2, 3, 4];
     $scope.properties = {
         nav: true,
         navContainer: '#custom-news-Nav',
         navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
         loop: true,
         margin: 30,
         dots: false,
         autoplay: true,
         responsive: {
             0: {
                 items: 1,
             },
             600: {
                 items: 3,
             },
             1000: {
                 items: 4
             }
         },

     };

     $scope.ready = function($api) {
         owlAPi = $api;

     };

 });

 //team-controller
 writeup.controller('teamCtrl', function($scope, $timeout) {
     var owlAPi;
     $scope.items = [1, 2, 3, 4, 5];
     $scope.properties = {
         nav: true,
         navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
         loop: true,
         margin: 30,
         dots: false,
         autoplay: true,
         responsive: {
             0: {
                 items: 1,
             },
             600: {
                 items: 3,
             },
             1000: {
                 items: 4
             }
         },

     };

     $scope.ready = function($api) {
         owlAPi = $api;

     };

 });


 //competion-slider
 writeup.controller('compCtrl', function($scope, $timeout) {
     var owlAPi;
     var sync1 = angular.element(document.querySelector('.c-slider .owl-carousel'));
     var sync2 = angular.element(document.querySelector('.c-thumb-slider .owl-carousel'));
     $scope.items = [1, 2, 3, 4];
     $scope.number = [1, 2, 3, 4];
     $scope.properties = {
         loop: true,
         nav: false,
         dots: false,
         mouseDrag: false,
         responsiveRefreshRate: 200,
         items: 1,
         onChanged: syncPosition
     };

     $scope.propertiestxt = {
         nav: false,
         loop: false,
         dots: false,
         margin: 12,
         items: 4,
         mouseDrag: true,
         responsiveRefreshRate: 100,
         onChanged: syncPosition2

     };



     $scope.ready = function($api) {
         owlAPi = $api;

     };

     $scope.ready2 = function($api) {
         owlAPi = $api;

     };

     function syncPosition(el) {
         var count = el.item.count - 1;
         var current = Math.round(el.item.index - (el.item.count / 2) - .5);

         if (current < 0) {
             current = count;
         }
         if (current > count) {
             current = 0;
         }

         //end block

         sync2
             .find(".owl-item")
             .removeClass("current")
             .eq(current)
             .addClass("current");
         var onscreen = sync2.find('.owl-item.active').length - 1;
         var start = sync2.find('.owl-item.active').first().index();
         var end = sync2.find('.owl-item.active').last().index();

         if (current > end) {
             // sync2.data('owl.carousel').to(current, 100, true);

             sync2.trigger('to.owl.carousel', [current, 300, true]);

         }
         if (current < start) {


             sync2.trigger('to.owl.carousel', [current - onscreen, 300, true]);
         }
     }

     function syncPosition2(el) {

         var number = el.item.index;
         console.log(number);
         sync1.trigger('to.owl.carousel', [number, 300, true]);
     }

     sync2.on("click", ".owl-item", function(e) {
         e.preventDefault();
         var number = $(this).index();
         sync1.data('owl.carousel').to(number, 300, true);
     });

 });


 //arrow-ctrl
 writeup.controller('arrowctrl', function($scope, $window) {
     var myarrow = angular.element(document.querySelector('body'));
     $scope.offsetTop = function(target) {
         $('html, body').animate({
             scrollTop: myarrow.offset().top
         }, 1000);

     };
 });

 //modal
 writeup.controller('ModalCtrl', function($scope, $uibModal) {

     var $ctrl = this;
     $scope.animationsEnabled = true;
     //competition
     $scope.prize = function() {
         $uibModal.open({
             templateUrl: 'template/prize.html',
             controller: 'prizeCtrl',
             windowClass: 'app-modal',
             size: 'lg',
             animation: true,
         });

     };

     $scope.all = function() {
         var modalInstance = $uibModal.open({
             templateUrl: 'template/all-particepant.html',
             controller: 'allCtrl',
             windowClass: 'app-modal',
             size: 'lg',
             animation: true,

         });

     };

     $scope.report = function() {
         var modalInstance = $uibModal.open({
             templateUrl: 'template/report.html',
             controller: 'reportCtrl',
             windowClass: 'app-modal',
             size: 'lg',
             animation: true,

         });

     };





 });

 writeup.controller('prizeCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });
 writeup.controller('allCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });
 writeup.controller('reportCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 //smothscroll
 


writeup.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});

writeup.controller('ScrollCtrl', function($scope, $location, anchorSmoothScroll) {
    
    $scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };
  });