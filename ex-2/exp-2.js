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
function drawShape() {
    var canvas = document.getElementById('simscreen');        

    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');         
       canvas_arrow(ctx,300,225,450,225,4);  
       canvas_arrow(ctx,450,225,100,225,4);  
       canvas_arrow(ctx,275,100,275,375,4);  
       canvas_arrow(ctx,275,375,275,80,4);  
       ctx.beginPath();
       ctx.moveTo(275,375);
       ctx.lineTo(275,75);
       ctx.moveTo(100,225);
       ctx.lineTo(450,225);
       ctx.strokeStyle = "black";
       ctx.stroke();
       ctx.font = 'Italic Bold 15px Arial';
       ctx.fillStyle = "black";
       ctx.fillText("X-axis",110,245);
       ctx.fillText("Y-axis",285,385);
       

    } else {
       alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
 }
    function updatewidth(val) {
          document.getElementById('widthInput').value=val; 
         

    }
    function updatesliderwidth(val) {
          document.getElementById('wid').value=val; 
          

    }
    function updatesliderheight(val) {
          document.getElementById('hgt').value=val; 
        

    }
    function updateheight(val) {
          document.getElementById('heightInput').value=val; 
        

    }
    function writeMessage(message) {
        document.getElementById("commentboxleft").innerText=message;
       }
      function getMousePos(canvas, evt) {
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');  
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      function newa(){
      var canvas = document.getElementById('simscreen');
      var context = canvas.getContext('2d');
      context.beginPath();
      canvas.addEventListener('mousemove', function(ev) {
        var mousePos = getMousePos(canvas, ev);
        var message = 'X: ' + (mousePos.x-275) + ', Y: ' + parseInt(mousePos.y-225);
        writeMessage(message);
      }, false);}
    function updatecanvas1(){
      var we=document.getElementById("one").style.visibility;
        if(we=="visible")
        newcanvas();
        else
        updatecanvas();
    }
      function updatecanvas(){
        document.getElementById("two").style.visibility="visible";
        document.getElementById("one").style.visibility="hidden";
        document.getElementById("commentboxright").innerHTML="";
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');
       var k= -(Number(document.getElementById('heightInput').value))+225;
       var m=Number(document.getElementById('widthInput').value)+275;
       context.clearRect(0,0,canvas.width,canvas.height);
       drawShape();
        context.font = "13px Arial";
        context.beginPath();
        context.arc(m,k,3,0,2*Math.PI);
        context.fillStyle = "#FF0000";
        context.fill();        
        context.closepath();
      }
      function newcanvas(){
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');
        document.getElementById("titleincanvas").innerText="Distance From Planes"
        document.getElementById("commentboxright").innerHTML="VP=Vertical Plane</br> HP=Horizontal Plane"
        var k= Number(document.getElementById('heightInput').value);
        var m= Number(document.getElementById('widthInput').value);
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.fillStyle = "black";
        context.font = ' Italic Bold 15px Arial';

        if(m<0&&k>0)
        {
          context.fillText("VP",140,220);
        context.fillText("HP",110,220);
        }
        else if(k<0&&m>0)
        {                 context.fillText("HP",110,242);
          context.fillText("VP",140,242);
        }
        else if(k<0&&m<0)
        {
          context.fillText("HP",110,220);
          context.fillText("VP",110,242);
        }
        else{
          context.fillText("VP",110,220);
        context.fillText("HP",110,242);
        }
        context.moveTo(100,225);
        context.lineTo(450,225);
        context.strokeStyle = "black";
        context.stroke();
       
        context.beginPath();
        context.moveTo(275,225);
        context.lineTo(275,225-k); 
        context.stroke();
        context.moveTo(275,225);
        context.lineTo(275,225+m);   
        context.stroke();
        context.fillStyle = "red";
        context.save();
        context.fillStyle = "blue";
        context.moveTo(275,225);
        context.arc(275,225-k,3,0,2*Math.PI);
        context.fill();
        context.beginPath();
        context.restore();
        context.moveTo(275,225);
        context.arc(275,225+m,3,0,2*Math.PI);
        context.moveTo(275,225);
        context.fill();
        context.beginPath();
        context.fillStyle = "black";
       
        context.fillText("X",70,230);
        context.fillText("Y",465,230);
        context.fillText("TOP VIEW",300,240+m);   
        context.fillText("FRONT VIEW",165,220-k);   
        document.getElementById("two").style.visibility="hidden";
        document.getElementById("one").style.visibility="visible";
      }