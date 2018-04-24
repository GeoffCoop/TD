
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

let placeTowerSound = new sound("./sounds/placetower.wav");
let sellTowerSound = new sound("./sounds/sell.wav");
let upgradeTowerSound = new sound("./sounds/upgrade.wav");
let missileShootSound = new sound("./sounds/missile.wav");
let arrowShootSound = new sound("./sounds/arrow.wav");


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

function renderTowers(x, y, type, ctx) {
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

function aimTowers(ctx){
    for (var t=0; t< towers.length; t++){
      var h=0;
      for (var c=0; c<creeps.length; c++){
        if(creeps[c].gridX >= 0){ //This makes sure we aren't checking for creeps outside of the game area.
          if(towers[t].type==1 || towers[t].type==2){ //If ground tower. search for ground troops
            if(creeps[c].type==1 || creeps[c].type==2){
              var cx=creeps[c].gridX*40+400+creeps[c].relativeX+creeps[c].animationX;
              var cy=creeps[c].gridY*40+creeps[c].relativeY+creeps[c].animationY;
              h = Math.sqrt((cx-towers[t].x)**2 + (cy-towers[t].y)**2)
              if (h<towers[t].range){
                rotateToSource(towers[t], c, h, ctx) //Aim at creep within range
              }
              else{
                rotateTower(towers[t],0, ctx) //If creep not in range, stay still
              }
            }
          }
          else if(towers[t].type==3 || towers[t].type==4){ //If air tower, search for air troops
            if(creeps[c].type==3){
              var cx=creeps[c].gridX*40+400+creeps[c].relativeX+creeps[c].animationX;
              var cy=creeps[c].gridY*40+creeps[c].relativeY+creeps[c].animationY;
              h = Math.sqrt((cx-towers[t].x)**2 + (cy-towers[t].y)**2)
              if (h<towers[t].range){
                rotateToSource(towers[t], c, h, ctx) //Aim at creep within range
              }
              else{
                rotateTower(towers[t],0, ctx) //If creep not in range, stay still
              }
            }
          }
        }
      }
      if(h==0){
        rotateTower(towers[t],0, ctx) //If no creeps, stay still
      }
    }
}

function rotateTower(tower, angle, context) {
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

function drawAllTowerCoverages(ctx) {
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

function testTolerance(value, test, tolerance) {
		if (Math.abs(value - test) < tolerance) {
			return true;
		} else {
			return false;
	}
}

function rotateToSource(tower,c,h, ctx) {
		var towerCenter = {x: tower.x-20, y: tower.y-20};
    var cx=creeps[c].gridX*40+400+creeps[c].relativeX+creeps[c].animationX;
    var cy=creeps[c].gridY*40+creeps[c].relativeY+creeps[c].animationY;
		var creepCenter = {x: cx, y: cy};
		var result = computeAngle(tower.angle, towerCenter, creepCenter);
		if (testTolerance(result.angle, 0, .01) === false) {
			if (result.crossProduct > 0) {
				rotateTower(tower,1, ctx)
			} else {
				rotateTower(tower,-1, ctx)
			}
      tower.shots+=1;
		}
    else{
      rotateTower(tower,0,ctx)
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

function shootMissile(t, ctx){
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


