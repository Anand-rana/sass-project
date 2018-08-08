liferoute.config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
    $locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
}]);

//routing
liferoute.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.otherwise('/404');

    //
    // Now set up the states
    $stateProvider.state('home', {
        url: "/home",
        pathClass: "find-lg",
        views: {
            'header': {
                templateUrl: 'template/header.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@home': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/join-form.html'
            }

        }

    }).state('news', {
        url: '/news',
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@news': {
                templateUrl: 'template/filter-template/news.html',
            },
            'content': {
                templateUrl: 'views/news-search.html'
            }
        }
    }).state('liferoute', {
        url: '/liferoute',
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@liferoute': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/liferoute-search.html'
            }
        }
    }).state('people', {
        url: '/people',
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@people': {
                templateUrl: 'template/filter-template/people-filter.html',
            },
            'content': {
                templateUrl: 'views/people.html'
            }
        }
    }).state('business', {
        url: '/business',
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@business': {
                templateUrl: 'template/filter-template/business-filter.html',
            },
            'content': {
                templateUrl: 'views/business.html'
            }
        }
    }).state('signup-step-1', {
        url: '/signup-step-1',
        views: {
            'header': {
                templateUrl: 'template/header.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/signup-step-1.html'
            }
        }
    }).state('signup-step-2', {
        url: '/signup-step-2',
        headerClass: "h-nav",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/signup-step-2.html'
            }
        }
    }).state('landing', {
        url: '/landing',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@landing': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/landing.html'
            }
        }
    }).state('my-post', {
        url: '/my-post',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-post': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-post.html'
            }
        }
    }).state('post-life-route', {
        url: '/post-life-route',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@post-life-route': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/post-life-route.html'
            }
        }
    }).state('post-news-route', {
        url: '/post-news-route',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@post-news-route': {
                templateUrl: 'template/filter-template/news.html',
            },
            'content': {
                templateUrl: 'views/post-news-route.html'
            }
        }
    }).state('post-events-route', {
        url: '/post-events-route',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@post-events-route': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/post-events-route.html'
            }
        }
    }).state('post-events-expired', {
        url: '/post-events-expired',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@post-events-expired': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/post-events-expired.html'
            }
        }
    }).state('post-events-upcoming', {
        url: '/post-events-upcoming',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@post-events-upcoming': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/post-events-upcoming.html'
            }
        }
    }).state('saved-draft', {
        url: '/saved-draft',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@saved-draft': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/saved-draft.html'
            }
        }
    }).state('my-people', {
        url: '/my-people',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-people': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-people.html'
            }
        }
    }).state('my-people-connetion', {
        url: '/my-people-connetion',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-people-connetion': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-people-connetion.html'
            }
        }
    }).state('my-people-request', {
        url: '/my-people-request',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-people-request': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-people-request.html'
            }
        }
    }).state('my-people-follow-me', {
        url: '/my-people-follow-me',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-people-follow-me': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-people-follow-me.html'
            }
        }
    }).state('my-people-follow', {
        url: '/my-people-follow',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-people-follow': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-people-follow.html'
            }
        }
    }).state('my-people-blocked', {
        url: '/my-people-blocked',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-people-blocked': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-people-blocked.html'
            }
        }
    }).state('notification', {
        url: '/notification',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@notification': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/notification.html'
            }
        }
    }).state('other-user-profie', {
        url: '/other-user-profie',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@other-user-profie': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/other-user-profie.html'
            }
        }
    }).state('other-user-profie-connection', {
        url: '/other-user-profie-connection',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@other-user-profie-connection': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/other-user-profie-connection.html'
            }
        }
    }).state('my-profile', {
        url: '/my-profile',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-profile': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-profile.html'
            }
        }
    }).state('edit-profile-step-1', {
        url: '/edit-profile-step-1',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/edit-profile-step-1.html'
            }
        }
    }).state('edit-profile-step-2', {
        url: '/edit-profile-step-2',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/edit-profile-step-2.html'
            }
        }
    }).state('create-liferoute-step-1', {
        url: '/create-liferoute-step-1',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-liferoute-step-1.html'
            }
        }
    }).state('create-liferoute-step-2', {
        url: '/create-liferoute-step-2',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-liferoute-step-2.html'
            }
        }
    }).state('create-news', {
        url: '/create-news',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-news.html'
            }
        }
    }).state('create-event', {
        url: '/create-event',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-event.html'
            }
        }
    }).state('my-message', {
        url: '/my-message',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-message': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-message.html'
            }
        }
    }).state('life-route-dtl', {
        url: '/life-route-dtl',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@life-route-dtl': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/life-route-dtl.html'
            }
        }
    }).state('life-route-dtl-without-img', {
        url: '/life-route-dtl-without-img',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@life-route-dtl-without-img': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/life-route-dtl-without-img.html'
            }
        }
    }).state('life-route-dtl-other', {
        url: '/life-route-dtl-other',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@life-route-dtl-other': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/life-route-dtl-other.html'
            }
        }
    }).state('news-route-dtl', {
        url: '/news-route-dtl',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@news-route-dtl': {
                templateUrl: 'template/filter-template/news.html',
            },
            'content': {
                templateUrl: 'views/news-route-dtl.html'
            }
        }
    }).state('events-route-dtl', {
        url: '/events-route-dtl',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@events-route-dtl': {
                templateUrl: 'template/filter-template/news.html',
            },
            'content': {
                templateUrl: 'views/events-route-dtl.html'
            }
        }
    }).state('helpsupport', {
        url: '/helpsupport',
        abstarct: true,
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@helpsupport': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/help-support.html'
            }
        }
    }).state('helpsupport.section', {
        abstarct: true,
        url: "/:type",
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },

            'section': {
                templateUrl: function(stateParams) {
                    return 'views/view-' + stateParams.type + '.html'
                },
            }
        }

    }).state('my-pages', {
        url: '/my-pages',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-pages': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-pages.html'
            }
        }
    }).state('create-business', {
        url: '/create-business',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-business.html'
            }
        }
    }).state('create-company', {
        url: '/create-company',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-company.html'
            }
        }
    }).state('create-brand', {
        url: '/create-brand',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-brand.html'
            }
        }
    }).state('business-page', {
        url: '/business-page',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@business-page': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/business-page.html'
            }
        }
    }).state('page-reviews', {
        url: '/page-reviews',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-reviews': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-reviews.html'
            }
        }
    }).state('page-followers', {
        url: '/page-followers',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-followers': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-followers.html'
            }
        }
    }).state('page-likes', {
        url: '/page-likes',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-likes': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-likes.html'
            }
        }
    }).state('page-about', {
        url: '/page-about',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-about': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-about.html'
            }
        }
    }).state('page-route-mention', {
        url: '/page-route-mention',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-route-mention': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-route-mention.html'
            }
        }
    }).state('page-events', {
        url: '/page-events',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-events': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-events.html'
            }
        }
    }).state('page-events-dtl', {
        url: '/page-events-dtl',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-events-dtl': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-events-dtl.html'
            }
        }
    }).state('page-adverts', {
        url: '/page-adverts',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-adverts': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-adverts.html'
            }
        }
    }).state('page-adverts-active', {
        url: '/page-adverts-active',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-adverts-active': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-adverts-active.html'
            }
        }
    }).state('page-adverts-expired', {
        url: '/page-adverts-expired',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-adverts-expired': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-adverts-expired.html'
            }
        }
    }).state('page-adverts-all', {
        url: '/page-adverts-all',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-adverts-all': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-adverts-all.html'
            }
        }
    }).state('page-adverts-dtl', {
        url: '/page-adverts-dtl',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@page-adverts-dtl': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/page-adverts-dtl.html'
            }
        }
    }).state('about', {
        url: '/about',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@about': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/about.html'
            }
        }
    }).state('create-business-post', {
        url: '/create-business-post',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-business-post.html'
            }
        }
    }).state('create-advert', {
        url: '/create-advert',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'f-banner': {
                templateUrl: 'template/f-banner.html'
            },
            'content': {
                templateUrl: 'views/create-advert.html'
            }
        }
    }).state('my-setting', {
        url: '/my-setting',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-setting': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-setting.html'
            }
        }
    }).state('setting-change-email', {
        url: '/setting-change-email',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@setting-change-email': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/setting-change-email.html'
            }
        }
    }).state('setting-change-password', {
        url: '/setting-change-password',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@setting-change-password': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/setting-change-password.html'
            }
        }
    }).state('setting-notification', {
        url: '/setting-notification',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@setting-notification': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/setting-notification.html'
            }
        }
    }).state('my-stats', {
        url: '/my-stats',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-stats': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-stats.html'
            }
        }
    }).state('my-stats-connection', {
        url: '/my-stats-connection',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-stats-connection': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-stats-connection.html'
            }
        }
    }).state('my-stats-profile', {
        url: '/my-stats-profile',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-stats-profile': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-stats-profile.html'
            }
        }
    }).state('my-stats-news', {
        url: '/my-stats-news',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-stats-news': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-stats-news.html'
            }
        }
    }).state('my-stats-events', {
        url: '/my-stats-events',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-stats-events': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-stats-events.html'
            }
        }
    }).state('my-stats-message', {
        url: '/my-stats-message',
        headerClass: "h-nav",
        pathClass: "find-sm",
        views: {
            'header': {
                templateUrl: 'template/header-login.html'
            },
            'path': {
                templateUrl: 'template/findpath.html'
            },
            'formDetails@my-stats-message': {
                templateUrl: 'template/filter-template/life-route.html',
            },
            'content': {
                templateUrl: 'views/my-stats-message.html'
            }
        }
    });

});

// Header Class
liferoute.run(function($state, $rootScope, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.pathClass = toState.pathClass;
        $rootScope.headerClass = toState.headerClass;
        //console.log(toState);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        angular.element(document.querySelector('body')).removeClass('scroll-hide');
        angular.element(document.querySelector('.bg-back-drop')).addClass('hidden');
    });

});