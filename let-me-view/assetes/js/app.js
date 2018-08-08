(function() {
    var app = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'angular-bootstrap-select', 'rzModule', 'duScroll', 'mgo-angular-wizard', 'angular-nicescroll', 'monospaced.elastic']);
    //routing
    app.config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");
        //
        // Now set up the states
        $stateProvider.state('agent', {
            url: "/agent",
            templateUrl: "view/agent.html"
        }).state('home', {
            url: "/home",
            templateUrl: "view/home.html"
        }).state('landing', {
            url: "/landing",
            templateUrl: "view/landing.html",
        }).state('about', {
            url: "/about",
            templateUrl: "view/about.html",
        }).state('messagedtl', {
            url: "/messagedtl",
            templateUrl: "view/messagedtl.html",
        }).state('inbox', {
            url: "/inbox",
            templateUrl: "view/inbox.html",
        }).state('agentmessagedtl', {
            url: "/agentmessagedtl",
            templateUrl: "view/agentmessagedtl.html",
        }).state('identycheck', {
            url: "/identycheck",
            templateUrl: "view/identycheck.html",
        }).state('agrement', {
            url: "/agrement",
            templateUrl: "view/agrement.html",
        }).state('question', {
            url: "/question",
            templateUrl: "view/question.html",
        }).state('rateus', {
            url: "/rateus",
            templateUrl: "view/rateus.html",
        }).state('becomepartner', {
            url: "/becomepartner",
            templateUrl: "view/becomepartner.html",
        }).state('agentlisting', {
            url: "/listing",
            templateUrl: "view/agent-listing.html"
        }).state('searchlisting', {
            url: "/searchlisting",
            templateUrl: "view/searchlisting.html"
        }).state('agentprofile', {
            url: "/agentprofile",
            templateUrl: "view/agentprofile.html"
        }).state('buyerprofile', {
            url: "/buyerprofile",
            templateUrl: "view/buyerprofile.html"
        }).state('listing', {
            url: "/agent-listing",
            templateUrl: "view/listing.html"
        }).state('all-listing', {
            url: "/all-listing",
            templateUrl: "view/all-listing.html"
        }).state('property', {
            url: "/property",
            templateUrl: "view/property.html"
        }).state('propertyclosed', {
            url: "/propertyclosed",
            templateUrl: "view/property-bidclosed.html"
        }).state('propertyclosedover', {
            url: "/propertyclosedover",
            templateUrl: "view/property-bidclosedover.html"
        }).state('livebid', {
            url: "/livebid",
            templateUrl: "view/livebid.html"
        }).state('tradbid', {
            url: "/tradbid",
            templateUrl: "view/tradbid.html"
        }).state('profile', {
            url: "/profile",
            templateUrl: "view/profile.html"
        }).state('bidhistory', {
            url: "/bidhistory",
            templateUrl: "view/bidhistory.html"
        }).state('uploadproperty', {
            url: "/uploadproperty",
            templateUrl: "view/uploadproperty.html"
        }).state('faq', {
            url: "/faq",
            templateUrl: "view/faq.html"
        });
        $urlRouterProvider.otherwise('/home');
    });
    app.run(function($state, $rootScope) {
        $rootScope.$state = $state;
    })




    //login-modal
    app.controller('ModalCtrl', function($scope, $uibModal) {
        $scope.animationsEnabled = true;
        //login
        $scope.login = function() {
            $uibModal.open({
                templateUrl: 'template/login.html',
                controller: 'LoginCtrl',
                windowClass: 'app-modal'
            });
        };
        //Register
        $scope.register = function() {
            $uibModal.open({
                templateUrl: 'template/register.html',
                controller: 'RegisterCtrl',
                windowClass: 'app-modal'
            });
        };
        //buy-property
        $scope.buy = function() {
            $uibModal.open({
                templateUrl: 'template/buy.html',
                controller: 'BuyCtrl',
                windowClass: 'f-modal'
            });
        };
    });
    app.controller('agentCtrl', function($scope, $uibModal, $timeout) {
        $timeout(function() {
            $uibModal.open({
                templateUrl: 'template/agent-password.html',
                controller: 'agCtrl',
                windowClass: 'app-modal'
            });
        }, 5);
    });
    app.controller('agCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
    app.controller('LoginCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
    app.controller('BuyCtrl', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
    app.controller('RegisterCtrl', function($scope, $uibModalInstance, $timeout) {
        $timeout(function() {
            angular.element('#loginclose').triggerHandler('click');
        }, 5);
        $scope.cancel = function() {
            $uibModalInstance.close();
        };
    });
    //menuctrl
    app.controller('MenuCtrl', function($scope) {
        var myEl = angular.element(document.querySelector('.main-header'));
        var myE2 = angular.element(document.querySelector('#nav-icon1'));
        var myE3 = angular.element(document.querySelector('.side-back-drop'));
        var myE4 = angular.element(document.querySelector('body'));
        document.querySelector('#nav-icon1').addEventListener('click', function() {
            myEl.toggleClass('sideopen');
            myE2.toggleClass('open');
            myE3.toggleClass('hidden');
            myE4.toggleClass('scroll-hide');
        });
        document.querySelector('.side-back-drop').addEventListener('click', function() {
            myEl.removeClass('sideopen');
            myE2.removeClass('open');
            myE3.addClass('hidden');
            myE4.removeClass('scroll-hide');
        });
    });
    //nav-directive
    app.directive('navc', [
        function() {
            return {
                restrict: 'AC',
                link: function(scope, elem, attrs) {
                    var myEl = angular.element(document.querySelector('.main-header'));
                    var myE2 = angular.element(document.querySelector('#nav-icon1'));
                    var myE3 = angular.element(document.querySelector('.side-back-drop'));
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
    //sliderctrl
    app.controller('MainCtrl', function($scope) {
        $scope.click = function() {};
    }).directive("owlCarousel", function() {
        var linker = function(scope, element, attr) {
            angular.element(".inv-next").click(function() {
                $('.owl-carousel').trigger('next.owl.carousel');
            })
            angular.element(".inv-prev").click(function() {
                $('.owl-carousel').trigger('prev.owl.carousel');
            })
        };
        return {
            restrict: 'E',
            transclude: false,
            link: function(scope, element, attrs) {
                scope.initCarousel = function(element) {
                    // provide any default options you want
                    var defaultOptions = {
                        navText: ["<i class='icon-slide-arrow-left' aria-hidden='true'></i>", "<i class='icon-slide-arrow-right' aria-hidden='true'></i>"],
                    };
                    var customOptions = scope.$eval($(element).attr('data-options'));
                    // combine the two options objects
                    for (var key in customOptions) {
                        defaultOptions[key] = customOptions[key];
                    }
                    // init carousel
                    $(element).owlCarousel(defaultOptions);
                };
                linker();
            }
        };
    }).directive('owlCarouselItem', [function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }]);

    app.controller('slideCtrl', function($scope,$attrs) {
  $scope.ThumbnailClicked = function() {
    CloudZoom.quickStart();
    options = {}; // This would be your options object.
   $('.cloudzoom-gallery').data('cloudzoom');    
    
  };


    });
    //zoom-slider
    app.directive('zoom', [
        function() {
            return {
                restrict: 'AC',
                link: function(scope, element, attrs) {
                    CloudZoom.quickStart();
                    document.querySelector('.cloudzoom').addEventListener('click', function() {
                        var cloudZoom = $(this).data('CloudZoom');
                        console.log(cloudZoom);
                        //cloudZoom.closeZoom();
                        $.fancybox.open(cloudZoom.getGalleryList());
                    });
                }
            };
        }
    ]);
    app.directive('vslide', [
        function() {
            return {
                restrict: 'AC',
                link: function(scope, element, attrs) {
            $('#vslider').Thumbelina({
                        orientation: 'vertical', // Use vertical mode (default horizontal).
                        $bwdBut: $('#vslider .top'), // Selector to top button.
                        $fwdBut: $('#vslider .bottom')
                    });
                }
            };
        }
    ]);
    app.controller('pCtrl', function($scope, WizardHandler) {
        $scope.go = function(to) {
            WizardHandler.wizard().next();;
        };
        $scope.prev = function(to) {
            WizardHandler.wizard().previous();;
        };
    });
    app.controller('amCtrl', function($scope) {
        $scope.choices = [{
            id: 'choice1'
        }];
        $scope.addNewChoice = function() {
            var newItemNo = $scope.choices.length + 1;
            $scope.choices.push({
                'id': 'choice' + newItemNo
            });
        };
        $scope.removeChoice = function() {
            var lastItem = $scope.choices.length - 1;
            $scope.choices.splice(lastItem);
        };
    });
    app.controller('fCtrl', function($scope) {
        $scope.choices = [{
            id: 'choice1'
        }];
        $scope.addNewChoice = function() {
            var newItemNo = $scope.choices.length + 1;
            $scope.choices.push({
                'id': 'choice' + newItemNo
            });
        };
        $scope.removeChoice = function() {
            var lastItem = $scope.choices.length - 1;
            $scope.choices.splice(lastItem);
        };
    });
    //fixed header
    app.directive('setClassWhenAtTop', function($window) {
        var $win = angular.element($window); // wrap window object as jQuery object
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                    offsetTop = 50; // get element's top relative to the document
                $win.on('scroll', function(e) {
                    if ($win.scrollTop() >= offsetTop) {
                        element.addClass(topClass);
                    } else {
                        element.removeClass(topClass);
                    }
                });
            }
        };
    }).controller('hCtrl', function($scope) {
        $scope.scrollTo = function(target) {};
    });
    //scorll-agrement
    app.controller('agsCtrl', function($scope, $uibModal) {
        $scope.scrollbarConfig = {
            theme: 'minimal-dark',
            scrollInertia: 500,
            setHeight: 400
        }
    });
})();