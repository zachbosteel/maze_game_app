'use strict';      

      function init() {
        actionService.init(window);
        var stage = new createjs.Stage("main");

        var canvas = stage.canvas

        var world = new createjs.Container();
        world.x = 0
        world.y = 0
        stage.addChild(world)

        var hero = new Hero('Hero 1', 50, 50);
        world.addChild(hero);

        var _W = 500
          , _H = 700
          , xCentre = _W/2
          , yCentre = _H/2
          , wWidth = 1680
          , wHeight = 1050;

        console.log(hero)

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", function (event) { 
          stage.update();
          updateBackground();
          cameraMove();
        });

        function cameraMove(){
          if (wWidth > _W) {
            if (hero.x < wWidth - xCentre && hero.x > xCentre)
              world.x = -hero.x + xCentre;
            else if (hero.x >= wWidth - xCentre)
              world.x = -(wWidth - _W);
            else
              world.x = 0;
          }

          if (wHeight > _H) {
            if (hero.y < wHeight - yCentre && hero.y > yCentre)
              world.y = -hero.y + yCentre;
            else if (hero.y >= wHeight - yCentre)
              world.y = -(wHeight - _H);
            else
              world.y = 0;
          }
        };

        function updateBackground() {
          var x = world.x
            , y = world.y;

          canvas.style.backgroundPositionX = x + 'px';
          canvas.style.backgroundPositionY = y + 'px';
        };
      };
