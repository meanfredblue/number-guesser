let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (human, computer, target) => {
  let humanDiff = getAbsoluteDistance(target,human);
  let computerDiff = getAbsoluteDistance(target,computer);
  if (computerDiff < humanDiff) {
    return false;
  }
  else {
    return true;
  }
}

const updateScore = winner => {
  winner === 'human' ? ++humanScore : ++computerScore;
}

const advanceRound = () => {
  ++currentRoundNumber;
}

const runTests = () => {
  for(let i = 0; i< 10; ++i) {
    let target = generateTarget();
    let human = generateTarget();
    let computer = generateTarget();
    console.log(`currentRoundNumber=${currentRoundNumber} target=${target} human=${human} computer=${computer}`);
    let winner = compareGuesses(human, computer, target) ? 'human' : 'computer';
    console.log(`winner=${winner}`);
    updateScore(winner);
    console.log(`humanScore=${humanScore} computerScore=${computerScore}`);
    advanceRound();
  }
}