let score = [0, 0];

function getComputerChoice() {
  ch = Math.floor(Math.random() * 3);
  if (ch == 0) {
    return "Rock";
  } else if (ch == 1) {
    return "Paper";
  } else return "Scissors";
}
function playRound(computerSelection, playerSelection) {
  console.log(`Player: ${playerSelection}  vs  Computer: ${computerSelection}`);

  let result_of_round = "";
  let pl_w = `You Win! ${playerSelection} beats ${computerSelection}`;
  let cp_w = `You Lose! ${computerSelection} beats ${playerSelection}`;
  let tie = "It's a tie!";
  if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    result_of_round = cp_w;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    result_of_round = pl_w;
  } else result_of_round = tie;
  //update score and board
  board_div_dom.textContent = result_of_round;
  if (result_of_round[4] == "W") {
    score[0]++;
  } else if (result_of_round[4] == "L") {
    score[1]++;
  }
  score_div_dom.textContent = `${score[0]}` + " - " + `${score[1]}`;
}

//-----------------------Placeholder div-----------------------
score_div_dom = document.getElementById("score_div");
board_div_dom = document.getElementById("board_div");

//-----------------------New Game-----------------------
new_game_btn = document.getElementById("menu");
new_game_btn.addEventListener("click", () => {
  score = [0, 0];
  console.log("Start New Game");
  score_div_dom.textContent = `${score[0]}` + " - " + `${score[1]}`;
});
//-----------------------Button div-----------------------
btn_rock = document.getElementById("b_rock");
btn_rock.addEventListener("click", () => {
  btn_rock.style.backgroundColor = "red";
  playRound(getComputerChoice(), "Rock");
});

btn_scissors = document.getElementById("b_paper");
btn_scissors.addEventListener("click", () => {
  btn_scissors.style.backgroundColor = "violet";
  playRound(getComputerChoice(), "Paper");
});

btn_paper = document.getElementById("b_scissors");
btn_paper.addEventListener("click", () => {
  btn_paper.style.backgroundColor = "coral";
  playRound(getComputerChoice(), "Scissors");
});
