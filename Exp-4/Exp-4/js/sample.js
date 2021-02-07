//function to move to next canvas
function navNext()
{		document.getElementById("canvas1").style.visibility="visible";
		var canvas=document.getElementById("can");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.clearRect(0,0,800,800);
		boom();
	ctx.closePath();
		document.getElementById("canvas0").style.visibility="hidden";
		document.getElementById("hhhh").style.visibility="hidden";
		document.getElementById("a").style.visibility="visible";
		document.getElementById("aa").style.visibility="visible";
	document.getElementById("b").style.visibility="hidden";
	document.getElementById("bb").style.visibility="hidden";
	document.getElementById("b11").style.visibility="hidden";
	document.getElementById("b2").style.visibility="hidden";
	document.getElementById("b1").style.visibility="hidden";
	document.getElementById("b22").style.visibility="hidden";
	document.getElementById("v").style.visibility="hidden";
	document.getElementById("h").style.visibility="hidden";
		document.getElementById("pumptext").style.visibility="visible";
		document.getElementById("text").innerText="Extend a";
		document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";
		document.getElementById("text").style.left="95px";

			}

function hhhh(){

	document.getElementById("pumptext").style.visibility="visible";
	document.getElementById("text").innerText="Extend a";
	document.getElementById("stepnumber").innerHTML="&nbsp;1&nbsp;";
	document.getElementById("h").style.visibility="visible";
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(300,200);
	ctx.lineTo(250,271);
	ctx.stroke();
	document.getElementById("h").style.animation="glowing 1000ms infinite";
	document.getElementById("hhhh").style.visibility="hidden";
	document.getElementById("text").style.left="94px";

}

function ha(){
	document.getElementById("h").style.animation="none";
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	document.getElementById("text").innerText="Extend a'";
		document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;";
	ctx.beginPath();
	ctx.moveTo(300,300);
	ctx.lineTo(250,250);
	ctx.stroke();
	document.getElementById("v").style.visibility="visible";
	document.getElementById("v").style.animation="glowing 1000ms infinite";
}
function v(){
	document.getElementById("v").style.animation="none";
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	document.getElementById("text").innerText="Draw a perpendicular to join to the plane";
		document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;";
	ctx.beginPath();
	ctx.moveTo(250,271);
	ctx.lineTo(250,250);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(265,250);
	ctx.lineTo(265,265);
	ctx.stroke();
	ctx.fillText("HT",220,262);
	ctx.fillText("VT",275,262);
}
function boom() {
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.setLineDash([]);
ctx.lineWidth = "2";
ctx.strokeStyle = "black";
ctx.moveTo(50, 250);
ctx.lineTo(650, 250)
ctx.stroke();
ctx.font = "14px Georgia";
ctx.fillText("X",30,255);
ctx.fillText("VP",69,243);
ctx.fillText("HP",69,270);
ctx.fillText("Y",670,255);
ctx.beginPath();
ctx.lineWidth = "1.5";
ctx.moveTo(300,250);
ctx.lineTo(300,300);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = "1.5";
ctx.moveTo(300,250);
ctx.lineTo(300,200);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = "1";
ctx.moveTo(300,300);
ctx.setLineDash([10, 5]);
ctx.lineTo(500,300);
ctx.stroke();
ctx.moveTo(300,200);
ctx.lineTo(500,200);
ctx.stroke();
document.getElementById("a").style.animation="glowing 1000ms infinite";

}

function a(){
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.moveTo(300,200);
	ctx.lineTo(406,94);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(300,200,40,-Math.PI/4,0);
	ctx.stroke();
	ctx.beginPath();
	ctx.setLineDash([10, 3]);
	ctx.moveTo(230,94);
	ctx.lineTo(486,94);
	ctx.stroke();
	ctx.fillText("θ",337,185);
	ctx.fillText("Locus of a",500,190);
	ctx.fillText("Locus of b'",500,93);
	document.getElementById("text").innerText="Draw the lines with true length and angles given";
	document.getElementById("stepnumber").innerHTML="&nbsp;2&nbsp;"
	document.getElementById("b11").style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	document.getElementById("reset").style.visibility="visible";
	document.getElementById("a").style.animation="none";
	document.getElementById("aa").style.animation="glowing 800ms infinite";

}
function b11() {
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.moveTo(406,94);
	ctx.lineTo(406,300);
	ctx.stroke();
	document.getElementById("b1").style.visibility="visible";
	document.getElementById("text").innerText="Join b1' to locus of a'";
	document.getElementById("stepnumber").innerHTML="&nbsp;3&nbsp;"
	document.getElementById("b11").style.animation="none";
	document.getElementById("b1").style.animation="glowing 1000ms infinite";
}
function b2() {
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.setLineDash([]);
	ctx.moveTo(430,375);
	ctx.lineTo(430,200);
	ctx.stroke();
	document.getElementById("text").innerText="Similarly join b2 to locus of a";
	document.getElementById("stepnumber").innerHTML="&nbsp;6&nbsp;"
	document.getElementById("b22").style.visibility="visible";
	document.getElementById("b2").style.animation="none";
	document.getElementById("b22").style.animation="glowing 1000ms infinite";
}
function b1()
{
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(300,300,106,0,Math.PI/4);
	ctx.stroke();
	document.getElementById("text").innerText="Taking ab1 as radius draw arc to locus of b";
	document.getElementById("stepnumber").innerHTML="&nbsp;4&nbsp;"
	document.getElementById("b").style.visibility="visible";
	document.getElementById("b1").style.animation="none";
	document.getElementById("b").style.animation="glowing 1000ms infinite";

}
function b22(){
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
    ctx.arc(300,200,130,-Math.PI/3.27,0);
	ctx.stroke();
	document.getElementById("bb").style.visibility="visible";
	document.getElementById("text").innerText="Taking a'b2' as radius draw arc to locus of b'";
	document.getElementById("stepnumber").innerHTML="&nbsp;7&nbsp;"
	document.getElementById("b22").style.animation="none";
	document.getElementById("bb").style.animation="glowing 1000ms infinite";
}
function b(){
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.moveTo(300,300);
	ctx.lineTo(430,375);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(300,300,40,0,Math.PI/6);
	ctx.stroke();
	ctx.beginPath();
	ctx.setLineDash([10, 3]);
	ctx.moveTo(230,375);
	ctx.lineTo(486,375);
	ctx.stroke();
	ctx.fillText("ϕ",345,320);
	document.getElementById("b2").style.visibility="visible";
	ctx.fillText("Locus of a'",500,295);
	ctx.fillText("Locus of b",500,370);
	document.getElementById("aa").style.animation="none";
	document.getElementById("b11").style.animation="glowing 1000ms infinite";
}
function bbb(){
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle = "#FF0000";
	ctx.moveTo(300,200);
	ctx.lineTo(375,94);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.arc(300,200,55,-Math.PI/3.19,0);
	ctx.stroke();
	ctx.fillText("α",350,170);
	document.getElementById("text").innerText="Join a' and b' to get front view";
	document.getElementById("stepnumber").innerHTML="&nbsp;8&nbsp;"
	document.getElementById("bb").style.animation="none";
	setTimeout(function(){ 
				document.getElementById("text").style.left="5px";
				document.getElementById("text").innerHTML="Draw the Traces";
				document.getElementById("pumptext").style.visibility="hidden";
				document.getElementById("hhhh").style.visibility="visible";
				document.getElementById("hhhh").style.animation="glowing 1000ms infinite";
			}, 2000);
}

function bb(){
	var canvas=document.getElementById("can");
	var ctx=canvas.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle = "green";
	ctx.strokeWidth = "2";
	ctx.moveTo(300,300);
	ctx.lineTo(375,375);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.arc(300,300,55,0,Math.PI/4);
	ctx.stroke();
	ctx.fillText("β",360,328);
	document.getElementById("text").innerText="Join a and b to get top view";
	document.getElementById("stepnumber").innerHTML="&nbsp;5&nbsp;"
	document.getElementById("b").style.animation="none";
	document.getElementById("b2").style.animation="glowing 1000ms infinite";
}