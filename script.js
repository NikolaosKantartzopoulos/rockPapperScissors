
const computerSelection = getComputerChoice();
function getComputerChoice () {
    ch = Math.floor(Math.random() * 3);
    if (ch == 0) {return "Rock"}
    else if (ch ==1) {return "Paper"}
    else return "Scissors";
    return false;
}
function playRound(computerSelection) {
    do {
        playerSelection = prompt("(R)ock - (P)aper - (S)cissors");
    } while (!playerSelection.match(/[rpsRPS]{1}/));
    if (playerSelection == 'r' || playerSelection == 'R') {playerSelection = "Rock"};
    if (playerSelection == 's' || playerSelection == 'S') {playerSelection = "Scissors"};
    if (playerSelection == 'p' || playerSelection == 'P') {playerSelection = "Paper"};
    console.log(`Player: ${playerSelection}  vs  Computer: ${computerSelection}`);

    let pl_w = `You Win! ${playerSelection} beats ${computerSelection}`;
    let cp_w = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let tie = "It's a tie!";
    if (playerSelection == "Rock" && computerSelection == "Paper" ||
            playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock" ) 
        {return cp_w;}
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
            playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper")
        {return pl_w}
    else return tie;
}
function game() {
    console.log("Start game()");
    let score = [0,0];
    for (let i = 0; i < 5; i++) {
        let res = playRound(getComputerChoice());
        console.log(res);
        if (res[4] == 'W') {score[0]++;}
        else if (res[4] == 'L') {score[1]++};
        console.log(score);
    }
    console.log(`Final score: ${score}`);
}


new_game_btn = document.getElementById('menu');
new_game_btn.addEventListener('click',game)
btn_rock = document.getElementById('b_rock')
btn_rock.addEventListener('click', ()=> {
    btn_rock.style.backgroundColor = 'red'
})