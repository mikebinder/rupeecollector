$( document ).ready(function(){

  

  


    var randomNumber=Math.floor(Math.random()*101+19)
    
    $('#randomNumber').text(randomNumber);
    
    var blueNum= Math.floor(Math.random()*11+1)
    var greenNum= Math.floor(Math.random()*11+1)
    var redNum= Math.floor(Math.random()*11+1)
    var yellowNum= Math.floor(Math.random()*11+1)
   
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  function reset(){
        randomNumber=Math.floor(Math.random()*101+19);
        console.log(randomNumber)
        $('#randomNumber').text(randomNumber);
        blueNum= Math.floor(Math.random()*11+1);
        greenNum= Math.floor(Math.random()*11+1);
        redNum= Math.floor(Math.random()*11+1);
        yellowNum= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#yourScore').text(userTotal);
        } 
  
  function winner(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
 
  function loser(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

    $('#blue').on ('click', function(){
      userTotal = userTotal + blueNum;
      console.log("New userTotal= " + userTotal);
      $('#yourScore').text(userTotal); 
            
          if (userTotal == randomNumber){
            winner();
          }
          else if ( userTotal > randomNumber){
            loser();
          }   
    })  

    $('#green').on ('click', function(){
        userTotal = userTotal + greenNum;
        console.log("New userTotal= " + userTotal);
        $('#yourScore').text(userTotal); 
             
            if (userTotal == randomNumber){
              winner();
            }
            else if ( userTotal > randomNumber){
              loser();
            }   
      })  
    $('#red').on ('click', function(){
      userTotal = userTotal + redNum;
      console.log("New userTotal= " + userTotal);
      $('#yourScore').text(userTotal); 
          if (userTotal === randomNumber){
            winner();
          }
          else if ( userTotal > randomNumber){
            loser();
          } 
    })  
    $('#yellow').on ('click', function(){
      userTotal = userTotal + yellowNum;
      console.log("New userTotal= " + userTotal);
      $('#yourScore').text(userTotal);
  
            if (userTotal === randomNumber){
            winner();
          }
          else if ( userTotal > randomNUmber){
            loser();
          }
        })
    })
     
    
    
  
