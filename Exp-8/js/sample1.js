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
	document.getElementById("a").style.animation="glowing 1000ms infinite";
	document.getElementById("pumptext").style.visibility="visible";
	document.getElementById("text").style.left="100px";
	document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";
	document.getElementById("text").innerHTML="Draw the Top or Front view of the given plane as given";
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
ctx.moveTo(30,275);
ctx.lineTo(680,275)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.moveTo(200,350);
ctx.lineTo(200,450);
ctx.stroke();
ctx.lineTo(300,450);
ctx.stroke();
ctx.lineTo(300,350);
ctx.stroke();
ctx.lineTo(200,350);
ctx.stroke();
ctx.closePath();
ctx.font='bold 15px Arial';
ctx.fillText("X",10,285);
ctx.fillText("VP",40,265);
ctx.fillText("HP",40,295);
ctx.fillText("Y",690,280);
ctx.fillText("1",180,350);
ctx.fillText("5",180,365);
ctx.fillText("2",180,450);
ctx.fillText("6",180,465);
ctx.fillText("4",310,350);
ctx.fillText("8",310,365);
ctx.fillText("3",310,450);
ctx.fillText("7",310,465);
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
ctx.strokeStyle="#d9b28a";
ctx.setLineDash([]);
ctx.lineWidth=0.5;
animate(200,350,200,275);
animate(300,350,300,275);
animate(250,400,250,275);
document.getElementById("c").style.visibility="visible";
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";
document.getElementById("text").innerHTML="Draw the Next   &nbsp;  corresponding view ";
document.getElementById("a").style.animation="none";
document.getElementById("c").style.animation="glowing 1000ms infinite";
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
ctx.lineWidth=2;
animate(200,275-50,200,125-50);
animate(200,125-50,300,125-50);
animate(300,125-50,300,275-50);
animate(300,275-50,200,275-50);
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
document.getElementById("text").innerHTML="Draw the &nbsp; AIP or AVP as given";
document.getElementById("c").style.animation="none";
document.getElementById("b").style.animation="glowing 1000ms infinite";
ctx.fillText("1'",180,80);
ctx.fillText("5'",180,230);
ctx.fillText("2',",160,80);
ctx.fillText("6',",160,230);
ctx.fillText("4',",310,80);
ctx.fillText("8'",330,80);
ctx.fillText("3',",310,230);
ctx.fillText("7'",330,230);
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
    context.fillStyle = "black";
  
    context.fill();
  }

function c()
{
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("d").style.visibility="visible";
	document.getElementById("b").style.visibility="hidden";
	document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;";
	document.getElementById("text").innerHTML="Draw the auxiliary Front or Top view as given";
	document.getElementById("b").style.animation="none";
	document.getElementById("c").style.visibility="hidden";
	document.getElementById("d").style.animation="glowing 1000ms infinite";
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth=1;
	ctx.moveTo(300-110/Math.sqrt(2),275-50+110/Math.sqrt(2));
	ctx.lineTo(300+110/Math.sqrt(2),275-50-110/Math.sqrt(2));
	ctx.stroke();
	ctx.moveTo(300,275-50);
	ctx.arc(300,275-50,20,-Math.PI/2,-Math.PI/4);
	ctx.stroke();
	ctx.fillText("θ",305,200);
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle="#d9b28a";
	ctx.lineWidth=0.5;
	animate(200,275-50,200+300/Math.sqrt(2),275+300/Math.sqrt(2)-50);
	animate(200,125-50,200+415/Math.sqrt(2),125+415/Math.sqrt(2)-50);
	animate(300,125-50,300+345/Math.sqrt(2),125+345/Math.sqrt(2)-50);
	animate(300,275-50,300+235/Math.sqrt(2),275+235/Math.sqrt(2)-50);
	ctx.closePath();

}

function d() 
{
var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
document.getElementById("e").style.visibility="visible";
document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;";
document.getElementById("text").innerHTML="Draw the Auxiliary Vertical &nbsp; plane";
ctx.beginPath();

ctx.strokeStyle="#3590ae";
ctx.lineWidth=2;
animate(200+300/Math.sqrt(2),275+300/Math.sqrt(2)-50,200+200/Math.sqrt(2),275+200/Math.sqrt(2)-50);
animate(200+300/Math.sqrt(2),275+300/Math.sqrt(2)-50,200+300/Math.sqrt(2)+125,275+300/Math.sqrt(2)-175);
animate(200+300/Math.sqrt(2)+125,275+300/Math.sqrt(2)-175,200+200/Math.sqrt(2)+125,275+200/Math.sqrt(2)-175);
animate(200+200/Math.sqrt(2),275+200/Math.sqrt(2)-50,200+200/Math.sqrt(2)+125,275+200/Math.sqrt(2)-175);
ctx.fillText("5",200+200/Math.sqrt(2)-10,275+200/Math.sqrt(2)-50+15);
ctx.fillText("6",200+300/Math.sqrt(2)-5,275+300/Math.sqrt(2)-50+15);
ctx.fillText("4",200+300/Math.sqrt(2)+125,275+300/Math.sqrt(2)-175+5);
ctx.fillText("3",200+200/Math.sqrt(2)+130,275+200/Math.sqrt(2)-175+5);
ctx.fillText("7",200+300/Math.sqrt(2)+70/Math.sqrt(2),275+300/Math.sqrt(2)-50-70/Math.sqrt(2)+15);
ctx.fillText("8",200+200/Math.sqrt(2)+70/Math.sqrt(2)-5,275+200/Math.sqrt(2)-50-70/Math.sqrt(2)+15);
ctx.fillText("2",200+300/Math.sqrt(2)+125-70/Math.sqrt(2),275+70/Math.sqrt(2)+300/Math.sqrt(2)-175+15);
ctx.fillText("1",200+200/Math.sqrt(2)+125-70/Math.sqrt(2)+5,275+70/Math.sqrt(2)+200/Math.sqrt(2)-175+10);
ctx.closePath();

document.getElementById("d").style.animation="none";
document.getElementById("e").style.animation="glowing 1000ms infinite";
}

  function e() {

	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth=1;
	ctx.moveTo(200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)-10*Math.cos(Math.PI/12),275+200/Math.sqrt(2)-10*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+190*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+190*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.stroke();
	document.getElementById("d").style.visibility="hidden";
	ctx.closePath();
	document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
	document.getElementById("text").innerHTML="Draw the final AFV or ATV ";
	ctx.beginPath();
	ctx.strokeStyle="#d9b28a";
	ctx.lineWidth = 0.25;
	animate(200+300/Math.sqrt(2),275+300/Math.sqrt(2)-50,200+300/Math.sqrt(2)+400*Math.sin(Math.PI/12),275+300/Math.sqrt(2)-50-400*Math.cos(Math.PI/12));
	animate(200+200/Math.sqrt(2),275+200/Math.sqrt(2)-50,200+200/Math.sqrt(2)+400*Math.sin(Math.PI/12),275+200/Math.sqrt(2)-50-400*Math.cos(Math.PI/12));
	animate(200+300/Math.sqrt(2)+125,275+300/Math.sqrt(2)-175,200+300/Math.sqrt(2)+125+400*Math.sin(Math.PI/12),275+300/Math.sqrt(2)-175-400*Math.cos(Math.PI/12));
	animate(200+200/Math.sqrt(2)+125,275+200/Math.sqrt(2)-175,200+200/Math.sqrt(2)+125+400*Math.sin(Math.PI/12),275+200/Math.sqrt(2)-175-400*Math.cos(Math.PI/12));	
	animate(200+300/Math.sqrt(2)+70/Math.sqrt(2),275+300/Math.sqrt(2)-50-70/Math.sqrt(2),200+300/Math.sqrt(2)+70/Math.sqrt(2)+400*Math.sin(Math.PI/12),275+300/Math.sqrt(2)-50-70/Math.sqrt(2)-400*Math.cos(Math.PI/12));
	animate(200+200/Math.sqrt(2)+70/Math.sqrt(2),275+200/Math.sqrt(2)-50-70/Math.sqrt(2),200+200/Math.sqrt(2)+70/Math.sqrt(2)+400*Math.sin(Math.PI/12),275+200/Math.sqrt(2)-50-70/Math.sqrt(2)-400*Math.cos(Math.PI/12));
	animate(200+300/Math.sqrt(2)+125-70/Math.sqrt(2),275+70/Math.sqrt(2)+300/Math.sqrt(2)-175,200-70/Math.sqrt(2)+300/Math.sqrt(2)+125+400*Math.sin(Math.PI/12),275+70/Math.sqrt(2)+300/Math.sqrt(2)-175-400*Math.cos(Math.PI/12));
	animate(200+200/Math.sqrt(2)+125-70/Math.sqrt(2),275+70/Math.sqrt(2)+200/Math.sqrt(2)-175,200-70/Math.sqrt(2)+200/Math.sqrt(2)+125+400*Math.sin(Math.PI/12),275+70/Math.sqrt(2)+200/Math.sqrt(2)-175-400*Math.cos(Math.PI/12));
	ctx.closePath();
	document.getElementById("e").style.visibility="hidden";
	document.getElementById("f").style.visibility="visible";
	document.getElementById("f").style.animation="glowing 1000ms infinite";
	document.getElementById("titlestep").innerText="STEP";

  }
  function f(){
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx= cvs.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle="#3590ae";
	
	document.getElementById("f").style.animation="none";
	ctx.lineWidth=2;
	ctx.moveTo(200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+35*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+35*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+120*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+120*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+100/Math.sqrt(2))*Math.sin(Math.PI/12)+85*Math.cos(Math.PI/12),275+200/Math.sqrt(2)-50-(175+100/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+100/Math.sqrt(2))*Math.sin(Math.PI/12),275+200/Math.sqrt(2)-50-(175+100/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+250/Math.sqrt(2))*Math.sin(Math.PI/12)+55*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+55*Math.sin(Math.PI/12)-50-(175+250/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+250/Math.sqrt(2))*Math.sin(Math.PI/12)+55*Math.cos(Math.PI/12)+85*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+55*Math.sin(Math.PI/12)-50-(175+250/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+150/Math.sqrt(2))*Math.sin(Math.PI/12)+90*Math.cos(Math.PI/12)+85*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+90*Math.sin(Math.PI/12)-50-(175+150/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+120*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+120*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+100/Math.sqrt(2))*Math.sin(Math.PI/12)+85*Math.cos(Math.PI/12),275+200/Math.sqrt(2)-50-(175+100/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+250/Math.sqrt(2))*Math.sin(Math.PI/12)+55*Math.cos(Math.PI/12)+85*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+55*Math.sin(Math.PI/12)-50-(175+250/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.stroke();
	ctx.moveTo(200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+35*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+35*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+100/Math.sqrt(2))*Math.sin(Math.PI/12),275+200/Math.sqrt(2)-50-(175+100/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.stroke();
	ctx.fillText("8'",200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+35*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+35*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.fillText("7'",200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+120*Math.cos(Math.PI/12)+5,275+200/Math.sqrt(2)+120*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12)+10);
	ctx.fillText("6'",200+200/Math.sqrt(2)+(175+100/Math.sqrt(2))*Math.sin(Math.PI/12)+85*Math.cos(Math.PI/12)+10,275+200/Math.sqrt(2)-50-(175+100/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12)+5);
	ctx.fillText("5'",200+200/Math.sqrt(2)+(175+100/Math.sqrt(2))*Math.sin(Math.PI/12)-5,275+200/Math.sqrt(2)-50-(175+100/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.fillText("1'",200+200/Math.sqrt(2)+(175+250/Math.sqrt(2))*Math.sin(Math.PI/12)+55*Math.cos(Math.PI/12)-10,275+200/Math.sqrt(2)+55*Math.sin(Math.PI/12)-50-(175+250/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.fillText("2'",200+200/Math.sqrt(2)+(175+250/Math.sqrt(2))*Math.sin(Math.PI/12)+55*Math.cos(Math.PI/12)+85*Math.cos(Math.PI/12)+10,275+200/Math.sqrt(2)+55*Math.sin(Math.PI/12)-50-(175+250/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.fillText("3'",200+200/Math.sqrt(2)+(175+150/Math.sqrt(2))*Math.sin(Math.PI/12)+90*Math.cos(Math.PI/12)+85*Math.cos(Math.PI/12)+10,275+200/Math.sqrt(2)+90*Math.sin(Math.PI/12)-50-(175+150/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.fillText("4'",200+200/Math.sqrt(2)+(175+100/Math.sqrt(2))*Math.sin(Math.PI/12)+80,275+200/Math.sqrt(2)-50-(175+100/Math.sqrt(2))*Math.cos(Math.PI/12)-5);
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle="#3590ae";
	ctx.lineWidth=1.5;
	ctx.setLineDash([10,5]);
	ctx.moveTo(200+200/Math.sqrt(2)+175*Math.sin(Math.PI/12)+35*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+35*Math.sin(Math.PI/12)-50-175*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+150/Math.sqrt(2))*Math.sin(Math.PI/12)+90*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+90*Math.sin(Math.PI/12)-50-(175+150/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+150/Math.sqrt(2))*Math.sin(Math.PI/12)+90*Math.cos(Math.PI/12)+85*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+90*Math.sin(Math.PI/12)-50-(175+150/Math.sqrt(2))*Math.cos(Math.PI/12)+85*Math.sin(Math.PI/12));
	ctx.stroke();
	ctx.moveTo(200+200/Math.sqrt(2)+(175+150/Math.sqrt(2))*Math.sin(Math.PI/12)+90*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+90*Math.sin(Math.PI/12)-50-(175+150/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.lineTo(200+200/Math.sqrt(2)+(175+250/Math.sqrt(2))*Math.sin(Math.PI/12)+55*Math.cos(Math.PI/12),275+200/Math.sqrt(2)+55*Math.sin(Math.PI/12)-50-(175+250/Math.sqrt(2))*Math.cos(Math.PI/12));
	ctx.stroke();
	ctx.closePath();
	document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
	document.getElementById("text").innerHTML="Draw the final AFV or ATV ";  
  }