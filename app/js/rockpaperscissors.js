////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move;
var playerMove;
var computerMove;
var winner;
var playerWins = 0;
var computerWins = 0;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null || move === undefined) {
        playerMove = getInput();
        return playerMove;
    } else {
        playerMove = move;
        return playerMove;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null || move === undefined) {
        computerMove = randomPlay();
        return computerMove;
    } else {
        computerMove = move;
        return computerMove;
    }
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } else if (playerMove === computerMove) {
        winner = "tie"
    }
    return winner;
}

//Printing who played what
//for use in the playToNum function
function moveVSmove() {
    console.log("Player chose " + playerMove + " while the Computer chose " + computerMove);
}

//Printing score after each round
//for use in the playToNum function
function scoreboard() {
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
}




//THE GAME
function playToNum() {
    console.log("Let's play Rock, Paper, Scissors");

//How many wins wins it all? * convert string to number
    console.log("How many rounds must a player win to win it all?");
    var num = prompt();
    num = parseInt(num);

/*  Simple while loop that calls above functions
    Prints who played what, who won the round, and what the current score is
    After loop, prints conditional resolution
*/

    while (playerWins < num && computerWins < num) {
        getPlayerMove(move);
        getComputerMove(move);
        getWinner(playerMove, computerMove);
        moveVSmove();

        if (winner === "computer") {
            console.log("Computer wins!")
            computerWins++;
        } else if (winner === "player") {
            console.log("You win!")
            playerWins++;
        } else {
            console.log("It's a tie!")
        }

        scoreboard();
    }

    console.log("And that's the game!")
    if (playerWins === num) {
        console.log("You are Lord of RPS");
    } else {
        console.log("Better luck next time chump")
    }

}











