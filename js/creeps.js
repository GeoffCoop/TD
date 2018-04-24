// class Creep {
//     move(elapsedTime){
//         if (direction == 'up'){
//             this.y -= speed*elapsedTime/1000;
//         }
//         else if (direction == 'down'){
//             this.y += speed*elapsedTime/1000;
//         }
//         else if (direction == 'left'){
//             this.x -= speed*elapsedTime/1000;
//         }
//         else if (direction == 'right'){
//             this.x += speed.elapsedTime/1000;
//         }
//     }
// }

// class groundOne extends Creep {
//     constructor(x, y, direction){
//         this.hp = 50;
//         this.speed = 10;
//         this.flying = false;
//         this.x = x;
//         this.y = y;
//         this.direction = direction;
//     }
// }

// class groundTwo extends Creep {
//     constructor(x,y,direction){
//         this.hp = 75;
//         this.speed = 12;
//         this.flying = false;
//         this.x = x;
//         this.y = y;
//         this.direction = direction;
//     }
// }

// class groundThree extends Creep {
//     constructor(x,y,direction){
//         this.hp = 100;
//         this.speed = 10;
//         this.flying = false;
//         this.x = x;
//         this.y = y;
//         this.direction = direction;
//     }
// }

// class air extends Creep {
//     constructor(x,y,direction){
//         this.hp = 50;
//         this.speed = 10;
//         this.flying = true;
//         this.x = x;
//         this.y = y;
//         this.direction = direction;
//     }
// }

// let jim = new groundOne(1,1,'right');
// jim.move(1000);
// console.log(jim);
// jim.direction = 'down';
// jim.move(2000);
// console.log(jim);


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

function drawCreeps(c, ctx){
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
      else if(creeps[c].gridY==14 && (creeps[c].gridX==6 || creeps[c].gridX==7 || creeps[c].gridX==8)){
        hearts-=1;
        creeps.splice(c, 1);
      }
      if(hearts<1){
        youLost = true;
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