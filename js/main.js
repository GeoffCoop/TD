//  Final Project CS5410
//  By: Matt Ward and Kyle Cooper

let imgBackground = new Image();
imgBackground.isReady = false;
imgBackground.onload = function() {
  this.isReady = true;
};
imgBackground.src = './images/grassBackground.jpg';

let imgGroundProjectile = new Image();
imgGroundProjectile.isReady = false;
imgGroundProjectile.onload = function() {
  this.isReady = true;
};
imgGroundProjectile.src = './images/gProjectile.jpg';

let imgGroundBomb = new Image();
imgGroundBomb.isReady = false;
imgGroundBomb.onload = function() {
  this.isReady = true;
};
imgGroundBomb.src = './images/gBomb.jpg';

let imgAirProjectile = new Image();
imgAirProjectile.isReady = false;
imgAirProjectile.onload = function() {
  this.isReady = true;
};
imgAirProjectile.src = './images/aProjectile.jpg';

let imgAirMissile = new Image();
imgAirMissile.isReady = false;
imgAirMissile.onload = function() {
  this.isReady = true;
};
imgAirMissile.src = './images/aMissile.jpg';

let MyGame = {};

MyGame.graphics = (function() {
  'use strict';

  let canvas = document.getElementById('canvas-main');
  let context = canvas.getContext('2d');

  CanvasRenderingContext2D.prototype.clear = function() {
    this.save();
    this.setTransform(1, 0, 0, 1, 0, 0);
    this.clearRect(0, 0, canvas.width, canvas.height);
    this.restore();
  };

  function clear() {
    context.clear();
  }
  return {
    clear: clear,
    context: context
  };
}());
//////////////////////////////////////////////////////////////////////////////////////////////////////
MyGame.main = (function(graphics) {
  'use strict';
  // var edgeArr = [400, 0, 440, 0, 480, 0, 520, 0, 560, 0, 600, 0, 760, 0, 800, 0, 840, 0, 880, 0, 920, 0, 960, 0, 960, 40, 960, 80, 960, 120, 960, 160, 960, 200, 960, 360, 960, 400, 960, 440, 960, 480, 960, 520, 960, 560, 920, 560, 880, 560, 840, 560, 800, 560, 760, 560, 600, 560, 560, 560, 520, 560, 480, 560, 440, 560, 400, 560, 400, 520, 400, 480, 400, 440, 400, 400, 400, 360, 400, 200, 400, 160, 400, 120, 400, 80, 400, 40]
  var verticalEdges = [
    [960, 40],
    [960, 80],
    [960, 120],
    [960, 160],
    [960, 400],
    [960, 440],
    [960, 480],
    [960, 520],
    [400, 520],
    [400, 480],
    [400, 440],
    [400, 400],
    [400, 160],
    [400, 120],
    [400, 80],
    [400, 40]
  ]
  var horizEdges = [
    [440, 0],
    [480, 0],
    [520, 0],
    [560, 0],
    [800, 0],
    [840, 0],
    [880, 0],
    [920, 0],
    [920, 560],
    [880, 560],
    [840, 560],
    [800, 560],
    [560, 560],
    [520, 560],
    [480, 560],
    [440, 560]
  ]
  var cornerEdges = [
    [400, 0],
    [960, 0],
    [400, 560],
    [960, 560]
  ]
  var middleEdges = [
    [600, 0],
    [760, 0],
    [600, 560],
    [760, 560],
    [400, 200],
    [400, 360],
    [960, 200],
    [960, 360]
  ]
	var entrancesFirstRound = [
		{x:400,y:240},
		{x:400,y:280},
		{x:400,y:320}
	]
	var exitsFirstRound = [
		{x:960,y:240},
		{x:960,y:280},
		{x:960,y:320}
	]
	var entrancesOrExitsSecondAndThirdRounds = [
		[400,240],
		[400,280],
		[400,320],
		[960,240],
		[960,280],
		[960,320],
		[640,0],
		[680,0],
		[720,0],
		[640,560],
		[680,560],
		[720,560]
	]

	var vEdges = [].concat.apply([],verticalEdges);
	var hEdges = [].concat.apply([],horizEdges);
	var cEdges = [].concat.apply([],cornerEdges);
	var mEdges = [].concat.apply([],middleEdges);
	var edgeArr = vEdges.concat(hEdges,cEdges, mEdges);

  console.log('game initializing...');
  var lastTimeStamp = performance.now();
  var confettiParticles = [];
  var canvas = document.getElementById('canvas-main');
  var context = canvas.getContext('2d');
  var ctx = graphics.context;
  var gold = 1000;
  var inputStage = [];
  var towerPlacingGlowX = -120;
  var towerPlacingGlowY = -120;
  var placingTower = false;
  var towerType = 0;
  var taken = false;
  var inOptionsMenu = false;
  var showGrid = true;
  var showTowerCoverage = false;
  var showShortestPathLeftToRight = false;
  var showShortestPathUpToDown = false;
  var gridSize = 15;
  var menuSelectedTower = -1;
  var saveMenuSelectedTower = -1;
  var towers = [];
  var grid = []
  for (let row = 0; row < gridSize; row++) {
    grid.push([]);
    for (let col = 0; col < gridSize; col++) {
      grid[row].push({
        x: 400 + row * 40,
        y: col * 40,
				shortestPathNumber: -1,
				shortestPathNumberLeftToRight: -1
      });
    }
  }
	for (var i=0; i<entrancesFirstRound.length; i++){ //Stops player from placing towers in entrances on first round
		var a = ((entrancesFirstRound[i].x-400)/40)
		var b = ((entrancesFirstRound[i].y)/40)
		grid[a][b].shortestPathNumber=1000;
	}
	for (var i=0; i<exitsFirstRound.length; i++){ //Stops player from placing towers in exits on first round
		var a = ((exitsFirstRound[i].x-400)/40)
		var b = ((exitsFirstRound[i].y)/40)
		grid[a][b].shortestPathNumber=1000;
	}
  document.addEventListener("click", click); //Lets program handle click events and button events
  buttonEventHandlers();

	/////////////////////////////////////////////////////////////////////////////////////////////////////

  function makeTower(x, y, type) {
    towers.push({
      type: type, //1-groundProjectile, 2-groundBomb, 3-airProjectile, 4-airMissile
      level: 1,
      levelNext: 2,
      damage: 10,
      range: 8,
			rate: 10,
			sellFor: 8,
			upgradeCost: 5,
			initialCost: 10,
			damageNext: 15,
      rangeNext: 10,
      rateNext: 15,
      x: x,
      y: y
    });
    grid[(x - 400) / 40][y / 40].shortestPathNumber=1000;
  }

  function sellTower() {
    if (menuSelectedTower != -1) {
			gold+=towers[menuSelectedTower].sellFor;
			var a = (towers[menuSelectedTower].x-400)/40;
			var b = (towers[menuSelectedTower].y)/40;
			grid[a][b].shortestPathNumber=gridSize*gridSize;
      towers.splice(menuSelectedTower, 1);
      menuSelectedTower = -1;
    }
		var show = document.getElementById("upgradeOrSellButtons");
		show.style.display = "none";
  }

 	function upgradeTower() {
		if (menuSelectedTower != -1) {
	    if (towers[menuSelectedTower].level < 3) {
				if(towers[menuSelectedTower].upgradeCost > gold){
					console.log('Not enough money!');
				}
				else{
					gold-=towers[menuSelectedTower].upgradeCost;
		      towers[menuSelectedTower].level += 1;
					if(towers[menuSelectedTower].levelNext == 3){
						towers[menuSelectedTower].levelNext = "---";
					}
					else{
			      towers[menuSelectedTower].levelNext += 1;
					}
		      saveMenuSelectedTower = menuSelectedTower;
				}
	    }
		}
  }

	// this function trusts the grid will be square
	function makeShortestPath(grid, sentinel, endSpace) {
		console.log(grid)
	  for (var i = 0; i < grid.length; i++) {
	    for (var j = 0; j < grid.length; j++) {
	      if (grid[i][j].shortestPathNumber != sentinel) grid[i][j].shortestPathNumber = grid.length * grid.length;
	    }
	  }
	  var frontier = [];
	  for (var i = 0; i < endSpace.length; i++) {
			if((endSpace[i].y%40)==0){
				endSpace[i].y=endSpace[i].y/40;
			}
			if(((endSpace[i].x-400)%40)==0 && endSpace[i].x!=0){
				endSpace[i].x=(endSpace[i].x-400)/40;
			}
	    grid[endSpace[i].y][endSpace[i].x].shortestPathNumber = 0;
	    frontier.push(endSpace[i]);
	  }
	  while (frontier.length != 0) {
	    var focus = frontier.shift();
			if(((focus.x-400)%40)==0 && focus.x!=0){
		    focus.x = Math.floor((focus.x - 400) / 40);
			}
			if((focus.y%40)==0){
		    focus.y = Math.floor(focus.y / 40);
			}
	    //up
	    if (focus.x != 0) {
	      if (grid[focus.y][focus.x - 1].shortestPathNumber != sentinel && grid[focus.y][focus.x - 1].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber + 1) {
	        grid[focus.y][focus.x - 1].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber + 1;
	        frontier.push({
	          y: Math.ceil(focus.y*40),
	          x: Math.ceil(focus.x-1)*40+400
	        });
	      }
	    }
	    //down
	    if (focus.x != grid.length - 1) {
	      if (grid[focus.y][focus.x + 1].shortestPathNumber != sentinel && grid[focus.y][focus.x + 1].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber + 1) {
	        grid[focus.y][focus.x + 1].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber + 1;
	        frontier.push({
	          y: Math.ceil(focus.y*40),
	          x: Math.ceil(focus.x+1)*40+400
	        });
	      }
	    }
	    //left
	    if (focus.y != 0) {
	      if (grid[focus.y - 1][focus.x].shortestPathNumber != sentinel && grid[focus.y - 1][focus.x].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber + 1) {
	        grid[focus.y - 1][focus.x].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber + 1;
	        frontier.push({
	          y: Math.ceil(focus.y-1)*40,
	          x: Math.ceil(focus.x*40+400)
	        });
	      }
	    }
	    //right
	    if (focus.y != grid.length - 1) {
	      if (grid[focus.y + 1][focus.x].shortestPathNumber != sentinel && grid[focus.y + 1][focus.x].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber + 1) {
	        grid[focus.y + 1][focus.x].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber + 1;
	        frontier.push({
	          y: Math.ceil(focus.y+1)*40,
	          x: Math.ceil(focus.x*40+400)
	        });
	      }
	    }
	  }
	  return grid;
	}

  function renderBackground() {
    if (imgBackground.isReady) {
      ctx.drawImage(imgBackground,
        0, 0, canvas.width, canvas.height);
    }
  }

  function drawGrid(ctx, w, h, step) {
    ctx.beginPath();
    for (var x = 400; x <= w + 400; x += step) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    for (var y = 0; y <= h; y += step) {
      ctx.moveTo(400, y);
      ctx.lineTo(400 + w, y);
    }
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function drawMenu() {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "gray";
    var menuRectX = 0;
    var menuRectY = 0;
    var menuRectWidth = 400;
    var menuRectHeight = canvas.height;
    ctx.fillRect(menuRectX, menuRectY, menuRectWidth, menuRectHeight);
    ctx.globalAlpha = 1.0;
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Tower Defense!", 25, 55);
    ctx.lineWidth = 3;
    ctx.moveTo(0, 75);
    ctx.lineTo(400, 75);
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(gold, 90, 112);
    ctx.fillText("10", 260, 112);
    ctx.moveTo(0, 125);
    ctx.lineTo(400, 125);
    ctx.moveTo(0, 205);
    ctx.lineTo(400, 205);
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.75;
    ctx.stroke();
    if (menuSelectedTower != -1) {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(towers[menuSelectedTower].x + 20, towers[menuSelectedTower].y + 20, 120, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "gray";
      ctx.fillRect(30, 220, 330, 280);
      ctx.moveTo(30, 222);
      ctx.lineTo(360, 220);
      ctx.moveTo(360, 220);
      ctx.lineTo(360, 500);
      ctx.moveTo(360, 500);
      ctx.lineTo(30, 500);
      ctx.moveTo(30, 500);
      ctx.lineTo(30, 222);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "black";
      ctx.lineWidth = 2;
      ctx.moveTo(30, 260);
      ctx.lineTo(360, 260);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.moveTo(150, 260);
      ctx.lineTo(150, 500);
      ctx.moveTo(250, 260);
      ctx.lineTo(250, 500);
      ctx.moveTo(30, 290);
      ctx.lineTo(360, 290);
      ctx.moveTo(30, 320);
      ctx.lineTo(360, 320);
      ctx.moveTo(30, 350);
      ctx.lineTo(360, 350);
      ctx.moveTo(30, 380);
      ctx.lineTo(360, 380);
      ctx.moveTo(30, 410);
      ctx.lineTo(360, 410);
      ctx.moveTo(30, 440);
      ctx.lineTo(360, 440);
      ctx.moveTo(30, 470);
      ctx.lineTo(360, 470);
      ctx.font = "16px Arial";
      var tType = "";
      var tTargets = "";
      if (towers[menuSelectedTower].type == 1) {
        tType = "Ground Projectile";
        tTargets = "Ground";
      } else if (towers[menuSelectedTower].type == 2) {
        tType = "Ground Bomb";
        tTargets = "Ground";
      } else if (towers[menuSelectedTower].type == 3) {
        tType = "Air Projectile";
        tTargets = "Air";
      } else if (towers[menuSelectedTower].type == 4) {
        tType = "Air Missile";
        tTargets = "Air";
      }
      ctx.fillText(tType, 100, 250);
      ctx.fillText("Current", 165, 280);
      ctx.fillText("Next Level", 265, 280);
      ctx.fillText("Level", 40, 310);
      ctx.fillText(towers[menuSelectedTower].level, 165, 310);
      ctx.fillText(towers[menuSelectedTower].levelNext, 265, 310);
      ctx.fillText("Damage", 40, 340);
      ctx.fillText(towers[menuSelectedTower].damage, 165, 340);
      ctx.fillText(towers[menuSelectedTower].damageNext, 265, 340);
      ctx.fillText("Range", 40, 370);
      ctx.fillText(towers[menuSelectedTower].range, 165, 370);
      ctx.fillText(towers[menuSelectedTower].rangeNext, 265, 370);
      ctx.fillText("Firing Rate", 40, 400);
      ctx.fillText(towers[menuSelectedTower].rate, 165, 400);
      ctx.fillText(towers[menuSelectedTower].rateNext, 265, 400);
      ctx.fillText("Targets", 40, 430);
      ctx.fillText(tTargets, 165, 430);
      ctx.fillText("---", 265, 430);
      ctx.fillText("Upgrade Cost", 40, 460);
      ctx.fillText(towers[menuSelectedTower].upgradeCost, 165, 460);
      ctx.fillText("Sell For", 40, 490);
      ctx.fillText(towers[menuSelectedTower].sellFor, 165, 490);
      var show = document.getElementById("upgradeOrSellButtons");
      show.style.display = "block";
      ctx.stroke();
    } //If there is a tower selected
    ctx.moveTo(0, 510);
    ctx.lineTo(400, 510);
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 600);
    ctx.stroke();
  }

  function drawOptionsMenu() {
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show = document.getElementById("optionsMenu");
    show.style.display = "block";
    ctx.fillStyle = "gray";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "black"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.moveTo(0, 320);
    ctx.lineTo(400, 320);
    ctx.moveTo(0, 370);
    ctx.lineTo(400, 370);
    ctx.font = "30px Arial";
    ctx.fillText("Options", 150, 162);
    ctx.font = "16px Arial";
    ctx.fillText("Show Grid", 50, 210);
    ctx.fillText("Show Tower Coverage", 50, 240);
    ctx.fillText("Show Shortest Path Left to Right", 50, 270);
    ctx.fillText("Show Shortest Path Up to Down", 50, 300);
    ctx.font = "30px Arial";
    ctx.fillText("Controls", 150, 355);
    ctx.font = "16px Arial";
    ctx.fillText("U", 200, 410);
    ctx.fillText("S", 200, 440);
    ctx.fillText("G", 200, 470);
    ctx.stroke();
  }

  function drawAllTowerCoverages() {
    for (var t = 0; t < towers.length; t++) {
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(towers[t].x + 20, towers[t].y + 20, 120, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.0)';
      ctx.globalAlpha = 1;
      ctx.stroke();
      ctx.strokeStyle = 'black';
    }
  }

  function renderTowers(x, y, type) {
    if (type == 1) {
      if (imgGroundProjectile.isReady) {
        ctx.drawImage(imgGroundProjectile,
          x, y, 40, 40);
      }
    } else if (type == 2) {
      if (imgGroundBomb.isReady) {
        ctx.drawImage(imgGroundBomb,
          x, y, 40, 40);
      }
    } else if (type == 3) {
      if (imgAirProjectile.isReady) {
        ctx.drawImage(imgAirProjectile,
          x, y, 40, 40);
      }
    } else if (type == 4) {
      if (imgAirMissile.isReady) {
        ctx.drawImage(imgAirMissile,
          x, y, 40, 40);
      }
    }
  }

  function drawDots() { //Draw edge dots, temporarily to represent edges.
    ctx.globalAlpha = 0.75;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(towerPlacingGlowX + 20, towerPlacingGlowY + 20, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    for (var x = 0; x < edgeArr.length; x += 2) {
      ctx.fillStyle = "red";
      ctx.beginPath();
      var xx = edgeArr[x];
      var yy = edgeArr[x + 1];
      ctx.arc(xx + 20, yy + 20, 10, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      grid[(xx - 400) / 40][yy / 40].shortestPathNumber=1000;
    }
		if(showShortestPathUpToDown){
			ctx.fillStyle="gray"
	    for (var i=0;i<grid.length;i++){
	    	for (var j=0;j<grid.length;j++){
	    		if(grid[i][j].shortestPathNumber==1000){
						ctx.fillStyle="yellow";
						ctx.beginPath();
						ctx.arc(400+i*40+5,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
	    		}
					else if(grid[i][j].shortestPathNumber==225){
						ctx.fillStyle="orange";
						ctx.beginPath();
						ctx.arc(400+i*40+5,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					}
					else{
						ctx.fillStyle="rgb("+grid[i][j].shortestPathNumber*3+","+grid[i][j].shortestPathNumber*10+","+grid[i][j].shortestPathNumber*20+")";
						ctx.beginPath();
						ctx.arc(400+i*40+5,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					}
	    	}
			}
    }
		if(showShortestPathLeftToRight){
			ctx.fillStyle="gray"
	    for (var i=0;i<grid.length;i++){
	    	for (var j=0;j<grid.length;j++){
	    		if(grid[i][j].shortestPathNumber==1000){
						ctx.fillStyle="yellow";
						ctx.beginPath();
						ctx.arc(400+i*40+25,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
	    		}
					else if(grid[i][j].shortestPathNumber==225){
						ctx.fillStyle="orange";
						ctx.beginPath();
						ctx.arc(400+i*40+25,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					}
					else{
						ctx.fillStyle="rgb("+grid[i][j].shortestPathNumber*3+","+grid[i][j].shortestPathNumber*10+","+grid[i][j].shortestPathNumber*20+")";
						ctx.beginPath();
						ctx.arc(400+i*40+25,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					}
	    	}
			}
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
    ctx.stroke();
    ctx.strokeStyle = 'black';
  }

  function followMouse(x) {
    placingTower = true;
    towerType = x;
    menuSelectedTower = -1;
    $(document).mousemove(function(e) {
      $("#image" + x).css({
        left: e.pageX - 50,
        top: e.pageY - 50 - 20
      });
      towerPlacingGlowX = e.pageX - 100;
      towerPlacingGlowY = e.pageY - 120 - 20;
    });
  }

  function checkCheckBoxes() { //check to make sure check boxes haven't changed.
    if (document.querySelector('#showGridCheckBox').checked) {
      showGrid = true;
    } else {
      showGrid = false;
    }
    if (document.querySelector('#showTowerCoverageCheckBox').checked) {
      showTowerCoverage = true;
    } else {
      showTowerCoverage = false;
    }
    if (document.querySelector('#showShortestPathLeftToRightCheckBox').checked) {
      showShortestPathLeftToRight = true;
    } else {
      showShortestPathLeftToRight = false;
    }
    if (document.querySelector('#showShortestPathUpToDownCheckBox').checked) {
      showShortestPathUpToDown = true;
    } else {
      showShortestPathUpToDown = false;
    }
  }

  function buttonEventHandlers() {
    var button = document.getElementById("groundProjectile");
    if (button.addEventListener) {
      button.addEventListener('click', function() {
        followMouse(1);
      });
    }
    var button2 = document.getElementById("groundBomb");
    if (button2.addEventListener) {
      button2.addEventListener('click', function() {
        followMouse(2);
      });
    }
    var button3 = document.getElementById("airProjectile");
    if (button3.addEventListener) {
      button3.addEventListener('click', function() {
        followMouse(3);
      });
    }
    var button4 = document.getElementById("airMissile");
    if (button4.addEventListener) {
      button4.addEventListener('click', function() {
        followMouse(4);
      });
    }
    var button5 = document.getElementById("options");
    if (button5.addEventListener) {
      button5.addEventListener('mouseup', function() {
        if (inOptionsMenu) {
          inOptionsMenu = false;
        } else {
          inOptionsMenu = true;
        }
      });
    }
    var button6 = document.getElementById("quit");
    if (button6.addEventListener) {
      button6.addEventListener('click', function() {

      });
    }
    var button7 = document.getElementById("playNextLevel");
    if (button7.addEventListener) {
      button7.addEventListener('click', function() {

      });
    }
    var button8 = document.getElementById("upgradeKeyboardShortcut");
    if (button8.addEventListener) {
      button8.addEventListener('click', function() {

      });
    }
    var button9 = document.getElementById("sellKeyboardShortcut");
    if (button9.addEventListener) {
      button9.addEventListener('click', function() {

      });
    }
    var button10 = document.getElementById("playNextLevelKeyboardShortcut");
    if (button10.addEventListener) {
      button10.addEventListener('click', function() {

      });
    }
    var button11 = document.getElementById("upgrade");
    if (button11.addEventListener) {
      button11.addEventListener('click', function() {
        upgradeTower();
      });
    }
    var button12 = document.getElementById("sellBuilding");
    if (button12.addEventListener) {
      button12.addEventListener('click', function() {
        sellTower();
      });
    }
  }

  function click(event) { //handles only click events that don't get taken care of by the button event handler.
    let canvas = document.getElementById('canvas-main');
    var rect = canvas.getBoundingClientRect();
    var mousePointerX = 400 + 40 * Math.floor((event.clientX - rect.left - 400) / 40);
    var mousePointerY = 40 * Math.floor((event.clientY - rect.top) / 40);
    if (placingTower) {
			var a = ((mousePointerX-400)/40)
			var b = (mousePointerY/40)
			if(a>=0 && a<15 && b>=0 && b<15){
				if (grid[a][b].shortestPathNumber==1000){
					taken=true;
				}
			}
      if (taken != true) {
        if (mousePointerX >= 400 && mousePointerY >= 0 && mousePointerX <= 1000 && mousePointerY <= 600) { //If tower placed on grid
          makeTower(mousePointerX, mousePointerY, towerType);
          gold -= towers[towers.length - 1].initialCost;
          if (gold < 0) {
            gold += towers[towers.length - 1].initialCost;
            towers.splice(towers.length - 1, 1);
          }
          towerPlacingGlowX = -120;
          towerPlacingGlowY = -120;
          placingTower = false;
          towerType = 0;
          $("#image" + 1).css({
            left: -50,
            top: -50
          });
          $("#image" + 2).css({
            left: -50,
            top: -50
          });
          $("#image" + 3).css({
            left: -50,
            top: -50
          });
          $("#image" + 4).css({
            left: -50,
            top: -50
          });
          $(document).off('mousemove');
        } else if (mousePointerX >= 0 && mousePointerY >= 200 && mousePointerX <= 400 && mousePointerY <= 510) { //If clicked in throw away tower area
          towerPlacingGlowX = -120;
          towerPlacingGlowY = -120;
          placingTower = false;
          towerType = 0;
          $("#image" + 1).css({
            left: -50,
            top: -50
          });
          $("#image" + 2).css({
            left: -50,
            top: -50
          });
          $("#image" + 3).css({
            left: -50,
            top: -50
          });
          $("#image" + 4).css({
            left: -50,
            top: -50
          });
          $(document).off('mousemove');
        }
      } else {
        taken = false;
      }
    } else { //If user clicked but isn't placing a tower on the grid
      var anyTowerSelected = false;
      for (var t = 0; t < towers.length; t++) {
        if (towers[t].x == mousePointerX && towers[t].y == mousePointerY) { //If user clicks this tower, set tower equal to menuSelectedTower
					if(inOptionsMenu){
						inOptionsMenu=false;
					}
          anyTowerSelected = true;
          menuSelectedTower = t;
        }
      }
      if (anyTowerSelected == false) { //If a tower wasn't clicked, don't show stats for any tower
        menuSelectedTower = -1;
        var show = document.getElementById("upgradeOrSellButtons");
        show.style.display = "none";
      }
    }
  }

  function handleInputs(keyCode, elapsedTime) {
    if (keyCode === 39) { //right
    }
    if (keyCode === 37) { //left
    }
    if (keyCode === 38) { //up
    }
    if (keyCode === 40) { //down
    }
    if (keyCode === 13) { //enter
			makeShortestPath(grid, 1000, exitsFirstRound);
			for (var i=0; i<grid.length;i++){
					console.log(grid[i][0].shortestPathNumber,grid[i][1].shortestPathNumber,grid[i][2].shortestPathNumber,grid[i][3].shortestPathNumber,grid[i][4].shortestPathNumber,grid[i][5].shortestPathNumber,grid[i][6].shortestPathNumber,grid[i][7].shortestPathNumber,grid[i][8].shortestPathNumber,grid[i][9].shortestPathNumber,grid[i][10].shortestPathNumber,grid[i][11].shortestPathNumber,grid[i][12].shortestPathNumber,grid[i][13].shortestPathNumber,grid[i][14].shortestPathNumber)
			}
    }
    if (keyCode === 27) { //escape
    }
    if (keyCode === 85) { //U
      upgradeTower();
    }
    if (keyCode === 83) { //S
      sellTower();
    }
    if (keyCode === 71) { //G

    }
    if (keyCode === 68) { //D
      followMouse(1); //TODO - Remove this - This is just to help quickly draw mazes!
    }
    if (keyCode === 79) { //O
      if (inOptionsMenu) { //TODO - Remove this - This is just to help quickly draw mazes!
        inOptionsMenu = false;
      } else {
        inOptionsMenu = true;
      }
    }
  }

  function processInput(elapsedTime) {
    for (var input = 0; input < inputStage.length; input++) {
      handleInputs(inputStage[input], elapsedTime);
    }
    inputStage = [];
  }

  function update(elapsedTime) {
    processInput(elapsedTime);
    checkCheckBoxes();
    if (saveMenuSelectedTower != -1) { //Restores tower stats after clicking "update" button
      menuSelectedTower = saveMenuSelectedTower;
      saveMenuSelectedTower = -1;
    }
  }

  function render() {
    graphics.clear();
    renderBackground();
    if (showGrid) {
      drawGrid(context, canvas.width - 400, canvas.height, 40)
    }
    drawMenu();
    if (placingTower) {
      var show = document.getElementById("upgradeOrSellButtons");
      show.style.display = "none";
      ctx.fillStyle = "red";
      ctx.globalAlpha = .3;
      ctx.fillRect(0, 205, 400, 305)
      ctx.globalAlpha = 1;
    }
    if (showTowerCoverage) {
      drawAllTowerCoverages();
    }
    for (var t = 0; t < towers.length; t++) {
      renderTowers(towers[t].x, towers[t].y, towers[t].type);
    }
		drawDots();
    if (inOptionsMenu) {
      drawOptionsMenu();
    } else {
      var show = document.getElementById("towers");
      show.style.display = "block";
      var show = document.getElementById("optionsMenu");
      show.style.display = "none";
    }
    ctx.stroke();
  }
  window.addEventListener('keydown', function(event) {
    inputStage.push(event.keyCode);
  });

  function gameLoop(time) {
    let elapsedTime = (time - lastTimeStamp);
    update(elapsedTime);
    lastTimeStamp = time;
    render();
    requestAnimationFrame(gameLoop);
  };

  requestAnimationFrame(gameLoop);
}(MyGame.graphics));
