let imgBackground = new Image();
imgBackground.isReady = false;
imgBackground.onload = function() {
	this.isReady = true;
};
imgBackground.src = './images/grassBackground.jpg';

let score = 0;
let MyGame = {};
var circleX=400;
var circleY=0;

function clickedGroundProjectile(){

}
function clickedGroundBomb(){

}
function clickedAirProjectile(){

}
function clickedAirMissile(){
	$(document).mousemove(function(e){
    $("#image").css({left:e.pageX-50-20, top:e.pageY-50-20});
		circleX=e.pageX-100-20;
		circleY=e.pageY-120-20;
	});
}
function clickedOptions(){

}
function clickedQuit(){

}
function clickedPlayNextLevel(){

}

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
	var blahx=400;
	var blahy=0;
	var edgeArr=[400, 0, 440, 0, 480, 0, 520, 0, 560, 0, 600, 0, 760, 0, 800, 0, 840, 0, 880, 0, 920, 0, 960, 0, 960, 40, 960, 80, 960, 120, 960, 160, 960, 200, 960, 360, 960, 400, 960, 440, 960, 480, 960, 520, 960, 560, 920, 560, 880, 560, 840, 560, 800, 560, 760, 560, 600, 560, 560, 560, 520, 560, 480, 560, 440, 560, 400, 560, 400, 520, 400, 480, 400, 440, 400, 400, 400, 360, 400, 200, 400, 160, 400, 120, 400, 80, 400, 40]
	var blahArr=[];
	console.log('game initializing...');
	let lastTimeStamp = performance.now();
	let confettiParticles = [];
	let canvas = document.getElementById('canvas-main');
	let context = canvas.getContext('2d');
	let ctx = graphics.context;
	let inputStage = [];
	var grid = []
	for (let row = 0; row < 15; row++) {
		grid.push([]);
		for (let col = 0; col < 15; col++) {
			grid[row].push({
				x: 400+row*40, y: col*40, occupied: false
			});
		}
	}
	// console.log(grid)

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
		graphics.context.font = "60px Arial";
		graphics.context.fillStyle = "red";
		graphics.context.fillText("YOU WIN!",canvas.width/2-160,canvas.height/2);
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
		// var ctx = graphics.context;
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
		ctx.moveTo(0, 75);
		ctx.lineTo(400, 75);
		ctx.lineWidth = 3;
		ctx.font = "30px Arial";
		ctx.fillStyle = "black";
		ctx.fillText("13         10",75,112);
		ctx.moveTo(0, 125);
		ctx.lineTo(400, 125);
		ctx.lineWidth = 3;
		ctx.moveTo(0, 205);
		ctx.lineTo(400, 205);
		ctx.lineWidth = 3;
		ctx.globalAlpha = 0.75;
		ctx.fillStyle = "gray";
		ctx.fillRect(30,220,330,510-220-15);
		ctx.globalAlpha = 1;
		ctx.moveTo(0, 510);
		ctx.lineTo(400, 510);
		ctx.lineWidth = 3;
	}

	function drawHighScores(){
		menuPause = true;
		graphics.context.globalAlpha = 0.95;
		graphics.context.fillStyle="gray";
		var menuRectX=200;
		var menuRectY=50-5;
		var menuRectWidth=canvas.width-400;
		var menuRectHeight=canvas.height-100+10;
		graphics.context.fillRect(menuRectX,menuRectY,menuRectWidth,menuRectHeight);
		graphics.context.font = "50px Arial";
		graphics.context.fillStyle = "black";
		graphics.context.fillText("HIGH SCORES",menuRectX+23,menuRectY+60);
		graphics.context.font = "20px Arial";
		var storedHSNames = [];
		var storedHsScores = [];
		if(localStorage.getItem("highscore") !== null){
			storedHSNames = JSON.parse(localStorage.getItem("highscore"));
			storedHsScores = JSON.parse(localStorage.getItem("score"));
		}
		for (var hs=0;hs<storedHSNames.length;hs++){
			graphics.context.fillText(storedHsScores[hs]+" - "+storedHSNames[hs],menuRectX+20,menuRectY+100+30*hs);
		}
		if(hsMenuItemSelected==0){
			var grd=graphics.context.createLinearGradient(menuRectX+50,menuRectY+menuRectHeight-155-15,menuRectX+50,menuRectY+menuRectHeight-155-15+10);
			grd.addColorStop(0,"#979799");
			grd.addColorStop(1,"#3f3f3f");
			graphics.context.fillStyle=grd;
		}
		else{
			graphics.context.fillStyle="black";
		}
		graphics.context.fillRect(menuRectX+50,menuRectY+menuRectHeight-155-15,menuRectWidth-100,50-5);
		graphics.context.font = "30px Arial";
		graphics.context.fillStyle = "#d18f1d";
		graphics.context.fillText("RESET SCORES",menuRectX+80,menuRectY+menuRectHeight-135-2.5);
		if(hsMenuItemSelected==1){
			var grd=graphics.context.createLinearGradient(menuRectX+50,menuRectY+menuRectHeight-70-15,menuRectX+50,menuRectY+menuRectHeight-70-15+10);
			grd.addColorStop(0,"#979799");
			grd.addColorStop(1,"#3f3f3f");
			graphics.context.fillStyle=grd;
		}
		else{
			graphics.context.fillStyle="black";
		}
		graphics.context.fillRect(menuRectX+50,menuRectY+menuRectHeight-70-15,menuRectWidth-100,50-5);
		graphics.context.font = "30px Arial";
		graphics.context.fillStyle = "#d18f1d";
		graphics.context.fillText("BACK",menuRectX+165,menuRectY+menuRectHeight-35-17.5);
		graphics.context.globalAlpha = 1.0;
	}

	function drawCredits(){
		menuPause = true;
		graphics.context.globalAlpha = 0.95;
		graphics.context.fillStyle="gray";
		var menuRectX=200;
		var menuRectY=50-5;
		var menuRectWidth=canvas.width-400;
		var menuRectHeight=canvas.height-100+10;
		graphics.context.fillRect(menuRectX,menuRectY,menuRectWidth,menuRectHeight);
		graphics.context.font = "50px Arial";
		graphics.context.fillStyle = "black";
		graphics.context.fillText("CREDITS",menuRectX+90,menuRectY+70);
		graphics.context.font = "20px Arial";
		graphics.context.fillText("This game was created by Matt Ward as",menuRectX+20,menuRectY+120);
		graphics.context.fillText("a project for CS 5410.",menuRectX+22,menuRectY+150);
		graphics.context.fillStyle="#3f3f3f";
		graphics.context.fillRect(menuRectX+50,menuRectY+menuRectHeight-70-15,menuRectWidth-100,50-5);
		graphics.context.font = "30px Arial";
		graphics.context.fillStyle = "#d18f1d";
		graphics.context.fillText("BACK",menuRectX+165,menuRectY+menuRectHeight-35-17.5);
		graphics.context.globalAlpha = 1.0;
	}

	function handleInputs(keyCode, elapsedTime){
		if (keyCode === 39) { //right
			blahx+=40;
			circleX+=40;
		}
		if (keyCode === 37) { //left
			blahx-=40;
			circleX-=40;
		}
		if (keyCode === 38) { //up
			blahy-=40;
			circleY-=40;
		}
		if (keyCode === 40) { //down
			blahy+=40;
			circleY+=40;
		}
		if (keyCode === 13) { //enter
			blahArr.push(blahx, blahy)
		}
		if (keyCode === 27) { //escape

		}
	}

	function renderBackground(){
		if (imgBackground.isReady) {
			graphics.context.drawImage(imgBackground,
			0,0, canvas.width, canvas.height);
		}
	}

	function processInput(elapsedTime) {
		for (var input=0; input<inputStage.length; input++) {
			handleInputs(inputStage[input], elapsedTime);
		}
		inputStage = [];
	}

	function update(elapsedTime) {
		processInput(elapsedTime);
	}

	function render() {
		graphics.clear();
		renderBackground();
		drawGrid(context, canvas.width-400, canvas.height, 40)
		drawMenu();
		ctx.globalAlpha = 0.75;
		graphics.context.fillStyle="white";
		graphics.context.beginPath();
		graphics.context.arc(circleX+20,circleY+20,120,0,Math.PI*2,true);
		graphics.context.closePath();
		graphics.context.fill();
		ctx.globalAlpha = 1;
		graphics.context.fillStyle="black";
		graphics.context.beginPath();
		graphics.context.arc(blahx+20,blahy+20,10,0,Math.PI*2,true);
		graphics.context.closePath();
		graphics.context.fill();
		for (var x=0; x<edgeArr.length; x+=2){
			graphics.context.fillStyle="red";
			graphics.context.beginPath();
			var xx = edgeArr[x];
			var yy = edgeArr[x+1];
			graphics.context.arc(xx+20,yy+20,10,0,Math.PI*2,true);
			graphics.context.closePath();
			graphics.context.fill();
		}
		for (var x=0; x<blahArr.length; x+=2){
			graphics.context.fillStyle="white";
			graphics.context.beginPath();
			var xx = blahArr[x];
			var yy = blahArr[x+1];
			graphics.context.arc(xx+20,yy+20,10,0,Math.PI*2,true);
			graphics.context.closePath();
			graphics.context.fill();
		}
		// for (var row=0; row<grid.length; row++){
		// 	for (var col=0; col<grid.length; col++){
		// 		graphics.context.fillStyle="blue";
		// 		graphics.context.beginPath();
		// 		graphics.context.arc(grid[row][col].x+20,grid[row][col].y+20,10,0,Math.PI*2,true);
		// 		graphics.context.closePath();
		// 		graphics.context.fill();
		// 	}
		// }
		graphics.context.stroke();
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

function clickedSubmitHighScore(){
	var show = document.getElementById("inputHighScore");
	// show.style.visibility = "hidden";
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
	gameState=2;
}
