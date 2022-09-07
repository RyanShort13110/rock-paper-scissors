document.querySelector('button').addEventListener('click', playGame);

function rockPaperScissors(){
  let randomOutput = Math.random();
  if(randomOutput < .33){
    return 'rock';
  }else if(randomOutput < .66){
    return 'paper';
  }else{
    return 'scissors';
  }
};

function playGame(userVal){
  let botChoice = rockPaperScissors();
  let userChoice = document.querySelector('input').value.toLowerCase();
  let placeResults = document.querySelector('#placeResults');
  if((userChoice === 'rock' && botChoice === 'scissors') || (userChoice === 'paper' && botChoice === 'rock') || (userChoice === 'scissors' && botChoice === 'paper')){
    placeResults.innerText = ` You have won! The bot chose: ${botChoice}.`;
  }else if(userChoice === botChoice){
    placeResults.innerText = `You picked the same! The bot also chose ${botChoice}. =|`;
  }else{
    placeResults.innerText = ` You have lost this time! The bot chose: ${botChoice}. =(`;
  }
};