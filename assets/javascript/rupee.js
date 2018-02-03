$( document ).ready(function(){

  


    var randomNumber=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(randomNumber);
    // Appending random number to the randomNumber id in the html doc
    //
    var blueNum= Math.floor(Math.random()*11+1)
    var greenNum= Math.floor(Math.random()*11+1)
    var redNum= Math.floor(Math.random()*11+1)
    var yellowNum= Math.floor(Math.random()*11+1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#wins').text(wins);
  $('#losses').text(losses);
  //resets the game
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
  //adds the wins to the userTotal
  function winner(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#blue').on ('click', function(){
      userTotal = userTotal + blueNum;
      console.log("New userTotal= " + userTotal);
      $('#yourScore').text(userTotal); 
            //sets win/lose conditions
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
              //sets win/lose conditions
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
  //sets win/lose conditions
            if (userTotal === randomNumber){
            winner();
          }
          else if ( userTotal > randomNUmber){
            loser();
          }
        })
    })
     
    
    
  
