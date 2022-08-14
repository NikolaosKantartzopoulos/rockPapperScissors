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
  let pl_w = `You Win!`;
  let cp_w = `You Lose!`;
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
  //getElementById('description_div').textContent =
  if (result_of_round[4] == "W") {
    score[0]++;
  } else if (result_of_round[4] == "L") {
    score[1]++;
  }
  score_div_dom.textContent = `${score[0]}` + " - " + `${score[1]}`;
  if (score[0] == 5) {
    score_div_dom.style.color = "red";
    board_div_dom.textContent = "Player wins";
    document.getElementById("img_sel_div").style.display = "none";
  }
  if (score[1] == 5) {
    score_div_dom.style.color = "blue";
    board_div_dom.textContent = "Computer wins";
    document.getElementById("img_sel_div").style.display = "none";
  }
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
  document.getElementById("img_sel_div").style =
    "display: flex;flex-flow: row wrap; justify-content: space-around;";
  board_div_dom.textContent = "Go!";
  score_div_dom.style.color = "white";
});
//-----------------------Button div-----------------------
btn_rock = document.getElementById("b_rock");
btn_rock.addEventListener("click", () => {
  playRound(getComputerChoice(), "Rock");
});

btn_scissors = document.getElementById("b_paper");
btn_scissors.addEventListener("click", () => {
  playRound(getComputerChoice(), "Paper");
});

btn_paper = document.getElementById("b_scissors");
btn_paper.addEventListener("click", () => {
  playRound(getComputerChoice(), "Scissors");
});
