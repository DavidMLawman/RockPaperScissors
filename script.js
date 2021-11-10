/* script will go here
    Pseudocode:
    1. Need a function that will randomly be paper,
    rock, or scissors for the PC (Complete)

    2. Need a variable that will take user input 
    of paper, rock or scissors (complete)

    3. Need a process to see if the user variable wins
    or loses to the PC variable (complete)

    4. Have a function repeat step 3. 5 times and display all results
    
    */

//declaring variables
let computerScore = 0;
let playerScore = 0;

//movingt he random computer selection array outside the loop
const myArray = ["rock", "paper", "scissors"];
  function computerPlay() 
  {
    return myArray[~~(Math.random() * myArray.length)];
  }


//3
function oneRound() {

  //1 moved inside 3 so it will repeat
  let computerSelection = computerPlay().toLocaleLowerCase();
  console.log("Testing to make sure computerSelection is called correctly: " + computerSelection);


  //2 moved inside 3 so it will repeat
  let playerSelection = window.prompt
  ("Please choose Rock, Paper, or Scissors: ").toLocaleLowerCase();
  console.log("Testing to make sure playerSelection is called correctly: " + playerSelection);


  if (playerSelection == computerSelection) 
  {
    alert("It's a tie?!?")
  }
  else if 
  (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) 
  {
    computerScore = ++computerScore
    alert("computer gets a point!")
  }
  else 
  {
    playerScore = ++playerScore
    alert("Player gets a point")

  }
  console.log(`The current score is Player ${playerScore} and computer ${computerScore}`);
}

function game()
{
  console.log(oneRound())
  console.log(oneRound())
  console.log(oneRound())
  console.log(oneRound())
  console.log(oneRound())
}

console.log(game());


//Show final results

alert(`The final score is Player ${playerScore} and computer ${computerScore}`);
if (playerScore == computerScore)
{
  alert("No way! A tie?!? This is unacceptable!")
}
else if (playerScore>computerScore)
{
  alert("Wow! You won!!!")
}
else
{
  alert("No! You lost! Too bad!")
}

