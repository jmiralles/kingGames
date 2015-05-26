angular.module('GamesApp')
    .controller('ListController', function ($scope, Game) {
        $scope.games = Game.query();
        $scope.fields = ['name', 'short'];
    
        $scope.sort = function(field) {
            $scope.sort.field = field; 
            $scope.sort.order = !$scope.sort.order;
        }
        
        $scope.sort.field = 'name';
        $scope.sort.order = false;
        
})