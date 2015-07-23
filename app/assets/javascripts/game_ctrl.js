(function(){

  angular.module("app").controller("game-ctrl", function($scope){

    $scope.toggleGamePlayed = function(){
      console.log("I just ran!")
      $scope.gamePlayed = !$scope.gamePlayed;
      console.log($scope.gamePlayed);
    };

    window.scope = $scope;
  });
}());