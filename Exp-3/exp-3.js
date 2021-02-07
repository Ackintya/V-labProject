function drawShape() {
    var canvas = document.getElementById('simscreen');        
         
    if (canvas.getContext) {
    
       var ctx = canvas.getContext('2d');           
       ctx.beginPath();
       
       ctx.strokeStyle = "black";
       ctx.stroke();
       ctx.font = ' Italic Bold 15px Arial';
       ctx.fillText("X-axis",110,245);
       ctx.fillText("Y-axis",285,385);
       ctx.arc(275,225,3,0,2*Math.PI);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
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
    function updatesliderangle(val) {
        document.getElementById('ang').value=val; 
      

  }
  function updateangle(val) {
        document.getElementById('angle').value=val; 
      
  }
  function updatesliderangle1(val) {
    document.getElementById('ang1').value=val; 
  

}
function updateangle1(val) {
    document.getElementById('angle1').value=val; 
  
}

      function newcanvas(){
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');
        context.font = "Italic Bold 15px Arial";
        document.getElementById("titleincanvas").innerText="Line parallel to VP & HP at distance m & k respectively";
        document.getElementById("commentboxright").innerHTML="VP=Vertical Plane</br> HP=Horizontal Plane";
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.strokeStyle = "#66CD00	";
        context.save();
        context.strokeStyle = "#2E37FE";
        context.save();
        context.lineWidth="2";
        context.moveTo(100,225);
        context.lineTo(450,225);
        context.strokeStyle = "black";
        context.stroke();
        var k= Number(document.getElementById('heightInput').value);
        var m= Number(document.getElementById('widthInput').value);
        context.beginPath();
        context.restore();
        context.moveTo(150,225-m);
        context.lineTo(375,225-m); 
        context.stroke();
        context.beginPath();
        context.restore();
        context.moveTo(150,225+k);
        context.lineTo(375,225+k);   
        context.stroke();
        context.fillStyle = "black";
        context.fillText("a'",120,225-m);
        context.fillText("b'",385,225-m);
        context.fillText("a",120,225+k);
        context.fillText("b",385,225+k);
        context.fillText("VP",110,220);
        context.fillText("HP",110,242);
        context.fillText("X",70,230);
        context.fillText("Y",465,230);
      }
      function newcanvas1(){
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');
        context.font = "Italic Bold 15px Arial";
        document.getElementById("titleincanvas").innerText="Line parallel to VP and m distance above VP";
        document.getElementById("commentboxright").innerHTML="VP=Vertical Plane</br> HP=Horizontal Plane";
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.strokeStyle = "#66CD00";
        context.save();
        context.lineWidth="2";
        context.moveTo(100,225);
        context.lineTo(450,225);        
        context.strokeStyle="black";
        context.stroke();
        var k= Number(document.getElementById('heightInput').value);
        context.beginPath();
        context.restore();
        context.moveTo(150,225-k);
        context.lineTo(375,225-k); 
        context.stroke();
        context.fillStyle = "black"; 
        context.fillText("a'",120,225-k);
        context.fillText("b'",385,225-k);
        context.fillText("VP",110,220);
        context.fillText("X",70,230);
        context.fillText("Y",465,230);
      }
      function newcanvas2(){
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');
        context.font = "Italic Bold 15px Arial";
        document.getElementById("titleincanvas").innerText="Line parallel to HP and k distance infront of HP";
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.strokeStyle = "#2E37FE";
        context.save();
        context.lineWidth="2";
        context.moveTo(100,225);
        context.lineTo(450,225);
        context.strokeStyle = "black";
        context.stroke();
        var m= Number(document.getElementById('widthInput').value);
        context.beginPath();
        context.restore();
        context.moveTo(150,225+m);
        context.lineTo(375,225+m);   
        context.stroke();
        context.fillStyle = "black";
        context.fillText("a",120,225+m);
        context.fillText("b",385,225+m);
        context.fillText("HP",110,242);
        context.fillText("X",70,230);
        context.fillText("Y",465,230);
      }
      function newcanvas3() {
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');
        context.font = "Italic Bold 15px Arial";
        document.getElementById("titleincanvas").innerText="Line inclined to VP at an angle θ and distance m";
        document.getElementById("commentboxright").innerHTML="VP=Vertical Plane</br> HP=Horizontal Plane"
        var m= Number(document.getElementById('widthInput').value);
        var q= Number(document.getElementById('angle').value);
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.strokeStyle = "#2E37FE";
        context.save();
        context.lineWidth="2";
        context.moveTo(100,225);
        context.lineTo(450,225);
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(150,225-m);
        context.arc(150,225-m,30,-Math.PI*q/180,0);
        context.stroke();
        context.beginPath();
        context.setLineDash([10, 1]);
        context.lineWidth="1";
        context.moveTo(150,225-m);
        context.lineTo(210,225-m);
        context.stroke();
        context.beginPath();
        context.restore();
        context.moveTo(150,225-m);
        context.lineTo(150+(150*Math.cos(Math.PI*q/180)),225-m-(150*Math.sin(Math.PI*q/180))); 
        context.stroke();
        context.fillStyle = "black";   
        context.fillText("θ",190,210-m-q/2); 
        context.fillText("a'",130,225-m);
        context.fillText("b'",160+(150*Math.cos(Math.PI*q/180)),230-m-(150*Math.sin(Math.PI*q/180)));    
        context.fillText("VP",110,220);
        context.fillText("X",70,230);
        context.fillText("Y",465,230);
      }
      function newcanvas4() {
        var canvas = document.getElementById('simscreen');
        var context = canvas.getContext('2d');
        context.font = "Italic Bold 15px Arial";
        document.getElementById("titleincanvas").innerText="Line inclined to HP at an angle α and distance k";
        document.getElementById("commentboxright").innerHTML="VP=Vertical Plane</br> HP=Horizontal Plane";
        var k= Number(document.getElementById('heightInput').value);
        var w= Number(document.getElementById('angle1').value);
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.strokeStyle = "#66CD00	";
        context.save();
        context.lineWidth="2.5";
        context.moveTo(100,225);
        context.lineTo(450,225);
        context.strokeStyle = "black";
        context.stroke();
        context.moveTo(150,225+k);
        context.arc(150,225+k,30,0,Math.PI*w/180);
        context.stroke();
        context.beginPath();
        context.setLineDash([10, 1]);
        context.lineWidth="1";
        context.moveTo(150,225+k);
        context.lineTo(210,225+k);
        context.stroke();
        context.beginPath();
        context.restore();
        context.beginPath();
        context.moveTo(150,225+k);
        context.lineTo(150+(150*Math.cos(Math.PI*w/180)),225+k+(150*Math.sin(Math.PI*w/180))); 
        context.stroke();
        context.fillStyle = "black";   
        context.fillText("α",190,240+k+w/4);     
        context.fillText("a",120,225+k);
        context.fillText("b",170+(150*Math.cos(Math.PI*w/180)),210+k+(150*Math.sin(Math.PI*w/180)));
        context.fillText("VP",110,220);
        context.fillText("X",70,230);
        context.fillText("Y",465,230);
      }
      var i=-1;
      function nextfun() {
          ++i;
          document.getElementById("simscreen1").style.visibility="hidden";
        if(i==0){
            newcanvas1();
        }
        else if(i==1)
        {
            newcanvas2();
        }
        else if(i==2){
            newcanvas();
        }
        else if(i==3){
            newcanvas3();
        }
        else if(i==4){
            newcanvas4();
        }
        else
        {i=4;
        nextfun1();}
        }
        function nextfun1() {
            document.getElementById("simscreen1").style.visibility="hidden";

            if(i==0){
                newcanvas1();
               
            }
            else if(i==1)
            {
                newcanvas2();
                
            }
            else if(i==2){
                newcanvas();
            }
            else if(i==3){
                newcanvas3();
            }
            else if(i==4){
                newcanvas4();
            }
            else
            {nextfun1();}
            }
            function nextfun2() {
                --i;
               
          document.getElementById("simscreen1").style.visibility="hidden";

                if(i==0){
                    newcanvas1();
                   
                }
                else if(i==1)
                {
                    newcanvas2();
                    
                }
                else if(i==2){
                   
                    newcanvas();
                }
                else if(i==3){
                    newcanvas3();
                }
                else if(i==4){
                    newcanvas4();
                }
                else
                {i=3;
                    nextfun1();}
                }