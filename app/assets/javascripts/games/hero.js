'use strict';

var Container = createjs.Container

var Hero = createSubclass(Container, 'Hero', {
  initialize: Hero$initialize,
  move: Hero$move
});


function Hero$initialize(name, x, y) {
  Container.prototype.initialize.apply(this, arguments);
  this.name = name;
  this.x = x;
  this.y = y;

  setupDisplay.call(this);
};


function setupDisplay(){
  this.body = new createjs.Shape();
  this.body.graphics.beginFill('green').drawRect(0, 0, 50, 50);
  this.addChild(this.body);
}

function Hero$move () {
  console.log("Moving...");
};