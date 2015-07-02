'use strict' ;

var Container = createjs.Container

var Cell = createSubclass(Container, 'Cell', {
  initialize: Cell$initialize,
  lLink: Cell$lLink,
  unlink: Cell$unlink,
  links: Cell$links,
  linked: Cell$linked,
  neighbors: Cell$neighbors
});

function Cell$initialize(row, column) {
  this.row = row;
  this.column = column;
  this.linklist = {};

  this.bidirectional = true

  this.north = false;
  this.south = false;
  this.east = false;
  this.west = false;
};

function Cell$lLink(cell) {
  var bidirectional = true
  this.linklist[cell] = true;
  if (bidirectional){
    cell.lLink(this)
    bidirectional = false
  }
  return this
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
  for (var key in this.linklist){
    links.push(key);
  }
  return links
};

function Cell$linked(cell){
  if (cell in this.linklist){
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
