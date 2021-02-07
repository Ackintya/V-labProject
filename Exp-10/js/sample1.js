//function to move to next canvas
function navNext()
{
var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
ctx.clearRect(0,0,800,600);
boom();
	document.getElementById("canvas0").style.visibility="hidden";
	document.getElementById("canvas1").style.visibility="visible";
	document.getElementById("nextButton").style.animation="none";
	document.getElementById("a").style.visibility="visible";
	document.getElementById("b").style.visibility="hidden";
	document.getElementById("c").style.visibility="hidden";
	document.getElementById("d").style.visibility="hidden";
	document.getElementById("e").style.visibility="hidden";
	document.getElementById("f").style.visibility="hidden";
	document.getElementById("nextButton").style.visibility="hidden";
	document.getElementById("pumptext").style.visibility="visible";
	document.getElementById("text").style.left="100px";
	document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";
	document.getElementById("text").innerHTML="Draw the Front View";
	document.getElementById("titlestep").innerText="STEP";
	document.getElementById("text").style.left="95px";
	
}

function boom() 
{

var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 2;
ctx.setLineDash([]);
ctx.strokeStyle = "black";
ctx.moveTo(70,280);
ctx.lineTo(600,280);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.moveTo(390-40,250);
ctx.lineTo(550-40,250);
ctx.lineTo(450-40,130);
ctx.lineTo(390-40,130);
ctx.lineTo(390-40,250);
ctx.lineTo(550-40,250);
ctx.lineTo(550-40,190);
ctx.lineTo(500-40,190);
ctx.stroke();
ctx.closePath();

document.getElementById("nextButton").style.animation="glowing 1000ms infinite";
}

function drawLine(x1,y1,x2,y2,ratio) {
	var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
ctx.beginPath();
	ctx.moveTo(x1,y1);
	x2 = x1 + ratio * (x2-x1);
	y2 = y1 + ratio * (y2-y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
  }
  
  function animate(x1,y1,x2,y2,ratio) {
	ratio = ratio || 0;
	drawLine(x1,y1,x2,y2,ratio);
	if(ratio<1) {
	  requestAnimationFrame(function() {
		animate(x1,y1,x2,y2,ratio + 0.02);
	  });
	}	
  }
    
function a(){
var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
ctx.beginPath();
ctx.lineWidth=1;
	ctx.strokeStyle="#d9b28a";
animate(500-40,190,500-40,310);
animate(450-40,130,450-40,430);
animate(390-40,250,390-40,310);
document.getElementById("c").style.visibility="visible";
ctx.closePath();

document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";
document.getElementById("text").innerHTML="Draw the Top view";
document.getElementById("nextButton").style.visibility="hidden";
document.getElementById("reset").style.visibility="visible";
}

function b()
{	
var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
document.getElementById("b").style.visibility="visible";
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.lineWidth=1;
animate(390-40,310,550-40,310);
animate(550-40,310,550-40,430);
animate(550-40,430,390-40,430);
animate(390-40,430,390-40,310);
animate(500-40,310,500-40,370);
animate(500-40,370,550-40,370);
animate(450-40,310,450-40,430);
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
document.getElementById("c").style.visibility="hidden";

}

function canvas_arrow(context, fromx, fromy, tox, toy, r){
    var x_center = tox;
    var y_center = toy;
  
    var angle;
    var x;
    var y;
  
    context.beginPath();
  
    angle = Math.atan2(toy-fromy,tox-fromx)
    x = r*Math.cos(angle) + x_center;
    y = r*Math.sin(angle) + y_center;
  
    context.moveTo(x, y);
  
    angle += (1/3)*(2*Math.PI)
    x = r*Math.cos(angle) + x_center;
    y = r*Math.sin(angle) + y_center;
  
    context.lineTo(x, y);
  
    angle += (1/3)*(2*Math.PI)
    x = r*Math.cos(angle) + x_center;
    y = r*Math.sin(angle) + y_center;
  
    context.lineTo(x, y);
  
    context.closePath();
  
    context.fill();
  }

function c()
{
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("d").style.visibility="visible";
	document.getElementById("b").style.visibility="hidden";
	document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;";
	document.getElementById("text").innerHTML="Draw the projector for RHS profile Plane";
	document.getElementById("c").style.visibility="hidden";
	ctx.strokeStyle="black";
	ctx.lineWidth=2;
	ctx.beginPath();
	ctx.moveTo(330-40,450);
	ctx.font=' 12px Arial';
	ctx.lineTo(330-40,100);
	ctx.stroke();
	ctx.moveTo(330-40,370);
	ctx.arc(330-40,370,20,5/4*Math.PI,1.5*Math.PI);
	ctx.stroke();
	ctx.fillText("45°",308-40,340);
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle="#d9b28a";
	ctx.lineWidth=1;
	animate(390-40,310,330-40,310);
	animate(390-40,370,330-40,370);
	animate(390-40,430,330-40,430);
	animate(390-40,250,330-40,250);
	animate(390-40,190,330-40,190);
	animate(390-40,130,330-40,130);
	animate(330-40-40*Math.sin(Math.PI/4),310-40*Math.sin(Math.PI/4),330-40,310);
	animate(330-40-125*Math.sin(Math.PI/4),370-125*Math.sin(Math.PI/4),330-40,370);
	animate(330-40-210*Math.sin(Math.PI/4),430-210*Math.sin(Math.PI/4),330-40,430);
	ctx.closePath();

}


function d() 
{
var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
document.getElementById("e").style.visibility="visible";
document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;";
document.getElementById("text").innerHTML="Trace the RHS View/Side View";
ctx.beginPath();

ctx.strokeStyle="#d9b28a";
ctx.lineWidth=2;
animate(330-40*Math.sin(Math.PI/4)-40,310-40*Math.sin(Math.PI/4),330-40-40*Math.sin(Math.PI/4),310-40*Math.sin(Math.PI/4)-150);
animate(330-125*Math.sin(Math.PI/4)-40,370-125*Math.sin(Math.PI/4),330-125*Math.sin(Math.PI/4)-40,370-125*Math.sin(Math.PI/4)-150);
animate(330-210*Math.sin(Math.PI/4)-40,430-210*Math.sin(Math.PI/4),330-210*Math.sin(Math.PI/4)-40,430-210*Math.sin(Math.PI/4)-150);
animate(330-210*Math.sin(Math.PI/4)-40,430-210*Math.sin(Math.PI/4)-32,330-40,430-210*Math.sin(Math.PI/4)-32);
animate(330-210*Math.sin(Math.PI/4)-40,190,330-40,190);
animate(330-210*Math.sin(Math.PI/4)-40,130,330-40,130);
ctx.closePath();


}

  function e() {

	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	ctx.beginPath();
	
	document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
	document.getElementById("text").innerHTML="Draw the final Orthographic Side view";
	ctx.beginPath();
	ctx.strokeStyle="#3590ae";
	ctx.lineWidth=2.5;
	ctx.moveTo(330-210*Math.sin(Math.PI/4)-40,130);
	ctx.lineTo(330-40*Math.sin(Math.PI/4)-40,130);
	ctx.lineTo(330-40*Math.sin(Math.PI/4)-40,250);
	ctx.lineTo(330-210*Math.sin(Math.PI/4)-40,250);
	ctx.lineTo(330-210*Math.sin(Math.PI/4)-40,130);
	ctx.stroke();
	ctx.moveTo(330-125*Math.sin(Math.PI/4)-40,250);
	ctx.lineTo(330-125*Math.sin(Math.PI/4)-40,190);
	ctx.lineTo(330-40*Math.sin(Math.PI/4)-40,190);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle="orange";
	ctx.strokeStyle="black";
	ctx.lineWidth=1;
	ctx.moveTo(380-40,135);
	ctx.lineTo(380-40,245);
	ctx.stroke();
	ctx.moveTo(560-40,195);
	ctx.lineTo(560-40,245);
	ctx.stroke();
	ctx.moveTo(395-40,440);
	ctx.lineTo(545-40,440);
	ctx.stroke();
	ctx.moveTo(395-40,150);
	ctx.lineTo(445-40,150);
	ctx.stroke();
	ctx.moveTo(330-210*Math.sin(Math.PI/4)-40,120);
	ctx.lineTo(330-40*Math.sin(Math.PI/4)-40,120);
	ctx.stroke();
	canvas_arrow(ctx,380-40,130,380-40,245,5);
	canvas_arrow(ctx,380-40,245,380-40,135,5);
	canvas_arrow(ctx,560-40,135,560-40,245,5);
	canvas_arrow(ctx,560-40,245,560-40,195,5);
	canvas_arrow(ctx,390-40,440,545-40,440,5);
	canvas_arrow(ctx,560-40,440,395-40,440,5);
	canvas_arrow(ctx,390-40,150,445-40,150,5);
	canvas_arrow(ctx,560-40,150,395-40,150,5);
	canvas_arrow(ctx,330-210*Math.sin(Math.PI/4)-40,120,330-40*Math.sin(Math.PI/4)-40-5,120,5);
	canvas_arrow(ctx,330-40*Math.sin(Math.PI/4)-40,120,330-210*Math.sin(Math.PI/4)-40+5,120,5);
	ctx.closePath();
	ctx.beginPath()
	ctx.strokeStyle="black";
	ctx.fillText("30",365-40,190);
	ctx.fillText("15",565-40,225);
	ctx.fillText("15",410-40,145);
	ctx.fillText("40",460-40,440);
	ctx.fillText("30",330-120*Math.sin(Math.PI/4)-50,115);
	ctx.closePath();
  }
  