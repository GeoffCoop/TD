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

let score = 0;
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
		clear : clear,
		context: context
	};
}());

MyGame.main = (function (graphics) {
	'use strict';
	var edgeArr=[400, 0, 440, 0, 480, 0, 520, 0, 560, 0, 600, 0, 760, 0, 800, 0, 840, 0, 880, 0, 920, 0, 960, 0, 960, 40, 960, 80, 960, 120, 960, 160, 960, 200, 960, 360, 960, 400, 960, 440, 960, 480, 960, 520, 960, 560, 920, 560, 880, 560, 840, 560, 800, 560, 760, 560, 600, 560, 560, 560, 520, 560, 480, 560, 440, 560, 400, 560, 400, 520, 400, 480, 400, 440, 400, 400, 400, 360, 400, 200, 400, 160, 400, 120, 400, 80, 400, 40]
	console.log('game initializing...');
	var lastTimeStamp = performance.now();
	var confettiParticles = [];
	var canvas = document.getElementById('canvas-main');
	var context = canvas.getContext('2d');
	var ctx = graphics.context;
	var inputStage = [];
	var towerPlacingGlowX=-120;
	var towerPlacingGlowY=-120;
	var placingTower = false;
	var towerType = 0;
	var taken = false;
	var gridSize=15;
	var menuSelectedTower=-1;
	var towers=[];
	var grid = []
	for (let row = 0; row < gridSize; row++) {
		grid.push([]);
		for (let col = 0; col < gridSize; col++) {
			grid[row].push({
				x: 400+row*40, y: col*40, occupied: false
			});
		}
	}
	document.addEventListener("click", click);
	function makeTower(x,y, type){
		towers.push({
			type: type, //1-groundProjectile, 2-groundBomb, 3-airProjectile, 4-airMissile
			level: 1,
			levelNext: 2,
			damage: 10,
			damageNext: 15,
			range: 8,
			rangeNext: 10,
			rate: 10,
			rateNext: 15,
			initialCost: 10,
			upgradeCost: 5,
			sellFor: 8,
			x: x,
			y: y
		});
		grid[(x-400)/40][y/40].occupied=true;
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

	function drawConfettiParticles(elapsedTime){
		let canvas = document.getElementById('canvas-main');
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
		for (let particle = 0; particle < Random.nextGaussian(7, 5); particle++) {
			let p = {
				position: { x: 100, y: canvas.height },
				direction: Random.nextCircleVector(),
				speed: Random.nextGaussian( 0.5, .1 ),	// pixels per millisecond
				rotation: 0,
				lifetime: Random.nextGaussian(2000, 1000),	// milliseconds
				alive: 0,
				size: Random.nextGaussian(5,3),
				fill: 'rgb(255, 255, 255)',
				stroke: 'rgb(0, 0, 0)'
			};
			keepMe.push(p);
		}
		for (let particle = 0; particle < Random.nextGaussian(7, 5); particle++) {
			let p = {
				position: { x: canvas.width-100, y: canvas.height },
				direction: Random.nextCircleVector(),
				speed: Random.nextGaussian( 0.5, .1 ),	// pixels per millisecond
				rotation: 0,
				lifetime: Random.nextGaussian(2000, 1000),	// milliseconds
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
		ctx.font = "60px Arial";
		ctx.fillStyle = "red";
		ctx.fillText("YOU WIN!",canvas.width/2-160,canvas.height/2);
	}

	function drawConfetti(p) {
		if (p.alive > 100) {
			ctx.save();
			ctx.translate(p.position.x + p.size / 2, p.position.y + p.size / 2);
			ctx.rotate(p.rotation);
			ctx.translate(-(p.position.x + p.size / 2), -(p.position.y + p.size / 2));

			ctx.fillStyle = p.fill;
			ctx.strokeStyle = p.stroke;
			ctx.fillRect(p.position.x, p.position.y, p.size, p.size);
			ctx.strokeRect(p.position.x, p.position.y, p.size, p.size);

			ctx.restore();
		}
	}

	function drawGrid(ctx, w, h, step) {
    ctx.beginPath();
    for (var x=400;x<=w+400;x+=step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
    }
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    for (var y=0;y<=h;y+=step) {
            ctx.moveTo(400, y);
            ctx.lineTo(400+w, y);
    }
    ctx.lineWidth = 1;
    ctx.stroke();
	}

	function drawMenu(){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle="gray";
		var menuRectX=0;
		var menuRectY=0;
		var menuRectWidth=400;
		var menuRectHeight=canvas.height;
		ctx.fillRect(menuRectX,menuRectY,menuRectWidth,menuRectHeight);
		ctx.globalAlpha = 1.0;
		ctx.font = "50px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("Tower Defense!",25,55);
		ctx.lineWidth=3;
		ctx.moveTo(0, 75);
		ctx.lineTo(400, 75);
		ctx.font = "30px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("13         10",75,112);
		ctx.moveTo(0, 125);
		ctx.lineTo(400, 125);
		ctx.moveTo(0, 205);
		ctx.lineTo(400, 205);
		ctx.lineWidth = 3;
		ctx.globalAlpha = 0.75;
		ctx.stroke();
		if(menuSelectedTower!=-1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle="white";
			ctx.beginPath();
			ctx.arc(towers[menuSelectedTower].x+20,towers[menuSelectedTower].y+20,120,0,Math.PI*2,true);
			ctx.closePath();
			ctx.fill();
			ctx.globalAlpha = 1;
			ctx.fillStyle = "gray";
			ctx.fillRect(30,220,330,280);
			ctx.moveTo(30,222);
			ctx.lineTo(360,220);
			ctx.moveTo(360,220);
			ctx.lineTo(360,500);
			ctx.moveTo(360,500);
			ctx.lineTo(30,500);
			ctx.moveTo(30,500);
			ctx.lineTo(30,222);
			ctx.globalAlpha = 1;
			ctx.fillStyle = "black";
			ctx.lineWidth=2;
			ctx.moveTo(30, 260);
			ctx.lineTo(360, 260);
			ctx.stroke();
			ctx.lineWidth=1;
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
			var tType="";
			var tTargets="";
			if(towers[menuSelectedTower].type==1){
				tType="Ground Projectile";
				tTargets="Ground";
			}
			else if(towers[menuSelectedTower].type==2){
				tType="Ground Bomb";
				tTargets="Ground";
			}
			else if(towers[menuSelectedTower].type==3){
				tType="Air Projectile";
				tTargets="Air";
			}
			else if(towers[menuSelectedTower].type==4){
				tType="Air Missile";
				tTargets="Air";
			}
			ctx.fillText(tType,100,250);
			ctx.fillText("Current",165,280);
			ctx.fillText("Next Level",265,280);
			ctx.fillText("Level",40,310);
			ctx.fillText(towers[menuSelectedTower].level,165,310);
			ctx.fillText(towers[menuSelectedTower].levelNext,265,310);
			ctx.fillText("Damage",40,340);
			ctx.fillText(towers[menuSelectedTower].damage,165,340);
			ctx.fillText(towers[menuSelectedTower].damageNext,265,340);
			ctx.fillText("Range",40,370);
			ctx.fillText(towers[menuSelectedTower].range,165,370);
			ctx.fillText(towers[menuSelectedTower].rangeNext,265,370);
			ctx.fillText("Firing Rate",40,400);
			ctx.fillText(towers[menuSelectedTower].rate,165,400);
			ctx.fillText(towers[menuSelectedTower].rateNext,265,400);
			ctx.fillText("Targets",40,430);
			ctx.fillText(tTargets,165,430);
			ctx.fillText("---",265,430);
			ctx.fillText("Upgrade Cost",40,460);
			ctx.fillText(towers[menuSelectedTower].upgradeCost,165,460);
			ctx.fillText("Sell For",40,490);
			ctx.fillText(towers[menuSelectedTower].sellFor,165,490);
			var show = document.getElementById("upgradeOrSellButtons");
			show.style.display = "block";
			ctx.stroke();
		}
		ctx.moveTo(0, 510);
		ctx.lineTo(400, 510);
		ctx.moveTo(400,0);
		ctx.lineTo(400,600);
		ctx.stroke();
	}

	function drawHighScores(){
		menuPause = true;
		ctx.globalAlpha = 0.95;
		ctx.fillStyle="gray";
		var menuRectX=200;
		var menuRectY=50-5;
		var menuRectWidth=canvas.width-400;
		var menuRectHeight=canvas.height-100+10;
		ctx.fillRect(menuRectX,menuRectY,menuRectWidth,menuRectHeight);
		ctx.font = "50px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("HIGH SCORES",menuRectX+23,menuRectY+60);
		ctx.font = "20px Arial";
		var storedHSNames = [];
		var storedHsScores = [];
		if(localStorage.getItem("highscore") !== null){
			storedHSNames = JSON.parse(localStorage.getItem("highscore"));
			storedHsScores = JSON.parse(localStorage.getItem("score"));
		}
		for (var hs=0;hs<storedHSNames.length;hs++){
			ctx.fillText(storedHsScores[hs]+" - "+storedHSNames[hs],menuRectX+20,menuRectY+100+30*hs);
		}
		if(hsMenuItemSelected==0){
			var grd=ctx.createLinearGradient(menuRectX+50,menuRectY+menuRectHeight-155-15,menuRectX+50,menuRectY+menuRectHeight-155-15+10);
			grd.addColorStop(0,"#979799");
			grd.addColorStop(1,"#3f3f3f");
			ctx.fillStyle=grd;
		}
		else{
			ctx.fillStyle="black";
		}
		ctx.fillRect(menuRectX+50,menuRectY+menuRectHeight-155-15,menuRectWidth-100,50-5);
		ctx.font = "30px Arial";
		ctx.fillStyle = "#d18f1d";
		ctx.fillText("RESET SCORES",menuRectX+80,menuRectY+menuRectHeight-135-2.5);
		if(hsMenuItemSelected==1){
			var grd=ctx.createLinearGradient(menuRectX+50,menuRectY+menuRectHeight-70-15,menuRectX+50,menuRectY+menuRectHeight-70-15+10);
			grd.addColorStop(0,"#979799");
			grd.addColorStop(1,"#3f3f3f");
			ctx.fillStyle=grd;
		}
		else{
			ctx.fillStyle="black";
		}
		ctx.fillRect(menuRectX+50,menuRectY+menuRectHeight-70-15,menuRectWidth-100,50-5);
		ctx.font = "30px Arial";
		ctx.fillStyle = "#d18f1d";
		ctx.fillText("BACK",menuRectX+165,menuRectY+menuRectHeight-35-17.5);
		ctx.globalAlpha = 1.0;
	}

	function drawCredits(){
		menuPause = true;
		ctx.globalAlpha = 0.95;
		ctx.fillStyle="gray";
		var menuRectX=200;
		var menuRectY=50-5;
		var menuRectWidth=canvas.width-400;
		var menuRectHeight=canvas.height-100+10;
		ctx.fillRect(menuRectX,menuRectY,menuRectWidth,menuRectHeight);
		ctx.font = "50px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("CREDITS",menuRectX+90,menuRectY+70);
		ctx.font = "20px Arial";
		ctx.fillText("This game was created by Matt Ward as",menuRectX+20,menuRectY+120);
		ctx.fillText("a project for CS 5410.",menuRectX+22,menuRectY+150);
		ctx.fillStyle="#3f3f3f";
		ctx.fillRect(menuRectX+50,menuRectY+menuRectHeight-70-15,menuRectWidth-100,50-5);
		ctx.font = "30px Arial";
		ctx.fillStyle = "#d18f1d";
		ctx.fillText("BACK",menuRectX+165,menuRectY+menuRectHeight-35-17.5);
		ctx.globalAlpha = 1.0;
	}

	function handleInputs(keyCode, elapsedTime){
		if (keyCode === 39) { //right
		}
		if (keyCode === 37) { //left
		}
		if (keyCode === 38) { //up
		}
		if (keyCode === 40) { //down
		}
		if (keyCode === 13) { //enter
		}
		if (keyCode === 27) { //escape
		}
		if (keyCode === 68) { //D
			followMouse(1); //TODO - Remove this - This is just to help quickly draw mazes!
		}
	}

	function renderBackground(){
		if (imgBackground.isReady) {
			ctx.drawImage(imgBackground,
			0,0, canvas.width, canvas.height);
		}
	}

	function followMouse(x){
		placingTower=true;
		towerType = x;
		menuSelectedTower=-1;
		$(document).mousemove(function(e){
			$("#image"+x).css({left:e.pageX-50, top:e.pageY-50-20});
			towerPlacingGlowX=e.pageX-100;
			towerPlacingGlowY=e.pageY-120-20;
		});
	}

	function checkListeners(){
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

	}

	function click(event) {
		let canvas = document.getElementById('canvas-main');
		var rect = canvas.getBoundingClientRect();
		var mousePointerX = 400+40*Math.floor((event.clientX-rect.left-400)/40);
		var mousePointerY = 40*Math.floor((event.clientY-rect.top)/40);
		if(placingTower){
			for(var t=0; t<towers.length;t++){
				if(towers[t].x == mousePointerX && towers[t].y == mousePointerY){
					taken=true;
				}
			}
			for(var e=0; e<edgeArr.length;e+=2){
				if(edgeArr[e] == mousePointerX && edgeArr[e+1] == mousePointerY){
					taken=true;
				}
			}
			if(taken!=true){
				if(mousePointerX>=400 && mousePointerY>=0){
					makeTower(mousePointerX,mousePointerY,towerType)
					towerPlacingGlowX=-120;
					towerPlacingGlowY=-120;
					placingTower = false;
					towerType = 0;
					$("#image"+1).css({left:-50, top:-50});
					$("#image"+2).css({left:-50, top:-50});
					$("#image"+3).css({left:-50, top:-50});
					$("#image"+4).css({left:-50, top:-50});
					$(document).off('mousemove');
				}
			}
			else{
				taken=false;
			}
		}
		else{
			var anyTowerSelected = false;
			for(var t=0; t<towers.length;t++){
				if(towers[t].x == mousePointerX && towers[t].y == mousePointerY){
					anyTowerSelected=true;
					menuSelectedTower=t;
				}
			}
			if(anyTowerSelected==false){
				menuSelectedTower=-1;
				var show = document.getElementById("upgradeOrSellButtons");
				show.style.display = "none";
			}
		}
	}

	function renderTowers(x,y,type){
		if(type==1){
			if (imgGroundProjectile.isReady) {
				ctx.drawImage(imgGroundProjectile,
				x,y, 40,40);
			}
		}
		else if(type==2){
			if (imgGroundBomb.isReady) {
				ctx.drawImage(imgGroundBomb,
				x,y, 40,40);
			}
		}
		else if(type==3){
			if (imgAirProjectile.isReady) {
				ctx.drawImage(imgAirProjectile,
				x,y, 40,40);
			}
		}
		else if(type==4){
			if (imgAirMissile.isReady) {
				ctx.drawImage(imgAirMissile,
				x,y, 40,40);
			}
		}
	}

	function drawDots(){
		ctx.globalAlpha = 0.75;
		ctx.fillStyle="white";
		ctx.beginPath();
		ctx.arc(towerPlacingGlowX+20,towerPlacingGlowY+20,120,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		ctx.globalAlpha = 1;
		for (var x=0; x<edgeArr.length; x+=2){
			ctx.fillStyle="red";
			ctx.beginPath();
			var xx = edgeArr[x];
			var yy = edgeArr[x+1];
			ctx.arc(xx+20,yy+20,10,0,Math.PI*2,true);
			ctx.closePath();
			ctx.fill();
			grid[(xx-400)/40][yy/40].occupied=true;
		}
		// ctx.fillStyle="blue";
		// for (var i=0;i<grid.length;i++){
		// 	for (var j=0;j<grid.length;j++){
		// 		if(grid[i][j].occupied==true){
		// 			ctx.beginPath();
		// 			ctx.arc(400+i*40,j*40,5,0,Math.PI*2,true);
		// 			ctx.closePath();
		// 			ctx.fill();
		// 		}
		// 	}
		// }
	}

	function processInput(elapsedTime) {
		for (var input=0; input<inputStage.length; input++) {
			handleInputs(inputStage[input], elapsedTime);
		}
		inputStage = [];
	}

	function update(elapsedTime) {
		processInput(elapsedTime);
		checkListeners();
	}

	function render() {
		graphics.clear();
		renderBackground();
		// drawGrid(context, canvas.width-400, canvas.height, 40)
		drawMenu();
		drawDots();
		for (var t=0; t<towers.length; t++){
			renderTowers(towers[t].x,towers[t].y,towers[t].type);
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
