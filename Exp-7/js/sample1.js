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
	document.getElementById("nextButton").style.animation="none";
	document.getElementById("a").style.animation="glowing 1000ms infinite";
	document.getElementById("pumptext").style.visibility="visible";
	document.getElementById("text").style.left="100px";
	document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";
	document.getElementById("text").innerHTML="Draw the Top or Front view of the given plane as given";
	document.getElementById("titlestep").innerText="STEP";
	document.getElementById("text").style.left="95px";
	
}

function boom() {
var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "black";
ctx.moveTo(30, 300);
ctx.lineTo(680, 300)
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.moveTo(300,350);
ctx.lineTo(300,400);
ctx.stroke();
ctx.lineTo(343.3,425);
ctx.stroke();
ctx.lineTo(386.6,400);
ctx.stroke();
ctx.lineTo(386.6,350);
ctx.stroke();
ctx.lineTo(343.3,325);
ctx.stroke();
ctx.lineTo(300,350);
ctx.stroke();
ctx.closePath();
ctx.font='bold 15px Arial';
ctx.fillText("X",10,305);
ctx.fillText("VP",40,290);
ctx.fillText("HP",40,320);
ctx.fillText("Y",690,305);
ctx.fillText("a",280,350);
ctx.fillText("d",390,400);
ctx.fillText("b",280,400);
ctx.fillText("c",340,440);
ctx.fillText("e",392,350);
ctx.fillText("f",345,320);
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
ctx.beginPath();
ctx.strokeStyle="#3590ae";
ctx.moveTo(300,300);
ctx.lineTo(386.6,300);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#d9b28a";
ctx.setLineDash([]);
ctx.fillText("a',b'",295,295);
ctx.fillText("c',f'",340,295);
animate(300,350,300,300,0);
animate(343,325,343,300);
animate(386,350,386,300);
document.getElementById("c").style.visibility="visible";
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";
document.getElementById("text").innerHTML="Draw the Next corresponding view ";
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
ctx.strokeStyle="black";
ctx.moveTo(250,350);
ctx.lineTo(500,100);
ctx.stroke();
ctx.arc(300,300,20,Math.PI*0.75,Math.PI);
ctx.fillText("θ",260,320);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(520,120);
    ctx.lineTo(520+20,120+20);
    ctx.stroke();
    canvas_arrow(ctx,400,135,520,120,4);
    ctx.fillText("AIP",550,150);
ctx.fillText("Y1",500,90);
ctx.fillText("X1",230,365);
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#d9b28a";
animate(300,300,220,220);
animate(343.3,300,243.3,200);
animate(386.6,300,256.6,170);
ctx.closePath();
document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
document.getElementById("text").innerHTML="Draw the AIP or AVP as given";
document.getElementById("c").style.animation="none";
document.getElementById("b").style.animation="glowing 1000ms infinite";
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
	document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;";
	document.getElementById("text").innerHTML="Draw the auxiliary Front or Top view as given";
	document.getElementById("b").style.animation="none";
	document.getElementById("d").style.animation="glowing 1000ms infinite";
	ctx.beginPath();
	ctx.strokeStyle="#3590ae";
	ctx.lineWidth = "2.5";	
	ctx.fillText("a",265,285);
	ctx.fillText("f",298,262);
	ctx.fillText("e",320,230);
	ctx.fillText("d",280,192);
	ctx.fillText("b",245,240);
	ctx.fillText("c",227,205);
	ctx.moveTo(313.3,270);
	ctx.lineTo(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4));
	ctx.lineTo(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4));
	ctx.lineTo(313.3-100*Math.cos(Math.PI/4),270-100*Math.cos(Math.PI/4));
	ctx.lineTo(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4)+61.2*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4)-61.2*Math.cos(Math.PI/4));
	ctx.lineTo(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)+61.2*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-61.2*Math.cos(Math.PI/4));
    ctx.lineTo(313.3,270);
	ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    
}

function d() 
{
var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
document.getElementById("e").style.visibility="visible";
document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;";
document.getElementById("text").innerHTML="Draw the AVP/AIP";
ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth="1";
ctx.moveTo(220,62);
ctx.lineTo(220-325*Math.cos(Math.PI/2.4),62+325*Math.sin(Math.PI/2.4));
ctx.fillText("X2",210,55);
ctx.fillText("Y2",210-325*Math.cos(Math.PI/2.4),80+325*Math.sin(Math.PI/2.4))
ctx.stroke();
canvas_arrow(ctx,220-300*Math.cos(Math.PI/2.4)-70,62+300*Math.sin(Math.PI/2.4),220-300*Math.cos(Math.PI/2.4)-30,62+300*Math.sin(Math.PI/2.4),4);
ctx.closePath();
ctx.beginPath();
ctx.moveTo(220-300*Math.cos(Math.PI/2.4)-30,62+300*Math.sin(Math.PI/2.4));
ctx.lineTo(220-300*Math.cos(Math.PI/2.4)-60,62+300*Math.sin(Math.PI/2.4));
ctx.fillText("AVP",220-300*Math.cos(Math.PI/2.4)-110,70+300*Math.sin(Math.PI/2.4));
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#d9b28a";
animate(313.3,270,313.3-250*Math.cos(Math.PI/12),270-250*Math.sin(Math.PI/12));
animate(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4),313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-200*Math.cos(Math.PI/12),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-200*Math.sin(Math.PI/12));
animate(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4),313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-200*Math.cos(Math.PI/12)-50*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-200*Math.sin(Math.PI/12)-50*Math.cos(Math.PI/4));
animate(313.3-100*Math.cos(Math.PI/4),270-100*Math.cos(Math.PI/4),313.3-100*Math.cos(Math.PI/4)-200*Math.cos(Math.PI/12),270-100*Math.cos(Math.PI/4)-200*Math.sin(Math.PI/12));
animate(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4)+61.2*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4)-61.2*Math.cos(Math.PI/4),
313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4)+61.2*Math.cos(Math.PI/4)-200*Math.cos(Math.PI/12),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-50*Math.cos(Math.PI/4)-61.2*Math.cos(Math.PI/4)-200*Math.sin(Math.PI/12));
animate(313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)+61.2*Math.cos(Math.PI/4),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-61.2*Math.cos(Math.PI/4),
313.3-30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)+61.2*Math.cos(Math.PI/4)-250*Math.cos(Math.PI/12),270+30.6*Math.cos(Math.PI/4)-25*Math.cos(Math.PI/4)-61.2*Math.cos(Math.PI/4)-250*Math.sin(Math.PI/12));
ctx.closePath();

document.getElementById("d").style.animation="none";
document.getElementById("e").style.animation="glowing 1000ms infinite";

  }
  function e() {
	var cvs = document.getElementsByTagName("canvas")[0];
	var ctx = cvs.getContext("2d");
	document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;";
	document.getElementById("text").innerHTML="Draw the final AFV or ATV ";
	ctx.beginPath();
	ctx.strokeStyle="#3590ae";
	ctx.lineWidth = "2.5";
	ctx.moveTo(250-190*Math.cos(Math.PI/2.4)-30,70+190*Math.sin(Math.PI/2.4)-8);
	ctx.lineTo(250-165*Math.cos(Math.PI/2.4)-30,70+165*Math.sin(Math.PI/2.4)-8);
	ctx.lineTo(250-125*Math.cos(Math.PI/2.4)-31*Math.cos(Math.PI/12)-30,70+125*Math.sin(Math.PI/2.4)-31*Math.sin(Math.PI/12)-8);
	ctx.lineTo(250-112*Math.cos(Math.PI/2.4)-30-61.2*Math.cos(Math.PI/12),70+112*Math.sin(Math.PI/2.4)-61.2*Math.sin(Math.PI/12)-8);
	ctx.lineTo(250-138*Math.cos(Math.PI/2.4)-30-61.2*Math.cos(Math.PI/12),70+138*Math.sin(Math.PI/2.4)-61.2*Math.sin(Math.PI/12)-8);
	ctx.lineTo(250-178*Math.cos(Math.PI/2.4)-30-31*Math.cos(Math.PI/12),70+178*Math.sin(Math.PI/2.4)-31*Math.sin(Math.PI/12)-8);
	ctx.lineTo(250-190*Math.cos(Math.PI/2.4)-30,70+190*Math.sin(Math.PI/2.4)-8);
	ctx.stroke();
	ctx.fillText("a",155,255);
	ctx.fillText("f",168-38,245-15);
	ctx.fillText("e",140-30,190-8);
	ctx.fillText("d",150-35,160);
	ctx.fillText("b",195-30,235-8);
    ctx.fillText("c",190-30,180-8);	
    ctx.closePath();
	document.getElementById("e").style.animation="none";
	document.getElementById("titlestep").innerText="Finally STEP";
	document.getElementById("text").style.left="144px";

  }