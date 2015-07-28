(function(){

  angular.module("app").controller("game-ctrl", function($scope, $http){

    

    $scope.toggleGamePlayed = function(){
      console.log("I just ran!")
      $scope.gamePlayed = !$scope.gamePlayed;
      console.log($scope.gamePlayed);
    };

    $http.get('api/v1/games/' + gameId)

    window.scope = $scope;
  });
}());