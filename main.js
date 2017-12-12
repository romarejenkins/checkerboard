//w create 2 for loops to create a looping patern for red and black squares

for(var i=0;i<8;i++){ //this is for the rows
  for(var j=0; j<8; j++){//this is for the alternating color divs
    var black= "<div class='black'></div>"
    var red= "<div class='red'></div>"
    if(i%2===0){//if the row is even, alternate colors like this:
      if(j%2===0){ //create 8 collums with...
      $("#board").append(red);//red first...
     }else{
       $("#board").append(black);//then black.
     }
   }else{//if the row is odd, alternate colors like this:
      if(j%2===0){//create 8 collums with...
        $("#board").append(black);//black first...
      }else{
        $("#board").append(red);//then red.
      }
    }


   }
 }
