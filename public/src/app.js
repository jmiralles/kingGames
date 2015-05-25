angular.module('GamesApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'LisController',
                templateUrl: 'views/list.html'
            });
        $locationProvider.html5Mode(true);
        
});
