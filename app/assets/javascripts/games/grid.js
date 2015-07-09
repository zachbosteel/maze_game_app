'use strict' ;

var Container = createjs.Container

var Grid = createSubclass(Container, 'Grid', {
  initialize: Grid$initialize,
  brackets: Grid$brackets,
  randomCell: Grid$randomCell,
  size: Grid$size
});

function Grid$initialize(rows, columns){
    this.rows = rows;
    this.columns = columns;

    this.grid = prepareGrid();
    configureCells();
};

function prepareGrid(){
  var arrayRows = new Array(this.rows)
  for (row = 0; row === arrayRows.length; row++){
    var arrayColumns = new Array(this.columns)
    for (column = 0; column === arrayColumns.length; column++){
      new Cell(row, column);
    };
  };
};

function configureCells(){
  for (var row in this.grid){
    for (var cell in row){
      var row = cell.row;
      var column = cell.column;
      cell.north = this[row - 1, column];
      cell.south = this[row + 1, column];
      cell.west = this[row, column - 1];
      cell.east = this[row, column - 1];
    };
  };
};

function Grid$brackets(row, column){
  if (row > 0 && row < this.rows - 1){
    //using this as an Unless statement
  } else {
    return nil; 
  };
  if (column > 0 && column < this.columns - 1){
    //using this as an Unless statement
  } else {
    return nil;
  };
  return this.grid[row][column];
};

function Grid$size(){
  return this.rows * this.columns;
};

function Grid$randomCell(){
  randomRow = Math.floor((Math.random() * this.rows) + 1);
  randomColumn = Math.floor((Math.random() * this.columns) + 1);
  return this[randomRow, randomColumn];
};
