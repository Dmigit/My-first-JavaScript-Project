const userName = 'Dylan';

const getUserChoice = userInput => {
   userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
     return userInput;
   } else {
     console.log("Error. Not a valid option");
   }
};

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else if (number === 2) {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  } else if (userChoice === 'bomb') {
    return `${userName} won!`;
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!'
      } else {
        return `${userName} won!`
      }
    } if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!'
        } else {
          return `${userName} won!`
        }
    } if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!'
      } else {
        return `${userName} won!`
      }
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`${userName} chose ${userChoice}`)
  console.log(`The computer chose ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame();
