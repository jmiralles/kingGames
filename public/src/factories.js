angular.module('GamesApp')
    .factory('Game', function($resource) {
        return $resource('/api/game/:short', { short: '@short' });
})
