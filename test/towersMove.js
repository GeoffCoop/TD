let canvas = document.getElementById("canvas-main");
let context = canvas.getContext('2d');

var tower = new Image();
tower.src = './gbomb.jpg';
towerSize = 50;
angleAccuracy = .025;

class Tower {
    constructor(x,y){
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
    this.setTransform(1,0,0,1,0,0);
    this.clearRect(0,0,canvas.width, canvas.height)
    this.restore();
}

let angle = 0;

function update(elapsedTime){
    angle += 0.01;
}

let sx = 300;
let sy= 300;

var tl = new Tower(150,150);
var bl = new Tower(150,450);
var tr = new Tower(450,150);
var br = new Tower(450,450);

function render(){
    context.clear();
    
    // context.save();
    // context.translate(125,125);
    // context.rotate(angle*5);
    // context.drawImage(tower,-25,-25,50,50);
    // context.restore();

    // rotateTower(tr, tr.rotationSpeed);
    // rotateTower(br, -0.02)

    rotateToSource(tr, sx, sy);
    rotateToSource(br, sx, sy);
    rotateToSource(tl, sx, sy);
    rotateToSource(bl, sx, sy)
    // rotateImage(tower, 150, 150, 50, angle*5);
    // rotateImage(tower, 450, 150, 50, -angle*3);
    // rotateImage(tower, 150, 450, 50, angle*4);
    // rotateImage(tower, 450, 450, 50, -angle*2);
    
}

//for square images desired at size
function rotateImage(image, x, y, size, angle){
    context.save();
    context.translate(x,y);
    context.rotate(angle);
    context.drawImage(image, -size/2, -size/2, size, size);
    context.restore();
}

function rotateTower(tower, angle){
    context.save();
    context.translate(tower.x, tower.y);
    if (angle){
        if (angle == 1){
            tower.angle += tower.rotationSpeed;
        }
        else {
            tower.angle -= tower.rotationSpeed;
        }
    }
    tower.angle = (tower.angle + (2*Math.PI)) % (2*Math.PI);
    context.rotate(tower.angle);
    context.drawImage(tower.img, -tower.size/2, -tower.size/2, tower.size, tower.size);
    context.restore();
}



function rotateToSource(tower, x, y){
    
    if (Math.abs(tower.angle - (x < tower.x ? Math.atan((tower.y-y)/(tower.x-x))+Math.PI : Math.atan((tower.y-y)/(tower.x-x))))%(2*Math.PI) > angleAccuracy) {
        
        if(tower == tl){console.log(Math.atan((tower.y-y)/(tower.x-x)) - tower.angle )}

        if (x < tower.x){
            if (Math.abs(Math.atan((tower.y-y)/(tower.x-x)) - tower.angle) > Math.PI){
                rotateTower(tower, -1)
            }
            else {
                rotateTower(tower, 1);
            }
        }
        else {
            if (Math.atan((tower.y-y)/(tower.x-x)) - tower.angle > Math.PI){
                rotateTower(tower, -1);
            }
            else {
                rotateTower(tower, 1);
            }

        }
    }
    else {
        rotateTower(tower, 0);
    }
}

let lastTimeStamp = performance.now();

function gameLoop(time){
    let elapsedTime = time - lastTimeStamp;
    update(elapsedTime);
    lastTimeStamp = time;
    render();

    requestAnimationFrame(gameLoop);
}

gameLoop(lastTimeStamp);


