'use strict';

var Container = createjs.Container

var Hero = createSubclass(Container, 'Hero', {
  initialize: Hero$initialize
});


function Hero$initialize(name, x, y) {
  Container.prototype.initialize.apply(this, arguments);
  this.name = name;
  this.x = x;
  this.y = y;

  setupDisplay.call(this);

  this.on('tick', onTick);
};


function setupDisplay(){
  this.body = new createjs.Shape();
  this.body.graphics.beginFill('green').drawRect(0, 0, 50, 50);
  this.addChild(this.body);
}

function onTick(event){
  var actions = actionService.get();

  if (actions.moveright) this.x++;
  if (actions.moveleft) this.x--;
}

