//declare functions
// User's Answer
function getPlayerSelection(){
    let playerSelection = prompt('Rock, Paper or Scissors','');
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
if (playerSelection !== `rock` && playerSelection !== 'paper' && playerSelection !== 'scissors'){
    alert('You have input an invalid answer');
    playerSelection = 'void';
}  
return playerSelection
}

 
//Computer's Answer
function computerPlay(){
let computerSelection  = Math.floor((2 * Math.random()));
console.log(computerSelection);

if (computerSelection === 0) {
    console.log('rock');
    computerSelection = 'rock';
    return computerSelection;
} else if (computerSelection === 1) {
    console.log('paper');
    computerSelection = 'paper';
    return computerSelection
} else if (computerSelection === 2){
    console.log('scissors');
    computerSelection = 'scissors';
    return computerSelection
};
}


//Playround - function to compare what each party has played

function playRound(playerSelection, computerValue) {
    let result = 'default'
    //player selects rock
    if (playerSelection === 'rock' && computerValue === 'scissors') {
        result = 'PLAYER WIN!'
        return result
    } else if (playerSelection === 'rock' && computerValue === 'paper') {
        result = 'COMPUTER WIN!'
        return result
    }
    //player selects paper
    else if (playerSelection === 'paper' && computerValue === 'rock') {
        result = 'PLAYER WIN!'
        return result;
    } else if (playerSelection === 'paper' && computerValue === 'scissors') {
        result = 'COMPUTER WIN'
        return result
    }
    //player selects paper
    else if (playerSelection === 'scissors' && computerValue === 'paper') {
        result = 'PLAYER WIN!'
        return result
    } else if (playerSelection === 'scissors' && computerValue === 'rock') {
        result = 'COMPUTER WIN!'
        return result
    // otherwise it's a draw    
    } else {
        result = 'DRAW!'
        return result
    };
    }

    //function of game
function game(){
    let results =[];
    let score = ['Player',0,'CPU',0]
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerSelection()
        const computerValue = computerPlay()
        results[i] = playRound(playerSelection, computerValue)
        console.log(results[i])

        if (results[i] ==='PLAYER WIN!'){
            score[1] = score[1] + 1
        } else if (results[i] === 'COMPUTER WIN!'){
            score[3] = score[3] + 1
        } 
       console.log(score) 
    } return results
    }

    console.log(game())

    //Called Functions
    // const playerSelection = getPlayerSelection()
    // if (playerSelection !== 'void') {
    // const computerValue = computerPlay()
    // console.log(playRound(playerSelection, computerValue))
    // }
