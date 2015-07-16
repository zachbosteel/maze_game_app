'use strict';

var Container = createjs.Container

var Cell = createSubclass(Container, 'Cell', {
  initialize: Cell$initialize,
  lLink: Cell$lLink,
  unlink: Cell$unlink,
  lLinks: Cell$links,
  linked: Cell$linked,
  neighbors: Cell$neighbors,
  draw: Cell$draw
});

function Cell$initialize(row, column, name, grid) {
  Container.prototype.initialize.apply(this, arguments);
  this.row = row;
  this.column = column;
  this.width = 80;
  this.height = 80;
  this.x = column * 80; 
  this.y = row * 80;
  this.name = name;
  this.visited = false;
  this.linklist = [];
  var parentGrid = grid;

  this.setBounds(this.x, this.y, this.height, this.width);

  parentGrid.addChild(this);

  this.north = false;
  this.south = false;
  this.east = false;
  this.west = false;

  var cell = this;
};

function Cell$lLink(cell) {
  this.linklist.push(cell);
  cell.linklist.push(this);
};

function Cell$unlink(cell) {
  var bidirectional = true
  delete this.linklist[cell]
  if (bidirectional){
    cell.unlink(this)
    bidirectional = false
  };
  return this
};

function Cell$links(){
  links=[]
  for (var link = 0; link < this.linklist.length; link++){
    links.push(link);
  }
  return links
};

function Cell$linked(cell){
  console.log(this.linklist)
  if (this.linklist[cell] !== -1){
    return true;
  } else {
    return false;
  }
};

function Cell$neighbors(){
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

function Cell$draw(){
  
};