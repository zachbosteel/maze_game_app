(function(){

  angular.module("app").controller("game-ctrl", function($scope, $http){

    $scope.triggerEnd = function(id){
      $http.post("/api/v1/trigger_end", {id: id});
    };

    $scope.toggleGamePlayedWin = function(winningPlayer){
      if (!$scope.gamePlayed){
        $scope.gamePlayed = !$scope.gamePlayed;
      };
      console.log("you win")
      $scope.winningPlayer = winningPlayer
      $scope.message1 = winningPlayer.info.name + " wins!"
    };

    $scope.toggleGamePlayedLoss = function(losingPlayer){
      if (!$scope.gamePlayed){
        $scope.gamePlayed = !$scope.gamePlayed;
      };
      console.log("you lose")
      $scope.losingPlayer = losingPlayer
      $scope.message2 = losingPlayer.info.name + " loses!"
    };

    $scope.triggerMaze = function(closeOutSeed, indexSeed){
      console.log(closeOutSeed)
      console.log(indexSeed)
      $scope.closeOutSeed = closeOutSeed
      $scope.indexSeed = indexSeed
      $http.post("/api/v1/trigger_maze", {closeOutSeed: closeOutSeed, indexSeed: indexSeed})
    };

    window.scope = $scope;
  });
}());