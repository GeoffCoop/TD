let canvas = document.getElementById("canvas-main");
let context = canvas.getContext('2d');

var tower = new Image();
tower.src = '../images/plane.png';
towerSize = 50;
angleAccuracy = .0295;

class Tower {
  constructor(x, y) {
    this.angle = 0;
    this.img = tower;
    this.size = towerSize;
    this.rotationSpeed = 0.03;
    this.x = x;
    this.y = y;
  }
}

CanvasRenderingContext2D.prototype.clear = function() {
  this.save();
  // this.setTransform(1, 0, 0, 1, 0, 0);
  this.clearRect(0, 0, canvas.width, canvas.height)
  this.restore();
}

// let angle = 0;

function update(elapsedTime) {
  // angle += 0.01;
}

let sx = 300;
let sy = 300;

$(document).mousemove(function(e) {
    sx = e.pageX;
    sy = e.pageY;
  });

var tl = new Tower(150, 150);
var bl = new Tower(150, 450);
var tr = new Tower(450, 150);
var br = new Tower(450, 450);

function render() {
  context.clear();

  rotateToSource(tr, sx, sy);
  rotateToSource(br, sx, sy);
  rotateToSource(tl, sx, sy);
  rotateToSource(bl, sx, sy);

  // for (var t=0; t<towers.length; t++){
  //   rotateToSource(towers[t], 500,300)
  // }

}

function rotateTower(tower, angle) {
  context.save();
  context.translate(tower.x, tower.y);
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
	angle = Math.acos(dp);
	cp = crossProduct2d(v1, v2);
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

function rotateToSource(tower,x,y){
	var towerCenter = {x: tower.x-20, y: tower.y-20};
	var creepCenter = {x: x, y: y};
	// creepCenter = {x: creep.x-10, y: creep.y-10};
	var result = computeAngle(tower.angle, towerCenter, creepCenter);
	if (testTolerance(result.angle, 0, .01) === false) {
		if (result.crossProduct > 0) {
			rotateTower(tower,1)
		} else {
			rotateTower(tower,-1)
		}
	}
  else{
    rotateTower(tower,0)
  }
}

let lastTimeStamp = performance.now();

function gameLoop(time) {
  let elapsedTime = time - lastTimeStamp;
  update(elapsedTime);
  lastTimeStamp = time;
  render();

  requestAnimationFrame(gameLoop);
}

gameLoop(lastTimeStamp);
