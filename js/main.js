//  Final Project CS5410
//  By: Matt Ward and Kyle Cooper

// let tower = require('./tower.js');
// let creep = require('./creeps.js');
// let menu = require('./menu');

let imgBackground = new Image();
imgBackground.isReady = false;
imgBackground.onload = function() {
  this.isReady = true;
};
imgBackground.src = './images/brushed.jpg';

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

let boomSound = new sound("./sounds/boom.mp3");
let creepDeathSound = new sound("./sounds/creep.wav");
let errorSound = new sound("./sounds/error.wav");


//////////////////////////////////////////////////////////////////////////////////////////////////

let MyGame = {};
var score = 0;
var inHighScoresMenu = false;

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
   //TODO: Change this to true before submission!!!
	var checkLastX=0;
	var checkLastY=0;
  var adjustForInspectTool = 0; //140 for my computer
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
  var saveMenuSelectedTower = -1;

  var particleExposions = [];
  var deathScores = [];
  for (let row = 0; row < gridSize; row++) {
    grid.push([]);
    console.log("pushing")
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
      var rect = canvas.getBoundingClientRect();
      var myX = e.clientX -rect.left;
      var myY =  e.clientY-rect.top;
      $("#image" + x).css({
        left: myX+30,
        top: myY + 50
      });
      towerPlacingGlowX = myX-20;
      towerPlacingGlowY = myY-20;
			var xxx = Math.floor((myX)/40-10);
			var yyy = Math.floor((myY)/40)
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
          // console.error(error);
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
        startLevel1(10);
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
    if (youLost == true){youLose()}
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
    drawMenu(ctx, canvas.height);
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
      drawAllTowerCoverages(ctx);
    }
    for (var t = 0; t < towers.length; t++) {
      renderTowers(towers[t].x, towers[t].y, towers[t].type, ctx);
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
      drawOptionsMenu(ctx);
    }
    else if(!inMainMenu){
      var show = document.getElementById("towers");
      show.style.display = "block";
      var show = document.getElementById("optionsMenu");
      show.style.display = "none";
    }
    if (inMainMenu) {
      drawMainMenu(ctx);
    }
    else {
      var show = document.getElementById("mainMenu");
      show.style.display = "none";
    }
    if (inHighScoresMenu) {
      drawHighScoresMenu(ctx);
    }
    else {
      var show = document.getElementById("highScoresMenu");
      show.style.display = "none";
    }
    if (inCreditsMenu) {
      drawCreditsMenu(ctx);
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
      drawCreeps(c, ctx);
    }
    aimTowers(ctx);
    for (var t=0; t< turretAnimation.length; t++){
      shootMissile(t, ctx)
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
