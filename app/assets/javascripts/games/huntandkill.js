function huntAndKill(grid){
  var visitedCells = 0
  var grid = grid
  var current = grid.randomCell();
  while (current){
    visitedCells++
    console.log(visitedCells);
    console.log("Beginning random walk.")
    current.visited = true;
    allNeighbors = current.neighbors();
    unvisitedNeighbors = [];
    for (var i = 0; i < allNeighbors.length; i++){
      neighbor = allNeighbors[i];
      if (!neighbor.visited){
        unvisitedNeighbors.push(neighbor)
      };
    };
    if (unvisitedNeighbors.length > 0){
      console.log("Choosing new cell.")
      nextNeighbor = Math.floor((Math.random() * unvisitedNeighbors.length));
      current.lLink(unvisitedNeighbors[nextNeighbor], true);
      current = unvisitedNeighbors[nextNeighbor]
    } else {
        for (var row = 0; row < grid.preparedGrid.length; row++){
          var rowArray = grid.preparedGrid[row];
          for (var column = 0; column < rowArray.length; column++){
            console.log("Beginning cell search...")
            var cell = grid.preparedGrid[row][column];
            if (cell.visited){
              continue;
            };
            var allNeighbors2 = cell.neighbors();
            var visitedNeighbors = [];
            for (var i = 0; i < allNeighbors2.length; i++){
              neighbor = allNeighbors2[i];
              if (neighbor.visited){
                visitedNeighbors.push(neighbor)
              };
            };
            if (visitedNeighbors.length > 0){
              console.log("Selecting new current cell...");
              current = cell;
              nextNeighbor = Math.floor((Math.random() * visitedNeighbors.length));
              current.lLink(visitedNeighbors[nextNeighbor], true);
              break;
            } else if (cell.row === (grid.preparedGrid.length - 1) && cell.column === (rowArray.length - 1)) {
              current = null;
              console.log("Current is null.");
            };
          };
          break;
        };
    };
  };
};