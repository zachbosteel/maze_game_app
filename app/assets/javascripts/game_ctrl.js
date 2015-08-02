(function(){

  angular.module("app").controller("game-ctrl", function($scope, $http, $route, $routeParams){

   

    $scope.setup = function(id) {
      $scope.gameId = id;
    }

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

    $scope.saveGame = function(){
      $http.patch('/api/v1/games/' + $scope.gameId, {winningPlayerId: $scope.winningPlayer.id, losingPlayerId: $scope.losingPlayer.id, closeOutSeed: $scope.closeOutSeed, indexSeed: $scope.indexSeed})
      window.location.assign("/games")
    }

    window.scope = $scope;
  });
}());