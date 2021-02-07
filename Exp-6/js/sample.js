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
	document.getElementById("g").style.visibility="hidden";
	document.getElementById("f").style.visibility="hidden";
	document.getElementById("nextButton").style.animation="none";
	document.getElementById("a").style.animation="glowing 1000ms infinite";
	document.getElementById("pumptext").style.visibility="visible";
	document.getElementById("text").style.left="100px";
	document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";
document.getElementById("text").innerHTML="Draw the front view of Pyramid";
	
}

function boom() {
var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "black";
ctx.moveTo(30, 250);
ctx.lineTo(680, 250)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.moveTo(100,300);
ctx.lineTo(100,375);
ctx.stroke();
ctx.lineTo(175,375);
ctx.stroke();
ctx.lineTo(100,300);
ctx.stroke();
ctx.lineTo(175,300);
ctx.stroke();
ctx.lineTo(100,375);
ctx.stroke();
ctx.moveTo(175,300);
ctx.lineTo(175,375);
ctx.stroke();
ctx.closePath();
ctx.font='bold 15px Arial';
ctx.fillText("X",10,255);
ctx.fillText("VP",40,240);
ctx.fillText("HP",40,270);
ctx.fillText("Y",690,255);
ctx.fillText("a",90,300);
ctx.fillText("d",188,375);
ctx.fillText("b",105+50*Math.cos(Math.PI/10)+50*Math.sin(Math.PI/5),300);
ctx.fillText("c",100+50*Math.cos(Math.PI/10),342);
ctx.fillText("e",90,375);
	document.getElementById("nextButton").style.animation="glowing 1000ms infinite";
}


function drawLine(x1,y1,x2,y2,ratio) {
	var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
ctx.beginPath();
ctx.lineWidth=1;
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

ctx.fillText("a',e'",70,240);
ctx.fillText("d',b'",185,240);
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.moveTo(100,250);
ctx.lineTo(175,250);
ctx.lineTo(137,100);
ctx.lineTo(100,250);
ctx.stroke();
ctx.setLineDash([5, 10]);
ctx.moveTo(137,250);
ctx.lineTo(137,100);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#d9b28a";
ctx.setLineDash([]);
animate(100,250,100,300,0);
animate(137,250,137,337);
animate(175,250,175,300);
document.getElementById("c").style.visibility="visible";
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";
document.getElementById("text").innerHTML="Draw the top view of Pyramid";
document.getElementById("a").style.animation="none";
document.getElementById("c").style.animation="glowing 1000ms infinite";
document.getElementById("nextButton").style.visibility="hidden";
document.getElementById("reset").style.visibility="visible";

}
function b()
{var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
document.getElementById("b").style.visibility="visible";
ctx.beginPath();
ctx.setLineDash([5,10]);
ctx.moveTo(230+75/Math.sqrt(17)/2,250-300/Math.sqrt(17)/2)
ctx.lineTo(417,250);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.setLineDash([]);
animate(230,250,417,250);
animate(230,250,230+75/Math.sqrt(17),250-300/Math.sqrt(17));
animate(230+75/Math.sqrt(17),250-300/Math.sqrt(17),417,250);
ctx.fillText("a'e'",240,160);
ctx.fillText("d'b'",235,240);
ctx.fillText("c'",420,230);


ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
document.getElementById("text").innerHTML="Draw the apparent top view of Pyramid when one of the faces is on HP ";
document.getElementById("c").style.animation="none";
	document.getElementById("b").style.animation="glowing 1000ms infinite";
}
function c()
{
var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
document.getElementById("d").style.visibility="visible";
document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;";
document.getElementById("text").innerHTML="Draw the apparent front view of Pyramid when one of the faces is on HP";
document.getElementById("b").style.animation="none";
document.getElementById("d").style.animation="glowing 1000ms infinite";
ctx.beginPath();
ctx.strokeStyle="#d9b28a";
	animate(230,250,230,400);
	animate(417,250,417,400);
	animate(230+75/Math.sqrt(17),250-300/Math.sqrt(17),230+75/Math.sqrt(17),400);
	animate(175,300,417,300);
	animate(137,337,417,337);
	animate(175,375,417,375);
	animate(230+75/(2*Math.sqrt(17)),250-300/(2*Math.sqrt(17)),230+75/(2*Math.sqrt(17)),337);
	ctx.fillText("b",215,300);
	ctx.fillText("a",250,300);
	ctx.fillText("d",215,375);
	ctx.fillText("e",250,375);
	ctx.closePath();
}
function d() {
var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("e").style.visibility="visible";
	document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;";
document.getElementById("text").innerHTML="Draw the front view when axis of pyramid is inclined to Vp by α";
	ctx.beginPath();
	ctx.strokeStyle="#00688B";
	ctx.lineWidth = "2";
	ctx.moveTo(230+75/Math.sqrt(17),300);
	ctx.lineTo(230,300);
	ctx.lineTo(230,375);
	ctx.lineTo(230+75/Math.sqrt(17),375);
	ctx.lineTo(230+75/Math.sqrt(17),300);
	animate(230+75/Math.sqrt(17),300,230,300);
	animate(230,300,230,375);
	animate(230,375,230+75/Math.sqrt(17),375);
	animate(230+75/Math.sqrt(17),375,230+75/Math.sqrt(17),300);
	animate(230+75/Math.sqrt(17),300,417,337);
	animate(230+75/Math.sqrt(17),375,417,337);
	ctx.stroke();
	ctx.closePath();
	document.getElementById("d").style.animation="none";
	document.getElementById("e").style.animation="glowing 1000ms infinite";
  }
  function e() {
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("f").style.visibility="visible";
	document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
document.getElementById("text").innerHTML="Draw the top view of pyramid whose axis makes α with VP";
	ctx.beginPath();
	ctx.arc(600,250,30,3*Math.PI/4,Math.PI);
	ctx.fillText("α",550,270);
	ctx.stroke();
	ctx.strokeStyle="black";
	document.getElementById("e").style.visibility="hidden";
	ctx.moveTo(600,250);
	ctx.lineTo(600-250*Math.cos(Math.PI/4),250+250*Math.sin(Math.PI/4));
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.strokeStyle="#0c81a8";
	ctx.lineWidth = "2";
	ctx.moveTo(570+26.5+5,280+26.5-5);
	ctx.lineTo(570-119.5+5,280+119.5-5);
	ctx.lineTo(570-119.5+53+5,280+119.5+53-5);
	ctx.lineTo(570+26.5+5,280+26.5-5);
	ctx.moveTo(570-119.5+5,280+119.5-5);
	ctx.lineTo(570-119.5-18+5,280+119.5+18-5);
	ctx.lineTo(570-119.5-18+53+5,280+119.5+53+18-5);
	ctx.lineTo(570-119.5+53+5,280+119.5+53-5);
	ctx.stroke();
	ctx.fillText("a",570-130,280+119.5-5);
	ctx.fillText("b",570-130-18,280+119.5-5+18);
	ctx.fillText("e",570-130+75,280+119.5+50);
	ctx.fillText("d",570-130-18+80,280+119.5+18+50);
	ctx.closePath();
	document.getElementById("e").style.animation="none";
	document.getElementById("f").style.animation="glowing 1000ms infinite";
  }
  function f(){
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("g").style.visibility="visible";
	document.getElementById("stepnumber").innerHTML="&nbsp;7&nbsp;";
	document.getElementById("text").innerHTML="Draw the final top view as required";
	ctx.beginPath();
	ctx.strokeStyle="#d9b28a";
	animate(570+26.5+5,280+26.5-5,570+26.5+5,150);
	animate(570-119.5+5,280+119.5-5,570-119.5+5,150);
	animate(570-119.5+53+5,280+119.5+53-5,570-119.5+53+5,150);
	animate(570-119.5-18+5,280+119.5+18-5,570-119.5-18+5,150);
	animate(570-119.5-18+53+5,280+119.5+53+18-5,570-119.5-18+53+5,150);
	animate(570-119.5+53+5,280+119.5+53-5,570-119.5+53+5,150);
	animate(230+75/Math.sqrt(17),250-300/Math.sqrt(17),600,250-300/Math.sqrt(17));
	animate(230+75/Math.sqrt(17)/2,250-300/Math.sqrt(17)/2,600,250-300/Math.sqrt(17)/2);
	ctx.fillText("a",570-130,240-300/Math.sqrt(17));
	ctx.fillText("b",570-120,243);
	ctx.fillText("e",570-130+75,240-300/Math.sqrt(17));
	ctx.fillText("d",570-130-16+80,245);
	ctx.closePath();
	document.getElementById("f").style.animation="none";
	document.getElementById("g").style.animation="glowing 1000ms infinite";
}
function g(){
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle="#0c81a8";
	animate(570-119.5+53+5-18,250,570-119.5+53+5,250-300/Math.sqrt(17));
	animate(570-119.5+53+5-18,250,570-119.5-18+5,250);
	animate(570-119.5-18+5,250,570-119.5+5,250-300/Math.sqrt(17));
	animate(570-119.5+5,250-300/Math.sqrt(17),570-119.5+53+5,250-300/Math.sqrt(17));
	animate(570-119.5+5+53,250-300/Math.sqrt(17),570+26.5+5,250);
	animate(570-119.5-18+5+53,250,570+26.5+5,250);
	document.getElementById("text").innerHTML="The projection in the right is the Final projection of the pyramid";
	document.getElementById("pumptext").style.visibility="hidden";
	ctx.closePath();
	document.getElementById("text").style.left="30px";
	document.getElementById("g").style.animation="none";
}