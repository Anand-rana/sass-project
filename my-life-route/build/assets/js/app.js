 var liferoute = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'vjs.video','fancyboxplus' ,'ui.router.state.events', 'ngTagsInput', 'angular-owl-carousel-2', 'angular-nicescroll', 'ngAnimate', 'angularjs-dropdown-multiselect', 'chart.js']);

 //modal
 liferoute.controller('ModalCtrl', function($scope, $uibModal) {

     var $ctrl = this;
     $scope.animationsEnabled = true;
     //forgot
     $scope.forgot = function() {
         $uibModal.open({
             templateUrl: 'template/forgot.html',
             controller: 'forgotCtrl',
             windowClass: 'app-modal',
             size: 'md',
             animation: true,
         });

     };

     //invite-people
     $scope.invite = function() {
         $uibModal.open({
             templateUrl: 'template/invite.html',
             controller: 'inviteCtrl',
             windowClass: 'app-modal',
             size: 'md',
             animation: true,
         });

     };

     //confirm

     $scope.msg = function() {
         $uibModal.open({
             templateUrl: 'template/confirm-msg.html',
             controller: 'msgCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

     //work-history

     $scope.workhistory = function() {
         $uibModal.open({
             templateUrl: 'template/workhistory.html',
             controller: 'historyCtrl',
             windowClass: 'app-modal',
             size: 'lg',
             animation: true,
         });

     };

     //event-list

     $scope.interstedpeople = function() {
         $uibModal.open({
             templateUrl: 'template/interest-people.html',
             controller: 'pCtrl',
             windowClass: 'cp-modal',
             size: 'md',
             animation: true,
         });


     };

     //connection-delete

     $scope.cpremove = function() {
         $uibModal.open({
             templateUrl: 'template/cpremove.html',
             controller: 'cpCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });


     };

     //block-usr
     $scope.usrblock = function() {
         $uibModal.open({
             templateUrl: 'template/usrblock.html',
             controller: 'ublockCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });


     };

     //report
     $scope.report = function() {
         $uibModal.open({
             templateUrl: 'template/report.html',
             controller: 'reportCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });


     };

     $scope.reportpost = function() {
         $uibModal.open({
             templateUrl: 'template/report-post.html',
             controller: 'reportpostCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });


     };

     $scope.reportuser = function() {
         $uibModal.open({
             templateUrl: 'template/report-user.html',
             controller: 'reportuserCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });


     };

     $scope.reportadvert = function() {
         $uibModal.open({
             templateUrl: 'template/report-advert.html',
             controller: 'reportadvertCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });


     };
     $scope.reportbusiness = function() {
         $uibModal.open({
             templateUrl: 'template/report-business.html',
             controller: 'reportbusinessCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });


     };

     //insert-video

     $scope.insertvideo = function() {
         $uibModal.open({
             templateUrl: 'template/insertvideo.html',
             controller: 'videoCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };


     //stats-tips
     $scope.stattips = function() {
         $uibModal.open({
             templateUrl: 'template/stats-tips.html',
             controller: 'statstipsCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

     //tags-tips

     $scope.tagtips = function() {
         $uibModal.open({
             templateUrl: 'template/tag-tips.html',
             controller: 'tagtipsCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

     //confirm-adver

     $scope.advmsg = function() {
         $uibModal.open({
             templateUrl: 'template/advmsg-msg.html',
             controller: 'advmsgCtrl',
             windowClass: 'app-modal',
             size: 'md',
             animation: true,
         });

         //add-review
     };

     $scope.addreview = function() {
         $uibModal.open({
             templateUrl: 'template/addreview.html',
             controller: 'addreviewCtrl',
             windowClass: 'app-modal',
             size: 'md',
             animation: true,
         });


     };

     //confirm-change-email

     $scope.changeemail = function() {
         $uibModal.open({
             templateUrl: 'template/change-email-msg.html',
             controller: 'mailCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

     //confirm-change-password

     $scope.changepassword = function() {
         $uibModal.open({
             templateUrl: 'template/change-password-msg.html',
             controller: 'passwordCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

     //advance-search

     $scope.aliferoutesearch = function() {
         $uibModal.open({
             templateUrl: 'template/advance-liferoute-search.html',
             controller: 'adsearchCtrl',
             windowClass: 'search-modal',
             size: 'lg',
             animation: true,
         });

     };

     $scope.anewssearch = function() {
         $uibModal.open({
             templateUrl: 'template/advance-news-search.html',
             controller: 'newssearchCtrl',
             windowClass: 'search-modal',
             size: 'lg',
             animation: true,
         });

     };

     $scope.apeoplesearch = function() {
         $uibModal.open({
             templateUrl: 'template/advance-people-search.html',
             controller: 'peoplesearchCtrl',
             windowClass: 'search-modal',
             size: 'lg',
             animation: true,
         });

     };

     $scope.abusinesssearch = function() {
         $uibModal.open({
             templateUrl: 'template/advance-business-search.html',
             controller: 'businesssearchCtrl',
             windowClass: 'search-modal',
             size: 'lg',
             animation: true,
         });

     };

     //reset-password

     $scope.reset = function() {
         $uibModal.open({
             templateUrl: 'template/reset-password.html',
             controller: 'resetCtrl',
             windowClass: 'reset-modal',
             size: 'md',
             animation: true,
         });

     };


     //share-my-life-route
     $scope.shareroute = function() {
         $uibModal.open({
             templateUrl: 'template/share-route.html',
             controller: 'sharerouteCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

     $scope.shareemail = function() {
         $uibModal.open({
             templateUrl: 'template/share-email.html',
             controller: 'shareemailCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

     $scope.copy = function() {
         $uibModal.open({
             templateUrl: 'template/copy-link.html',
             controller: 'copyCtrl',
             windowClass: 'app-modal app-modal-sm',
             size: 'md',
             animation: true,
         });

     };

 });

 liferoute.controller('mainfeedCtrl', function($scope, $uibModal, $timeout) {
     $timeout(function() {
             $uibModal.open({
                 templateUrl: 'template/main-feed-popup.html',
                 controller: 'feedCtrl',
                 size: 'lg',
                 windowClass: 'app-modal f-modal',
                 backdrop: 'static'
             });
         },
         angular.element('body').addClass('blur-modal'),
         1000);


 });
 liferoute.controller('feedCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
         angular.element('body').removeClass('blur-modal');
     };
 });



 liferoute.controller('forgotCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });


 liferoute.controller('copyCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('sharerouteCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('shareemailCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });


 liferoute.controller('tagtipsCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('inviteCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('advmsgCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('adsearchCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('newssearchCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('peoplesearchCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('businesssearchCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });




 liferoute.controller('resetCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });



 liferoute.controller('mailCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('passwordCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });



 liferoute.controller('addreviewCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });


 liferoute.controller('msgCtrl', function($scope, $uibModalInstance, $timeout) {
     $timeout(function() {
         angular.element('#forgot-close').triggerHandler('click');
     }, 5);
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });



 liferoute.controller('pCtrl', function($scope, $uibModalInstance, $timeout) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };

     $timeout(function() {
         document.querySelector('.p-list').addEventListener('mouseover', function() {
             // angular.element(document.querySelector('.p-list')).getNiceScroll().resize();
             angular.element(document.querySelector("div[id^='ascrail']")).show();
         });
     }, 5);

 });

 liferoute.controller('cpCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('ublockCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });
 liferoute.controller('reportCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('reportuserCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('reportpostCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });

 liferoute.controller('reportadvertCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });
 liferoute.controller('reportbusinessCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });
 liferoute.controller('videoCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });



 liferoute.controller('statstipsCtrl', function($scope, $uibModalInstance) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };
 });


 liferoute.controller('historyCtrl', function($scope, $uibModalInstance, $timeout) {
     $scope.cancel = function() {
         $uibModalInstance.dismiss('cancel');
     };


     $timeout(function() {

         document.querySelector('.work-history-list').addEventListener('mouseover', function() {
             //angular.element(document.querySelector('.work-history-list')).getNiceScroll().resize();
             angular.element(document.querySelector("div[id^='ascrail']")).show();
         });
     }, 5);

 });








 //menuctrl
 liferoute.controller('MenuCtrl', function($scope) {
     var myEl = angular.element(document.querySelector('header'));
     var myE2 = angular.element(document.querySelector('.nav-icon'));
     var myE3 = angular.element(document.querySelector('.bg-back-drop'));
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

 //nav-controller
 liferoute.controller('navCtrl', function($scope) {
     var myEl = angular.element(document.querySelector('.nav-section'));
     var myE2 = angular.element(document.querySelector('.nav-icon'));
     var myE3 = angular.element(document.querySelector('.bg-back-drop'));
     var myE4 = angular.element(document.querySelector('body'));

     document.querySelector('.nav-icon').addEventListener('click', function() {
         myEl.toggleClass('sideopen');
         myE2.toggleClass('open');
         myE3.toggleClass('hidden');
         myE4.toggleClass('scroll-hide');
     });
 });

 //nav-directive
 liferoute.directive('nav', [
     function() {
         return {
             restrict: 'AC',
             link: function(scope, elem, attrs) {
                 var myEl = angular.element(document.querySelector('header'));
                 var myE2 = angular.element(document.querySelector('.nav-icon'));
                 var myE3 = angular.element(document.querySelector('.bg-back-drop'));
                 var myE4 = angular.element(document.querySelector('body'));
                 elem.bind('click', function() {
                     myEl.removeClass('sideopen');
                     myE2.removeClass('open');
                     myE3.addClass('hidden');
                     myE4.removeClass('scroll-hide');
                 });
             }
         };
     }
 ]);

 //sign-form-fields
 liferoute.controller('signupCtrl', function($scope) {

     $scope.choices = [{ id: 'choice1' }];

     $scope.addNewChoice = function() {
         var newItemNo = $scope.choices.length + 1;
         $scope.choices.push({ 'id': 'choice' + newItemNo });
     };

 });
 //news-controller
 liferoute.controller('reCtrl', function($scope, $timeout) {
     var owlAPi;
     $scope.items = [1, 2, 3, 4];
     $scope.properties = {
         nav: false,
         loop: true,
         margin: 30,
         dots: true,
         items: 1,
         autoplay: true,

     };

     $scope.ready = function($api) {
         owlAPi = $api;

     };

 });


 //fixed header
 liferoute.directive('setClassWhenAtTop', function($window) {
     var $win = angular.element($window); // wrap window object as jQuery object
     return {
         restrict: 'A',
         link: function(scope, element, attrs) {
             var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                 offsetTop = 80; // get element's top relative to the document
             $win.on('scroll', function(e) {
                 if ($win.scrollTop() >= offsetTop) {
                     element.addClass(topClass);
                     angular.element('.h-fix-height').addClass('open');
                 } else {
                     element.removeClass(topClass);
                     angular.element('.h-fix-height').removeClass('open');
                 }
             });
         }
     };
 });



 //sidebar


 liferoute.controller('sideCtrl', function($scope, $window) {
     var myEl = angular.element('.user-dtl-block');
     var myE2 = angular.element('.side-backdrop');
     var myE3 = angular.element('.my-post-cotainer');
     var myE4 = angular.element('.sp-btn');
     var myE5 = angular.element('.my-people-cotainer');



     $scope.sidemenu = function(element) {
         myEl.toggleClass('open');

         var size = $window.innerWidth;

         if (size < 767) {
             angular.element('body').addClass('scroll-hide');
         } else {
             angular.element('body').removeClass('scroll-hide');
         }


         if (myEl.hasClass('open')) {
             angular.element('.sp-btn').find('span').html('Hide Profile');
             myE2.removeClass('hidden');
         } else {
             angular.element('.sp-btn').find('span').html('Show Profile');
             myE2.addClass('hidden');
         }

     };



     $scope.profileside = function(element) {

         myE4.toggleClass('active');

         var size = $window.innerWidth;

         if (size < 767) {
             myEl.toggleClass('open');
             angular.element('body').addClass('scroll-hide');
         } else {
             myEl.toggleClass('push-left');
             myE3.toggleClass('open');
             myE5.toggleClass('open');
         }
     };

     $scope.closemenu = function(element) {
         angular.element('body').removeClass('scroll-hide');
         myEl.removeClass('open');
         myE2.addClass('hidden');
     }
 });

 //create-life-route
 liferoute.controller('routeCtrl', function($scope) {
     var ctrl = this;
     $scope.choices = [{ id: 'choice1' }];





     $scope.addNewChoice = function() {
         var newItemNo = $scope.choices.length + 1;
         $scope.choices.push({ 'id': 'choice' + newItemNo });
     };



 });


 //news-dtl
 liferoute.controller('newsCtrl', function($scope, $timeout) {
     var owlAPi;
     $scope.items = [1, 2, 3, 4];
     $scope.properties = {
         nav: true,
         navContainer: '#sliderNav',
         navText: ['<span class="prev"><i class="icon-arrow-left"></i></span>', '<span class="next"><i class="icon-arrow-right"></i></span>'],
         loop: true,
         margin: 0,
         dots: false,
         items: 1,
         autoplay: true
     };

     $scope.ready = function($api) {
         owlAPi = $api;

     };
 });

 //page-dtl-controller
 liferoute.controller('dtlCtrl', function($scope, $timeout, $timeout) {
     var myEl = angular.element('.page-dtl-overlay');
     var myE2 = angular.element('.page-dtl-overlay-container');
     var myE3 = angular.element('.page-dtl-sidebar');
     var myE4 = angular.element('.bg-back-drop');
     $scope.mainpopup = function() {
         myEl.addClass('open');
         myE2.addClass('show');
         angular.element('body').addClass('scroll-hide');

     }
     $scope.mainpopupclose = function() {
         myEl.removeClass('open');
         myE2.removeClass('show');
         angular.element('body').removeClass('scroll-hide');
     }


     $scope.sidenav = function() {
         myE3.addClass('open');
         myE4.removeClass('hidden');
         angular.element('body').addClass('scroll-hide');
     }


     $scope.closenav = function() {
         myE3.removeClass('open');
         myE4.addClass('hidden');
         angular.element('body').removeClass('scroll-hide');
     }



     var owlAPi;
     $scope.items = [1, 2];
     $scope.properties = {
         nav: true,
         navContainer: '#customnav',
         navText: ['<span class="prev"><i class="icon-arrow-left"></i></span>', '<span class="next"><i class="icon-arrow-right"></i></span>'],
         loop: true,
         margin: 0,
         dots: false,
         items: 1,
         autoplay: true
     };

     $scope.ready = function($api) {
         owlAPi = $api;

     };
 });

 //settin-ctrl
 liferoute.controller('settingCtrl', function($scope, $window) {
     var myEl = angular.element('.user-dtl-block');
     var myE3 = angular.element('.my-setting-cotainer');
     var myE4 = angular.element('.sp-btn');
     var appWindow = angular.element($window);
     appWindow.bind('resize', function() {
         var size = $window.innerWidth;

         if (size > 767) {
             angular.element('body').removeClass('scroll-hide');
         }

     });




     $scope.profileside = function(element) {

         myE4.toggleClass('active');

         var size = $window.innerWidth;

         if (size < 767) {
             myEl.toggleClass('open');
             angular.element('body').addClass('scroll-hide');
         } else {
             myEl.toggleClass('push-left');
             myE3.toggleClass('open');
         }


         if (myE4.hasClass('active')) {
             angular.element('.sp-btn').find('span').html('Show Profile');
         } else {
             angular.element('.sp-btn').find('span').html('Hide Profile');
         }
     };

     $scope.closemenu = function(element) {
         angular.element('body').removeClass('scroll-hide');
         myEl.removeClass('open');
         angular.element('.sp-btn').find('span').html('Show Profile');
     }
 });



 //chart-controller
 liferoute.controller("routeresultCtrl", function($scope) {
     $scope.labels = ["Download Sales", "In-Store Sales"];

     $scope.data = [500, 300];

     $scope.datasetOverride = {
         backgroundColor: [
             "#2abeeb",
             "#3ab54a",
         ]

     }

 });


 liferoute.controller("ageresultCtrl", function($scope) {


     $scope.labels = ['16-30', '30-40', '40-50', '50-60', '60+'];

     $scope.data = [
         [40, 25, 20, 10, 5, 0]
     ];

     $scope.datasetOverride = [{
             fill: true,
             backgroundColor: "#2fc0ea"
         },
         {
             fill: true,
             backgroundColor: "#2fc0ea"
         }
     ];


     $scope.options = {
         scales: {
             xAxes: [{
                 gridLines: {
                     display: false
                 }
             }],
             yAxes: [{
                 gridLines: {
                     display: false
                 }
             }]
         }
     };

 });



 liferoute.controller('searchCtrl', function($scope, $window) {

     //$scope.testmodel = [];
     //$scope.testmodeldata = [{ id: 1, label: "Test 1" }, { id: 2, label: "Test 2" }];
     $scope.inputsettings = {
         checkBoxes: true,
         showCheckAll: false,
         showUncheckAll: false,
         styleActive: true,
         scrollable: true,
         scrollableHeight: '200px',
         buttonClasses: 'drop-btn',
         smartButtonMaxItems: 2,
         smartButtonTextConverter: function(itemText, originalItem) { if (itemText === 'Action') { return 'Action!'; } return itemText; }
     };
     

 });

//login-controller
 
liferoute.controller('loginCtrl', function($scope, $timeout) {
     
     $scope.user = {};


 });