var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y, this.width,this.height);
    }
}

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y, this.width,this.height);
    }
}

var timer = 0;
var plenty_of_cactus = [];


function Func_execute_for_every_Frame(){
    requestAnimationFrame(Func_execute_for_every_Frame)
    timer++;
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(timer % 120 === 0){
        var cactus = new Cactus();
        plenty_of_cactus.push(cactus);
    }
    plenty_of_cactus.forEach((a)=>{
        a.x--;
        a.draw();
    })
    
    dino.draw()
}

Func_execute_for_every_Frame();