(function ()
{
    'use strict';

    angular
        .module('mp-app')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        // State definitions
        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: 'app/layout/main.html',
                        controller : 'MainCtrl as vm'
                    }/*,
                    'toolbar@app'   : {
                        templateUrl: 'app/toolbar/layouts/vertical-navigation/toolbar.html',
                        controller : 'ToolbarController as vm'
                    },
                    'footer@app': {
                        templateUrl: 'app/footer/footer.html',
                        controller : 'FooterController as vm'
                    }*/
                }
            });

        // State
        $stateProvider
            .state('app.home', {
                url    : '/',
                segment: "home",
                views  : {
                    'content@app': {
                        templateUrl: 'app/modules/main/main.html',
                        controller : 'MainCtrl as vm'
                    }
                }
            })
    }

})();
