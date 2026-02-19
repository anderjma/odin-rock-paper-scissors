function getComputerChoice() {
  let number = Math.floor(1 + Math.random() * 3);
  let computerChoice;

  switch (number) {
    case 1:
      computerChoice = "Rock";
      break;

    case 2:
      computerChoice = "Paper";
      break;

    case 3:
      computerChoice = "Scissors";
      break;
  }

  return computerChoice;
}

function getHumanChoice() {
  let input = parseInt(
    prompt("Choose: [1] Rock [2] Paper [3] Scissors [4] Exit"),
  );

  let humanChoice;

  switch (input) {
    case 1:
      humanChoice = "Rock";
      break;

    case 2:
      humanChoice = "Paper";
      break;

    case 3:
      humanChoice = "Scissors";
      break;

    case 4:
      humanChoice = "Exit";
      break;

    default:
      alert("Invalid option, try again.");
      return "Exit";
      break;
  }

  return humanChoice;
}

function playRound() {
  let continuePlaying = true;
  let humanScore = 0;
  let computerScore = 0;
  while (continuePlaying) {
    let computer = getComputerChoice();
    let human = getHumanChoice();

    if (human === "Exit") {
      continuePlaying = false;
      break;
    }

    if (computer === human) {
      alert(`Computer: ${computer}\nHuman: ${human}\nWinner: Tie`);
    } else if (
      (computer === "Rock" && human === "Paper") ||
      (computer === "Paper" && human === "Scissors") ||
      (computer === "Scissors" && human === "Rock")
    ) {
      humanScore++;
      alert(
        `Computer: ${computer}\nHuman: ${human}\nWinner: Human\nHuman's score: ${humanScore}\nComputer's score: ${computerScore}`,
      );
    } else {
      computerScore++;
      alert(
        `Computer: ${computer}\nHuman: ${human}\nWinner: Computer\nHuman's score: ${humanScore}\nComputer's score: ${computerScore}`,
      );
    }
  }
}

playRound();
