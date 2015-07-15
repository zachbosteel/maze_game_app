function huntAndKill(grid){
  var sum = 0
  var grid = grid
  var current = grid.randomCell();
  while (current){
    current.visited = true;
    allNeighbors = current.neighbors();
    unvisitedNeighbors = [];
    for (var i = 0; i < allNeighbors.length; i++){
      neighbor = allNeighbors[i];
      if (neighbor.linklist.length === 0){
        unvisitedNeighbors.push(neighbor)
      };
    };
    if (unvisitedNeighbors.length > 0){
      nextNeighbor = Math.floor((Math.random() * unvisitedNeighbors.length));
      current.lLink(unvisitedNeighbors[nextNeighbor], true);
      current = unvisitedNeighbors[nextNeighbor]
    } else {
      for (var row = 0; row < grid.preparedGrid.length; row++){
        for (var column = 0; column < row.length; column++){
          var cell = grid.preparedGrid[row][column];
          var visitedNeighbors = [];
          for (var i = 0; i < allNeighbors.length; i++){
            neighbor = allNeighbors[i];
            if (neighbor.lLinks.length > 0){
              visitedNeighbors.push(neighbor)
            };
          };
          if (cell.visited === false && visitedNeighbors.length > 0){
            current = cell;
            nextNeighbor = Math.floor((Math.random() * visitedNeighbors.length));
            current.lLink(visitedNeighbors[nextNeighbor], true);
            break;
          } else {
            current = false;
          };
        };
      };
    };
    sum++
  };
  console.log(sum)
};