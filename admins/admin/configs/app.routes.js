trained_admin.config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $httpProvider.interceptors.push('httpInterceptor');
  //  $locationProvider.html5Mode(true);
}]);



trained_admin.config(function($stateProvider, $httpProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  //$urlRouterProvider.otherwise('/404');
  $stateProvider
    .state('main', {
      abstract: true,
      templateUrl: 'views/main.html',
      controller: "commanCtrl",
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "services/commonService.js",
              "controllers/commanCtrl.js"
            ]
          }]);
        }]
      }

    }).state('login', {
      url: "/login",
      authenticate: false,
      controller: "loginCtrl",
      templateUrl: 'views/login.html',
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "services/commonService.js",
              "controllers/loginCtrl.js"
            ]
          }]);
        }]
      }

    }).state('forgot', {
      url: "/forgot",
      authenticate: false,
      controller: "forgotCtrl",
      templateUrl: 'views/forgot.html',
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "services/commonService.js",
              "controllers/forgotCtrl.js"
            ]
          }]);
        }]
      }

    })
    .state('reset_password', {
        url: "/reset_password/:token",
        templateUrl: "views/resetPassword.html",
        authenticate: false,
        callByBoth: true,
        controller: 'forgotCtrl',
        
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load([{
              files: [
                "services/commonService.js",
                "controllers/forgotCtrl.js"
              ]
            }]);
          }]
        }
    }).state('main.dashboard', {
      url: "/dashboard",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/dashboard.html',
          controller: "dashboardCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/dashboardCtrl.js"
            ]
          }]);
        }]
      }

    })
    .state('main.usermanagement', {
      url: "/usermanagement",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/user-management.html',
          controller: "userListCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/userListCtrl.js"
            ]
          }]);
        }]
      }

    }).state('main.user_detail', {
      url: "/user_details/:user_id",
      authenticate: true,
      params: {
           user_id: null
       },
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/user-detail.html',
          controller: "userListCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },

      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/userListCtrl.js"
            ]
          }]);
        }]
      }

    }).state('main.trainermanagement', {
      url: "/trainer-management",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/trainer-management.html',
          controller: "trainerListCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/trainerListCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.trainer_detail', {
      url: "/trainer-detail/:user_id",
      authenticate: true,
      params: {
           user_id: null
       },
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/trainer-detail.html',
          controller: "trainerListCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },

      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/trainerListCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.change_password', {
      url: "/change_password",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/change-password.html',
          controller: "changePasswordCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/changePasswordCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.manage_testimonials', {
      url: "/manage-testimonials",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/manage-testimonials.html',
          controller: "testimonialCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/testimonialCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.add_testimonials', {
      url: "/add-testimonials",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/add-testimonials.html',
          controller: "testimonialCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/testimonialCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.content_management', {
      url: "/content-management",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/content-management.html',
          controller: "contentCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/contentCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.content_detail', {
      url: "/content-detail/:page_id",
      authenticate: true,
      params: {
           page_id: null
       },
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/content-detail.html',
          controller: "contentCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/contentCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.faqList', {
      url: "/faqList",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/faq-list.html',
          controller: "contentCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/contentCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.addFaq', {
      url: "/addFaq",
      authenticate: true,
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/addFaq.html',
          controller: "contentCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/contentCtrl.js"
            ]
          }]);
        }]
      }
    }).state('main.edit_faq', {
      url: "/edit_faq/:faq_id",
      authenticate: true,
      params: {
           faq_id: null
       },
      views: {
        'header': {
          templateUrl: 'views/templates/header.html'

        },
        'sidebar': {
          templateUrl: 'views/templates/sidebar.html',
        },
        'content': {
          templateUrl: 'views/editFaq.html',
          controller: "contentCtrl"
        },
        'footer': {
          templateUrl: 'views/templates/footer.html'
        }
      },
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([{
            files: [
              "controllers/contentCtrl.js"
            ]
          }]);
        }]
      }
    });
});



trained_admin.run(function($rootScope, $state, Session) {
  console.log("run admin")
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    console.log("change start change=========================", toState)
    // $("html, body").animate({scrollTop: 0}, 200);

    if (!Session.get("accessToken") && toState.authenticate) {
      $state.go("login");
    }
  });
})
