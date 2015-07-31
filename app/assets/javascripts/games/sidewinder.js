'use strict';

var closeOutSeedPrep = {};
var indexSeedPrep = {};

function sidewinder(grid, closeOutSeed, indexSeed){
  var grid = grid;
  if (closeOutSeed){
    var closeOutSeed = closeOutSeed
  }
  if (indexSeed){
    var indexSeed = indexSeed
  }
  for (var row = 0; row < grid.preparedGrid.length; row++){
    var rowArray = grid.preparedGrid[parseInt(row)];
    var run = []
    for (var column = 0; column < rowArray.length; column++){
      var cell = grid.preparedGrid[parseInt(row)][parseInt(column)];
      run.push(cell);

      var shouldCloseOut;

      if (closeOutSeed){
        shouldCloseOut = closeOutSeed[cell.count];
      } else {
        shouldCloseOut = (Math.floor(Math.random() * 2));
        closeOutSeedPrep[cell.count] = shouldCloseOut;
      };

      if (!cell.east || cell.north && shouldCloseOut === 0){
        var randIndex;
        if (indexSeed){
          randIndex = indexSeed[cell.count]
        } else {
          randIndex = (Math.floor(Math.random() * run.length));
          indexSeedPrep[cell.count] = randIndex;
        }
        var member = run[randIndex];
        if (member.north){
          member.lLink(member.north)
        };
        run.length = 0;
      } else {
        cell.lLink(cell.east);
      };
    };
  };
};