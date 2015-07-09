'use strict' ;

var Container = createjs.Container

var Grid = createSubclass(Container, 'Grid', {
  initialize: Grid$initialize,
  brackets: Grid$brackets,
  randomCell: Grid$randomCell,
  size: Grid$size,
  eachRow: Grid$eachRow,
  eachCell: Grid$eachCell
});

function Grid$initialize(rows, columns){
    this.rows = rows;
    this.columns = columns;

    prepareGrid();
    configureCells();
};

function prepareGrid(){
  var rows = new Array(this.rows)
  for (row = 0; row === rows.length; row++){
    var columns = new Array(this.columns)
    for (column = 0; column === columns.length; column++){
      new Cell(row, column);
    };
  };
};

function configureCells(){

}