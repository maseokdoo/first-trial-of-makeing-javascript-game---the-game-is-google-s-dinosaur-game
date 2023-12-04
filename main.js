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
var jumptimer = 0;
var jumping = false;
var animation;

function Func_execute_for_every_Frame(){
    animation = requestAnimationFrame(Func_execute_for_every_Frame);
    timer++;
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(timer % 200 === 0){
        var cactus = new Cactus();
        plenty_of_cactus.push(cactus);
    }
    plenty_of_cactus.forEach((a, i, o)=>{
        //좌표가 0 미만이면 제거하라는 코드
        if (a.x < 0){
            o.splice(i, 1)
        }
        a.x--;
        crash_check(dino, a);
        a.draw();
    })

    if(jumping == true){
        dino.y--;
        jumptimer++;
    }
    if(jumping == false){
        if(dino.y < 200){
            dino.y++;
        }
    }
    if(jumptimer>100){
        jumping = false;
        jumptimer = 0;
    }
    
    dino.draw()
}

//충돌확인
function crash_check(dino, cactus){
    var x_difference = cactus.x - (dino.x + dino.width);
    var y_difference = cactus.y - (dino.y + dino.height);
    if( x_difference < 0 && y_difference < 0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}


Func_execute_for_every_Frame();

document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        jumping = true;
    }
})
