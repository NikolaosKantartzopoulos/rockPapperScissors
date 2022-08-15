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
  //----------------add image to show selection---------------------
  pl_selection_icon_dom.src = `${playerSelection}` + ".png";
  //pl_selection_icon_dom.style = "animation: rotate_img 0.5s infinite;";
  pc_selection_icon_dom.src = `${computerSelection}` + ".png";
  //pc_selection_icon_dom.style = "animation: rotate_img 0.5s; animation-direction: reverse;";

  //----------------Win or loose---------------------
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
    //board_div_dom.textContent = "Go!";
  } else result_of_round = tie;
  //update score and board
  //board_div_dom.textContent = result_of_round;
  //getElementById('description_div').textContent =
  if (result_of_round[4] == "W") {
    score[0]++;
  } else if (result_of_round[4] == "L") {
    score[1]++;
  }
  score_div_dom.textContent = `${score[0]}` + " - " + `${score[1]}`;
  if (score[0] == 5) {
    player_wins_end();
  }
  if (score[1] == 5) {
    computer_wins_end();
  }
}
function player_wins_end() {
  score_div_dom.style.color = "red";
  document.getElementById("footer_div").textContent = "Player wins";
  document.getElementById("img_sel_div").style.display = "none";
  board_div_dom.style.display = "none";
  document.getElementById("footer_div").style.backgroundColor = "red";
}

function computer_wins_end() {
  score_div_dom.style.color = "blue";
  document.getElementById("footer_div").textContent = "Computer wins";
  document.getElementById("img_sel_div").style.display = "none";
  board_div_dom.style.display = "none";
  document.getElementById("footer_div").style.backgroundColor = "blue";
}

//-----------------------Placeholder div-----------------------
score_div_dom = document.getElementById("score_div");
board_div_dom = document.getElementById("board_div");
pl_icon_dom = document.getElementById("pl_selection_icon");
pc_icon_dom = document.getElementById("pc_selection_icon");
pl_selection_icon_dom = document.getElementById("pl_selection_icon");
pc_selection_icon_dom = document.getElementById("pc_selection_icon");

//-----------------------New Game-----------------------
new_game_btn = document.getElementById("menu");
new_game_btn.addEventListener("click", () => {
  score = [0, 0];
  console.log("Start New Game");
  score_div_dom.textContent = `${score[0]}` + " - " + `${score[1]}`;
  document.getElementById("img_sel_div").style =
    "display: flex;flex-flow: row wrap; justify-content: space-around;";
  //board_div_dom.textContent = "Go!";
  score_div_dom.style.color = "aliceblue";
  document.getElementById("board_div").style.opacity = "0";
  document.getElementById("footer_div").textContent = "";
  document.getElementById("footer_div").style.backgroundColor =
    "rgba(26,26,26,255)";
});
//-----------------------Button div-----------------------
btn_rock = document.getElementById("b_rock");
btn_rock.addEventListener("click", () => {
  playRound(getComputerChoice(), "Rock");
  board_div_dom.style = "opacity:1;";
});

btn_scissors = document.getElementById("b_paper");
btn_scissors.addEventListener("click", () => {
  playRound(getComputerChoice(), "Paper");
  board_div_dom.style.opacity = "1";
});

btn_paper = document.getElementById("b_scissors");
btn_paper.addEventListener("click", () => {
  playRound(getComputerChoice(), "Scissors");
  board_div_dom.style.opacity = "1";
});
