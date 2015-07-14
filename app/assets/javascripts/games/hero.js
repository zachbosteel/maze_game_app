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

  _setupDisplay.call(this);
  _setupProperties.call(this);

  this.on('tick', onTick);
};


function _setupDisplay(){
  this.body = new createjs.Shape();
  this.body.graphics.beginFill('green').drawRect(0, 0, 20, 20);
  this.addChild(this.body);
}

function _setupProperties(){
  this.name = 'hero';
  this.inertia = 0;
};

function onTick(event){
  var actions = actionService.get();

  if (actions.moveright) this.x += 10;
  if (actions.moveleft) this.x -= 10;
  if (actions.moveup) this.y -= 10;
  if (actions.movedown) this.y += 10;
}

