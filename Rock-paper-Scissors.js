
// Retrieve the score from localStorage 
let score = JSON.parse(localStorage.getItem('score')) ||{
  Wins:0,
  losses:0,
  Ties : 0
};     

// Update the score element on the UI

updateScoreElement();

// Function to play the game based on the player's move

function playGame(playerMove){

const computerMove = pickComputerMove(); // Generate a random move for the computer

    let Result = '';
    
  // Determine the result of the game based on player's move and computer's move
  // Check various outcomes based on player's move
    

if(playerMove ==='SCISSORS'){

if(computerMove === 'ROCK'){

Result = 'you loose';

} 
else if (computerMove === 'PAPER'){
 
  Result = 'you WON!!';
} 
else if(computerMove === 'SCISSORS'){

Result ='tie';
}

}  else if(playerMove=== 'PAPER'){

if(computerMove === 'ROCK'){

Result = 'you WON!!';
} 
else if (computerMove === 'PAPER'){

Result = 'tie';
} 
else if(computerMove === 'SCISSORS'){

Result ='you loose';
}

} else if(playerMove === 'ROCK')
{

if(computerMove === 'ROCK'){

Result = 'tie';
} 
else if (computerMove === 'PAPER'){

Result = 'you loose';
} else if(computerMove === 'SCISSORS'){

Result ='you WON!!';
}
}

  // Update the scores based on the game result

if (Result === 'you WON!!') {
score.Wins +=1;
} else if (Result === 'you loose') {
score.losses += 1;
} else if (Result === 'tie') {
score.Ties += 1;
}
  // Store the updated score in localStorage

localStorage.setItem('score',JSON.stringify(score)); 

  // Update the score element 

updateScoreElement();

  // Display the result and moves on the UI

document.querySelector('.js-result').innerHTML = Result;       
document.querySelector('.js-moves').innerHTML = `You <img src="
${playerMove}.png" class="move-icon">
<img src="${computerMove}.png"class="move-icon">
Computer`;

// alert(`you picked ${playerMove}..computer picked ${computerMove}.${Result}
//  Wins : ${score.Wins}, Losses: ${score.losses}, Ties : ${score.Ties}`);

}

// Function to update the score element on the UI

function updateScoreElement(){

document.querySelector('.js-score').innerHTML = `Wins : ${score.Wins}, Losses: ${score.losses}, Ties : ${score.Ties}`;

}            


// Function to randomly pick a move for the computer

function pickComputerMove(){
        const randomNumber= Math.random();
        let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1/3)
{
computerMove = 'ROCK';
}else if(randomNumber >= 1/3 && randomNumber < 2 / 3){
    computerMove = 'PAPER';

}else if(randomNumber >=2/3 && randomNumber < 1){
computerMove = 'SCISSORS';
}

return computerMove;

}
