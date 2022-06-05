// User's Answer
userAnswer = prompt('Rock, Paper or Scissors','');

//Computer's Answer
const result  = Math.floor((2 * Math.random()));
console.log(result);

if (result === 0) {
    console.log('Rock')
} else if (result === 1) {
    console.log('Paper')
} else if (result === 2){
    console.log('Scissors')
}
