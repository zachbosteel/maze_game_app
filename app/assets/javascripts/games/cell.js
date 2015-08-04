'use strict';

var Container = createjs.Container

var Cell = createSubclass(Container, 'Cell', {
  initialize: Cell_initialize,
  lLink: Cell_lLink,
  unlink: Cell_unlink,
  lLinks: Cell_links,
  linked: Cell_linked,
  neighbors: Cell_neighbors,
  cellDistances: Cell_cellDistances
});

function Cell_initialize(row, column, name, grid, count) {
  Container.prototype.initialize.apply(this, arguments);
  this.row = row;
  this.column = column;
  this.width = 120;
  this.height = 120;
  this.x = column * 120; 
  this.y = row * 120;
  this.name = name;
  this.visited = false;
  this.linklist = [];
  this.distance;
  this.count = count;
  var parentGrid = grid;

  parentGrid.addChild(this);

  this.north = false;
  this.south = false;
  this.east = false;
  this.west = false;

  var cell = this;
};

function Cell_lLink(cell) {
  this.linklist.push(cell);
  cell.linklist.push(this);
};

function Cell_unlink(cell) {
  index1 = this.linklist.indexOf(cell);
  index2 = cell.linklist.indexOf(this);
  this.linklist.splice(cell, index1);
  cell.linklist.splice(this, index2);
};

function Cell_links(){
  links=[]
  for (var link = 0; link < this.linklist.length; link++){
    links.push(link);
  }
  return links
};

function Cell_linked(cell){
  console.log(this.linklist)
  if (this.linklist[cell] !== -1){
    return true;
  } else {
    return false;
  }
};

function Cell_neighbors(){
  var list = []
  if (this.north){
    list.push(this.north);
  };
  if (this.south){
    list.push(this.south);
  };
  if (this.east){
    list.push(this.east);
  };
  if (this.west){
    list.push(this.west);
  };
  return list
};

function Cell_cellDistances(){
  distances.initialize(this);
  this.distance = 0
  var frontier = [this];
  while (frontier){
    var newFrontier = [];
    
    for (var i = 0; i < frontier.length; i++){
      var cell = frontier[i];
      for (var j = 0; j < cell.linklist.length; j++){
        var linked = cell.linklist[j];
        if (distances.includedCells.indexOf(linked) != -1){
          continue;
        } else {
          distances.includedCells.push(linked);
          linked.distance = cell.distance + 1;
          newFrontier.push(linked);
          
        }; 
      };
    };
    if (newFrontier.length === 0){
      frontier = false;
    } else {
      frontier = newFrontier;
    };
  };
}; 