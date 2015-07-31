(function(){

  angular.module("app").controller("game-ctrl", function($scope, $http){

    

    $scope.toggleGamePlayed = function(){
      $scope.gamePlayed = !$scope.gamePlayed;
    };

    $scope.triggerMaze = function(closeOutSeed, indexSeed){
      console.log(closeOutSeed)
      console.log(indexSeed)
      $http.post("/api/v1/trigger_maze", {closeOutSeed: closeOutSeed, indexSeed: indexSeed})
    };

    window.scope = $scope;
  });
}());