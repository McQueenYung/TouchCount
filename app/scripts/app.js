
      var sumPress=0;
      var sum=0;
      var interval=0;
      
      function Cal() {
        var output = document.getElementById("output").value;
        var interval = parseFloat(document.getElementById("INC").value);
        
        sum=sum+interval;
        sumPress=sumPress+1;
        
        document.getElementById("audio_w").play(); 
        document.getElementById("output").innerHTML =  sum;
        document.getElementById("btn").innerHTML =  sumPress;

      }
    
    function setreset(){
     document.getElementById("output").innerHTML =0;
     sum=0;
     document.getElementById("btn").innerHTML =  0;
     sumPress=0;
    }  
      
    function reset(){
     document.getElementById("output").innerHTML =0;
     sum=0;
     document.getElementById("btn").innerHTML =  0;
     sumPress=0;
     document.getElementById("INC").value=1;
     interval=1;
    }