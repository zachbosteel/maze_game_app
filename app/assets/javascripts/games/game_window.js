'use strict';      

      function init() {
        actionService.init(window);
        var stage = new createjs.Stage("main");

        var hero1 = new Hero('Hero 1', 50, 50);
        stage.addChild(hero1);

        console.log(hero1)

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", function (event) { 
          stage.update();
        });
      };
