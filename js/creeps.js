class Creep {
    move(elapsedTime){
        if (direction == 'up'){
            this.y -= speed*elapsedTime/1000;
        }
        else if (direction == 'down'){
            this.y += speed*elapsedTime/1000;
        }
        else if (direction == 'left'){
            this.x -= speed*elapsedTime/1000;
        }
        else if (direction == 'right'){
            this.x += speed.elapsedTime/1000;
        }
    }
}

class groundOne extends Creep {
    constructor(x, y, direction){
        this.hp = 50;
        this.speed = 10;
        this.flying = false;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

class groundTwo extends Creep {
    constructor(x,y,direction){
        this.hp = 75;
        this.speed = 12;
        this.flying = false;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

class groundThree extends Creep {
    constructor(x,y,direction){
        this.hp = 100;
        this.speed = 10;
        this.flying = false;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

class air extends Creep {
    constructor(x,y,direction){
        this.hp = 50;
        this.speed = 10;
        this.flying = true;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

let jim = new groundOne(1,1,'right');
jim.move(1000);
console.log(jim);
jim.direction = 'down';
jim.move(2000);
console.log(jim);
