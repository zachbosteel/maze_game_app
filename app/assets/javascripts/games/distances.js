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

function distances_addDoors(NORTHDOOR, SOUTHDOOR, EASTDOOR, WESTDOOR){
  //randomizing start door position
  possibleDoors = [];
  if (!this.root.north){
    possibleDoors.push(NORTHDOOR);
  };
  if (!this.root.south){
    possibleDoors.push(SOUTHDOOR);
  };
  if (!this.root.east){
    possibleDoors.push(EASTDOOR);
  };
  if (!this.root.west){
    possibleDoors.push(WESTDOOR);
  };
  randomPosition = Math.floor((Math.random() * possibleDoors.length));
  randomDoor = possibleDoors[randomPosition];
  randomDoor.x = this.root.x;
  randomDoor.y = this.root.y;
  grid.addChildAt(randomDoor, 5);

  //randomizing finish line

  var furthestCell = distances.root;

  for (var i = 0; i < distances.includedCells.length; i++){
    if (furthestCell.distance < distances.includedCells[i].distance){
      furthestCell = distances.includedCells[i];
    }; 
  };
  // Math.max.apply(null,
  //                 Object.keys(this.includedCells).map(function(e) {
  //                               return this.includedCells[e];
  //                       }));

};