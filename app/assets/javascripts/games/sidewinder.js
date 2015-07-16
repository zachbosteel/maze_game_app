'use strict';

function sidewinder(grid){
  var grid = grid
  for (var row = 0; row < grid.preparedGrid.length - 1; row++){
    var rowArray = grid.preparedGrid[parseInt(row)];
    var run = []
    for (var column = 0; column < rowArray.length - 1; column++){
      var cell = grid.preparedGrid[parseInt(row)][parseInt(column)];
      run.push(cell);

      var atEasternBoundary = (!cell.east);
      var atNorthernBoundary = (!cell.north);

      var shouldCloseOut = (Math.floor(Math.random() * 2));

      if (!cell.east || cell.north && shouldCloseOut === 0){
        var randIndex = (Math.floor(Math.random() * run.length))
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