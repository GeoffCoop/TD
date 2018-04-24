//  Final Project CS5410
//  By: Matt Ward and Kyle Cooper

let imgBackground = new Image();
imgBackground.isReady = false;
imgBackground.onload = function() {
  this.isReady = true;
};
imgBackground.src = './images/brushed.jpg';

let imgGroundProjectile = new Image();
imgGroundProjectile.isReady = false;
imgGroundProjectile.onload = function() {
  this.isReady = true;
};
imgGroundProjectile.src = './images/ground-cannon22.png';

let imgGroundBomb = new Image();
imgGroundBomb.isReady = false;
imgGroundBomb.onload = function() {
  this.isReady = true;
};
imgGroundBomb.src = './images/ground-bomb.png';

let imgAirProjectile = new Image();
imgAirProjectile.isReady = false;
imgAirProjectile.onload = function() {
  this.isReady = true;
};
imgAirProjectile.src = './images/air-cannon22.png';

let imgAirMissile = new Image();
imgAirMissile.isReady = false;
imgAirMissile.onload = function() {
  this.isReady = true;
};
imgAirMissile.src = './images/air-bomb.png';

let imgPlane = new Image();
imgPlane.isReady = false;
imgPlane.onload = function() {
  this.isReady = true;
};
imgPlane.src = './images/plane.png';

let imgAnt = new Image();
imgAnt.isReady = false;
imgAnt.onload = function() {
  this.isReady = true;
};
imgAnt.src = './images/ant.png';

let imgSpider = new Image();
imgSpider.isReady = false;
imgSpider.onload = function() {
  this.isReady = true;
};
imgSpider.src = './images/spider.png';

let imgGroundArrow = new Image();
imgGroundArrow.isReady = false;
imgGroundArrow.onload = function() {
  this.isReady = true;
};
imgGroundArrow.src = './images/air-arrow.png';

let imgGroundMissile = new Image();
imgGroundMissile.isReady = false;
imgGroundMissile.onload = function() {
  this.isReady = true;
};
imgGroundMissile.src = './images/air-missile2.png';

let imgAirArrow = new Image();
imgAirArrow.isReady = false;
imgAirArrow.onload = function() {
  this.isReady = true;
};
imgAirArrow.src = './images/ground-arrow.png';

let imgMissile = new Image();
imgMissile.isReady = false;
imgMissile.onload = function() {
  this.isReady = true;
};
imgMissile.src = './images/ground-missile2.png';

let imgHb4_1 = new Image();
imgHb4_1.isReady = false;
imgHb4_1.onload = function() {
  this.isReady = true;
};
imgHb4_1.src = './images/healthbars/hb4.1.png';

let imgHb4_2 = new Image();
imgHb4_2.isReady = false;
imgHb4_2.onload = function() {
  this.isReady = true;
};
imgHb4_2.src = './images/healthbars/hb4.2.png';

let imgHb4_3 = new Image();
imgHb4_3.isReady = false;
imgHb4_3.onload = function() {
  this.isReady = true;
};
imgHb4_3.src = './images/healthbars/hb4.3.png';

let imgHb4_4 = new Image();
imgHb4_4.isReady = false;
imgHb4_4.onload = function() {
  this.isReady = true;
};
imgHb4_4.src = './images/healthbars/hb4.4.png';

let imgHb4_5 = new Image();
imgHb4_5.isReady = false;
imgHb4_5.onload = function() {
  this.isReady = true;
};
imgHb4_5.src = './images/healthbars/hb4.5.png';

let imgHb8_1 = new Image();
imgHb8_1.isReady = false;
imgHb8_1.onload = function() {
  this.isReady = true;
};
imgHb8_1.src = './images/healthbars/hb8.1.png';

let imgHb8_2 = new Image();
imgHb8_2.isReady = false;
imgHb8_2.onload = function() {
  this.isReady = true;
};
imgHb8_2.src = './images/healthbars/hb8.2.png';

let imgHb8_3 = new Image();
imgHb8_3.isReady = false;
imgHb8_3.onload = function() {
  this.isReady = true;
};
imgHb8_3.src = './images/healthbars/hb8.3.png';

let imgHb8_4 = new Image();
imgHb8_4.isReady = false;
imgHb8_4.onload = function() {
  this.isReady = true;
};
imgHb8_4.src = './images/healthbars/hb8.4.png';

let imgHb8_5 = new Image();
imgHb8_5.isReady = false;
imgHb8_5.onload = function() {
  this.isReady = true;
};
imgHb8_5.src = './images/healthbars/hb8.5.png';

let imgHb8_6 = new Image();
imgHb8_6.isReady = false;
imgHb8_6.onload = function() {
  this.isReady = true;
};
imgHb8_6.src = './images/healthbars/hb8.6.png';

let imgHb8_7 = new Image();
imgHb8_7.isReady = false;
imgHb8_7.onload = function() {
  this.isReady = true;
};
imgHb8_7.src = './images/healthbars/hb8.7r.png';

let imgHb8_8 = new Image();
imgHb8_8.isReady = false;
imgHb8_8.onload = function() {
  this.isReady = true;
};
imgHb8_8.src = './images/healthbars/hb8.8r.png';

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

let arrowShootSound = new sound("./sounds/arrow.wav");
let boomSound = new sound("./sounds/boom.mp3");
let creepDeathSound = new sound("./sounds/creep.wav");
let errorSound = new sound("./sounds/error.wav");
let missileShootSound = new sound("./sounds/missile.wav");
let placeTowerSound = new sound("./sounds/placetower.wav");
let sellTowerSound = new sound("./sounds/sell.wav");
let upgradeTowerSound = new sound("./sounds/upgrade.wav");

//////////////////////////////////////////////////////////////////////////////////////////////////

let MyGame = {};
var score = 0;
var inHighScoresMenu = false;
var youLost = false;
var drawInputHSBox = false;


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
	var entrancesLeftToRight = [
		{x:0,y:6},
		{x:0,y:7},
		{x:0,y:8}
	]
	var exitsLeftToRight = [
		{x:14,y:6},
		{x:14,y:7},
		{x:14,y:8}
	]
	var entrancesUpToDown = [
		{x:6,y:0},
		{x:7,y:0},
		{x:8,y:0}
	]
	var exitsUpToDown = [
		{x:6,y:14},
		{x:7,y:14},
		{x:8,y:14}
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
  var gold = 200;
  var hearts = 2500;
  var inputStage = [];
	var tempKeyCode = 'X';
  var towerPlacingGlowX = -200;
  var towerPlacingGlowY = -200;
  var placingTower = false;
  var towerType = 0;
  var towerSize = 50;
  var angleAccuracy = .025;
  var taken = false;
  var notEnoughMoney=0;
  var inMainMenu = false;
  var inOptionsMenu = false;
  var inCreditsMenu = false;
	var firstRound = true;
  var muted = true; //TODO: Change this to true before submission!!!
	var checkLastX=0;
	var checkLastY=0;
  var adjustForInspectTool = 0; //140 for my computer
	var readyForKeyboardShortcut = -1;
	var upgradeKeyboardShortcut = 85;
	var sellBuildingKeyboardShortcut = 83;
	var nextLevelKeyboardShortcut = 71;
  var showGrid = false;
  var showTowerCoverage = false;
  var showShortestPathLeftToRight = false;
  var showShortestPathUpToDown = false;
  var towerPlacingLocOkay = true;
	try{
		showGrid = JSON.parse(localStorage.getItem("showGrid"));
	}
	catch(error) {
	}
	try{
		showTowerCoverage = JSON.parse(localStorage.getItem("showTowerCoverage"));
	}
	catch(error) {
	}
  if(JSON.parse(localStorage.getItem("upgrade")) != null){
    upgradeKeyboardShortcut=JSON.parse(localStorage.getItem("upgrade"));
  }
  else{
    upgradeKeyboardShortcut=85;
  }
  if(JSON.parse(localStorage.getItem("sellBuilding")) != null){
    sellBuildingKeyboardShortcut=JSON.parse(localStorage.getItem("sellBuilding"));
  }
  else{
    sellBuildingKeyboardShortcut=83;
  }
  if(JSON.parse(localStorage.getItem("nextLevel")) != null){
    nextLevelKeyboardShortcut=JSON.parse(localStorage.getItem("nextLevel"));
  }
  else{
    nextLevelKeyboardShortcut=71;
  }
	localStorage.setItem("showGrid", showGrid);
	localStorage.setItem("showTowerCoverage", showTowerCoverage);
	localStorage.setItem("upgrade", upgradeKeyboardShortcut);
	localStorage.setItem("sellBuilding", sellBuildingKeyboardShortcut);
	localStorage.setItem("nextLevel", nextLevelKeyboardShortcut);
	document.getElementById("showGridCheckBox").checked = showGrid;
	document.getElementById("showTowerCoverageCheckBox").checked = showTowerCoverage;
  var gridSize = 15;
  var menuSelectedTower = -1;
  var saveMenuSelectedTower = -1;
  var towers = [];
  var creeps = [];
  var turretAnimation = [];
  var particleExposions = [];
  var deathScores = [];
  var grid = [];
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
  window.onresize = function(){
    if ((window.outerHeight - window.innerHeight) > 50) {
      adjustForInspectTool=0;
    }
  }
	for (var i=0; i<entrancesLeftToRight.length; i++){ //Stops player from placing towers in entrances
		var a = entrancesLeftToRight[i].x
		var b = entrancesLeftToRight[i].y
		grid[a][b].shortestPathNumber=225;
		grid[a][b].shortestPathNumberLeftToRight=225;
	}
	for (var i=0; i<entrancesUpToDown.length; i++){ //Stops player from placing towers in entrances
		var a = entrancesUpToDown[i].x
		var b = entrancesUpToDown[i].y
		grid[a][b].shortestPathNumber=225;
		grid[a][b].shortestPathNumberLeftToRight=225;
	}
	for (var i=0; i<exitsLeftToRight.length; i++){ //Stops player from placing towers in exits
		var a = exitsLeftToRight[i].x
		var b = exitsLeftToRight[i].y
		grid[a][b].shortestPathNumber=1000;
		grid[a][b].shortestPathNumberLeftToRight=1000;
	}
	if(!firstRound){
		for (var i=0; i<entrancesUpToDown.length; i++){ //Stops player from placing towers in entrances on second and third rounds
			var a = entrancesUpToDown[i].x
			var b = entrancesUpToDown[i].y
			grid[a][b].shortestPathNumber=1000;
			grid[a][b].shortestPathNumberLeftToRight=1000;
		}
		for (var i=0; i<exitsUpToDown.length; i++){ //Stops player from placing towers in exits on second and third rounds
			var a = exitsUpToDown[i].x
			var b = exitsUpToDown[i].y
			grid[a][b].shortestPathNumber=1000;
			grid[a][b].shortestPathNumberLeftToRight=1000;
		}
	}
  document.addEventListener("click", click); //Lets program handle click events and button events
  buttonEventHandlers();

	/////////////////////////////////////////////////////////////////////////////////////////////////////

  function newGame(){
    inHighScoresMenu=false;
    inOptionsMenu=false;
    inCreditsMenu=false;
    inMainMenu=false;
    drawInputHSBox=false;
    for (var t=0; t<towers.length; t++){
      var a = (towers[t].x-400)/40;
			var b = (towers[t].y)/40;
      grid[a][b].shortestPathNumber=gridSize*gridSize;
			grid[a][b].shortestPathNumberLeftToRight=gridSize*gridSize;
    }
    towers.length = 0;
    creeps.length = 0;
    gold=1000;
    hearts = 10;
    score = 0;
    youLost = false;
    makeShortestPathUpToDown(grid,1000);
    makeShortestPathLeftToRight(grid,1000);
  }

  function makeTower(x, y, type) {
    var towerImg=imgGroundArrow;
    var initCost=10;
    if(type==1){
      towerImg=imgGroundArrow;
      initCost=8;
    }
    if(type==2){
      towerImg=imgGroundMissile;
      initCost=12;
    }
    if(type==3){
      towerImg=imgAirArrow;
      initCost=8;
    }
    if(type==4){
      towerImg=imgMissile;
      initCost=12;
    }
    towers.push({
      type: type, //1-groundProjectile, 2-groundBomb, 3-airProjectile, 4-airMissile
      level: 1,
      damage: 10,
      range: 120,
			rate: 50,
      shots: 0,
			sellFor: 8,
			upgradeCost: 10,
			initialCost: initCost,
      angle: 0,
      img: towerImg,
      size: 30,
      rotationSpeed: 0.03,
      x: x,
      y: y
    });
    grid[(x - 400) / 40][y / 40].shortestPathNumber=1000;
    grid[(x - 400) / 40][y / 40].shortestPathNumberLeftToRight=1000;
		makeShortestPathLeftToRight(grid, 1000);
		if(firstRound){
			makeShortestPathUpToDown(grid, 1000);
		}
    if(type==1){
      score+=5;
    }
    if(type==2){
      score+=7;
    }
    if(type==3){
      score+=5;
    }
    if(type==4){
      score+=7;
    }
  }

  function sellTower() {
    if(!muted){
      sellTowerSound.play();
    }
    if (menuSelectedTower != -1) {
			gold+=towers[menuSelectedTower].sellFor;
			var a = (towers[menuSelectedTower].x-400)/40;
			var b = (towers[menuSelectedTower].y)/40;
			grid[a][b].shortestPathNumber=gridSize*gridSize;
			grid[a][b].shortestPathNumberLeftToRight=gridSize*gridSize;
      towers.splice(menuSelectedTower, 1);
      menuSelectedTower = -1;
    }
		var show = document.getElementById("upgradeOrSellButtons");
		show.style.display = "none";
		makeShortestPathLeftToRight(grid, 1000);
		if(firstRound){
			makeShortestPathUpToDown(grid, 1000);
		}
  }

 	function upgradeTower() {
    if(!muted){
      upgradeTowerSound.play();
    }
    var tower = towers[menuSelectedTower];
		if (menuSelectedTower != -1) {
	    if (tower.level < 3) {
				if(tower.upgradeCost > gold){
					console.log('Not enough money!');
          notEnoughMoney=50;
				}
				else{
					gold-=tower.upgradeCost;
          if(tower.level==1){
            tower.damage*=2;
            tower.rate-=10;
            tower.range+=30;
            tower.sellFor+=15;
            tower.size+=10;
            tower.upgradeCost+=15;
            tower.rotationSpeed+=.02;
          }
          else if(tower.level==2){
            tower.damage*=2;
            tower.rate-=10;
            tower.range+=30;
            tower.sellFor+=15;
            tower.size+=10;
            tower.upgradeCost="---"
            tower.rotationSpeed+=.02;
          }
		      tower.level += 1;
					if(tower.levelNext == 3){
						tower.levelNext = "---";
					}
					else{
			      tower.levelNext += 1;
					}
		      saveMenuSelectedTower = menuSelectedTower;
				}
	    }
		}
  }

  function makeCreep(x,y,type, dir){
    var hitpoints=50;
    var speed=2;
    var image=imgPlane;
    if(type==1){
      image=imgAnt;
    }
    else if(type==2){
      hitpoints=400;
      speed=4;
      image=imgSpider;
    }
    else if(type==3){
      hitpoints=50;
      speed=2;
      image=imgPlane;
    }
    creeps.push({
      type: type,
      hitpoints: hitpoints,
  		speed: speed,
      mainDirection: dir,
      direction: dir,
      img: image,
  		gridX: x, //between 0 and 14
  		gridY: y,
      animationX: 0, //between 0 and 40, changes based on speed
      animationY: 0,
      relativeX: Math.random()*20, //start somewhere different within cell, 20 because the size of the grid's cell is 40, minus 20, the size of the creep's image
      relativeY: Math.random()*20
    });
  }

	function makeShortestPathLeftToRight(grid, sentinel) { // this function trusts the grid will be square
	    for (var i = 0; i < grid.length; i++){
	        for (var j = 0; j < grid.length; j++){
	            if (grid[i][j].shortestPathNumberLeftToRight != sentinel) grid[i][j].shortestPathNumberLeftToRight = grid.length*grid.length;
	        }
	    }
	    var frontier = [];
			var endSpace = [
			    {x:6,y:14},
			    {x:7,y:14},
			    {x:8,y:14}
			];
	    for (var i = 0; i < endSpace.length; i++){
	        grid[endSpace[i].y][endSpace[i].x].shortestPathNumberLeftToRight = 0;
	        frontier.push(endSpace[i]);
	    }
	    while (frontier.length != 0) {
	        var focus = frontier.shift();
	        //up
	        if(focus.x != 0){
	            if(grid[focus.y][focus.x - 1].shortestPathNumberLeftToRight != sentinel && grid[focus.y][focus.x-1].shortestPathNumberLeftToRight > grid[focus.y][focus.x].shortestPathNumberLeftToRight+1 ) {
	                grid[focus.y][focus.x-1].shortestPathNumberLeftToRight = grid[focus.y][focus.x].shortestPathNumberLeftToRight+1;
	                frontier.push({y:focus.y,x:focus.x-1});
	            }
	        }
	        //down
	        if(focus.x != grid.length-1){
	            if (grid[focus.y][focus.x+1].shortestPathNumberLeftToRight != sentinel && grid[focus.y][focus.x+1].shortestPathNumberLeftToRight > grid[focus.y][focus.x].shortestPathNumberLeftToRight+1){
	                grid[focus.y][focus.x+1].shortestPathNumberLeftToRight = grid[focus.y][focus.x].shortestPathNumberLeftToRight+1;
	                frontier.push({y:focus.y, x:focus.x+1});
	            }
	        }
	        //left
	        if(focus.y != 0){
	            if (grid[focus.y-1][focus.x].shortestPathNumberLeftToRight != sentinel && grid[focus.y-1][focus.x].shortestPathNumberLeftToRight > grid[focus.y][focus.x].shortestPathNumberLeftToRight+1){
	                grid[focus.y-1][focus.x].shortestPathNumberLeftToRight = grid[focus.y][focus.x].shortestPathNumberLeftToRight+1;
	                frontier.push({y:focus.y-1, x:focus.x});
	            }
	        }
	        //right
	        if(focus.y != grid.length-1){
	            if (grid[focus.y+1][focus.x].shortestPathNumberLeftToRight != sentinel && grid[focus.y+1][focus.x].shortestPathNumberLeftToRight > grid[focus.y][focus.x].shortestPathNumberLeftToRight+1){
	                grid[focus.y+1][focus.x].shortestPathNumberLeftToRight = grid[focus.y][focus.x].shortestPathNumberLeftToRight+1;
	                frontier.push({y:focus.y+1, x:focus.x});
	            }
	        }
	    }
	    return grid;
	}

	function makeShortestPathUpToDown(grid, sentinel) { // this function trusts the grid will be square
	    for (var i = 0; i < grid.length; i++){
	        for (var j = 0; j < grid.length; j++){
	            if (grid[i][j].shortestPathNumber != sentinel) grid[i][j].shortestPathNumber = grid.length*grid.length;
	        }
	    }
	    var frontier = [];
			var endSpace = [
			    {x:14,y:6},
			    {x:14,y:7},
			    {x:14,y:8}
			];
	    for (var i = 0; i < endSpace.length; i++){
	        grid[endSpace[i].y][endSpace[i].x].shortestPathNumber = 0;
	        frontier.push(endSpace[i]);
	    }
	    while (frontier.length != 0) {
	        var focus = frontier.shift();
	        //up
	        if(focus.x != 0){
	            if(grid[focus.y][focus.x - 1].shortestPathNumber != sentinel && grid[focus.y][focus.x-1].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber+1 ) {
	                grid[focus.y][focus.x-1].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber+1;
	                frontier.push({y:focus.y,x:focus.x-1});
	            }
	        }
	        //down
	        if(focus.x != grid.length-1){
	            if (grid[focus.y][focus.x+1].shortestPathNumber != sentinel && grid[focus.y][focus.x+1].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber+1){
	                grid[focus.y][focus.x+1].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber+1;
	                frontier.push({y:focus.y, x:focus.x+1});
	            }
	        }
	        //left
	        if(focus.y != 0){
	            if (grid[focus.y-1][focus.x].shortestPathNumber != sentinel && grid[focus.y-1][focus.x].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber+1){
	                grid[focus.y-1][focus.x].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber+1;
	                frontier.push({y:focus.y-1, x:focus.x});
	            }
	        }
	        //right
	        if(focus.y != grid.length-1){
	            if (grid[focus.y+1][focus.x].shortestPathNumber != sentinel && grid[focus.y+1][focus.x].shortestPathNumber > grid[focus.y][focus.x].shortestPathNumber+1){
	                grid[focus.y+1][focus.x].shortestPathNumber = grid[focus.y][focus.x].shortestPathNumber+1;
	                frontier.push({y:focus.y+1, x:focus.x});
	            }
	        }
	    }
	    return grid;
	}

  makeShortestPathUpToDown(grid,1000); //initializes shortestpath grid before any towers are placed.
  makeShortestPathLeftToRight(grid,1000);

  function renderBackground() {
    if (imgBackground.isReady) {
      ctx.drawImage(imgBackground,
        0, 0, canvas.width, canvas.height);
    }
  }

  function drawGrid(ctx, w, h, step) {
    ctx.strokeStyle="#3D8D7D"
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
    // ctx.strokeStyle="black"
  }


  function drawMenu() {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#1F5592";
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
    ctx.font = "25px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(gold, 70, 110);
    ctx.fillText(hearts, 180, 110);
    ctx.fillText("Score: "+score, 250, 110);
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
      ctx.arc(towers[menuSelectedTower].x + 20, towers[menuSelectedTower].y + 20, towers[menuSelectedTower].range, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#0D2F5B";
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
      ctx.fillStyle = "white";
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
      if(towers[menuSelectedTower].level<3){
        ctx.fillText(towers[menuSelectedTower].level+1, 265, 310);
        ctx.fillText(towers[menuSelectedTower].damage+10, 265, 340);
        ctx.fillText(towers[menuSelectedTower].range+2, 265, 370);
        ctx.fillText(towers[menuSelectedTower].rate-10, 265, 400);
      }
      else{
        ctx.fillText("---", 265, 310);
        ctx.fillText("---", 265, 340);
        ctx.fillText("---", 265, 370);
        ctx.fillText("---", 265, 400);
      }
      ctx.fillText("Damage", 40, 340);
      ctx.fillText(towers[menuSelectedTower].damage, 165, 340);
      ctx.fillText("Range", 40, 370);
      ctx.fillText(towers[menuSelectedTower].range, 165, 370);
      ctx.fillText("Firing Rate", 40, 400);
      ctx.fillText(towers[menuSelectedTower].rate, 165, 400);
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

  function drawMainMenu() {
    inOptionsMenu = false;
    inMainMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("mainMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.fillText("Main Menu", 140, 162);
    ctx.stroke();
  }

  function drawOptionsMenu() {
    inMainMenu = false;
    inOptionsMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("optionsMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
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
		if(readyForKeyboardShortcut==1){
			ctx.fillStyle="red";
			ctx.fillText(String.fromCharCode(upgradeKeyboardShortcut), 200, 410);
			ctx.stroke();
			ctx.fillStyle="white"
		}
		else{
			ctx.fillText(String.fromCharCode(upgradeKeyboardShortcut), 200, 410);
			ctx.stroke();
		}
		if(readyForKeyboardShortcut==2){
			ctx.fillStyle="red";
	    ctx.fillText(String.fromCharCode(sellBuildingKeyboardShortcut), 200, 440);
			ctx.stroke();
			ctx.fillStyle="white"
		}
		else{
			ctx.fillText(String.fromCharCode(sellBuildingKeyboardShortcut), 200, 440);
			ctx.stroke();
		}
		if(readyForKeyboardShortcut==3){
			ctx.fillStyle="red";
			ctx.fillText(String.fromCharCode(nextLevelKeyboardShortcut), 200, 470);
			ctx.stroke();
			ctx.fillStyle="white"
		}
		else{
			ctx.fillText(String.fromCharCode(nextLevelKeyboardShortcut), 200, 470);
			ctx.stroke();
		}
    ctx.stroke();
  }

  function drawHighScoresMenu(){
    inMainMenu = false;
    inOptionsMenu = false;
    inCreditsMenu = false;
    inHighScoresMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("optionsMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("mainMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("creditsMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("highScoresMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.font = "30px Arial";
    ctx.fillText("High Scores", 120, 162);
    ctx.font = "24px Arial";
    var storedHSNames = [];
		var storedHsScores = [];
		if(localStorage.getItem("highscore") !== null){
			storedHSNames = JSON.parse(localStorage.getItem("highscore"));
			storedHsScores = JSON.parse(localStorage.getItem("score"));
		}
		for (var hs=0;hs<storedHSNames.length;hs++){
			graphics.context.fillText(storedHsScores[hs]+" - "+storedHSNames[hs],50,220+30*hs);
		}
    ctx.stroke();
  }

  function drawCreditsMenu(){
    inMainMenu = false;
    inOptionsMenu = false;
    inHighScoresMenu = false;
    inCreditsMenu = true;
    var show = document.getElementById("towers");
    show.style.display = "none";
    var show2 = document.getElementById("optionsMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("mainMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("highScoresMenu");
    show2.style.display = "none";
    var show2 = document.getElementById("creditsMenu");
    show2.style.display = "block";
    ctx.fillStyle = "#0D2F5B";
    ctx.globalAlpha = .9;
    ctx.fillRect(0, 125, 400, 385)
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white"
    ctx.lineWidth = 1;
    ctx.moveTo(0, 180);
    ctx.lineTo(400, 180);
    ctx.font = "30px Arial";
    ctx.fillText("Credits", 150, 162);
    ctx.font = "20px Arial";
    ctx.fillText("This game was created by Matt Ward", 20, 240);
    ctx.fillText("and Kyle Cooper as a project for our", 20, 270);
    ctx.fillText("CS 5410 Game Development class", 20, 300);
    ctx.fillText("taught by Professor Dean Mathias.", 20, 330);
    ctx.stroke();
  }


  function rgb(){
    let r = Random.nextGaussian(127,127);
    let g = Random.nextGaussian(127,127);
    let b = Random.nextGaussian(127,127);
    r = Math.abs(Math.floor(r));
    g = Math.abs(Math.floor(g));
    b = Math.abs(Math.floor(b));
    return ["rgb(",r,",",g,",",b,")"].join("");
  }

  function drawBombParticleExplosion(elapsedTime,x,y){
    let keepMe = [];
    for (let particle = 0; particle < confettiParticles.length; particle++) {
      confettiParticles[particle].alive += elapsedTime;
      confettiParticles[particle].position.x += (elapsedTime * confettiParticles[particle].speed * confettiParticles[particle].direction.x);
      confettiParticles[particle].position.y += (elapsedTime * confettiParticles[particle].speed * confettiParticles[particle].direction.y);
      confettiParticles[particle].rotation += confettiParticles[particle].speed / .5;
      confettiParticles[particle].fill = rgb();
      if (confettiParticles[particle].alive <= confettiParticles[particle].lifetime) {
        keepMe.push(confettiParticles[particle]);
      }
    }
    for (let particle = 0; particle < Random.nextGaussian(7, 3); particle++) {
      let p = {
        position: { x: 450, y: 500 },
        direction: Random.nextCircleVector(),
        speed: Random.nextGaussian( 0.02, 0.01 ),	// pixels per millisecond
        rotation: 0,
        lifetime: 500,	// milliseconds
        alive: 0,
        size: Random.nextGaussian(5,3),
        fill: 'rgb(255, 255, 255)',
        stroke: 'rgb(0, 0, 0)'
      };
      keepMe.push(p);
    }
    confettiParticles = keepMe;
  }

  function renderConfetti(){
    for (let particle = 0; particle < confettiParticles.length; particle++) {
      drawConfetti(confettiParticles[particle]);
    }
  }

  function drawConfetti(p) {
    if (p.alive > 100) {
      graphics.context.save();
      graphics.context.translate(p.position.x + p.size / 2, p.position.y + p.size / 2);
      graphics.context.rotate(p.rotation);
      graphics.context.translate(-(p.position.x + p.size / 2), -(p.position.y + p.size / 2));

      graphics.context.fillStyle = p.fill;
      graphics.context.strokeStyle = p.stroke;
      graphics.context.fillRect(p.position.x, p.position.y, p.size, p.size);
      graphics.context.strokeRect(p.position.x, p.position.y, p.size, p.size);

      graphics.context.restore();
    }
  }


  function drawAllTowerCoverages() {
    for (var t = 0; t < towers.length; t++) {
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(towers[t].x + 20, towers[t].y + 20, towers[t].range, 0, Math.PI * 2, true);
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

  function aimTowers(){
    for (var t=0; t< towers.length; t++){
      var h=0;
      for (var c=0; c<creeps.length; c++){
        ///////////TODO: if creeps.x>400
        if(towers[t].type==1 || towers[t].type==2){ //If ground tower. search for ground troops
          if(creeps[c].type==1 || creeps[c].type==2){
            var cx=creeps[c].gridX*40+400+creeps[c].relativeX+creeps[c].animationX;
            var cy=creeps[c].gridY*40+creeps[c].relativeY+creeps[c].animationY;
            h = Math.sqrt((cx-towers[t].x)**2 + (cy-towers[t].y)**2)
            if (h<towers[t].range){
              rotateToSource(towers[t], c, h) //Aim at creep within range
            }
            else{
              rotateTower(towers[t],0) //If creep not in range, stay still
            }
          }
        }
        else if(towers[t].type==3 || towers[t].type==4){ //If air tower, search for air troops
          if(creeps[c].type==3){
            var cx=creeps[c].gridX*40+400+creeps[c].relativeX+creeps[c].animationX;
            var cy=creeps[c].gridY*40+creeps[c].relativeY+creeps[c].animationY;
            h = Math.sqrt((cx-towers[t].x)**2 + (cy-towers[t].y)**2)
            if (h<towers[t].range){
              rotateToSource(towers[t], c, h) //Aim at creep within range
            }
            else{
              rotateTower(towers[t],0) //If creep not in range, stay still
            }
          }
        }
      }
      if(h==0){
        rotateTower(towers[t],0) //If no creeps, stay still
      }
    }
  }

  function rotateTower(tower, angle) {
    context.save();
    context.translate(tower.x+20, tower.y+20);
    if (angle) {
      if (angle == 1) {
        tower.angle += tower.rotationSpeed;
      } else {
        tower.angle -= tower.rotationSpeed;
      }
    }
    context.rotate(tower.angle);
    context.drawImage(tower.img, -tower.size / 2, -tower.size / 2, tower.size, tower.size);
    context.restore();
  }

  function crossProduct2d(v1, v2) {
		return (v1.x * v2.y) - (v1.y * v2.x);
	}

	function computeAngle(rotation, ptCenter, ptTarget) {
		var v1 = {
				x : Math.cos(rotation),
				y : Math.sin(rotation)
			},
			v2 = {
				x : ptTarget.x - ptCenter.x,
				y : ptTarget.y - ptCenter.y
			},
			dp,
			angle;
		v2.len = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
		v2.x /= v2.len;
		v2.y /= v2.len;
		dp = v1.x * v2.x + v1.y * v2.y;
		var angle = Math.acos(dp);
		var cp = crossProduct2d(v1, v2);
		return {
			angle : angle,
			crossProduct : cp
		};
	}

	function testTolerance(value, test, tolerance) {
		if (Math.abs(value - test) < tolerance) {
			return true;
		} else {
			return false;
		}
	}

	function rotateToSource(tower,c,h) {
		var towerCenter = {x: tower.x-20, y: tower.y-20};
    var cx=creeps[c].gridX*40+400+creeps[c].relativeX+creeps[c].animationX;
    var cy=creeps[c].gridY*40+creeps[c].relativeY+creeps[c].animationY;
		var creepCenter = {x: cx, y: cy};
		var result = computeAngle(tower.angle, towerCenter, creepCenter);
		if (testTolerance(result.angle, 0, .01) === false) {
			if (result.crossProduct > 0) {
				rotateTower(tower,1)
			} else {
				rotateTower(tower,-1)
			}
      tower.shots+=1;
		}
    else{
      rotateTower(tower,0)
      tower.shots+=1;
      if(tower.shots >= tower.rate){ //This prevents towers from shooting like 50 shots per second
        tower.shots=0;
        var m = Math.min((cx-tower.x),(cy-tower.y));
        var dx = (cx-tower.x)/m;
        var dy = (cy-tower.y)/m;
        if(cx>tower.x && cy>tower.y){
          dx=-dx;
          dy=-dy;
        }
        turretAnimation.push({
          origX:tower.x,
          origY:tower.y,
          x:tower.x,
          y:tower.y,
          dx:dx*10,
          dy:dy*10,
          h:h,
          angle:tower.angle,
          size:tower.size,
          img:tower.img,
          cx:cx,
          cy:cy,
          c:c,
          tower:tower
        });
      }
    }
	}

  function shootMissile(t){
    var ta = turretAnimation[t];
    if(ta.x==ta.origX && ta.y==ta.origY && (ta.tower.type==1 || ta.tower.type==3)){ //If ground or air cannon
      if(!muted){
        arrowShootSound.play();
      }
    }
    else if(ta.x==ta.origX && ta.y==ta.origY && (ta.tower.type==2 || ta.tower.type==4)){ //If ground or air missile
      if(!muted){
        missileShootSound.play();
      }
    }
    ta.x-=ta.dx;
    ta.y-=ta.dy;
    ctx.save();
    ctx.translate(ta.x+20, ta.y+20);
    ctx.rotate(ta.angle);
    ctx.drawImage(ta.img, -ta.size / 2, -ta.size / 2, ta.size, ta.size);
    ctx.restore();
    ctx.stroke();
    var hypotenuse = Math.sqrt((ta.origX-ta.x)**2 + (ta.origY-ta.y)**2)
    if(hypotenuse>150){
      turretAnimation.splice(t,1)
    }
    var splashDamageRange=1;
    if(ta.tower.type==1 || ta.tower.type==3){
      splashDamageRange=2;
    }
    else{
      splashDamageRange=5;
    }
    if(Math.abs(ta.x-ta.cx)<splashDamageRange && Math.abs(ta.y-ta.cy)<splashDamageRange){
      if(ta.tower.type==2 || ta.tower.type==4){
        if(!muted){
          placeTowerSound.play();
        }
      }
      try{
        creeps[ta.c].hitpoints-=ta.tower.damage; //Damaged a creep
        if(!youLost){
          score+=3;
        }
        if(creeps[ta.c].hitpoints<=0){ //Killed a creep
          if(!muted){
            creepDeathSound.play();
          }
          var tempScore = 0;
          if(creeps[ta.c].type==1){
            tempScore+=10;
            gold+=5;
          }
          else if(creeps[ta.c].type==2){
            tempScore+=30;
            gold+=20;
          }
          else if(creeps[ta.c].type==3){
            tempScore+=20;
            gold+=10;
          }
          if(!youLost){
            score+=tempScore;
          }
          creeps.splice(ta.c,1);
          deathScores.push({
            x:ta.cx,
            y:ta.cy,
            score: tempScore,
            timeLeft: 1000
          })
          // particleExposions.push({x:ta.x, y:ta.y})
        }
      }
      catch(error){
        // console.error(error) //This error happens I believ because a turret being shot towards a creep that has already been killed by another turret.
      }
      turretAnimation.splice(t,1);
    }
  }


  function getNextCreepDirection(c){
    if(creeps[c].type!=3){
      var x = creeps[c].gridX;
      var y = creeps[c].gridY;
      if(creeps[c].mainDirection=='right'){
        if(x+1 <=14 && x-1>=0 && y+1 <=14 && y-1 >=0){
    			if(x+1 <= 14 && (grid[x+1][y].shortestPathNumberLeftToRight < (grid[x][y].shortestPathNumberLeftToRight))){
    				creeps[c].direction='right';
    			}
    			if(x-1>=0 && (grid[x-1][y].shortestPathNumberLeftToRight < (grid[x][y].shortestPathNumberLeftToRight))){
    				creeps[c].direction='left';
    			}
    			if(y+1 <=14 && (grid[x][y+1].shortestPathNumberLeftToRight < (grid[x][y].shortestPathNumberLeftToRight))){
    				creeps[c].direction='down';
    			}
    			if(y-1 >=0 && (grid[x][y-1].shortestPathNumberLeftToRight < (grid[x][y].shortestPathNumberLeftToRight))){
    				creeps[c].direction='up';
          }
        }
			}
      else if(creeps[c].mainDirection=='down'){
        if(x+1 <=14 && x-1>=0 && y+1 <=14 && y-1 >=0){
    			if(x+1 <= 14 && (grid[x+1][y].shortestPathNumber < (grid[x][y].shortestPathNumber))){
    				creeps[c].direction='right';
    			}
    			if(x-1>=0 && (grid[x-1][y].shortestPathNumber < (grid[x][y].shortestPathNumber))){
    				creeps[c].direction='left';
    			}
    			if(y+1 <=14 && (grid[x][y+1].shortestPathNumber < (grid[x][y].shortestPathNumber))){
    				creeps[c].direction='down';
    			}
    			if(y-1 >=0 && (grid[x][y-1].shortestPathNumber < (grid[x][y].shortestPathNumber))){
    				creeps[c].direction='up';
          }
        }
      }
		}
  }

	function drawCreeps(c){
    if(creeps[c].direction=='right'){
      if(creeps[c].animationX<40){
        creeps[c].animationX+=creeps[c].speed;
      }
      else{
        creeps[c].animationX=0;
        creeps[c].gridX+=1;
        getNextCreepDirection(c);
      }
    }
    else if(creeps[c].direction=='left'){
      if(creeps[c].animationX>-40){
        creeps[c].animationX-=creeps[c].speed;
      }
      else{
        creeps[c].animationX=0;
        creeps[c].gridX-=1;
        getNextCreepDirection(c);
      }
    }
    else if(creeps[c].direction=='down'){
      if(creeps[c].animationY<40){
        creeps[c].animationY+=creeps[c].speed;
      }
      else{
        creeps[c].animationY=0;
        creeps[c].gridY+=1;
        getNextCreepDirection(c);
      }
    }
    else if(creeps[c].direction=='up'){
      if(creeps[c].animationY>-40){
        creeps[c].animationY-=creeps[c].speed;
      }
      else{
        creeps[c].animationY=0;
        creeps[c].gridY-=1;
        getNextCreepDirection(c);
      }
    }
		if (imgPlane.isReady && imgSpider.isReady) {
      var drawX = creeps[c].gridX*40+400+creeps[c].relativeX+creeps[c].animationX;
      var drawY = creeps[c].gridY*40+creeps[c].relativeY+creeps[c].animationY;
      if(creeps[c].gridX==14 && (creeps[c].gridY==6 || creeps[c].gridY==7 || creeps[c].gridY==8)){
        hearts-=1;
        creeps.splice(c, 1);
      }
      if(creeps[c].gridY==14 && (creeps[c].gridX==6 || creeps[c].gridX==7 || creeps[c].gridX==8)){
        hearts-=1;
        creeps.splice(c, 1);
      }
      if(hearts<1){
        youLose();
      }
      if(drawX>400){
        var angle=0;
        try{
          if(creeps[c].direction=='right'){angle=0;}
          if(creeps[c].direction=='up'){angle=Math.PI*3/2;}
          if(creeps[c].direction=='left'){angle=Math.PI;}
          if(creeps[c].direction=='down'){angle=Math.PI/2;}
        } catch(error){}
        try{
          if(creeps[c].type==1 || creeps[c].type==3){
            if(creeps[c].hitpoints>=50){
              ctx.drawImage(imgHb4_1, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=40 && creeps[c].hitpoints<50){
              ctx.drawImage(imgHb4_2, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=30 && creeps[c].hitpoints<40){
              ctx.drawImage(imgHb4_3, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=20 && creeps[c].hitpoints<30){
              ctx.drawImage(imgHb4_4, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>0 && creeps[c].hitpoints<20){
              ctx.drawImage(imgHb4_5, drawX, drawY-5,20,5)
            }
            else{
              console.log("this should never happen.")
            }
          }
          else if(creeps[c].type==2){
            if(creeps[c].hitpoints>=400){
              ctx.drawImage(imgHb8_1, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=350 && creeps[c].hitpoints<400){
              ctx.drawImage(imgHb8_2, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=300 && creeps[c].hitpoints<350){
              ctx.drawImage(imgHb8_3, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=250 && creeps[c].hitpoints<300){
              ctx.drawImage(imgHb8_4, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=200 && creeps[c].hitpoints<250){
              ctx.drawImage(imgHb8_5, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=150 && creeps[c].hitpoints<200){
              ctx.drawImage(imgHb8_6, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>=100 && creeps[c].hitpoints<150){
              ctx.drawImage(imgHb8_7, drawX, drawY-5,20,5)
            }
            else if(creeps[c].hitpoints>0 && creeps[c].hitpoints<100){
              ctx.drawImage(imgHb8_8, drawX, drawY-5,20,5)
            }
            else{
              console.log("this should never happen.")
            }
          }
        } catch(error){
          // console.error(error)
        }
        ctx.save();
        ctx.translate(drawX+10, drawY+10);
        ctx.rotate(angle);
        var creepImg = imgPlane;
        try{
          creepImg = creeps[c].img;
        }
        catch(error){
          // console.error(error)
        }
  			ctx.drawImage(creepImg, -10, -10, 20, 20);
        ctx.restore();
      }
		}
		ctx.stroke();
	}

  function drawPlacingTowerRangeCircle(){
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "white";
    if(!towerPlacingLocOkay){
      ctx.fillStyle = "red";
    }
    ctx.beginPath();
  }

  function drawEdgeSquares(){
    ctx.arc(towerPlacingGlowX + 20, towerPlacingGlowY + 20, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    for (var x = 0; x < edgeArr.length; x += 2) {
      ctx.globalAlpha = .4;
      ctx.fillStyle = "#7DFBFD";
      ctx.beginPath();
      var xx = edgeArr[x];
      var yy = edgeArr[x + 1];
      ctx.fillRect(xx+1,yy+1,38,38);
      grid[(xx - 400) / 40][yy / 40].shortestPathNumber=1000;
      grid[(xx - 400) / 40][yy / 40].shortestPathNumberLeftToRight=1000;
    }
    ctx.globalAlpha = 1;
  }

  function drawDots() { //Draw edge dots, temporarily to represent edges.
		if(showShortestPathUpToDown){
			ctx.fillStyle="#0D2F5B"
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
			ctx.fillStyle="#0D2F5B"
	    for (var i=0;i<grid.length;i++){
	    	for (var j=0;j<grid.length;j++){
	    		if(grid[i][j].shortestPathNumberLeftToRight==1000){
						ctx.fillStyle="yellow";
						ctx.beginPath();
						ctx.arc(400+i*40+25,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
	    		}
					else if(grid[i][j].shortestPathNumberLeftToRight==225){
						ctx.fillStyle="orange";
						ctx.beginPath();
						ctx.arc(400+i*40+25,j*40+5,5,0,Math.PI*2,true);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					}
					else{
						ctx.fillStyle="rgb("+grid[i][j].shortestPathNumberLeftToRight*3+","+grid[i][j].shortestPathNumberLeftToRight*10+","+grid[i][j].shortestPathNumberLeftToRight*20+")";
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


  function startLevel1(){
    for (var i = 0; i < 5; i++) {
      var y = Math.round(Math.random() * 2 + 6);
      makeCreep(-i, y, 1,'right');
    }
    for (var i = 15; i < 25; i++) {
      var y = Math.round(Math.random() * 2 + 6);
      makeCreep(-i, y, 1,'right');
      var y = Math.round(Math.random() * 2 + 6);
      makeCreep(-i, y, 1,'right');
    }
    for (var i = 40; i < 60; i++) {
      var y = Math.round(Math.random() * 2 + 6);
      makeCreep(-i, y, 1,'right');
      var y = Math.round(Math.random() * 2 + 6);
      makeCreep(-i, y, 1,'right');
    }
    for (var i = 45; i < 65; i++) {
      var y = Math.round(Math.random() * 2 + 6);
      makeCreep(-i, y, 1,'right');
    }
      makeCreep(-130, 7, 2,'right');
      for (var i = 80; i < 110; i++) {
        var y = Math.round(Math.random() * 2 + 6);
        makeCreep(-i, y, 1,'right');
      }
      for (var i = 90; i < 100; i++) {
        var y = Math.round(Math.random() * 2 + 6);
        makeCreep(-i, y, 1,'right');
      }
  }

  function startLevel2(numCreeps){
    for (var i=0; i<5; i++){
      var y = Math.round(Math.random()*2+6);
      makeCreep(-i,y,1,'right');
    }
    for (var i=0; i<5; i++){
      var x = Math.round(Math.random()*2+6);
      makeCreep(x,-i,1,'down');
    }
  }

  function startLevel3(numCreeps){
    for (var i=0; i<numCreeps; i++){
      var y = Math.round(Math.random()*2+6);
      makeCreep(-i,y,3,'right');
    }
  }

  function youLose(){
    youLost = true;
    var hsName = []
		var hsScore = []
		if(localStorage.getItem("highscore") !== null){
			hsName = JSON.parse(localStorage.getItem("highscore"))
			hsScore = JSON.parse(localStorage.getItem("score"))
		}
		if(hsScore.length>=7){
			if(score>hsScore[7]){
        drawInputHSBox = true;
			}
		}
		// graphics.context.fillStyle="black";
		// graphics.context.fillRect(250,420,480,130);
		// graphics.context.stroke;
		// var show = document.getElementById("inputHighScore");
		// if(show.style.display === "none"){
		// 	show.style.display = "block";
		// }
  }


	function getKeyShortcut(keyCode){
    tempKeyCode = String.fromCharCode(keyCode);
		if(readyForKeyboardShortcut==1){
			upgradeKeyboardShortcut=keyCode;
			localStorage.setItem("upgrade", upgradeKeyboardShortcut);
		}
		else if(readyForKeyboardShortcut==2){
			sellBuildingKeyboardShortcut=keyCode;
			localStorage.setItem("sellBuilding", sellBuildingKeyboardShortcut);
		}
		else if(readyForKeyboardShortcut==3){
			nextLevelKeyboardShortcut=keyCode;
			localStorage.setItem("nextLevel", nextLevelKeyboardShortcut);
		}
		readyForKeyboardShortcut = -1;
	}

  function followMouse(x) {
    placingTower = true;
    towerType = x;
    menuSelectedTower = -1;
    $(document).mousemove(function(e) {
      $("#image" + x).css({
        left: e.pageX - 50-adjustForInspectTool,
        top: e.pageY - 50 - 20
      });
      towerPlacingGlowX = e.pageX - 100-adjustForInspectTool;
      towerPlacingGlowY = e.pageY - 120 - 20;
			var xxx = Math.floor((e.pageX-100-adjustForInspectTool)/40-10);
			var yyy = Math.floor((e.pageY-120)/40)
			if(!(xxx==checkLastX && yyy==checkLastY)){ //make sure we don't have to recalculate everything while user moves mouse within same cell.
        var okay=true;
        var tempGrid = $.extend(true, [], grid); //deep copy the array
        if(xxx>=0 && xxx<15 && yyy>=0 && yyy<15){
          tempGrid[xxx][yyy].shortestPathNumberLeftToRight=1000;
          tempGrid[xxx][yyy].shortestPathNumber=1000;
          tempGrid = makeShortestPathUpToDown(tempGrid,1000);
          tempGrid = makeShortestPathUpToDown(tempGrid,1000);
        }
        for(var i=6; i<=8; i++){
          if(tempGrid[0][i].shortestPathNumber == 225){
            okay=false;
          }
          if(tempGrid[i][0].shortestPathNumber == 225){
            okay=false;
          }
          if(xxx==i && (yyy==0 || yyy==1))
            okay=false;
          if(xxx==i && (yyy==14 || yyy==13))
            okay=false;
          if(yyy==i && (xxx==0 || xxx==1))
            okay=false;
          if(yyy==i && (xxx==14 || xxx==13))
            okay=false;
        }
        try{
          if(grid[xxx][yyy].shortestPathNumber==1000){
            okay=false;
          }
        }
        catch(error){
          console.error(error);
        }
        if(!okay){
          towerPlacingLocOkay=false;
        }
        else{
          towerPlacingLocOkay=true;
        }
			}
			checkLastX=xxx;
			checkLastY=yyy;
    });
  }

  function checkCheckBoxes() { //check to make sure check boxes haven't changed.
    if (document.querySelector('#showGridCheckBox').checked) {
      showGrid = true;
			localStorage.setItem("showGrid", true);
    } else {
      showGrid = false;
			localStorage.setItem("showGrid", false);
    }
    if (document.querySelector('#showTowerCoverageCheckBox').checked) {
      showTowerCoverage = true;
			localStorage.setItem("showTowerCoverage", true);
    } else {
      showTowerCoverage = false;
			localStorage.setItem("showTowerCoverage", false);
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
        if (inOptionsMenu && !inMainMenu) {
          inOptionsMenu = false;
        } else {
          var show2 = document.getElementById("mainMenu");
          show2.style.display = "none";
          inOptionsMenu = true;
        }
      });
    }
    var button6 = document.getElementById("inMainMenuButton");
    if (button6.addEventListener) {
      button6.addEventListener('click', function() {
        if(inMainMenu && !inOptionsMenu){
          inMainMenu = false;
        }
        else{
          inMainMenu = true;
        }
      });
    }
    var button7 = document.getElementById("playNextLevel");
    if (button7.addEventListener) {
      button7.addEventListener('click', function() {
        startLevel(10);
      });
    }
    var button8 = document.getElementById("upgradeKeyboardShortcut");
    if (button8.addEventListener) {
      button8.addEventListener('click', function() {
				readyForKeyboardShortcut = 1;
      });
    }
    var button9 = document.getElementById("sellKeyboardShortcut");
    if (button9.addEventListener) {
      button9.addEventListener('click', function() {
				readyForKeyboardShortcut = 2;
      });
    }
    var button10 = document.getElementById("playNextLevelKeyboardShortcut");
    if (button10.addEventListener) {
      button10.addEventListener('click', function() {
				readyForKeyboardShortcut = 3;
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
    var button13 = document.getElementById("newGame");
    if (button13.addEventListener) {
      button13.addEventListener('click', function() {
        newGame();
      });
    }
    var button14 = document.getElementById("options2");
    if (button14.addEventListener) {
      button14.addEventListener('click', function() {
        var show2 = document.getElementById("mainMenu");
        show2.style.display = "none";
        inMainMenu = false;
        inOptionsMenu = true;
      });
    }
    var button15 = document.getElementById("highScores");
    if (button15.addEventListener) {
      button15.addEventListener('click', function() {
        inHighScoresMenu = true;
      });
    }
    var button16 = document.getElementById("credits");
    if (button16.addEventListener) {
      button16.addEventListener('click', function() {
        inCreditsMenu = true;
      });
    }
    var button17 = document.getElementById("closeMainMenu");
    if (button17.addEventListener) {
      button17.addEventListener('click', function() {
        inMainMenu = false;
      });
    }
    var button18 = document.getElementById("closeOptionsMenu");
    if (button18.addEventListener) {
      button18.addEventListener('click', function() {
        inOptionsMenu = false;
      });
    }
    var button19 = document.getElementById("closeHighScoresMenu");
    if (button19.addEventListener) {
      button19.addEventListener('click', function() {
        inHighScoresMenu = false;
      });
    }
    var button20 = document.getElementById("closeCreditsMenu");
    if (button20.addEventListener) {
      button20.addEventListener('click', function() {
        inCreditsMenu = false;
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
				if (grid[a][b].shortestPathNumber==1000 && grid[a][b].shortestPathNumberLeftToRight==1000){
					taken=true;
				}
				else if (grid[a][b].shortestPathNumber==0 || grid[a][b].shortestPathNumberLeftToRight==0){
					taken=true;
				}
        for(var i=6; i<9; i++){
          if (b==i && (a==0 || a==1)){
            taken=true;
          }
          if (a==i && (b==0 || b==1)){
            taken=true;
          }
          if (b==i && a==13){
            taken=true;
          }
          if (a==i && b==13){
            taken=true;
          }
        }
			}
      if(a==checkLastX && b==checkLastY && !towerPlacingLocOkay){
        taken=true;
      }
      if (taken != true) {
        if (mousePointerX >= 400 && mousePointerY >= 0 && mousePointerX <= 1000 && mousePointerY <= 600) { //If tower placed on grid
          makeTower(mousePointerX, mousePointerY, towerType);
          gold -= towers[towers.length - 1].initialCost;
          if (gold < 0) {
            if(!muted){
              errorSound.play();
            }
            notEnoughMoney=30;
            console.log("Not enough Money!")
            gold += towers[towers.length - 1].initialCost;
            var a = (towers[towers.length-1].x-400)/40;
      			var b = (towers[towers.length-1].y)/40;
            grid[a][b].shortestPathNumber=gridSize*gridSize;
      			grid[a][b].shortestPathNumberLeftToRight=gridSize*gridSize;
            towers.splice(towers.length - 1, 1);
            makeShortestPathLeftToRight(grid,1000);
            makeShortestPathUpToDown(grid,1000);
          }
          else{
            if(!muted){
              placeTowerSound.play();
            }
          }
          towerPlacingGlowX = -200;
          towerPlacingGlowY = -200;
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
          towerPlacingGlowX = -200;
          towerPlacingGlowY = -200;
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
        if(!muted){
          errorSound.play();
        }
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
    if(!youLost){
      if (keyCode === upgradeKeyboardShortcut) { //Default: U
        upgradeTower();
      }
      else if (keyCode === sellBuildingKeyboardShortcut) { //Default: S
        sellTower();
      }
      else if (keyCode === nextLevelKeyboardShortcut) { //Default: G
        startLevel1();
      }
      else if (keyCode === 72) { //H
        startLevel2();
      }
      else if (keyCode === 74) { //J
        startLevel3();
      }
      else if (keyCode === 77) { //M
        if(muted){
          muted=false;
        }
        else{
          muted=true;
        }
      }
      else if (keyCode === 49) { //1
        followMouse(1);
      }
      else if (keyCode === 50) { //2
        followMouse(2);
      }
      else if (keyCode === 51) { //2
        followMouse(3);
      }
      else if (keyCode === 52) { //2
        followMouse(4);
      }
  		else if(readyForKeyboardShortcut != -1){
  			getKeyShortcut(keyCode);
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

  function render(elapsedTime) {
    graphics.clear();
    renderBackground();
    if (showGrid) {
      drawGrid(context, canvas.width - 400, canvas.height, 40)
    }
    drawMenu();
    ctx.strokeStyle="black"
    if (placingTower) {
      var show = document.getElementById("upgradeOrSellButtons");
      show.style.display = "none";
      ctx.fillStyle = "red";
      ctx.globalAlpha = .5;
      ctx.fillRect(0, 205, 400, 305)
      ctx.globalAlpha = 1;
    }
    if (showTowerCoverage) {
      drawAllTowerCoverages();
    }
    for (var t = 0; t < towers.length; t++) {
      renderTowers(towers[t].x, towers[t].y, towers[t].type);
    }
    if(notEnoughMoney>0){
      notEnoughMoney-=1;
      var n=(notEnoughMoney>=3? notEnoughMoney-3 : notEnoughMoney)
      var m=(notEnoughMoney>=6? notEnoughMoney-6 : notEnoughMoney)
      ctx.strokeStyle='red';
      ctx.beginPath();
      ctx.arc(80, 100, notEnoughMoney, 0, Math.PI * 2, true);
      ctx.arc(80, 100, n, 0, Math.PI * 2, true);
      ctx.arc(80, 100, m, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.stroke();
      ctx.strokeStyle='black';
    }
    drawPlacingTowerRangeCircle();
    drawEdgeSquares();
		drawDots();
    if (inOptionsMenu) {
      drawOptionsMenu();
    }
    else if(!inMainMenu){
      var show = document.getElementById("towers");
      show.style.display = "block";
      var show = document.getElementById("optionsMenu");
      show.style.display = "none";
    }
    if (inMainMenu) {
      drawMainMenu();
    }
    else {
      var show = document.getElementById("mainMenu");
      show.style.display = "none";
    }
    if (inHighScoresMenu) {
      drawHighScoresMenu();
    }
    else {
      var show = document.getElementById("highScoresMenu");
      show.style.display = "none";
    }
    if (inCreditsMenu) {
      drawCreditsMenu();
    }
    else {
      var show = document.getElementById("creditsMenu");
      show.style.display = "none";
    }
    if(!inOptionsMenu && !inMainMenu && !inHighScoresMenu && !inCreditsMenu){
      var show = document.getElementById("towers");
      show.style.display = "block";
    }
    if(drawInputHSBox){
      graphics.context.fillStyle="white";
      graphics.context.fillRect(250,420,480,130);
      graphics.context.stroke;
      var show = document.getElementById("inputHighScore");
      if(show.style.display === "none"){
        show.style.display = "block";
      }
    }
    else {
      var show = document.getElementById("inputHighScore");
      if(show.style.display === "block"){
        show.style.display = "none";
      }
    }
    for (var c = 0; c < creeps.length; c++) {
      drawCreeps(c);
    }
    aimTowers();
    for (var t=0; t< turretAnimation.length; t++){
      shootMissile(t)
    }
    for (var i=0; i<deathScores.length; i++){
      var ds=deathScores[i];
      ctx.font= "12px Arial";
      ctx.fillText(ds.score,ds.x,ds.y);
      ds.y-=1;
      ds.timeLeft-=20;
      if(ds.timeLeft<=0){
        deathScores.splice(i,1);
      }
    }
    if(youLost){
      ctx.fillStyle='red';
      ctx.font = "100px Arial";
      ctx.fillText("You Lose!", 300,300);
    }
    // for (var p=0; p<particleExposions.length; p++){
    //   console.log(particleExposions[p].x)
    //   drawBombParticleExplosion(elapsedTime,particleExposions[p].x,particleExposions[p].y);
    //   renderConfetti();
    // }
    ctx.stroke();
  }
  window.addEventListener('keydown', function(event) {
    inputStage.push(event.keyCode);
  });

  function gameLoop(time) {
    let elapsedTime = (time - lastTimeStamp);
    update(elapsedTime);
    lastTimeStamp = time;
    render(time);
    requestAnimationFrame(gameLoop);
  };

  requestAnimationFrame(gameLoop);
}(MyGame.graphics));


function clickedSubmitHighScore(){
	var show = document.getElementById("inputHighScore");
	show.style.display = "none";
	var hsName = []
	var hsScore = []
	if(localStorage.getItem("highscore") !== null){
		hsName = JSON.parse(localStorage.getItem("highscore"))
		hsScore = JSON.parse(localStorage.getItem("score"))
	}
	if(hsScore.length>7){
		hsScore.length=7;
		hsName.length=7;
	}
	var n=0;
	var highscoreName = document.getElementById("highScoreNameText").value;
	for (var i=0;i<hsScore.length;i++){
		if(hsScore[i]<=score){
			n = i;
			i=hsScore.length;
		}
		else{
			n=hsScore.length;
		}
	}
	hsScore.splice(n,0,score);
	hsName.splice(n,0,highscoreName);
	localStorage.setItem("highscore", JSON.stringify(hsName));
	localStorage.setItem("score", JSON.stringify(hsScore));
  inHighScoresMenu = true;
  youLost=false;
  drawInputHSBox=false;
}
