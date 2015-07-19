(function(){

  angular.module("app").controller("game_form_ctrl", function($scope){

    $scope.player1 = "Ted";
    $scope.player2 = "";

    $scope.players = [$scope.player1, $scope.player2];

    window.scope = $scope;
  });
}());