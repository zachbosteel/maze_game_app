var doors = []

var distances = {
  initialize: distances_intialize,
  addDoors: distances_addDoors
};

function distances_intialize(root){
  this.root = root;
  this.includedCells = [];
  this.includedCells[this.root] = 0;
};

var endDoor = [];

function distances_addDoors(NORTHDOOR, SOUTHDOOR, EASTDOOR, WESTDOOR, grid){
  //randomizing start door position
  var possibleDoors = [];
  if (!this.root.north){
    var northdoor = new createjs.Bitmap(NORTHDOOR)
    possibleDoors.push(northdoor);
  };
  if (!this.root.south){
    var southdoor = new createjs.Bitmap(SOUTHDOOR)
    possibleDoors.push(southdoor);
  };
  if (!this.root.east){
    var eastdoor = new createjs.Bitmap(EASTDOOR)
    possibleDoors.push(eastdoor);
  };
  if (!this.root.west){
    var westdoor = new createjs.Bitmap(WESTDOOR)
    possibleDoors.push(westdoor);
  };
  var randomPosition = Math.floor((Math.random() * possibleDoors.length));
  var randomDoor = possibleDoors[randomPosition];
  randomDoor.x = this.root.x;
  randomDoor.y = this.root.y;
  grid.addChild(randomDoor);

  //randomizing finish line

  var furthestCell = distances.root;

  for (var i = 0; i < distances.includedCells.length; i++){
    if (furthestCell.distance < distances.includedCells[i].distance){
      furthestCell = distances.includedCells[i];
    }; 
  };
  var possibleEndDoors = [];
  if (!furthestCell.north){
    var northdoor = new createjs.Bitmap(NORTHDOOR)
    possibleEndDoors.push(northdoor);
  };
  if (!furthestCell.south){
    var southdoor = new createjs.Bitmap(SOUTHDOOR)
    possibleEndDoors.push(southdoor);
  };
  if (!furthestCell.east){
    var eastdoor = new createjs.Bitmap(EASTDOOR)
    possibleEndDoors.push(eastdoor);
  };
  if (!furthestCell.west){
    var westdoor = new createjs.Bitmap(WESTDOOR)
    possibleEndDoors.push(westdoor);
  };
  var randomEndPosition = Math.floor((Math.random() * possibleEndDoors.length));
  var randomEndDoor = possibleEndDoors[randomEndPosition];
  if (!randomEndDoor || randomEndDoor === -1){
    randomEndDoor = new createjs.Bitmap(SOUTHDOOR)
  }
  randomEndDoor.x = furthestCell.x;
  randomEndDoor.y = furthestCell.y;
  endDoor.push(randomEndDoor)
  grid.addChild(randomEndDoor);
};