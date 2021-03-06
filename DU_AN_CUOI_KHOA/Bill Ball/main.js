var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/5;
var y = canvas.height-100;

var dx = 1;
var dy = -1;

var ballRadius = 10;
var paddleHeight = 5;
var paddleWidth = 120;
var paddleX = (canvas.width-paddleWidth) / 4;
var rightPressed = false;
var leftPressed = false;
var interval = 3;
var score = 0;
var ball= "green";
var ballb= document.getElementById("ball");
  

function drawBall() {
    drawPaddle();
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ball;
    ctx.fill();
    ctx.strokeStyle = "white"; 
    ctx.lineWidth = 5
    ctx.stroke();
    
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Score: "+score, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawScore();

  
   //create wall collosion...
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    /*create wall collision 2...*/
    
    if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
   

if(score == 10) { dx = 2; dy = 2, ball = "orange"}
if(score > 14) {paddleWidth = 100}
if(score > 30) {paddleWidth = 80}
if(score == 30) {ballRadius = 8}
if(score == 40) { ball = "red"}

 if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy; 
        score+= 2;
    }
    

    // else {
    //     alert("GAME OVER!! YOUR SCORE IS =" + score);

   
    //     document.location.reload();
    //     document.write("<h2> YOUR SCORE IS</h2> " +  score);
        
    
    //     clearInterval(interval);
    // }
}

    x += dx;
    y += dy;

if(rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
}
else if(leftPressed) 
    {
    paddleX -= 7;
    if (paddleX < 0){
        paddleX = 0;
    }
}

}

var interval = setInterval(draw, 0);


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);

function moveleft() {
paddleX-= 50;
}
function moveright() {
paddleX+= 50;
}